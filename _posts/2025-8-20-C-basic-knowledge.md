---
layout: post
title: "C Language：Start point of my coding life"
date: 2025-8-20 15:30:00 +0800
categories: [tutorial, web-development]
tags: [C, coding]
---

# C语言基础知识

# C11新特性

# C基础语法

C语言广泛用于系统编程、嵌入式开发和高性能计算领域

*   关键字 Keywords
    
*   标识符 Identifiers
    
*   常量 Constants
    
*   字符串字面量 String Literals
    
*   运算符 Operators
    
*   分隔符 Separators
    

## C程序基本结构

```go
#include <stdio.h>   // 头文件包含
#define PI 3.14159    // 宏定义
// 函数声明
int add(int a, int b);

int main() {         // 主函数
    // 变量声明
    int num1, num2, sum;
    // 用户输入
    printf("Enter two integers: ");
    scanf("%d %d", &num1, &num2);
    // 函数调用
    sum = add(num1, num2);
    // 输出结果
    printf("Sum: %d\n", sum);
    return 0;        // 返回 0 表示程序成功执行
}
// 函数定义
int add(int a, int b) {
    return a + b;
}
```

*   头文件
    
    *   头文件指的是文件头部#include指令包。其包含函数和库的声明，如标准输入和输出库<stdio.h>、标准库<stdlib.h>等。他们定义了函数、宏、常量等使程序能够使用预定义的库函数
        
*   宏定义
    
    *   宏是通过#define指令定义的符号常量或代码片段。宏在编译前预处理器替换为其定义的内容。常常用于定义常量或者复杂的代码块
        
*   函数声明
    
    *   C语言中，函数的声明必须在函数定义或调用之前。声明提供了函数的返回类型、函数名和参数列表，以便编译器知道该何是调用
        
*   主函数
    
    *   main函数是C程序的入口点，每个C程序都必须包含一个main函数。程序从main开始执行，返回值通常为0表示程序成功执行
        
*   变量声明
    
    *   在C程序中，所有变量必须在使用前声明。变量可以在main函数中声明，也可以在其他函数中或者全局声明
        
*   语句和表达式
    
    *   语句是C程序的基本执行单位，通常是函数调用、赋值、控制语句（如if、for等）或表达式。表达式是由变量、操作符和常量组成的代码片段
        
*   控制流语句
    
    *   if、for、while、do-while
        
*   函数定义
    
    *   函数定义包含实际的函数体，他描述了函数的具体功能。函数定义时通常包含参数、局部变量和返回值
        
*   返回语句
    
    *   return
        

## 分隔符

分隔符用来表示C语言中的分隔语句，常见的分隔标志有：

*   逗号（，）: 用于分隔变量或函数参数
    
*   分号（；）：用于结束语句
    
*   括号：
    
    *   圆括号（），通常表示优先级
        
    *   花括号  {}，通常用来表示分块，比如if-else
        
    *   方括号  \[\]，用于数组下标
        

## 注释

*   单行注释 // 
    
*   多行注释 /\* \*/
    

## 标识符

标识符是程序中变量、函数、数组等的名字。标识符由字母（大写或小写）、数字和下划线组成，但第一个字符必须是字母或下划线，不能是数字

一个标识符以字母 A-Z 或 a-z 或下划线 \_ 开始，后跟零个或多个字母、下划线和数字（0-9）

## 常量

*   const，常量是固定的，在程序执行期间不会改变
    
*   常量可以是整型常量、浮点型常量、字符常量、枚举常量等
    

## 字符串字面量

字符串字面量是双引号括起来的字符序列，字符串末尾是自动添加一个空字符 `\0`

```go
char greeting[] = "Hello, World!";
```

## 运算符（Operators）

*   算术运算符：`+ - * / %` 
    
*   关系运算符：`==, !=, >, <, >=, <=`
    
*   逻辑运算符：`&&，||，！`
    
*   位运算符：`&, |,~,<<,>>`
    
    *   & - 按位与
        
    *   | - 按位或
        
    *   ~ - 按位取反
        
    *   << - 右移
        
    *   \>> - 左移
        
*   赋值运算符：`=,+=,-=,*=,/=,%=`
    
*   其他运算符：`sizeof，?:，&，*，->，.`
    

## 关键字 Keywords

| 关键字 | 说明 |
| --- | --- |
| auto | 声明自动变量 |
| break | 跳出当前循环 |
| case | 开关语句分支 |
| char | 声明字符型变量或函数返回值类型 |
| const | 定义常量，如果一个变量被 const 修饰，那么它的值就不能再被改变 |
| continue | 结束当前循环，开始下一轮循环 |
| default | 开关语句中的"其它"分支 |
| do | 循环语句的循环体 |
| double | 声明双精度浮点型变量或函数返回值类型 |
| else | 条件语句否定分支（与 if 连用） |
| enum | 声明枚举类型 |
| extern | 声明变量或函数是在其它文件或本文件的其他位置定义 |
| float | 声明浮点型变量或函数返回值类型 |
| for | 一种循环语句 |
| goto | 无条件跳转语句 |
| if | 条件语句 |
| int | 声明整型变量或函数 |
| long | 声明长整型变量或函数返回值类型 |
| register | 声明寄存器变量 |
| return | 子程序返回语句（可以带参数，也可不带参数） |
| short | 声明短整型变量或函数 |
| signed | 声明有符号类型变量或函数 |
| sizeof | 计算数据类型或变量长度（即所占字节数） |
| static | 声明静态变量 |
| struct | 声明结构体类型 |
| switch | 用于开关语句 |
| typedef | 用以给数据类型取别名 |
| unsigned | 声明无符号类型变量或函数 |
| union | 声明共用体类型 |
| void | 声明函数无返回值或无参数，声明无类型指针 |
| volatile | 说明变量在程序执行中可被隐含地改变 |
| while | 循环语句的循环条件 |

**C99 新增关键字**

| \_Bool | \_Complex | \_Imaginary | inline | restrict |
| --- | --- | --- | --- | --- |

**C11 新增关键字**

| \_Alignas | \_Alignof | \_Atomic | \_Generic | \_Noreturn |
| --- | --- | --- | --- | --- |
| \_Static\_assert | \_Thread\_local |  |  |  |

# C语言数据类型

C语言中的基本数据类型包括：

*   基本数据类型：算数类型，包括int、char、float和double
    
*   枚举类型：也是算数类型，被用来定义在程序中只能赋予一定的离散整数值的变量
    
*   void类型：类型说明符void表示没有值的数据类型，通常用于函数返回值
    
*   派生类型：包括数组类型、指针类型和结构体类型
    

## 整数类型

下表列出了关于标准整数类型的存储大小和值范围的细节：

| 类型 | 存储大小 | 值范围 |
| --- | --- | --- |
| char | 1 字节 | \-128 到 127 或 0 到 255 |
| unsigned char | 1 字节 | 0 到 255 |
| signed char | 1 字节 | \-128 到 127 |
| int | 2 或 4 字节 | \-32,768 到 32,767 或 -2,147,483,648 到 2,147,483,647 |
| unsigned int | 2 或 4 字节 | 0 到 65,535 或 0 到 4,294,967,295 |
| short | 2 字节 | \-32,768 到 32,767 |
| unsigned short | 2 字节 | 0 到 65,535 |
| long | 4 字节 | \-2,147,483,648 到 2,147,483,647 |
| unsigned long | 4 字节 | 0 到 4,294,967,295 |

> _注意，各种类型的存储大小与系统位数有关，但目前通用的以64位系统为主。_

## 浮点类型

| 类型 | 存储大小 | 值范围 | 精度 |
| --- | --- | --- | --- |
| float | 4 字节 | 1.2E-38 到 3.4E+38 | 6 位有效位 |
| double | 8 字节 | 2.3E-308 到 1.7E+308 | 15 位有效位 |
| long double | 16 字节 | 3.4E-4932 到 1.1E+4932 | 19 位有效位 |

## void类型

| 序号 | 类型与描述 |
| --- | --- |
| 1 | **函数返回为空**<br>C 中有各种函数都不返回值，或者您可以说它们返回空。不返回值的函数的返回类型为空。例如 **void exit (int status);** |
| 2 | **函数参数为空**<br>C 中有各种函数不接受任何参数。不带参数的函数可以接受一个 void。例如 **int rand(void);** |
| 3 | **指针指向 void**<br>类型为 void \* 的指针代表对象的地址，而不是类型。例如，内存分配函数 **void \*malloc( size\_t size );** 返回指向 void 的指针，可以转换为任何数据类型。 |

## 类型转换

*   **隐式类型转换：**隐式类型转换是在表达式中自动发生的，无需进行任何明确的指令或函数调用。它通常是将一种较小的类型自动转换为较大的类型，例如，将int类型转换为long类型或float类型转换为double类型。隐式类型转换也可能会导致数据精度丢失或数据截断。
    
*   **显式类型转换：**显式类型转换需要使用强制类型转换运算符（type casting operator），它可以将一个数据类型的值强制转换为另一种数据类型的值。强制类型转换可以使程序员在必要时对数据类型进行更精确的控制，但也可能会导致数据丢失或截断。
    

# C变量

## C中的变量定义

`type variable_list`

*   `type` 表示变量的数据类型，可以是整型、浮点型、字符型、指针，也可以是用户自定义的对象
    
*   `variable_list` 可以由一个或多个变量的名称组成，多个变量之间用逗号,分隔，变量由字母、数字和下划线组成，且以字母或下划线开头
    

## 变量初始化

`type variable_name = value;`

```go
int x= 10;
float pi = 3.14;
char ch = 'A';
int d=3,f=5;
byte z=22;
```

