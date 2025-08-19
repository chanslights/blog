---
layout: post
title: "Cmake: Cross-Platform Build Tool"
date: 2025-8-18 14:30:00 +0800
categories: [mydumper]
tags: [cmake]
---

# Cmake基本知识

# CMake定义

Cmake是一个开源的跨平台自动化构建系统，用来管理软件建置程序，而不需要依赖某一种特定的编译器，可以支持多层目录、多个应用程序与多个函数库。

Cmake通过简单的配置文件CMakeLists.txt，自动生成不同平台的构建文件（如Makefile、Ninja构建文件、Visual Studio工程文件），简化项目的编译和构建过程。

CMake本身不是构建工具，而是生成构建系统的工具，它生成的构建系统可以使用不同的编译和工具链。

# CMake优势

● 跨平台支持

● 简化配置：只需要写一个简单的CMakeLists.txt文件，用户可以定义项目结构、依赖项、编译选项等，无需手动编写复杂的构建脚本

● 自动化构建：

● 灵活：

# CMake基本工作流

1.  编写CMakeLists.txt文件：定义项目的构建规则和依赖关系

2.  生成构建文件：使用CMake生成适合当前平台的构建系统文件

3.  执行构建：使用生成的构建系统文件来编译项目

# CMake基础

## CMakeLists.txt文件

定义项目的构建规则、依赖关系、编译选项

## 文件结构与基本语法

| 作用 | 命令 |
| --- | --- |
| 指定CMake的最低版本要求 | cmake_minimum_required(VERSION <version>) |
| 定义项目和指定的编译语言 | project(<project_name> ]<language>...\] |
| 指定要生成的**可执行文件和其源文件** | add_executable(<target> <source\_files>...) |
| 创建一个库(静态库和动态库)及其源文件 | add_library(<target> <sources\_files>) |
| 链接目标文件与其他库 | target_link_libraries(<target> <libraries>...) |
| 添加头文件搜索路径 | include_directories(<dirs>...) |
| 设置变量的值 | set(<variable> <value>...) |
| 设置目标属性 | target\_include_directories(TARGET target\_name ]BEFORE | AFTER\]]SYSTEM\] ]PUBLIC | PRIVATE | INTERFACE\]]items1...\]) |
| 安装规则 | install(TARGETS target1 ]target2 ...\]]RUNTIME DESTINATION dir\]]LIBRARY DESTINATION dir\]]ARCHIVE DESTINATION dir\]]INCLUDES DESTINATION ]dir ...\]\]]PRIVATE\_HEADER DESTINATION dir\]]PUBLIC\_HEADER DESTINATION dir\]) |
| 条件语句 | if(expression)#Commandselse if(expression)#Commandselse()endif() |
| 自定义命令 (add_custom_command 命令) | add_custom_command( TARGET target PRE\_BUILD | PRE\_LINK | POST\_BUILD COMMAND command1 ]ARGS\] ]WORKING\_DIRECTORY dir\]]COMMAND command2 ]ARGS\]\]]DEPENDS ]depend1 ]depend2 ...\]\]\]]COMMENT comment\]]VERBATIM\]) |

举个例子：

```cmake
cmake_minimum_required(VERSION 3.10)
project(MyProject CXX)
add_executable(MyExecutable main.cpp)
set(CMAKE_CXX_STANDARD 11)
```
## 变量和缓存

变量分为普通变量和缓存变量

1.  **变量定义与使用**

定义变量 set(MY\_VAR "Hello\_world")

使用变量 message(STATUS "Variable MY\_VAR is ${MY\_VAR}")

2.  **缓存变量**

缓存变量存储在CMake的缓存文件中，用户可以在CMake配置时刻修改这些值。缓存变量通常用于用户输入的设置，例如编译选项和路径。

定义缓存变量： set(MY\_CACHE\_AVR "DefaultValue" CACHE STRING "A cache variable")

