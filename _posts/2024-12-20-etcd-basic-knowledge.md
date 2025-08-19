---
layout: post
title: "ETCD基本知识：深入理解分布式键值存储"
date: 2024-12-20 15:00:00 +0800
categories: [技术, 分布式系统]
tags: [ETCD, 分布式, Kubernetes, Raft, 一致性]
---

# 前沿

如何构建一个永不崩溃的服务？目前各大厂商在发布产品时也会强调自己服务的高可用性。

近几年互联网出现了很多P0级别的服务中断事件，其中滴滴打车在2024年更是造成了几十个小时的服务不可用。了解到其中的主要原因是K8s升级导致的，根据滴滴技术公众号升级方案中，有这样一句话：

> 集群体量大，最大集群规模已经远远超过了社区推荐的5000node上线，有问题的爆炸范围大

K8s已经是目前云原生的基础组件，底层存储使用的就是叫做ETCD的KV存储，因为ETCD的性能限制，一遍建议不超过5000个node。在大数据开发中KCM(K8s Controller Manager)挂掉导致Spark任务大量失败的场景，底层原因也是和ETCD有关。

如果对底层技术和高可用性不够了解，那么出现事故后将造成不可估量的错误。

# 简介

> ETCD is a strongly consistent, distributed key-value store that provides a reliable way to store data that needs to be accessed by a distributed system or cluster of machines. It gracefully handles leader elections during network partitons and can tolerate machine failure, even in the leader node.

How to handle leader elections during network partitions？

How to tolerate machine failures?

ETCD是一个具有强一致性、数据持久化、高可用、MVCC、事物、Watch机制能力的分布式KV存储框架。基于易于理解的Raft协议实现强一致性，使用了简单的KV存储模型，支持gRPC和Http调用。大名鼎鼎的容器编排系统K8s就使用了ETCD作为底层存储。Google的Spanner和微信使用的是PaxosStore都是基于Paxos协议实现的KV存储，早期Paxos也是一致性协议的唯一标准，不过现在Raft已经是热度最高的强一致性协议，近年来开源的数据库包括ETCD、TiDB、CockroachDB也都是基于Raft协议。Paxos和Raft各有优势，一般认为Raft实现工程比较简单，但是**存在Lease不可用的问题**，微信团队的KV基于无租约Paxos协议，没有Leader节点，**可以做到无痕换机**。

Raft哪种情况下会存在Lease不可用的问题？

Paxos如何做到无痕换机？

# 一、ETCD架构

实现上可以将ETCD分为以下部分：

*   **Client层：**Client层包括client v2 和 v3 两个大版本API客户端库，提供了简洁易用的API，同时支持负载均衡、节点故障转移，可以极大降低业务使用ETCD复杂度，提升开发效率、服务可用性。  
    如何实现的负载均衡、节点故障转移？
    
*   **API网络层：**API层负责对外提供HTTP和gRPC两种类型的访问接口，ETCD Raft层进行内部节点选举和心跳通信使用的是HTTP API。
    
*   **Raft层：**Raft层实现了包括Leader选举和日志复制等Raft算法核心功能，并且通过WAL机制持久化日志条目，保障ETCD多节点的一致性和可用性，同时使用Read Index机制实现读请求的强一致性。
    

什么WAL？为什么能持久化？

什么是Read Index？为什么能实现强一致性？

*   **功能逻辑层：**ETCD核心特性实现层，如典型的KV Server模块、MVCC模块、Auth鉴权模块、Lease租约模块、Compactor压缩模块等，其中MVCC模块主要由treeIndex和boltDB模块组成。
    
*   **存储层：**存储层包括预写日志(WAL)模块、快照(Snapshot)模块、BoltDB模块和KeyIndex。其中WAL可以保障ETCD Crash后数据不丢失，BoltDB则保存了集群元数据和用户写入数据。KeyIndex基于B-Tree存在于内存中，存储每个KV对的历史版本；BoltDB基于B+Tree存储于磁盘中，也是KV引擎，结合KeyIndex和BoltDB可以实现MVCC机制
    

如何实现的MVCC机制？

# 二、Raft协议理论：ETCD如何实现高可用、强一致性

## 1.Raft算法背景