## 变量不初始化

在 C 语言中，如果变量没有显式初始化，那么它的默认值将取决于该变量的类型和其所在的作用域。

对于全局变量和静态变量（在函数内部定义的静态变量和在函数外部定义的全局变量），它们的默认初始值为零。

*   整型变量(int short long)默认为0
    
*   浮点型变量(float double)默认为0.0
    
*   字符型变量(char)默认为\`\0\`，即空字符
    
*   指针变量：默认为NULL，表示指针不指向任何有效的内存地址
    
*   数组、结构体、联合等复合类型的变量：它们的元素或成员将按照相应的规则进行默认初始化
    

局部变量（在函数内部定义的非静态变量）不会自动初始化为默认值，它们的初始值是未定义的（包含垃圾值）。因此，在使用局部变量之前，应该显式地为其赋予一个初始值。

## C中的变量声明

变量声明向编译器保证变量以指定的类型和名称存在，这样编译器在不需要知道变量完整细节的情况下也能继续进一步的编译。变量声明只在编译时有它的意义，在程序连接时编译器需要实际的变量声明。

变量的声明有两种情况：

*   一种是需要建立存储空间的。例如：int a 在声明的时候就已经建立了存储空间。
    
*   另一种是不需要建立存储空间的，通过使用extern关键字声明变量名而不定义它。 例如：extern int a 其中变量 a 可以在别的文件中定义的。
    

如果需要在一个源文件中引用另外一个源文件中定义的变量，我们只需在引用的文件中将变量加上 extern 关键字的声明即可

```go
#include <stdio.h>
/*外部变量声明*/
extern int x ;
extern int y ;
int addtwonum()
{
    return x+y;
}
```
```c
#include <stdio.h>
/*定义两个全局变量*/
int x=1;
int y=2;
int addtwonum();
int main(void){
  int result;
  result = addtwonum();
  printf("result 为: %d\n",result);
  return 0;
}

/*

  gcc addtwonum.c test.c -o main 
  ./main
  result 为：3
  编译命令 gcc addtwonum.c test.c -o main 将两个源文件编译链接成可执行文件 main
*/
```

# C常量

## 整数常量

整数常量可以是十进制、八进制或十六进制的常量。前缀指定基数：0x 或 0X 表示十六进制，0 表示八进制，不带前缀则默认表示十进制。

整数常量也可以带一个后缀，后缀是 U 和 L 的组合，U 表示无符号整数（unsigned），L 表示长整数（long）。后缀可以是大写，也可以是小写，U 和 L 的顺序任意

## 浮点常量

浮点常量由整数部分、小数点、小数部分和指数部分组成。您可以使用小数形式或者指数形式来表示浮点常量。

当使用小数形式表示时，必须包含整数部分、小数部分，或同时包含两者。当使用指数形式表示时， 必须包含小数点、指数，或同时包含两者。带符号的指数是用 e 或 E 引入的。

## 字符常量

字符常量是括在单引号中，例如，'x' 可以存储在 char 类型的简单变量中。

字符常量可以是一个普通的字符（例如 'x'）、一个转义序列（例如 '\t'），或一个通用的字符（例如 '\u02C0'）。

在 C 中，有一些特定的字符，当它们前面有反斜杠时，它们就具有特殊的含义，被用来表示如换行符（\n）或制表符（\t）等。

| 转义序列 | 含义 |
| --- | --- |
| \\ | \ 字符 |
| \' | ' 字符 |
| \" | " 字符 |
| \? | ? 字符 |
| \a | 警报铃声 |
| \b | 退格键 |
| \f | 换页符 |
| \n | 换行符 |
| \r | 回车 |
| \t | 水平制表符 |
| \v | 垂直制表符 |
| \ooo | 一到三位的八进制数 |
| \xhh . . . | 一个或多个数字的十六进制数 |

## 字符串常量

字符串字面值或常量是括在双引号 " " 中的。一个字符串包含类似于字符常量的字符：普通的字符、转义序列和通用的字符。

```c
"hello, dear"

"hello, \

dear"

"hello, " "d" "ear"
```

## 定义常量

在 C 中，有两种简单的定义常量的方式：

*   使用 #define 预处理器： #define 可以在程序中定义一个常量，它在编译时会被替换为其对应的值。
    

*   使用 const 关键字：const 关键字用于声明一个只读变量，即该变量的值不能在程序运行时修改。
    

```c
#define 常量名 常量值
#define PI 3.14159
```

## const关键字

`const 数据类型 常量名 = 常量值;`

**define与const的区别**

*   建议使用 const 关键字来定义常量，因为它具有类型检查和作用域的优势，而 #define 仅进行简单的文本替换，可能会导致一些意外的问题。
    
*   **类型检查：**#define 不进行类型检查，因为它只是进行简单的文本替换。而 const 定义的常量具有类型信息，编译器可以对其进行类型检查。这可以帮助捕获一些潜在的类型错误
    

*   **作用域：**#define 定义的常量没有作用域限制，它在定义之后的整个代码中都有效。而 const 定义的常量具有块级作用域，只在其定义所在的作用域内有效。
    

# C存储类

存储类主要定义C程序中变量/函数的存储位置、生命周期和作用域。常见的如下

*   auto
    
    *   定义在函数中的变量默认为 auto 存储类，这意味着它们在函数开始时被创建，在函数结束时被销毁
        
    *   auto 只能用在函数内，即 auto 只能修饰局部变量
        
*   register
    
    *   用于定义存储在寄存器中而不是 RAM 中的局部变量
        
    *   这意味着变量的最大尺寸等于寄存器的大小（通常是一个字），且不能对它应用一元的 '&' 运算符（因为它没有内存位置）
        
*   static
    
    *   存储类指示编译器在程序的生命周期内保持局部变量的存在，而不需要在每次它进入和离开作用域时进行创建和销毁
        
*   extern
    
    *   extern 存储类用于定义在其他文件中声明的全局变量或函数。当使用 extern 关键字时，不会为变量分配任何存储空间，而只是指示编译器该变量在其他文件中定义。
        
    *   extern 存储类用于提供一个全局变量的引用，全局变量对所有的程序文件都是可见的。当您使用 extern 时，对于无法初始化的变量，会把变量名指向一个之前定义过的存储位置
        

# C运算符

## 算术运算符

| 运算符 | 描述 | 实例 |
| --- | --- | --- |
| + | 把两个操作数相加 | A + B 将得到 30 |
| \- | 从第一个操作数中减去第二个操作数 | A - B 将得到 -10 |
| \* | 把两个操作数相乘 | A \* B 将得到 200 |
| / | 分子除以分母 | B / A 将得到 2 |
| % | 取模运算符，整除后的余数 | B % A 将得到 0 |
| ++ | 自增运算符，整数值增加 1 | A++ 将得到 11 |
| \-- | 自减运算符，整数值减少 1 | A-- 将得到 9 |

## 关系运算符

| 运算符 | 描述 | 实例 |
| --- | --- | --- |
| \== | 检查两个操作数的值是否相等，如果相等则条件为真。 | (A == B) 为假。 |
| != | 检查两个操作数的值是否相等，如果不相等则条件为真。 | (A != B) 为真。 |
| \> | 检查左操作数的值是否大于右操作数的值，如果是则条件为真。 | (A > B) 为假。 |
| < | 检查左操作数的值是否小于右操作数的值，如果是则条件为真。 | (A < B) 为真。 |
| \>= | 检查左操作数的值是否大于或等于右操作数的值，如果是则条件为真。 | (A >= B) 为假。 |
| <= | 检查左操作数的值是否小于或等于右操作数的值，如果是则条件为真。 | (A <= B) 为真。 |

## 逻辑运算符

| 运算符 | 描述 | 实例 |
| --- | --- | --- |
| \== | 检查两个操作数的值是否相等，如果相等则条件为真。 | (A == B) 为假。 |
| != | 检查两个操作数的值是否相等，如果不相等则条件为真。 | (A != B) 为真。 |
| \> | 检查左操作数的值是否大于右操作数的值，如果是则条件为真。 | (A > B) 为假。 |
| < | 检查左操作数的值是否小于右操作数的值，如果是则条件为真。 | (A < B) 为真。 |
| \>= | 检查左操作数的值是否大于或等于右操作数的值，如果是则条件为真。 | (A >= B) 为假。 |
| <= | 检查左操作数的值是否小于或等于右操作数的值，如果是则条件为真。 | (A <= B) 为真。 |

## 位运算符

| 运算符 | 描述 |
| --- | --- |
| & | 对两个操作数的每一位执行逻辑与操作，如果两个相应的位都为 1，则结果为 1，否则为 0。<br>按位与操作，按二进制位进行"与"运算。运算规则：<br>```plaintext<br>0&0=0;   <br>0&1=0;    <br>1&0=0;     <br>1&1=1;<br>``` |
| \| | 对两个操作数的每一位执行逻辑或操作，如果两个相应的位都为 0，则结果为 0，否则为 1。<br>按位或运算符，按二进制位进行"或"运算。运算规则：<br>```plaintext<br>0\|0=0;   <br>0\|1=1;   <br>1\|0=1;    <br>1\|1=1;<br>``` |
| ^ | 对两个操作数的每一位执行逻辑异或操作，如果两个相应的位值相同，则结果为 0，否则为 1。<br>异或运算符，按二进制位进行"异或"运算。运算规则：<br>```plaintext<br>0^0=0;   <br>0^1=1;   <br>1^0=1;  <br>1^1=0;<br>``` |
| ~ | 对操作数的每一位执行逻辑取反操作，即将每一位的 0 变为 1，1 变为 0。<br>取反运算符，按二进制位进行"取反"运算。运算规则：<br>```plaintext<br>~1=-2;   <br>~0=-1;<br>``` |
| << | 将操作数的所有位向左移动指定的位数。左移 n 位相当于乘以 2 的 n 次方。<br>二进制左移运算符。将一个运算对象的各二进制位全部左移若干位（左边的二进制位丢弃，右边补0）。 |
| \>> | 将操作数的所有位向右移动指定的位数。右移n位相当于除以 2 的 n 次方。<br>二进制右移运算符。将一个数的各二进制位全部右移若干位，正数左补 0，负数左补 1，右边丢弃。 |

## 赋值运算

| 运算符 | 描述 |
| --- | --- |
| \= | 简单的赋值运算符，把右边操作数的值赋给左边操作数 |
| += | 加且赋值运算符，把右边操作数加上左边操作数的结果赋值给左边操作数 |
| \-= | 减且赋值运算符，把左边操作数减去右边操作数的结果赋值给左边操作数 |
| \*= | 乘且赋值运算符，把右边操作数乘以左边操作数的结果赋值给左边操作数 |
| /= | 除且赋值运算符，把左边操作数除以右边操作数的结果赋值给左边操作数 |
| %= | 求模且赋值运算符，求两个操作数的模赋值给左边操作数 |
| <<= | 左移且赋值运算符 |
| \>>= | 右移且赋值运算符 |
| &= | 按位与且赋值运算符 |
| ^= | 按位异或且赋值运算符 |
| \|= | 按位或且赋值运算符 |

## 杂项运算符

| 运算符 | 描述 | 实例 |
| --- | --- | --- |
| sizeof() | 返回变量的大小。 | sizeof(a) 将返回 4，其中 a 是整数。 |
| & | 返回变量的地址。 | &a; 将给出变量的实际地址。 |
| \* | 指向一个变量。 | \*a; 将指向一个变量。 |
| ? : | 条件表达式 | 如果条件为真 ? 则值为 X : 否则值为 Y |

# C判断

## 判断语句

C 语言提供了以下类型的判断语句。点击链接查看每个语句的细节。

| 语句 | 描述 |
| --- | --- |
| if 语句 | 一个 **if 语句** 由一个布尔表达式后跟一个或多个语句组成。 |
| if...else 语句 | 一个 **if 语句** 后可跟一个可选的 **else 语句**，else 语句在布尔表达式为假时执行。 |
| 嵌套 if 语句 | 您可以在一个 **if** 或 **else if** 语句内使用另一个 **if** 或 **else if** 语句。 |
| switch 语句 | 一个 **switch** 语句允许测试一个变量等于多个值时的情况。 |
| 嵌套 switch 语句 | 您可以在一个 **switch** 语句内使用另一个 **switch** 语句。 |

## ？：运算符（三元运算符）

`Exp1 ? Exp2 : Exp3;`

? 表达式的值是由 Exp1 决定的。如果 Exp1 为真，则计算 Exp2 的值，结果即为整个表达式的值。如果 Exp1 为假，则计算 Exp3 的值，结果即为整个表达式的值。

# C循环

## 循环类型

C 语言提供了以下几种循环类型。点击链接查看每个类型的细节。

| 循环类型 | 描述 |
| --- | --- |
| while 循环 | 当给定条件为真时，重复语句或语句组。它会在执行循环主体之前测试条件。 |
| for 循环 | 多次执行一个语句序列，简化管理循环变量的代码。 |
| do...while 循环 | 除了它是在循环主体结尾测试条件外，其他与 while 语句类似。 |
| 嵌套循环 | 您可以在 while、for 或 do..while 循环内使用一个或多个循环。 |

## 循环控制语句

循环控制语句改变你代码的执行顺序。通过它你可以实现代码的跳转。

C 提供了下列的循环控制语句。点击链接查看每个语句的细节。

| 控制语句 | 描述 |
| --- | --- |
| break 语句 | 终止**循环**或 **switch** 语句，程序流将继续执行紧接着循环或 switch 的下一条语句。 |
| continue 语句 | 告诉一个循环体立刻停止本次循环迭代，重新开始下次循环迭代。 |
| goto 语句 | 将控制转移到被标记的语句。但是不建议在程序中使用 goto 语句。 |

## 无限循环

如果条件永远不为假，则循环将变成无限循环。for 循环在传统意义上可用于实现无限循环。由于构成循环的三个表达式中任何一个都不是必需的，您可以将某些条件表达式留空来构成一个无限循环。

```c
#include <stdio.h>
 