使用缓存变量：message(STATUS "Cache variable MY\_CACHE\_VAR is ${MY\_CACHE\_VAR})

## 查找库和包

find_package()指令自动检测和配置外部库和包，常用于查找系统安装的库和第三方库

1.  find_package()指令

find_package(Boost REQUIRED)

find\_pakcage(Boost 1.70 REQUIRED)

find_package(OpenCV REQUIRED PATHS /path/to/opencv)

target_link_libraries(MyExecutable Boost::Boost)

设置包含目录和链接目录：

include_directories(${Boost\_INCLUDE\_DIRS})

link\_directories(${Boost\_LIBRARY\_DIRS})

2.  使用第三方库

cmake_minimum_required(VERSION 3.10)

project(MyProject CXX)

# 查找 Boost 库

find_package(Boost REQUIRED)

# 添加源文件

add_executable(MyExecutable main.cpp)

# 链接 Boost 库

target_link_libraries(MyExecutable Boost::Boost)

**include_directories() 和 target\_include_directories()的区别**

在 CMake 中，include_directories() 和 target\_include_directories() 都用于指定头文件的搜索路径，但它们的作用范围和使用方式有显著区别。

**相同点：**

● 两者都用于添加头文件的搜索路径，编译器会在这些路径中查找 #include 指令中指定的头文件

● 两者都支持绝对路径和相对路径，相对路径是相对于当前 CMakeLists.txt 文件所在的目录。

● 两者都可以用于指定公共头文件路径（PUBLIC）、私有头文件路径（PRIVATE）或接口头文件路径（INTERFACE）。

**区别：**

| **特性** | **include_directories()** | **target\_include_directories()** |
| --- | --- | --- |
| **作用范围** | 全局作用域，影响所有目标（target）。 | 仅作用于指定的目标（target）。 |
| **推荐使用场景** | 适用于简单的项目或旧版 CMake 项目。 | 适用于现代 CMake 项目，推荐优先使用。 |
| **目标关联性** | 不直接关联到特定目标，可能影响所有目标。 | 显式关联到特定目标，避免污染其他目标。 |
| **可维护性** | 较差，容易导致全局路径污染。 | 较好，路径与目标绑定，逻辑清晰。 |
| **作用域控制** | 无法精确控制路径的作用范围。 | 可以通过 PUBLIC、PRIVATE、INTERFACE 精确控制路径的作用范围。 |
| **现代 CMake 推荐** | 不推荐使用，除非有特殊需求。 | 推荐使用，符合现代 CMake 的最佳实践。 |

# CMake构建流程

● **创建构建目录**：保持源代码目录整洁

● **使用 CMake 生成构建文件**：配置项目并生成适合平台的构建文件。

● **编译和构建**：使用生成的构建文件执行编译和构建。

● **清理构建文件**：删除中间文件和目标文件。

● **重新配置和构建**：处理项目设置的更改

## CMake构建流程图

```
源代码 -> CMakeLists.txt -> CMake配置 -> 构建文件生成 -> 编译构建 -> 可执行文件
```

**注：** 原图片链接已失效，这里用文字描述代替构建流程。

## 详细流程：

1.  **创建构建目录：**

CMake建议将构建文件放在源代码目录之外的独立目录中。这样既可以保持源代码目录的整洁，也可以方便管理不同的构建配置。

**创建构建目录：**在项目的根目录下，创建一个新的构建目录。例如，可以创建一个名为 build 的目录： mkdir build

**进入构建目录:** cd build

2.  **使用CMake生成构建文件**

**运行CMake配置:** 在构建目录中运行CMake命令，指定源代码目录。源代码目录是包含CMakeLists.txt文件的目录：cmake ..

也可以指定生成器和指定构建类型：cmake -G "Ninja" .. / cmake -DCMAKE\_BUILD\_TYPE=Release ..

**检查配置结果：**CMake会输出配置过程中的详细信息，如果没有错误则构建系统文件被生成到构建目录中

3.  **编译和构建：**

使用Makefile来编译和构建项目: make。 如果要构建特定的目标，可以指定目标名称：make MyExecutable

4.  **清理构建文件：**

构建过程中生成的中间文件和目标文件可以通过清理操作删除。

使用Makefile: make clean

5.  **重新配置和构建：**

如果修改了CMakeLists.txt，可以重新构建项目

# CMake高级特性

CMake高级特性允许我们更灵活地管理和配置CMake项目，以适应复杂的构建需求和环境

1.  自定义CMake模块和脚本：创建自定义模块和脚本简化构建过程

2.  构建配置和目标：使用多配置生成器和定义多个构建目标

3.  高级查找和配置：灵活地查找包和配置构建选项

4.  生成自定义构建步骤：添加自定义命令和目标以执行额外的构建操作

5.  跨平台和交叉编译

6.  目标属性和配置

## 1.  自定义CMake模块和脚本

**1.1 自定义CMake模块**

CMake允许你创建和使用自定义的模块，通常包含自定义的CMake脚本和函数

**创建自定义模块：**

● 项目目录下创建一个cmake目录，用于存放自定义CMake模块

● 在cmake目录下创建MyModule.cmake文件

● 在CMakeLists.txt文件中包含自定义模块

list(APPEND CMAKE\_MODULE\_PATH "${CMAKE\_SOURCE\_DIR}/cmake")

include(MyModule)

list用于拓展CMake的模块搜索路径、include用于加载并执行指定的CMake模块文件

**自定义模块实例：**

function(my\_custom\_function)

message(STATUS "This is a custom function!")

endfunction()

在CMakeLists.txt中调用自定义函数 my\_cumstom\_functions()

**1.2 使用自定义CMake脚本**

自定义CMake脚本允许你执行自定义配置操作，灵活处理复杂的构建请求

● 在项目中创建一个脚本文件（config.cmake）

● 在脚本中编写CMake指令

在CMakeLists.txt文件中调用脚本：include(${CMAKE\_SOURCE\_DIR}/config.cmake)

## 2.  构建配置和目标

**2.1 多配置生成器：**

**2.2 构建目标**

## 3.  高级查找和配置

**3.1 查找包的高级用法**

find_package()指令可以用于查找和配置复杂的第三方库和包

查找包的高级选项: find_package(Boost REQUIRED COMPOENENTS filesystem system)

设置查找路径：set(BOOST\_ROOT "/path/to/boost") find_package(Boost REQUIRED)

**3.2 配置文件和构建选项**

可以通过CMake配置文件来控制构建选项和配置

配置选项: configure\_file(config.h.in config.h)

配置文件(config.h.in)：#define VERSION "@PROJECT\_VERSION@"

在源文件中包含配置文件：#include "config.h"

## 4.  生成自定义构建步骤

**4.1 自定义命令**

CMake允许自定义构建命令，以便在构建过程中执行额外的操作

添加自定义命令：

add_custom_command( 

OUTPUT ${CMAKE\_BINARY\_DIR}/generated\_file.txt 

COMMAND ${CMAKE\_COMMAND} -E echo "Generating file" > ${CMAKE\_BINARY\_DIR}/generated\_file.txt 

DEPENDS ${CMAKE\_SOURCE\_DIR}/input\_file.txt

)

添加自定义目标:

add\_custom\_target(

generate\_file ALL 

DEPENDS ${CMAKE\_BINARY\_DIR}/generated\_file.txt 

)

**4.2 自定义目标**

add\_custom\_target(

my\_target COMMAND ${CMAKE\_COMMAND} -E echo "Running custom target" DEPENDS some\_dependency 

)

创建过程中执行目标: cmake --build . --target my\_target

## 5.  跨平台和交叉编译

**5.1 跨平台创建**

允许为不同操作系统生成适当的构建文件

cmake -DCMAKE\_SYSTEM\_NAME=linux ..

**5.2 交叉编译**

CMake支持交叉编译，即为不同的架构或平台构建项目

指定工具链文件：cmake -DCMAKE\_TOOLCHAIN\_FILE=/path/to/toolchain.cmake ..

## 6.  目标属性和配置

**6.1 目标属性**

设置编译选项：

set_target_properties(MyExectuable PROPERTIES COMPILE\_OPTIONS "-Wall")

设置连接选项：

set_target_properties(MyExectuable PORPERTIES LINK\_FLAGS "-L/path/to/lib")

**6.2 自定义编译和链接选项**

为特定目标设置自定义编译和链接选项

设置编译选项:

target_compile_options(MyExecutable PRIVATE -Wall -Wextra)

设置链接选项:

target_link_options(MyExecutable PRIVATE -L/path/to/lib)

# 参考内容

[CMake Tutorial &mdash; CMake 4.1.0 Documentation](https://cmake.org/cmake/help/latest/guide/tutorial/index.html)

[CMake 教程 | 菜鸟教程](https://www.runoob.com/cmake/cmake-tutorial.html)