## 2.Raft实现原理

### 2.1 Leader选举

### 2.2 日志复制

### 2.3 安全性

### 2.4 多数派与Quorum协议

## 3.ETCD如何实现线性一致性读

ETCD基于Raft算法，为了保证高可用集群中会部署到多台机器中，ETCD提供了两种读模式：串行读（Serializable）和线形一致性读（Linearizable）。这两者看似一样，但是可以简单理解为串行读不保证读到的内容是最新但是效率比较高；线形一致性读保证读到的信息是最新的但是效率比较低。

### 3.1 串行读

事务中所有读操作看到的都是数据库在某个一致点的快照，但是不保证这个快照是最新的。

适用于数据敏感性低的场景。

Raft写请求完成只是代表WAL日志被复制到大部分，此时处于提交状态(committed)，真正能查到数据是需要状态机将日志应用，这是一个异步的过程。串行读直接读取状态机数据返回，不需要通过Raft与集群进行交互，属于最终一致性

### 3.2 线性一致性读

最强一致性，要求事务中所有读操作看到的不仅仅是一致的，还要是最新的。

适用于数据敏感性较高的场景。

可以理解为把集群当成一个对象，读到过的数据下次读到的版本一定比现在更新，每次读到的都必须是最新且已经commit的数据。

### 3.3 线性一致性读和ReadIndex可能返回的旧数据

*   通过串行读已经知道日志从提交(committed)到应用(applied)是一个异步的过程，而且Leader节点和Follower节点都能处理请求，此时读到的数据可能是未被状态机应用的旧数据
    
*   网络分区，俗称"脑裂"，此时如果Leader认为自己拥有最新日志并且继续响应读请求就可能返回旧数据造成网络不一致
    

实现线形一致性读依赖于ReadIndex，服务节点收到线性读请求后会向Leader节点获取集群已经提交最新日志索引(committed Index)，Leader收到ReadIndex后会向Follower节点发起确认，获得大多数节点同意后才会将日志索引返回。服务节点等待状态机已经应用的日志索引大于之前得到的最新日志索引中，才会将数据返回给客户端。

## 4 Raft、Paxos和ZAB协议以及相关产品比较

*   Paxos算法不需要Leader节点，Leader崩溃的时候也就没有切换时间，而Raft在Leader崩溃时候会有租约不可用的问题（这里的租约主要是指Raft的选主过期时间，而不是ETCD的lease租约功能），一般5-10S。
    
*   Paxos支持日志空洞，可能有随机写，实现上更加复杂一点；而Raft强制要求日志按顺序写，不允许日志空洞，对存储系统要求更低，可以直接上机器硬盘。
    
*   性能角度上其实Paxos更好，而且允许日志空洞更加灵活
    
*   实现成本上Raft更优
    
*   ZAB协议是Zookeeper的基础算法，是一种类似于Paxos协议，写请求可以认为是强一致性，读请求是最终一致性
    

# 三、MVCC：ETCD如何实现存储服务

## 什么是 MVCC

MVCC（Multiversion concurrency control）全称多版本并发控制机制，核心是保留数据的多个版本，以此实现对事务的并发管理，实现事务的各类隔离级别。数据库领域避免冲突主要有两种机制：

避免冲突，需要保证数据不可能出现同时操作的情况。加悲观锁保证同一时刻只有一个人对数据进行修改，常见有读写锁、两阶段锁 允许冲突，但是要求出现冲突时能够检测到，这样下游直接失败重试就好了，这种方法叫做乐观锁，常见实现有逻辑时钟、MVCC等。 MVCC实际上是一种乐观锁机制，只有在事务提交时才检测是否发生了冲突。etcd基于 MVCC实现了可靠的 Watch功能和事务机制。

## ETCD为什么要引入MVCC

etcd早期的v2版本将所有数据保存在内存中，随着Kubernetes项目的发展v2版本的瓶颈和缺陷也逐渐暴露。其一便是Watch机制的可靠性问题，v2版本不支持保存历史版本，只是在内存中使用滑动窗口存储了最近 1000 条变更日志，当出现请求堆积、网络波动时很容易出现事件丢失，而Kubernetes controller机制严重依赖 Watch功能。其次是内存问题，etcd v2在内存中维护了一棵树保存所有的key和value，会导致大量的内存开销，同时etcd v2需要定时将内存数据持久化到磁盘，会消耗 CPU和磁盘 IO，影响系统稳定性。于是 etcd推出了v3版本，基于 treeIndex（B-Tree）和 backend（BoltDB）实现支持MVCC的KV数据库。