int main ()
{
   for( ; ; )
   {
      printf("该循环会永远执行下去！\n");
   }
   return 0;
}
```

# C函数

## 定义函数

```c
return_type function_name( parameter list )
{
   body of the function
}
```

## 函数声明

函数声明会告诉编译器函数名称及如何调用函数。

```c
return_type function_name( parameter list );
int max(int num1, int num2);
int max(int, int);
```

## 调用函数

## 函数参数

如果函数要使用参数，则必须声明接受参数值的变量。这些变量称为函数的形式参数。形式参数就像函数内的其他局部变量，在进入函数时被创建，退出函数时被销毁。

| 调用类型 | 描述 |
| --- | --- |
| 传值调用 | 该方法把参数的实际值复制给函数的形式参数。在这种情况下，修改函数内的形式参数不会影响实际参数。 |
| 引用调用 | 通过指针传递方式，形参为指向实参地址的指针，当对形参的指向操作时，就相当于对实参本身进行的操作。 |

# C作用域规则

## 局部变量

在某个函数或块的内部声明的变量称为局部变量。它们只能被该函数或该代码块内部的语句使用。局部变量在函数外部是不可知的。

## 全局变量

全局变量是定义在函数外部，通常是在程序的顶部。全局变量在整个程序生命周期内都是有效的，在任意的函数内部能访问全局变量。

在程序中，**局部变量和全局变量的名称可以相同**，但是在函数内，如果两个名字相同，会使用局部变量值，全局变量不会被使用。

## 形式参数

全局变量与局部变量再内存中的区别:

*   全局变量保存在内存的全局存储区中，占用静态的存储单元；
    
*   局部变量保存在栈中，只有在所在函数被调用时才动态地为变量分配存储单元；
    

# C数组

C 语言支持数组数据结构，它可以存储一个固定大小的相同类型元素的顺序集合。数组是用来存储一系列数据，但它往往被认为是一系列相同类型的变量。

## 声明数组

```c
type arrayName [arraySize];
double balance[10];
```

## 初始化数组

```c
double balance[5] = {1000.0, 2.0, 3.4, 7.0, 50.0};
double balance[] = {1000.0, 2.0, 3.4, 7.0, 50.0};
```

## 获取数组长度

C语言中使用sizeof运算符来获取数组的长度

```c
int numbers[] = {1, 2, 3, 4, 5};
int length = sizeof(numbers) / sizeof(numbers[0]);


// 也可以使用宏定义
#include <stdio.h>

#define LENGTH(array) (sizeof(array) / sizeof(array[0]))

int main() {
    int array[] = {1, 2, 3, 4, 5};
    int length = LENGTH(array);

    printf("数组长度为: %d\n", length);

    return 0;
}
```

## 数组名

在 C 语言中，数组名表示数组的地址，即数组首元素的地址。当我们在声明和定义一个数组时，该数组名就代表着该数组的地址。

```c
int myArray[5] = {10, 20, 30, 40, 50};
```

在这里，myArray 是数组名，它表示整数类型的数组，包含 5 个元素。myArray 也代表着数组的地址，即第一个元素的地址。

数组名本身是一个常量指针，意味着它的值是不能被改变的，一旦确定，就不能再指向其他地方。

```c
int myArray[5] = {10, 20, 30, 40, 50};
int *ptr = &myArray[0]; // 或者直接写作 int *ptr = myArray;
```

在上面的例子中，ptr 指针变量被初始化为 myArray 的地址，即数组的第一个元素的地址。

需要注意的是，虽然数组名表示数组的地址，但在大多数情况下，数组名会自动转换为指向数组首元素的指针。

## C中数组详解

| 概念 | 描述 |
| --- | --- |
| 多维数组 | C 支持多维数组。多维数组最简单的形式是二维数组。 |
| 传递数组给函数 | 您可以通过指定不带索引的数组名称来给函数传递一个指向数组的指针。 |
| 从函数返回数组 | C 允许从函数返回数组。 |
| 指向数组的指针 | 您可以通过指定不带索引的数组名称来生成一个指向数组中第一个元素的指针。 |
| 静态数组与动态数组 | 静态数组在编译时分配内存，大小固定，而动态数组在运行时手动分配内存，大小可变。 |

# C enum（枚举）

枚举是 C 语言中的一种基本数据类型，用于定义一组具有离散值的常量，它可以让数据更简洁，更易读。

枚举类型通常用于为程序中的一组相关的常量取名字，以便于程序的可读性和维护性。

```c
enum　枚举名　{枚举元素1,枚举元素2,……};

enum DAY
{
  MON=1,TUE,WED,THU,FRI,SAT,SUN
};

enum season
{
  spring,summer=3,autumn,winter;
}
```

## 枚举变量的定义

```c
//先定义枚举类型，再定义枚举变量
enum DAY
{
      MON=1, TUE, WED, THU, FRI, SAT, SUN
};
enum DAY day;

// 定义枚举类型的同时定义枚举变量
enum DAY
{
      MON=1, TUE, WED, THU, FRI, SAT, SUN
} day;

// 省略枚举名称，直接定义枚举变量
enum
{
      MON=1, TUE, WED, THU, FRI, SAT, SUN
}day;
```

# C指针

学习 C 语言的指针既简单又有趣。通过指针，可以简化一些 C 编程任务的执行，还有一些任务，如动态内存分配，没有指针是无法执行的。

每一个变量都有一个内存位置，每一个内存位置都定义了可使用 & 运算符访问的地址，它表示了在内存中的一个地址。

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/8K4nyeZdWodePnLb/img/e9ddc0b7-96ea-48cd-98b6-de4449ad9a21.png)

## 什么是指针？

指针也就是内存地址，指针变量是用来存放内存地址的变量。就像其他变量或常量一样，您必须在使用指针存储其他变量地址之前，对其进行声明。

`type *var_name;`

在这里，type 是指针的基类型，它必须是一个有效的 C 数据类型，var\_name 是指针变量的名称。用来声明指针的星号 \* 与乘法中使用的星号是相同的。但是，在这个语句中，星号是用来指定一个变量是指针

## 如何使用指针

使用指针时会频繁进行以下操作：

*   定义一个指针变量
    
*   把变量地址赋值给指针
    
*   访问指针变量中可用地址的值
    

这些是通过使用一元运算符 \* 来返回位于操作数所指定地址的变量的值。

```c
#include <stdio.h>

int main(){
  int  var = 20;   /* 实际变量的声明 */
  int  *ip;        /* 指针变量的声明 */
 
  ip = &var;  /* 在指针变量中存储 var 的地址 */  
  printf("var 变量的地址: %p\n", &var  );
 
  /* 在指针变量中存储的地址 */
  printf("ip 变量存储的地址: %p\n", ip );
 
  /* 使用指针访问值 */
  printf("*ip 变量的值: %d\n", *ip );
 
  return 0; 
}

var 变量的地址: 0x7ffeeef168d8
ip 变量存储的地址: 0x7ffeeef168d8
*ip 变量的值: 20

```

## C中的NULL指针

在变量声明的时候，如果没有确切的地址可以赋值，为指针变量赋一个 NULL 值是一个良好的编程习惯。赋为 NULL 值的指针被称为空指针。

在大多数的操作系统上，程序不允许访问地址为 0 的内存，因为该内存是操作系统保留的。然而，内存地址 0 有特别重要的意义，它表明该指针不指向一个可访问的内存位置。但按照惯例，如果指针包含空值（零值），则假定它不指向任何东西。

## C指针详解

| 概念 | 描述 |
| --- | --- |
| [指针的算术运算](https://www.runoob.com/cprogramming/c-pointer-arithmetic.html) | 可以对指针进行四种算术运算：++、--、+、- |
| [指针数组](https://www.runoob.com/cprogramming/c-array-of-pointers.html) | 可以定义用来存储指针的数组。 |
| [指向指针的指针](https://www.runoob.com/cprogramming/c-pointer-to-pointer.html) | C 允许指向指针的指针。 |
| [传递指针给函数](https://www.runoob.com/cprogramming/c-passing-pointers-to-functions.html) | 通过引用或地址传递参数，使传递的参数在调用函数中被改变。 |
| [从函数返回指针](https://www.runoob.com/cprogramming/c-return-pointer-from-functions.html) | C 允许函数返回指针到局部变量、静态变量和动态内存分配。 |

# C函数指针

函数指针是指向函数的指针变量。

通常我们说的指针变量是指向一个整型、字符型或数组等变量，而函数指针是指向函数。

函数指针可以像一般函数一样，用于调用函数、传递参数。

```c
typedef int (*fun_ptr)(int,int);
// 声明一个指向同样参数、返回值的函数指针类型

#include <stdio.h>
int max(int x,int y)
{
  return x>y ? x:y;
}

int main(void){
  /* p 是函数指针 */
  int(* p) (int,int) = &max; // &可以省略
  /*
  也可以使用
  fun_ptr p = max
  */
  int a,b,c,d;

  printf("请输入三个数字:");
  scanf("%d %d %d", & a, & b, & c);
  /* 与直接调用函数等价，d = max(max(a, b), c) */
  d = p(p(a, b), c);
  
  printf("最大的数字是: %d\n", d);
  return 0;
}

请输入三个数字：1 2 3
最大的数字是：3

```

## 回调函数

**函数指针作为某个函数的参数**

函数指针变量可以作为某个函数的参数来使用，回调函数就是一个通过函数指针调用的函数

简单理解：回调函数是由别人的函数执行时调用你实现的函数。

:::
_以下是来自知乎作者常溪玲的解说：_

_你到一个商店买东西，刚好你要的东西没有货，于是你在店员那里留下了你的电话，过了几天店里有货了，店员就打了你的电话，然后你接到电话后就到店里去取了货。在这个例子里，你的电话号码就叫回调函数，你把电话留给店员就叫登记回调函数，店里后来有货了叫做触发了回调关联的事件，店员给你打电话叫做调用回调函数，你到店里去取货叫做响应回调事件。_
:::

**实例**

```c
#include <stdlib.h>  
#include <stdio.h>
 
void populate_array(int *array, size_t arraySize, int (*getNextValue)(void))
{
    for (size_t i=0; i<arraySize; i++)
        array[i] = getNextValue();
}
 
// 获取随机值
int getNextRandomValue(void)
{
    return rand();
}
 
int main(void)
{
    int myarray[10];
    /* getNextRandomValue 不能加括号，否则无法编译，因为加上括号之后相当于传入此参数时传入了 int , 而不是函数指针*/
    populate_array(myarray, 10, getNextRandomValue);
    for(int i = 0; i < 10; i++) {
        printf("%d ", myarray[i]);
    }
    printf("\n");
    return 0;
}

16807 282475249 1622650073 984943658 1144108930 470211272 101027544 1457850878 1458777923 2007237709 

```

实例中**populate\_arrary()**函数定义了三个参数，其中第三个参数是函数的指针，通过该函数来设置数组的值。

实例中我们定义了回调函数**getNextRandomValue()**，它返回一个随机值，作为一个函数指针传递给**populate\_array()函数**

**populate\_array()**将调用10次回调函数，并将回调函数的返回值赋值给数组

# C字符串

在 C 语言中，字符串实际上是使用空字符 \0 结尾的一维字符数组。因此，\0 是用于标记字符串的结束。

空字符（Null character）又称结束符，缩写 NUL，是一个数值为 0 的控制字符，\0 是转义字符，意思是告诉编译器，这不是字符 0，而是空字符。

```c
char site[7] = {'R', 'U', 'N', 'O', 'O', 'B', '\0'};
char site[] = "RUNOOB";
```

| 序号 | 函数 & 目的 |
| --- | --- |
| 1 | **strcpy(s1, s2);**<br>复制字符串 s2 到字符串 s1。 |
| 2 | **strcat(s1, s2);**<br>连接字符串 s2 到字符串 s1 的末尾。 |
| 3 | **strlen(s1);**<br>返回字符串 s1 的长度。 |
| 4 | **strcmp(s1, s2);**<br>如果 s1 和 s2 是相同的，则返回 0；如果 s1<s2 则返回小于 0；如果 s1>s2 则返回大于 0。 |
| 5 | **strchr(s1, ch);**<br>返回一个指针，指向字符串 s1 中字符 ch 的第一次出现的位置。 |
| 6 | **strstr(s1, s2);**<br>返回一个指针，指向字符串 s1 中字符串 s2 的第一次出现的位置。 |

# C结构体

## 定义结构体

```c
struct tag{
  member-list
  member-list
  member-list
  ...
} variable-list ;
```

*   **tag**是结构体标签
    
*   **member-list** 是标准的变量定义，比如int i或者float f
    
*   **variable-list** 结构体变量，定义在结构的末尾，最后一个分号之前，可以指定一个或者多个结构体变量
    

```c
#include <stdio.h>

struct Books
{
  char title[50];
  char author[50];
  char subject[100];
  int book_id;
} book;

book = {"C language","Chans","C",1}
int main()
{
  printf("title : %s\nauthor: %s\nsubject: %s\nbook_id: %d\n", book.title, book.author, book.subject, book.book_id);
}
```

## 访问结构成员

为了访问结构的成员，我们使用成员访问运算符（.）。成员访问运算符是结构变量名称和我们要访问的结构成员之间的一个句号。您可以使用 struct 关键字来定义结构类型的变量。

```c
#include <stdio.h>
#include <string.h>
 
struct Books
{
   char  title[50];
   char  author[50];
   char  subject[100];
   int   book_id;
};
 
int main( )
{
   struct Books Book1;        /* 声明 Book1，类型为 Books */
   struct Books Book2;        /* 声明 Book2，类型为 Books */
 
   /* Book1 详述 */
   strcpy( Book1.title, "C Programming");
   strcpy( Book1.author, "Nuha Ali"); 
   strcpy( Book1.subject, "C Programming Tutorial");
   Book1.book_id = 6495407;

   /* Book2 详述 */
   strcpy( Book2.title, "Telecom Billing");
   strcpy( Book2.author, "Zara Ali");
   strcpy( Book2.subject, "Telecom Billing Tutorial");
   Book2.book_id = 6495700;
 
   /* 输出 Book1 信息 */
   printf( "Book 1 title : %s\n", Book1.title);
   printf( "Book 1 author : %s\n", Book1.author);
   printf( "Book 1 subject : %s\n", Book1.subject);
   printf( "Book 1 book_id : %d\n", Book1.book_id);

   /* 输出 Book2 信息 */
   printf( "Book 2 title : %s\n", Book2.title);
   printf( "Book 2 author : %s\n", Book2.author);
   printf( "Book 2 subject : %s\n", Book2.subject);
   printf( "Book 2 book_id : %d\n", Book2.book_id);

   return 0;
}
```

## 结构体作为参数

您可以把结构作为函数参数，传参方式与其他类型的变量或指针类似。

```c
#include <stdio.h>
#include <string.h>
 