## etcd如何实现多版本数据

### key-value：基本存储单位

kv对是etcd的最小存储单元，底层存储在 BoltDB中的key-value结构如下所示，包含key、value，lease结构信息（租约，用于数据过期、探活），版本号信息（MVCC和事务机制）：

```go
message KeyValue {
  bytes key = 1;	
  int64 create_revision = 2;
  int64 mod_revision = 3;
  int64 version = 4;
  bytes value = 5;
  int64 lease = 6;
}
```

*   key：请求键，不允许空值
    
*    value：请求值
    
*   version：key的全局版本号，如果删除那么版本号会变成 0，同时每次操作版本号会加一。
    
*   create_revision：key最后一次创建的revision
    
*   mod_revision：key最后一次变更的revision
    
*   lease：key对应的lease id
    

api里面出现了3 个"version"比较容易混淆，特别是version和revision这两个概念，其中version就是简单的全局修改次数版本号，改一次加一，create_revision代表key创建时的版本号，mod_revision代表最后一次修改的对应版本号。

### revision：key的逻辑时钟

```go
type revision struct {
   main int64    // 随着事务递增，同一个事务内main相同
   sub int64    // 事务内单调递增，每发生一次写操作sub增加
}
```

作为 kv数据库，etcd却并不是直接将 key作为键存储，而是将revision作为键，key和value作为键对应的数据存放。其中revision分为两部分：第一部分称为main revision，随着事务递增；第二部分叫做sub revision，两者结合保证revision是递增的。

比如通过Batch接口更新键值对，写入<key1,value1>和<key2,value2>两个键值对，在 etcd看来是这样的：

*   第一次更新
    
```go
revision={1,0},key=key1,value=value1
revision={1,1},key=key2,value=value2
```

*   第二次更新
    
```go
revision={2,0},key=key1,value=new_value1
revision={2,1},key=key2,value=new_value2
```

### treeIndex：内存中的版本号B-Tree

etcd在内存中维护了一个 B-Tree保存了 key到revision的映射关系，叫作 treeIndex，其中每一个节点就是一个keyIndex。客户端查询的时候首先在内存找那个查询key对应的keyIndex拿到对应的 revision，用revision作键从 BoltDB中获取value。

与treeIndex相关的数据结构包括 keyIndex和 generation，其中 keyIndex包含 key对应的最新版本号和历史修改版本号，generation则代表key从创建到删除的过程，当创建了一个key其generation是 0，后续每次修改会向revs里面追加修改后的信版本号，删除了以后generation会变成 1。key经过多次创建删除，那么就会有多个generation。

保存 key和版本号的映射关系

```go
type keyIndex struct {
    key         []byte
    modified    revision  // 最后一次修改key对应的版本号
    generations []generation // 保存key历史的版本号信息
}
```

generation保存了 key从创建到删除的历史版本号

```go
type generation struct {
    ver     int64	// key的修改次数
    created revision // generation创建时的版本号
    revs    []revision // 每次修改key时的版本号
}
```

treeIndex结构，其中 BTree基于 Google开源的代码

```go
type treeIndex struct {
	sync.RWMutex
	tree *btree.BTree
	lg   *zap.Logger
}
```

### 为什么treeIndex要使用 B-Tree？

从etcd的功能特性上分析，因为需要支持范围查询，因此哈希结构不适合。