struct Books
{
   char  title[50];
   char  author[50];
   char  subject[100];
   int   book_id;
};

/* 函数声明 */
void printBook( struct Books book );
int main( )
{
   struct Books Book1;        /* 声明 Book1，类型为 Books */
   struct Books Book2;        /* 声明 Book2，类型为 Books */
 
   /* Book1 详述 */
   strcpy( Book1.title, "C Programming");
   strcpy( Book1.author, "Nuha Ali"); 
   strcpy( Book1.subject, "C Programming Tutorial");
   Book1.book_id = 6495407;

   /* Book2 详述 */
   strcpy( Book2.title, "Telecom Billing");
   strcpy( Book2.author, "Zara Ali");
   strcpy( Book2.subject, "Telecom Billing Tutorial");
   Book2.book_id = 6495700;
 
   /* 输出 Book1 信息 */
   printBook( Book1 );

   /* 输出 Book2 信息 */
   printBook( Book2 );

   return 0;
}
void printBook( struct Books book )
{
   printf( "Book title : %s\n", book.title);
   printf( "Book author : %s\n", book.author);
   printf( "Book subject : %s\n", book.subject);
   printf( "Book book_id : %d\n", book.book_id);
}
```

## 指向结构体的指针

```c
struct Books *struct_pointer;
struct_pointer = &Book1
struct_pointer->title;


#include <stdio.h>
#include <string.h>
 
struct Books
{
   char  title[50];
   char  author[50];
   char  subject[100];
   int   book_id;
};

/* 函数声明 */
void printBook( struct Books *book );
int main( )
{
   struct Books Book1;        /* 声明 Book1，类型为 Books */
   struct Books Book2;        /* 声明 Book2，类型为 Books */
 
   /* Book1 详述 */
   strcpy( Book1.title, "C Programming");
   strcpy( Book1.author, "Nuha Ali"); 
   strcpy( Book1.subject, "C Programming Tutorial");
   Book1.book_id = 6495407;

   /* Book2 详述 */
   strcpy( Book2.title, "Telecom Billing");
   strcpy( Book2.author, "Zara Ali");
   strcpy( Book2.subject, "Telecom Billing Tutorial");
   Book2.book_id = 6495700;
 
   /* 通过传 Book1 的地址来输出 Book1 信息 */
   printBook( &Book1 );

   /* 通过传 Book2 的地址来输出 Book2 信息 */
   printBook( &Book2 );

   return 0;
}
void printBook( struct Books *book )
{
   printf( "Book title : %s\n", book->title);
   printf( "Book author : %s\n", book->author);
   printf( "Book subject : %s\n", book->subject);
   printf( "Book book_id : %d\n", book->book_id);
}
```

# C共用体

**共用体**是一种特殊的数据类型，允许编程者在相同的内存位置存储不同的数据类型。可以定义一个带有多成员的共同体，但是任何时候只能有一个成员带有值。共用体提供了一种使用相同的内存位置的有效方式。

## 定义共用体

```c
union [union tag]
{
  member definition;
  member definition;
  ..
  member definition;
}[one or more union variables];
```

*   union tag 是可选的
    
*   member definition 是标准的变量定义，比如 int i; 或者 float f; 或者其他有效的变量定义。
    
*   共用体定义的末尾，最后一个分号之前，您可以指定一个或多个共用体变量，这是可选的
    

```c
union Data
{
   int i;
   float f;
   char  str[20];
} data;
```

现在，**Data** 类型的变量可以存储一个整数int、一个浮点数float，或者一个字符串char。这意味着一个变量（相同的内存位置）可以存储多个多种类型的数据。您可以根据需要在一个共用体内使用任何内置的或者用户自定义的数据类型。

共用体占用的内存应足够存储共用体中最大的成员。

```c
#include <stdio.h>
#include <string.h>
 
union Data
{
   int i;
   float f;
   char  str[20];
};
 
int main( )
{
   union Data data;        
 
   printf( "Memory size occupied by data : %d\n", sizeof(data));
 
   return 0;
}
Memory size occupied by data : 20
```

## 访问共用体成员

```c
#include <stdio.h>
#include <string.h>
 
union Data
{
   int i;
   float f;
   char  str[20];
};

int main( )
{
   union Data data;        
   data.i = 10;
   data.f = 220.5;
   strcpy( data.str, "C Programming");

   printf( "data.i : %d\n", data.i);
   printf( "data.f : %f\n", data.f);
   printf( "data.str : %s\n", data.str);
 
   return 0;
}

data.i : 1917853763
data.f : 4122360580327794860452759994368.000000
data.str : C Programming

```

我们可以看到共用体的 i 和 f 成员的值有损坏，因为最后赋给变量的值占用了内存位置，这也是 str 成员能够完好输出的原因。现在让我们再来看一个相同的实例，这次我们在同一时间只使用一个变量，这也演示了使用共用体的主要目的：

```c
#include <stdio.h>
#include <string.h>
 
union Data
{
   int i;
   float f;
   char  str[20];
};
 
int main( )
{
   union Data data;        
 
   data.i = 10;
   printf( "data.i : %d\n", data.i);
   
   data.f = 220.5;
   printf( "data.f : %f\n", data.f);
   
   strcpy( data.str, "C Programming");
   printf( "data.str : %s\n", data.str);
 
   return 0;
}


data.i : 10
data.f : 220.500000
data.str : C Programming

```

# C位域

C语言的位域名(bit-field)是一种特殊的结构体成员，允许我们按位对成员进行定义，指定其占用的位数。

```c
struct
{
  unsigned int widthValidated;
  unsigned int heightValidated;
} status;
```

这种结构需要8字节的内存空间，但在实际上，在每个变量中，我们只存储0或1，在这种情况下，C语言提供了一种更好的利用内存空间的方式。如果您在这个结构内使用这样的变量，可以定义变量宽度来告诉编译器

```c
struct
{
  unsigned int widthValidated : 1;
  unsigned int heightValidated: 1;
}status;
```

现在，上面的结构中，status 变量将占用 4 个字节的内存空间，但是只有 2 位被用来存储值。如果您用了 32 个变量，每一个变量宽度为 1 位，那么 status 结构将使用 4 个字节，但只要您再多用一个变量，如果使用了 33 个变量，那么它将分配内存的下一段来存储第 33 个变量，这个时候就开始使用 8 个字节。

```c
#include <stdio.h>
#include <string.h>
 
/* 定义简单的结构 */
struct
{
  unsigned int widthValidated;
  unsigned int heightValidated;
} status1;
 
/* 定义位域结构 */
struct
{
  unsigned int widthValidated : 1;
  unsigned int heightValidated : 1;
} status2;
 
int main( )
{
   printf( "Memory size occupied by status1 : %d\n", sizeof(status1));
   printf( "Memory size occupied by status2 : %d\n", sizeof(status2));
 
   return 0;
}

Memory size occupied by status1 : 8
Memory size occupied by status2 : 4
```

位域的特点和使用方法如下:

*   定义位域时，可以指定成员的位域宽度，即成员所占用的位数
    
*   位域的宽度不能超过其数据类型的大小，因为位域必须适应所使用的整数类型
    
*   位域的数据类型可以是 int、unsigned int、signed int 等整数类型，也可以是枚举类型
    
*   位域可以单独使用，也可以与其他成员一起组成结构体
    
*   位域的访问是通过点运算符（.）来实现的，与普通的结构体成员访问方式相同
    

## 位域声明

有些信息在存储时，并不需要占用一个完整的字节，而只需占几个或一个二进制位。例如在存放一个开关量时，只有 0 和 1 两种状态，用 1 位二进位即可。为了节省存储空间，并使处理简便，C 语言又提供了一种数据结构，称为"位域"或"位段"

**位域的定义和位域变量的说明**

```c
struct 位域结构名 
{
  位域列表
};

type [member_name] : width;
```

| 元素 | 描述 |
| --- | --- |
| type | 只能为 int(整型)，unsigned int(无符号整型)，signed int(有符号整型) 三种类型，决定了如何解释位域的值。 |
| member\_name | 位域的名称。 |
| width | 位域中位的数量。宽度必须小于或等于指定类型的位宽度。 |

**实例1:**

```c
#include <stdio.h>

struct packed_struct {
   unsigned int f1 : 1;   // 1位的位域
   unsigned int f2 : 1;   // 1位的位域
   unsigned int f3 : 1;   // 1位的位域
   unsigned int f4 : 1;   // 1位的位域
   unsigned int type : 4; // 4位的位域
   unsigned int my_int : 9; // 9位的位域
};

int main() {
   struct packed_struct pack;

   pack.f1 = 1;
   pack.f2 = 0;
   pack.f3 = 1;
   pack.f4 = 0;
   pack.type = 7;
   pack.my_int = 255;

   printf("f1: %u\n", pack.f1);
   printf("f2: %u\n", pack.f2);
   printf("f3: %u\n", pack.f3);
   printf("f4: %u\n", pack.f4);
   printf("type: %u\n", pack.type);
   printf("my_int: %u\n", pack.my_int);

   return 0;
}

f1: 1
f2: 0
f3: 1
f4: 0
type: 7
my_int: 255
```

**实例2:**

```c
#include <stdio.h>
#include <string.h>
 
struct
{
  unsigned int age : 3;
} Age;
 
int main( )
{
   Age.age = 4;
   printf( "Sizeof( Age ) : %d\n", sizeof(Age) );
   printf( "Age.age : %d\n", Age.age );
 
   Age.age = 7;
   printf( "Age.age : %d\n", Age.age );
 
   Age.age = 8; // 二进制表示为 1000 有四位，超出
   printf( "Age.age : %d\n", Age.age );
 
   return 0;
}

Sizeof( Age ) : 4
Age.age : 4
Age.age : 7
Age.age : 0
```

**空域：**

```c
struct bs{
    unsigned a:4;
    unsigned  :4;    /* 空域 */
    unsigned b:4;    /* 从下一单元开始存放 */
    unsigned c:4
}
```

**位域的使用：**

```c
#include <stdio.h>
 
int main(){
    struct bs{
        unsigned a:1;
        unsigned b:3;
        unsigned c:4;
    } bit,*pbit;
    bit.a=1;    /* 给位域赋值（应注意赋值不能超过该位域的允许范围） */
    bit.b=7;    /* 给位域赋值（应注意赋值不能超过该位域的允许范围） */
    bit.c=15;    /* 给位域赋值（应注意赋值不能超过该位域的允许范围） */
    printf("%d,%d,%d\n",bit.a,bit.b,bit.c);    /* 以整型量格式输出三个域的内容 */
    pbit=&bit;    /* 把位域变量 bit 的地址送给指针变量 pbit */
    pbit->a=0;    /* 用指针方式给位域 a 重新赋值，赋为 0 */
    pbit->b&=3;    /* 使用了复合的位运算符 "&="，相当于：pbit->b=pbit->b&3，位域 b 中原有值为 7，与 3 作按位与运算的结果为 3（111&011=011，十进制值为 3） */
    pbit->c|=1;    /* 使用了复合位运算符"|="，相当于：pbit->c=pbit->c|1，其结果为 15 */
    printf("%d,%d,%d\n",pbit->a,pbit->b,pbit->c);    /* 用指针方式输出了这三个域的值 */
}
```

# C typedef

可以使用typedef给类型取一个新的名字。

```c
typedef unsigned char BYTE;
// 在这儿之后，标识符BYTE可以作为类型unsigned char的缩写
BYTE b1,b2;

#include <stdio.h>
#include <string.h>
 
typedef struct Books
{
   char  title[50];
   char  author[50];
   char  subject[100];
   int   book_id;
} Book;
 
int main( )
{
   Book book;
 
   strcpy( book.title, "C 教程");
   strcpy( book.author, "Runoob"); 
   strcpy( book.subject, "编程语言");
   book.book_id = 12345;
 
   printf( "书标题 : %s\n", book.title);
   printf( "书作者 : %s\n", book.author);
   printf( "书类目 : %s\n", book.subject);
   printf( "书 ID : %d\n", book.book_id);
 
   return 0;
}
```

# C 输入&输出

## 标准文件

C 语言把所有的设备都当作文件。所以设备（比如显示器）被处理的方式与文件相同。以下三个文件会在程序执行时自动打开，以便访问键盘和屏幕。

| 标准文件 | 文件指针 | 设备 |
| --- | --- | --- |
| 标准输入 | stdin | 键盘 |
| 标准输出 | stdout | 屏幕 |
| 标准错误 | stderr | 您的屏幕 |

*   printf()
    
*   scanf()
    

## 字符输入输出

*   getchar()
    
    *   从屏幕读取下一个可用的字符，并把它返回为一个整数。
        
*   putchar()
    
    *   把字符输出到屏幕上，并返回相同的字符
        

```c
#include <stdio.h>
 
int main( )
{
   int c;
 
   printf( "Enter a value :");
   c = getchar( );
 
   printf( "\nYou entered: ");
   putchar( c );
   printf( "\n");
   return 0;
}

$./a.out
Enter a value :runoob
  
You entered: r
```

# 字符串输入输出

*   gets()
    
    *   gets() 函数用于从标准输入设备读取一行字符串，但不推荐使用，因为它容易导致缓冲区溢出
        
*   fgets()`char *fgets(char *str, int n, FILE *stream);`
    
    *   str：指向字符数组的指针，用于存储读取的字符串;
        
    *   n：要读取的最大字符数（包括空字符`\0`）;
        
    *   stream：文件流，通常使用`stdin`表示标准输入
        

*   puts()函数    `int puts(const char *str);`
    
    *   puts() 函数用于将一个字符串输出到标准输出设备，并自动在末尾添加换行符
        
    *   str 要输出的字串
        
*   fputs()函数    `int fputs(const char *str, FILE *stram)；`    
    
    *   str: 要输出的字符串
        
    *   stream：指定输出的流
        

| 特性 | `puts()` | `fputs()` |
| --- | --- | --- |
| **换行符** | 自动在字符串末尾添加换行符 | 不添加换行符 |
| **输出流** | 只能输出到标准输出（屏幕） | 可以输出到任意流（如文件、屏幕） |
| **参数** | 只需要一个字符串参数 | 需要字符串参数和流参数 |
| **返回值** | 成功时返回非负值，失败时返回 `EOF` | 成功时返回非负值，失败时返回 `EOF` |

# C 文件读写

## 文件输入与输出

*   fopen()函数 `FILE *fopen(const char *filename, const char *mode)`
    
    *   filename：要打开的文件名
        
    *   mode：打开的模式，r - 只读，w - 只写， a - 追加
        
*   fclose()函数 `int fclose(FILE *stream);`
    
    *   stream：指向FILE对象的指针
        

在这里，**filename** 是字符串，用来命名文件，访问模式 **mode** 的值可以是下列值中的一个：

| 模式 | 描述 |
| --- | --- |
| r | 打开一个已有的文本文件，允许读取文件。 |
| w | 打开一个文本文件，允许写入文件。如果文件不存在，则会创建一个新文件。在这里，您的程序会从文件的开头写入内容。如果文件存在，文件内容会被清空（即文件长度被截断为0）。 |
| a | 打开一个文本文件，以追加模式写入文件。如果文件不存在，则会创建一个新文件。在这里，您的程序会在已有的文件内容中追加内容。 |
| r+ | 打开一个文本文件，允许读写文件。 |
| w+ | 打开一个文本文件，允许读写文件。如果文件已存在，则文件会被截断为零长度，如果文件不存在，则会创建一个新文件。 |
| a+ | 打开一个文本文件，允许读写文件。如果文件不存在，则会创建一个新文件。读取会从文件的开头开始，写入则只能是追加模式。 |

如果说二进制文件，则需要使用下面的访问模式来取代上面的访问模式

## 写入文件

`int fputc( int c, FILE *fp );`

函数 fputc() 把参数 c 的字符值写入到 fp 所指向的输出流中。如果写入成功，它会返回写入的字符，如果发生错误，则会返回 EOF。您可以使用下面的函数来把一个以 null 结尾的字符串写入到流中：

`int fputs( const char *s, FILE *fp );`

函数 fputs() 把字符串 s 写入到 fp 所指向的输出流中。如果写入成功，它会返回一个非负值，如果发生错误，则会返回 EOF。您也可以使用 int fprintf(FILE \*fp,const char \*format, ...) 函数把一个字符串写入到文件中。尝试下面的实例：

## 读取文件

`int fgetc( FILE * fp );`

fgetc() 函数从 fp 所指向的输入文件中**读取一个字符**

`char *fgets( char *buf, int n, FILE *fp );`

函数 fgets() 从 fp 所指向的输入流中读取 n - 1 个字符。它会把读取的字符串复制到缓冲区 buf，并在最后追加一个 null 字符来终止字符串

## 二进制I/O函数

```c
size_t fread(void *ptr, size_t size_of_elements, 
             size_t number_of_elements, FILE *a_file);
              
size_t fwrite(const void *ptr, size_t size_of_elements, 
             size_t number_of_elements, FILE *a_file);
```

# C预处理器

C预处理器是编译过程中的独立阶段，在实际编译前对源代码进行文本处理。主要功能包括：

*   宏展开
    
*   文件包含
    
*   条件编译
    
*   特殊指令处理
    

| 指令 | 描述 | 使用示例 |
| --- | --- | --- |
| `#define` | 定义宏（符号常量或函数式宏） | `#define PI 3.14159`<br>`#define MAX(a,b) ((a) > (b) ? (a) : (b))` |
| `#include` | 包含头文件 | `#include <stdio.h>`<br>`#include "myheader.h"` |
| `#undef` | 取消已定义的宏 | `#undef PI` |
| `#ifdef` | 如果宏已定义则编译后续代码 | `#ifdef DEBUG`<br>`printf("Debug info\n");`<br>`#endif` |
| `#ifndef` | 如果宏未定义则编译后续代码（常用于头文件保护） | `#ifndef HEADER_H`<br>`#define HEADER_H`<br>`/* 内容 */`<br>`#endif` |
| `#if` | 条件编译（可配合defined操作符使用） | `#if VERSION > 2`<br>`/* 新版代码 */`<br>`#endif` |
| `#else` | `#if`/`#ifdef`/`#ifndef`的替代分支 | `#ifdef WIN32`<br>`/* Windows代码 */`<br>`#else`<br>`/* 其他系统 */`<br>`#endif` |
| `#elif` | 类似于else if | `#if defined(UNIX)`<br>`/* Unix代码 */`<br>`#elif defined(WIN32)`<br>`/* Windows代码 */`<br>`#endif` |
| `#endif` | 结束条件编译块 | 如上例所示 |
| `#error` | 产生编译错误并输出消息 | `#if !defined(C99)`<br>`#error "需要C99标准"`<br>`#endif` |
| `#pragma` | 编译器特定指令（非标准，各编译器不同） | `#pragma once`<br>`#pragma pack(1)` |