从性能上分析，B-Tree相对于平衡树树高更低，而且每个节点支持存储多个数据，查询次数更少。这里etcd使用的是[google实现的一个 go版本 B-Tree](https://github.com/google/btree/blob/master/btree.go)

### BackEnd（BoltDB）：底层存储架构

BackEnd是etcd的底层存储结构，设计上BackEnd支持多种backend实现，目前的实现使用的是 BoltDB。BoltDB是一个基于 B+Tree实现的基于事务的key-value数据库。当发起get key1操作时，会先向treeIndex询问key对应的keyIndex，从中获取对应的revision版本号，再用revision从BoltDB中获取 value。

BackEnd模块主要由ReadTx、BatchTx和Buffer组成，ReadTx定义了抽象的读事务模块，BatchTx在ReadTx的基础上定义了抽象的写事务接口，Buffer是内存中的数据缓冲区。为了优化写入的性能，etcd只有在写事务堆积到一定程度的时候才会刷盘（默认写事务堆积程度大于 1万），数据持久化的过程又backend异步goroutine处理，他通过事务批量提交，定时将boltdb页缓存中的数据持久化到磁盘中。

发生写事务的流程如下所示：

1.  向treeIndex获取当前key的 keyIndex信息
    
2.  将key-value数据存入buffer和boltdb中
    
3.  创建/更新keyIndex，存入treeIndex
    
4.  backend异步协程提交事务
    

通过 generation了解到，key删除的时候并不会马上把数据从treeIndex和BoltDB中删除，而是创建一个新的generation，此时数据并没有真的删除，此时会在BoltDB中增加一个墓碑标记，例如正常通过revision:{2,0}可以从 BoltDB中查询key1对应的value1，如果key1被删除，那么BoltDB中的键就变成了{3,0,t}，t就代表tombstone。

# 四、Watch机制：高效获取数据变化

## 4.1 Watch机制有什么作用

*   **Watch机制是什么：**ETCD的Watch机制是一个事件通知系统，允许客户端监听键值存储中的变化。当被监听的键发生变化时（如PUT、DELETE操作），ETCD会实时通知所有相关的客户端。
    
*   **Watch机制有什么作用：**etcd主要用于服务发现、分布式配置等功能，同时Kubernetes的控制器也依赖于etcd。除了存储，这里最重要的功能就是监听，比较前后的数据是否一致，是否发生了更新事件。基于前文的 MVCC机制，实现了多版本的数据存储，有了历史版本，那么只要在数据更新的时候将历史版本推送出去就好了，如何判断要推送给哪些 client呢？总不能用一个个遍历监听事件判断要推送给谁吧，这样效率太低了。而且如果出现网络延迟推送事件阻塞了怎么办？etcd基于 MVCC机制和区间树实现了 Watch功能。
    

## 4.2 整体架构

### 4.2.1 基于MVCC的历史版本推送机制

etcd的v2版本使用滑动窗口将历史版本保存在内存中，默认只会保存最近 1000 条数记录。这样的缺陷显而易见，固定时间窗口只能保存有限的历史版本，当写请求较多或者出现网络波动时client将不得不发起expensive查询请求以获取最新数据以及版本号来持续监听数据。

比如Kubernetes的控制器依赖 Watch机制监听Pod的变化，如果Watch机制失败或者断开将发起List Pod请求，导致apiserver出现高负载，严重影响系统稳定性。

而MVCC机制正式为了解决 Watch机制不可靠而诞生的，相比于v2版本将事件直接保存在内存环形数组中，MVCC机制将key的历史版本保存着BoltDB里。BoltDB数据持久化在磁盘中，因此保存的历史版本数上限提升，而且也不受重启影响。不过随着历史版本增加磁盘占用也会增加，需要通过压缩策略清理历史版本。同时当出现异常情况比如client因网络连接断开时，也可以通过MVCC的版本号机制从BoltDB中获取错过的历史时间，无需全量同步。

etcd提供了基于事件的异步监听接口，watch机制会不断的监听key当前或者历史的revision版本，获取对应变更，并且以流的形式传给client。key的每次变更都对应一个Event数据结构，Event提供了对应变化的数据和变化类型，包括 PUT和 DELETE。

### 4.2.2 基于 gRPC的流式推送机制

etcd v2版本使用轮询实现 Watch功能，每个watcher对应一个 TCP连接，为了简单实现，使用 http+json方式，client通过 HTTP/1.1长连接定时轮询server，当 watcher太多时轮询将消耗etcd-server大量的资源。

为了解决v2版本的缺陷，v3版本使用基于 HTTP/2的gRPC协议代替了HTTP/1.1，protobuf代替了Json。

首先是 HTTP/2协议，HTTP消息被分解为独立的帧（Frame），交错发送，帧是最小数据单位，会标识属于哪个流（Stream），流由多个数据帧组成，每个流对应唯一 ID，一个数据流对应一个请求或者一个包。通过流的机制HTTP/2实现了多路复用和乱序发送，并且能够双向通信。

通过 Watch流 api可以看到，每个 Watch流会对应一个 watchid，一个watchid对应一个 gRPC流：

创建 Watch流：

```go
message WatchCreateRequest {
  bytes key = 1;
  bytes range_end = 2;
  int64 start_revision = 3;
  bool progress_notify = 4;

  enum FilterType {
    NOPUT = 0;
    NODELETE = 1;
  }
  repeated FilterType filters = 5;
  bool prev_kv = 6;
}
```

```go
message WatchResponse {
  ResponseHeader header = 1;
  int64 watch_id = 2;
  bool created = 3;
  bool canceled = 4;
  int64 compact_revision = 5;

  repeated mvccpb.Event events = 11;
}
```

删除Watch流：

```go
message WatchCancelRequest {
   int64 watch_id = 1;
}
```

同时protobuf比 json效率更高，这个很好理解，json是自解释协议，数据里就带了类型，而protobuf需要proto文件解释，底层存储来说肯定比json效率高。

### 4.2.3 整体推送流程

1.  当通过 etcd client发起 watch请求的时候，首先会通过gRPC Proxy，这一部分会将多个 Watch请求合并，减少etcd server负担。
    
2.  接下来会创建一个serverWatchStream，当收到 watch key请求会创建两个协程 recvLoop和 sendLoop，recvLoop负责接收client create/cancel watcher的请求、并将从管道中收到的请求转发给sendLoop最终发给client
    
3.  serverWatchStream收到 client创建 watcher的请求后会创建一个WatchStream并分配一个watcher id，每个 Watcher对应唯一的 watcherid
    
4.  一旦 watcher创建成功就会存储在watchableStore的 synced watcher中，如果监听到版本号变化，则会将watcher放入 unsyned watcher中。版本号变化通过 MVCC得知，通过 watcher.ch管道进行信息中转。同时synced watcher和unsynced watcher底层有 map和 interval tree两个数据结构，分别对应单个Key的监控和区间 Key监控。
    
5.  etcd启动时会创建syncWatchersLoop和 syncVictimsLoop协程，进行 watcher的同步操作
    
6.  用户通过 Raft机制写入一致性数据，通过 MVCC机制产生 Event事件，并写入到管道中。
    

## 4.3 如何推送最新数据

watch机制将待同步的数据分为两类：

1.  synced watcher： 顾名思义，代表已经同步完成的 watcher。如果创建 watcher未指定版本号或者指定版本号大于目前最新的版本号，那么就会保存着
    
2.  unsynced watcher： 标识此类数据还未同步完成，落后最新数据版本。
    

synced watcher和unsynced watcher底层结构对应watcherGroup，一个watcherGroup对应多个watcher，可以看到有一个 map和一个IntervalTree，可以根据key快速寻找一个或者多个watcher。

```go
type watcherGroup struct {
	// 通过key寻找watcher
	keyWatchers watcherSetByKey
	// 通过区间寻找watcher
	ranges adt.IntervalTree
	// 监听的watcher列表
	watchers watcherSet
}
```

```go
type watchableStore struct {
	*store

	// 读写锁
	mu sync.RWMutex

	// victims 是被阻塞在 watch channel 上的 watcher batches，channel满时会加入到victims
	victims []watcherBatch
	victimc chan struct{}

	// unsynced包含所有需要同步事件但未同步的watchers
	unsynced watcherGroup

	// 包含与 store进度一致已经同步的watcher
	synced watcherGroup

	stopc chan struct{}
	// 用于等待所有goroutine结束的 waitgroup
	wg    sync.WaitGroup
}
```

当创建完 watcher后，再执行 put/delete操作，通过Raft模块 apply到状态机，其中MVCC的 put事务结束后会将修改信息保存在 change数组中。

如下代码所示：End()函数会将mvccpb.KeyValue、操作类型、revision保存在 Event事件中，然后回调watchableStore.notify函数。watchableStore.notify函数会匹配出监听此 key并且处在synced watcherGroup中的watcher，并且要满足事件版本号大于等于watcher监听最小版本号才会将事件发送到 watcher对应的channel中。serverWatcherStream和sendLoop协程监听到 channel会推送给 client，完成一次最新数据的推送。

```go
// MVCC事务结束时，处理键值对的变更，并通知所有的watcher，是实现etcd的watch功能的关键部分
func (tw *watchableStoreTxnWrite) End() {
	// 获取事务所有键值对变更
	changes := tw.Changes()
	if len(changes) == 0 {
		tw.TxnWrite.End()
		return
	}

	// 最后一次变更版本号，加一代表本次操作后版本号加一
	rev := tw.Rev() + 1
	evs := make([]mvccpb.Event, len(changes))
	// 遍历变更，根据事件类型创建 Event
	for i, change := range changes {
		evs[i].Kv = &changes[i]
		if change.CreateRevision == 0 {
			evs[i].Type = mvccpb.DELETE
			evs[i].Kv.ModRevision = rev
		} else {
			evs[i].Type = mvccpb.PUT
		}
	}

	tw.s.mu.Lock()
	// 回调，通知所有的观察者（watcher）这些变更事件
	tw.s.notify(rev, evs)
	tw.TxnWrite.End()
	tw.s.mu.Unlock()
}
```

## 4.4 如何推送异常事件

推送最新数据中有提到当写事务完成会将时间写入到管道，但是目前watcher的 channel管道的大小限制为128（原本是 1024，但是太过占资源就改成 128 了），如果因为负载等原因导致channel满了便进入异常事件推送机制，此时 etcd会将watcher从synced中删除加入到victims

整体推送流程中提到WatchableStore会启动两个协程，其中syncVictimsLoop就是负责阻塞watcher的推送，通过异步重试推送所有的victim事件，moveVictims中推送失败会重新加入到victim watcherBatch等待下次推送。

如果推送成功，watcher监听的版本号minRev小于当前事件的版本号curRev，说明有历史事件没有推送完成，加入到unsynced watcherGroup，否则加入到synced watcherGroup

```go
// syncVictimsLoop尝试将堆积但计算好的watcher再推送到watcher channel中
func (s *watchableStore) syncVictimsLoop() {
	defer s.wg.Done()

	for {
		// 将 victims 中的数据发送出去
		// 不断循环更新所有的victim
		// 推送失败会重新加入到victim watcherBatch等待下次推送
		for s.moveVictims() != 0 {
		}
		s.mu.RLock()
		isEmpty := len(s.victims) == 0
		s.mu.RUnlock()

		var tickc <-chan time.Time
		if !isEmpty {
			// 如果victims不为空，则设置一个 10ms后的触发器
			tickc = time.After(10 * time.Millisecond) 
		}

		select {
		case <-tickc:
		case <-s.victimc:
		case <-s.stopc:
			return
		}
	}
}
```

## 4.5 如何推送历史事件

notify事件只会处理在synced watcher中的事件，如果watcher还有事件没有推送完成（也就是unsynced watcher）此时直接推送最新事件无法保证event推送的先后顺序，因此需要一个机制来保证unsynced watcher能够顺利的推送完成。syncWatchersLoop协程就负责处理unsynced中的 watcher，也就是历史事件推送。

具体流程是syncWatchersLoop每 100ms同步一次unsynced map 中的 watcher，先将这些watcher中的历史event事件推送到sendLoop，推送完成后就可以移动 synced watcher中，这样下次notify就可以直接处理最新事件。

```go
// syncWatchersLoop 每100毫秒同步一次 unsynced map 中的 watcher
func (s *watchableStore) syncWatchersLoop() {
	defer s.wg.Done()

	// 创建一个每100毫秒触发一次的定时器
	waitDuration := 100 * time.Millisecond
	delayTicker := time.NewTicker(waitDuration)
	defer delayTicker.Stop()

	for {
		s.mu.RLock()
		st := time.Now()
		lastUnsyncedWatchers := s.unsynced.size()
		s.mu.RUnlock()

		unsyncedWatchers := 0
		if lastUnsyncedWatchers > 0 {
			// 如果 unsynced map 不为空，则同步 watcher，具体同步逻辑在syncWatchers中
			unsyncedWatchers = s.syncWatchers()
		}
		syncDuration := time.Since(st)

		delayTicker.Reset(waitDuration)
		// 如果还有未同步的 watcher，并且未同步的 watcher 的数量有所减少
		if unsyncedWatchers != 0 && lastUnsyncedWatchers > unsyncedWatchers {
			delayTicker.Reset(syncDuration)
		}

		select {
		case <-delayTicker.C:
		case <-s.stopc:
			return
		}
	}
}
```

有一个问题是，如何获取 watcher的历史版本呢？学习 MVCC机制可以知道 boltdb中存储了所有的历史版本，那么直接遍历 boltdb就可以得到 key对应的历史版本，在syncWatchers中有一个优化是每次批量选择一批watcher进行同步。

```go
// kvsToEvents将KeyValue转为 Event事件
func kvsToEvents(lg *zap.Logger, wg *watcherGroup, revs, vals [][]byte) (evs []mvccpb.Event) {
	for i, v := range vals {
		var kv mvccpb.KeyValue
		if err := kv.Unmarshal(v); err != nil {
			lg.Panic("failed to unmarshal mvccpb.KeyValue", zap.Error(err))
		}

		if !wg.contains(string(kv.Key)) {
			continue
		}

		ty := mvccpb.PUT
		if isTombstone(revs[i]) {
			ty = mvccpb.DELETE
			kv.ModRevision = BytesToRev(revs[i]).Main
		}
		evs = append(evs, mvccpb.Event{Kv: &kv, Type: ty})
	}
	return evs
}
```

## 4.6 如何匹配变更事件

最后一个问题是watcher如何根据写请求快速匹配到对应的 watcher，在上文已经有所涉及，这里再总结一下。

最简单的事件匹配方法是一个个遍历 watcher匹配对应的 key，但这样复杂度是 O(N)，当 watcher成千上万时这样的复杂度是不可接受的，更何况 etcd会在每个写事件结束后同步触发流程。

在整体推送流程架构图可以看到每个watcher都由对应的 map和 intervalTree组成，etcd通过这两个数据结构实现匹配机制，这里 map是基础数据结构，go的 map用哈希表实现，平均O(1)可以匹配到单个 Key事件。不过 etcd不仅支持单 key 监听，还支持区间、前缀监听，watcher使用 map匹配单 key的变更事件。如果是区间事件则需要使用到intervalTree，称为区间树（有点类似算法竞赛中常见的线段树，在线段树的基础上加上lazy标记也可以实现区间修改查询，但这里的区间树其实是个二叉平衡树），可以快速找到与 key相交的区间，复杂度 O(logn)。区间树底层是一个红黑树，支持区间修改、查询、合并等操作，相比于线段树更适合区间相关操作，并且红黑树能够自平衡，保证最坏情况下的插入查询。

# 五、ETCD事务机制

## 5.1 背景

事务将应用程序的多个读写操作合并成一个逻辑操作单元，即事务中的操作要么成功提交，要么失败回滚，即使失败也可以在应用层进行重试。几乎所有的关系型都会宣传支持事务处理，然而当非关系型（NoSQL，etcd属于 NoSQL的一种）数据库兴起后，事务逐渐开始被放弃，或者替换成了弱的多的保证。非关系型数据库主要通过复制、分区的方式来提升系统的可扩展性和可用性，有更灵活的数据格式，而且一般是分布式设计。一方面，实现事务意味着降低性能，如果是跨 IDC部署，那么就得用 2PC等方式实现分布式事务，实现难度变得很大；另一方面，很多场景下事务又是不可或缺的，比如支付转账的场景，对异常极其敏感，不使用事务实现会需要在应用层做更多的兜底逻辑。

事务有其优势和保证，也有其局限性，分析事务的保证和各种问题可以更好帮助权衡实际系统中的事务设计。好在 etcd支持事务，而且在应用层只用了 391 行（etcd v3.4.33）就实现了一个极简的stm（Software Transactional Memory）事务框架，得以从源码层面分析一种事务的实现方式。

## 5.2 ETCD事务使用

etcd基于 MVCC机制实现了事务，许多使用了 MVCC的数据库都不会暴露底层 MVCC信息，比如 mysql的事务操作基于 MVCC实现，基于START TRANSACTION、COMMIT、ROLLBACK就可以实现事务的创建、提交、回滚操作，这个过程感受不到 MVCC的存在。而 etcd中版本号信息是公开的，这给了很大的灵活性，比如官方的 clientV3就提供了concurrency库，封装了几种场景的分布式场景操作：

*   mutex.go：一个分布式锁实现
    
*   election.go：一个分布式选举的实现，依靠分布式锁和租约实现选举，当节点想成为 Leader时会尝试获取锁，当Leader租约过期时其他节点就可以竞争锁。
    
*   stm.go：客户端实现的事务框架，支持 ACID事务并且能够指定不同隔离级别，最强大的是代码极其精简。
    

## 5.3 ETCD 事务API

### 5.3.1 微事务

etcd v3引入了微事务（mini-transaction）的概念，允许用户在一次修改中批量执行多次操作，这意味着这一组操作被绑定成原子操作并共享同一个mod_revision（key最后一次修改的revision），同时基于 MVCC版本号可以实现各种隔离机制。

```go
client.Txn(ctx).If(cmp1, cmp2, ...).Then(op1, op2, ...,).Else(op1', op2', …).commit()
```

```go
message TxnRequest {
  repeated Compare compare = 1;  // Compare列表，包含一个谓词的合取（所有谓词都只能为真），所有谓词为真时才能执行事务
  repeated RequestOp success = 2;  // RequestOp列表，compare为真时要执行的操作
  repeated RequestOp failure = 3;  // RequestOp列表，compare为假时要执行的操作
}
```

事务 API由 If语句、Then语句、Else语句组成，如果 If语句为真则执行 Then语句的操作，否则执行 Else语句的操作，这有点像 CAS操作。If语句对应TxnRequest中的compare，Then和 Else则分别对应 success、failure。If操作可以比较一个键的当前值或者版本号和预期值与预期版本号是否一致，success/failure对应 etcd中要执行的操作，比如 put、delete、range。这里重点讨论下 If操作检查项。

### 5.3.2 If操作和版本号

If操作对应一个Compare Message列表：

```go
message Compare {
  enum CompareResult {
    EQUAL = 0;
    GREATER = 1;
    LESS = 2;
    NOT_EQUAL = 3;
  }
  enum CompareTarget {
    VERSION = 0;
    CREATE = 1;
    MOD = 2;
    VALUE= 3;
  }
  CompareResult result = 1;
  // target is the key-value field to inspect for the comparison.
  CompareTarget target = 2;
  // key is the subject key for the comparison operation.
  bytes key = 3;
  oneof target_union {
    int64 version = 4;
    int64 create_revision = 5;
    int64 mod_revision = 6;
    bytes value = 7;
  }
}
```

从其 proto定义可以清晰的看出来If语句支持的检查操作包括=、>、<、≠，支持的检查项包括mod_revision、create_revision、version、value，这里value代表值，其他三个是版本号，在 MVCC中有介绍过，很容易混淆，这里结合事务背景再重提一遍：

*   mod_revision： key最近一次修改的版本号，用于检查最近一次修改是否符合预期。比如Tom查询账户余额此时大于 100¥，此时的mod_revision是v1，然后再进行转账操作，此时要保证着 100¥还在，那么就要保证转账时候的mod("Tom")=v1。
    
*   create_revision： key的创建版本号，用于检查 key是否还存在，key不存在时create_revision就是 0。
    
*   version： key的修改次数，用于检验修改次数是否符合预期。
    

## 5.4 ACID：事务的安全性保证

*未完待续...*

---

## 总结

ETCD作为一个分布式键值存储系统，通过Raft协议实现了强一致性，通过MVCC机制实现了多版本并发控制，通过Watch机制实现了高效的数据变更通知。这些技术的结合使得ETCD成为了Kubernetes等分布式系统的可靠基础设施。

理解ETCD的核心原理对于构建高可用的分布式系统具有重要意义，特别是在面对大规模集群部署时，深入了解其性能特点和限制能够帮助我们做出更好的架构决策。 