## 预处理器实例

`#define MAX_ARRAY_LENGTH 20`

这个指令告诉 CPP 把所有的 MAX\_ARRAY\_LENGTH 定义为 20。使用 #define 定义常量来增强可读性。

`#include <stdio.h>` 

`#include "myheader.h"` 

这些指令告诉C预处理器从系统库中获取stdio.h，并添加文件到当前的源文件中。下一行告诉C预处理器从本地目录中获取myheader.h，并添加到当前的源文件中

`#undef FILE_SIZE`

`#define FILE_SIZE 42`

这个指令告诉 CPP 取消已定义的 FILE\_SIZE，并定义它为 42

`#ifndef MESSAGE`

   `#define MESSAGE "You wish!"`

`#endif` 

这个指令告诉 CPP 只有当 MESSAGE 未定义时，才定义 MESSAGE

`#ifdef DEBUG`

   `/* debug情况 */`

`#endif` 

## 预定义宏

在编程中您可以使用这些宏，但是不能直接修改这些预定义的宏

| 宏 | 描述 |
| --- | --- |
| \_\_DATE\_\_ | 当前日期，一个以 "MMM DD YYYY" 格式表示的字符常量。 |
| \_\_TIME\_\_ | 当前时间，一个以 "HH:MM:SS" 格式表示的字符常量。 |
| \_\_FILE\_\_ | 这会包含当前文件名，一个字符串常量。 |
| \_\_LINE\_\_ | 这会包含当前行号，一个十进制常量。 |
| \_\_STDC\_\_ | 当编译器以 ANSI 标准编译时，则定义为 1 |

```c
#include <stdio.h>
 
/* 
 * 预定义宏演示程序
 * 展示ANSI C标准中常用的预定义宏及其用途
 */
int main() {
    // 打印当前源文件名（字符串常量）
    printf("当前文件: %s\n", __FILE__);
    
    // 打印编译日期（"MMM DD YYYY"格式）
    printf("编译日期: %s\n", __DATE__);
    
    // 打印编译时间（"HH:MM:SS"格式）
    printf("编译时间: %s\n", __TIME__);
    
    // 打印当前行号（十进制整数）
    printf("当前行号: %d\n", __LINE__);
    
    // 检查是否符合ANSI/ISO标准（1表示符合）
    printf("ANSI标准: %d\n", __STDC__);
    
    // 实用示例：调试信息输出
    printf("\n[调试信息] %s (第%d行) 编译于 %s %s\n", 
           __FILE__, __LINE__, __DATE__, __TIME__);
    
    return 0;
}
当前文件: predef_macros.c
编译日期: Jul 5 2023
编译时间: 14:30:45
当前行号: 13
ANSI标准: 1

[调试信息] predef_macros.c (第16行) 编译于 Jul 5 2023 14:30:45

```

## 预处理器运算符

*   **宏延续运算符（\）**
    
*   **标记粘贴运算符（##）**
    
*   **defined()运算符**
    

# C头文件

头文件是拓展名为.h的文件，包含了C函数声明和宏定义，被多个源文件中引用共享。有两种类型的头文件：程序员编写的头文件和编译器自带的头文件.

在程序中要使用头文件，需要使用C预处理指令#include来引用它。引用头文件相当于复制头文件的内容，但是我们不会直接在源文件中复制头文件的内容，因为这么做很容易出错。

建议把所有的常量、宏、系统全局变量和函数原型写在头文件

## 引用头文件的语法

```c

#include <file>
// 这种形式用于引用系统头文件
#include "file"
// 这种形式用于引用用户头文件
```

## 引用头文件的操作

```c
char *test (void);
```
```c
int x;
#include "header.h"

int main (void)
{
   puts (test ());
}
```

编译器会看到如下内容:

```c
int x;
char *test (void);

int main (void)
{
   puts (test ());
}
```

## 只引用一次头文件

如果一个头文件被引用两次，编译器会处理两次头文件的内容，这将产生错误。为了防止这种情况，标准的做法是把文件的整个内容放在条件编译语句中

```c
#ifndef HEADER_FILE
#define HEADER_FILE

the entire header file file

#endif
/*
这种结构就是通常所说的包装器 #ifndef。当再次引用头文件时，条件为假，因为 HEADER_FILE 已定义。此时，预处理器会跳过文件的整个内容，编译器会忽略它。
*/
```

## 标准库头文件

以下是一些常见的 C 标准库头文件及其功能简介：

| 头文件 | 功能简介 |
| --- | --- |
| **<stdio.h>** | 标准输入输出库，包含 `printf`、`scanf` 等函数 |
| **<stdlib.h>** | 标准库函数，包含内存分配、程序控制等函数 |
| **<string.h>** | 字符串操作函数，如 `strlen`、`strcpy` 等 |
| **<math.h>** | 数学函数库，如 `sin`、`cos`、`sqrt` 等 |
| **<time.h>** | 时间和日期函数，如 `time`、`strftime` 等 |
| **<ctype.h>** | 字符处理函数，如 `isalpha`、`isdigit` 等 |
| **<limits.h>** | 定义各种类型的限制值，如 `INT_MAX` 等 |
| **<float.h>** | 定义浮点类型的限制值，如 `FLT_MAX` 等 |
| **<assert.h>** | 断言宏 `assert`，用于调试检查 |
| **<errno.h>** | 定义错误码变量 `errno` 及相关宏 |
| **<stddef.h>** | 定义通用类型和宏，如 `size_t`、`NULL` 等 |
| **<signal.h>** | 处理信号的函数和宏，如 `signal` 等 |
| **<setjmp.h>** | 提供非本地跳转功能的宏和函数 |
| **<locale.h>** | 地域化相关的函数和宏，如 `setlocale` 等 |

# C错误处理

C 语言提供了 perror() 和 strerror() 函数来显示与 errno 相关的文本消息

*   perror() 函数显示您传给它的字符串，后跟一个冒号、一个空格和当前 errno 值的文本表示形式
    
*   strerror() 函数，返回一个指针，指针指向当前 errno 值的文本表示形式
    

```c
#include <stdio.h>
#include <errno.h>
#include <string.h>
 
extern int errno ;
 
int main ()
{
   FILE * pf;
   int errnum;
   pf = fopen ("unexist.txt", "rb");
   if (pf == NULL)
   {
      errnum = errno;
      fprintf(stderr, "错误号: %d\n", errno);
      perror("通过 perror 输出错误");
      fprintf(stderr, "打开文件错误: %s\n", strerror( errnum ));
   }
   else
   {
      fclose (pf);
   }
   return 0;
}
```

## 程序退出状态

通常情况下，程序成功执行完一个操作正常退出的时候会带有值 **EXIT\_SUCCESS**。在这里，EXIT\_SUCCESS 是宏，它被定义为 0。

如果程序中存在一种错误情况，当您退出程序时，会带有状态值 EXIT\_FAILURE，被定义为 -1。

```c
#include <stdio.h>
#include <stdlib.h>
 
int main()
{
   int dividend = 20;
   int divisor = 5;
   int quotient;
 
   if( divisor == 0){
      fprintf(stderr, "除数为 0 退出运行...\n");
      exit(EXIT_FAILURE);
   }
   quotient = dividend / divisor;
   fprintf(stderr, "quotient 变量的值为: %d\n", quotient );
 
   exit(EXIT_SUCCESS);
}
```

# C可变参数

有时，您可能会碰到这样的情况，您希望函数带有可变数量的参数，而不是预定义数量的参数。

C 语言为这种情况提供了一个解决方案，它允许您定义一个函数，能根据具体的需求接受可变数量的参数

`int func_name(int arg1, ...);`

其中，省略号...表示可变参数列表

```c
int func(int, ... )  {
   .
   .
   .
}
 
int main() {
   func(2, 2, 3);
   func(3, 2, 3, 4);
}
```

为了使用这个功能，您需要使用 **stdarg.h** 头文件，该文件提供了实现可变参数功能的函数和宏

# C内存管理

| 序号 | 函数和描述 |
| --- | --- |
| 1 | **void \*calloc(int num, int size);**<br>在内存中动态地分配 num 个长度为 size 的连续空间，并将每一个字节都初始化为 0。所以它的结果是分配了 num\*size 个字节长度的内存空间，并且每个字节的值都是 0。 |
| 2 | **void free(void \*address);**<br>该函数释放 address 所指向的内存块,释放的是动态分配的内存空间。 |
| 3 | **void \*malloc(int num);**<br>在堆区分配一块指定大小的内存空间，用来存放数据。这块内存空间在函数执行完成后不会被初始化，它们的值是未知的。 |
| 4 | **void \*realloc(void \*address, int newsize);**<br>该函数重新分配内存，把内存扩展到 **newsize**。 |

_**注意：**__void \* 类型表示未确定类型的指针。C、C++ 规定 void \* 类型可以通过类型转换强制转换为任何其它类型的指针。_

## 动态分配内存

编程时，如果您预先知道数组的大小，那么定义数组时就比较容易。例如，一个存储人名的数组，它最多容纳 100 个字符，所以您可以定义数组，如下所示：

`char name[100];`

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
 
int main()
{
   char name[100];
   char *description;
 
   strcpy(name, "Zara Ali");
 
   /* 动态分配内存 */
   description = (char *)malloc( 200 * sizeof(char) );
   if( description == NULL )
   {
      fprintf(stderr, "Error - unable to allocate required memory\n");
   }
   else
   {
      strcpy( description, "Zara ali a DPS student in class 10th");
   }
   printf("Name = %s\n", name );
   printf("Description: %s\n", description );
}

Name = Zara Ali
Description: Zara ali a DPS student in class 10th
```

calloc(200, sizeof(char));

## 重新调整内存的大小和释放内存

当程序退出时，操作系统会自动释放所有分配给程序的内存，但是，建议您在不需要内存时，都应该调用函数 **free()** 来释放内存。

或者，您可以通过调用函数 **realloc()** 来增加或减少已分配的内存块的大小。让我们使用 **realloc()** 和 **free()** 函数，再次查看上面的实例：

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
 
int main()
{
   char name[100];
   char *description;
 
   strcpy(name, "Zara Ali");
 
   /* 动态分配内存 */
   description = (char *)malloc( 30 * sizeof(char) );
   if( description == NULL )
   {
      fprintf(stderr, "Error - unable to allocate required memory\n");
   }
   else
   {
      strcpy( description, "Zara ali a DPS student.");
   }
   /* 假设您想要存储更大的描述信息 */
   description = (char *) realloc( description, 100 * sizeof(char) );
   if( description == NULL )
   {
      fprintf(stderr, "Error - unable to allocate required memory\n");
   }
   else
   {
      strcat( description, "She is in class 10th");
   }
   
   printf("Name = %s\n", name );
   printf("Description: %s\n", description );
 
   /* 使用 free() 函数释放内存 */
   free(description);
}

Name = Zara Ali
Description: Zara ali a DPS student.She is in class 10th
```

## C语言中常用的内存管理函数和运算符

*   **malloc()函数：**用于动态内存分配。接受一个参数，即需要分配的内存大小，并返回一个指向分配内存的指针
    
*   **free()函数：**用于释放先前分配的内存
    
*   **calloc() 函数：**用于动态分配内存，并将其初始化为零。它接受两个参数，即需要分配的内存块数和每个内存块的大小（以字节为单位），并返回一个指向分配内存的指针。
    
*   **realloc() 函数：**用于重新分配内存。它接受两个参数，即一个先前分配的指针和一个新的内存大小，然后尝试重新调整先前分配的内存块的大小。如果调整成功，它将返回一个指向重新分配内存的指针，否则返回一个空指针
    
*   **sizeof 运算符：**用于获取数据类型或变量的大小（以字节为单位）。
    
*   **指针运算符**：用于获取指针所指向的内存地址或变量的值
    
*   **& 运算符：**用于获取变量的内存地址
    
*   **\* 运算符：**用于获取指针所指向的变量的值。
    
*   **\-> 运算符：**用于指针访问结构体成员，语法为 pointer->member，等价于 (\*pointer).member。
    
*   **memcpy() 函数：**用于从源内存区域复制数据到目标内存区域。它接受三个参数，即目标内存区域的指针、源内存区域的指针和要复制的数据大小（以字节为单位）。
    
*   **memmove() 函数：**类似于 memcpy() 函数，但它可以处理重叠的内存区域。它接受三个参数，即目标内存区域的指针、源内存区域的指针和要复制的数据大小（以字节为单位）
    

# C未定义行为（Undefined behavior）

*   **数组越界**
    
*   **解引用空指针**
    
*   **未初始化局部变量**
    
*   **浮点数除以零**
    
*   **整数除以零**
    
*   **符号溢出**
    
*   **位移操作数太大**
    
*   **错误的类型转换**
    
*   **内存越界**
    
*   **未定义的浮点数行为**
    

# C命令行参数

执行程序时，可以从命令行传值给 C 程序。这些值被称为命令行参数，它们对程序很重要，特别是当您想从外部控制程序，而不是在代码内对这些值进行硬编码时，就显得尤为重要了。

在 C 语言中，命令行参数是一种从命令行获取输入的方法，可以用于运行程序时传递信息给程序。命令行参数通过 main 函数的参数传递给程序。main 函数的原型可以是如下两种形式之一：

```c
int main(int argc, char *argv[]);
int main(int argc, char **argv);
```

*   argc(argument count): 表示命令行参数的数量，包括程序本身。因此，argc至少为1
    
*   argv(argument vecotr): 是一个指向字符串数组的指针，其中每个字符串是一个命令行参数。数组的第一个元素（即argv\[0\]通常是程序的名称）。接下来的元素是传递给程序的命令行参数。
    

```c
#include <stdio.h>

int main( int argc, char *argv[] )  
{
   if( argc == 2 )
   {
      printf("The argument supplied is %s\n", argv[1]);
   }
   else if( argc > 2 )
   {
      printf("Too many arguments supplied.\n");
   }
   else
   {
      printf("One argument expected.\n");
   }
}

$./a.out testing
The argument supplied is testing

$./a.out testing1 testing2
Too many arguments supplied.

$./a.out
One argument expected
```

**argv\[0\]** 存储程序的名称**，argv\[1\]** 是一个指向第一个命令行参数的指针，**\*argv\[n\]** 是最后一个参数。如果没有提供任何参数，**argc** 将为 **1**，否则，如果传递了一个参数，**argc** 将被设置为 **2**。

多个命令行参数之间用空格分隔，但是如果参数本身带有空格，那么传递参数的时候应把参数放置在双引号 "" 或单引号 '' 内部。让我们重新编写上面的实例，有一个空格，那么你可以通过这样的观点，把它们放在双引号或单引号""""

```c
#include <stdio.h>

int main( int argc, char *argv[] )  
{
   printf("Program name %s\n", argv[0]);
 
   if( argc == 2 )
   {
      printf("The argument supplied is %s\n", argv[1]);
   }
   else if( argc > 2 )
   {
      printf("Too many arguments supplied.\n");
   }
   else
   {
      printf("One argument expected.\n");
   }
}

$./a.out "testing1 testing2"

Progranm name ./a.out
The argument supplied is testing1 testing2
```

## 使用场景

*   配置文件路径
    
*   模式选择（例如调试模式）
    
*   输入文件和输出文件名
    
*   运行时选项和标志（如-v表示详细模式）
    

# C安全函数

在 C 语言中，为了提高代码的安全性，尤其是防止缓冲区溢出等常见的安全问题，C11 标准引入了一些 "安全函数"，也称为 "Annex K" 标准库函数。这些安全函数主要是标准字符串和内存操作函数的增强版本，通过增加参数（如缓冲区大小）来提供更好的错误检测和处理。

安全函数的特点：

*   **缓冲区大小检查：**所有的安全函数都要求传入目标缓冲区的大小参数，以防止缓冲区溢出。
    
*   **返回检查值：**大多数函数返回 **errno\_t** 类型的错误代码，可以检查函数是否成功执行。
    
*   **更好的错误处理：**当缓冲区大小不够或出现其他问题时，这些函数会返回错误码，并尝试清空或初始化输出缓冲区。
    

## 字符串安全函数

```c
// strcpy_s：安全版本的 strcpy，复制字符串并检查目标缓冲区大小。
errno_t strcpy_s(char *dest, rsize_t destsz, const char *src);

// strcat_s：安全版本的 strcat，将源字符串追加到目标字符串末尾，并检查缓冲区大小。
errno_t strcat_s(char *dest, rsize_t destsz, const char *src);

// strncpy_s：安全版本的 strncpy，复制最多 n 个字符，并检查缓冲区大小。
errno_t strncpy_s(char *dest, rsize_t destsz, const char *src, rsize_t count);

// strncat_s：安全版本的 strncat，追加最多 n 个字符到目标字符串末尾，并检查缓冲区大小。
errno_t strncat_s(char *dest, rsize_t destsz, const char *src, rsize_t count);

// strtok_s：安全版本的 strtok，引入上下文参数，解决线程安全问题。
char *strtok_s(char *str, const char *delim, char **context);
```

## 格式化安全输出参数

```c
// sprintf_s：安全版本的 sprintf，格式化输出到字符串时检查缓冲区大小。
int sprintf_s(char *buffer, rsize_t sizeOfBuffer, const char *format, ...);

// snprintf_s：安全版本的 snprintf，格式化输出时限制字符数并检查缓冲区大小。
int snprintf_s(char *buffer, rsize_t sizeOfBuffer, const char *format, ...);

// vsprintf_s：安全版本的 vsprintf，接收 va_list 参数列表，并检查缓冲区大小。
int vsprintf_s(char *buffer, rsize_t sizeOfBuffer, const char *format, va_list argptr);
```

## 内存操作安全函数

```c
// memcpy_s：安全版本的 memcpy，复制内存区域时检查目标缓冲区大小
errno_t memcpy_s(void *dest, rsize_t destsz, const void *src, rsize_t count);

// memmove_s：安全版本的 memmove，复制内存区域，允许重叠，并检查目标缓冲区大小
errno_t memmove_s(void *dest, rsize_t destsz, const void *src, rsize_t count);

// memset_s：安全版本的 memset，将指定的字符填充到内存块中，并检查缓冲区大小
errno_t memset_s(void *dest, rsize_t destsz, int ch, rsize_t count);
```

## 其他常用安全函数

```c
// _itoa_s 和 _ultoa_s：安全版本的整数转换函数，将整数转换为字符串时检查目标缓冲区大小。

errno_t _itoa_s(int value, char *buffer, size_t sizeOfBuffer, int radix);
errno_t _ultoa_s(unsigned long value, char *buffer, size_t sizeOfBuffer, int radix);

// _strlwr_s 和 _strupr_s：将字符串转换为小写或大写的安全版本。
errno_t _strlwr_s(char *str, size_t numberOfElements);
errno_t _strupr_s(char *str, size_t numberOfElements);
```