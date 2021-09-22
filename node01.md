## 01-命令

# 1.命令行窗口
  cmd
  常用命令：
         dir 列出当前目录下的所有文件
         cd 进入到指定目录
         md 创建一个文件夹
         rd 删除一个文件夹
  目录
     ./  表示当前目录
     ../  表示上一级目录
  环境变量（windows系统中变量）
     path
     当我们在命令行窗口打开一个文件，或者调用一个程序时，系统会首先在当前目录下寻找文件程序，如果找到了则直接打开，
        如果没有找到则会依次到环境变量path的路径中寻找，直到找到为止，如果没有则报错。

# 2.进程和线程
  进程
     - 进程负责为程序的运行提供必备的环境
     - 进程就是相当于工厂中的车间
  线程
     - 线程计算机中的最小的计算单位，线程负责进程中的程序
     - 线程就相当于工厂中的工人
  单线程
     js
  多线程
     jave        

# node.js 简介
  - node.js是一个能够在服务器端运行javaScript的开放源代码，跨平台javaScript运行环境。
  - node采用Google开发的V8引擎运行js代码，使用 事件驱动，非阻塞和异步I/O模型
  I/O（input/output）
    - I/O操作指的是对磁盘的读写操作
  node
    - node是对ES标准的一个实现，node也是一个js引擎
    - 通过node可以使js代码在服务器端执行
    - node仅仅对ES标准进行了实现，所以在node中不包含DOM和BOM
    - node中可以使用所有内置对象
    - node编写服务器都是单线程的服务器（node处理请求时是单线程，但是在后台拥有一个I/O线程池）
    - 传统的服务器都是多线程的（每进来一个请求，就创建一个线程去处理请求）

# 模块化
  - 在node中，一个js文件就是一个模块
  - 在node中，每一个js文件中的js代码都是独立运行在一个函数中，而不是全局作用域，所以一个模块中的变量和函数在其他模块中无法访问    
    
  - 通过exports 导出一个模块的变量和方法
    - exports.x = '变量1'
    - exports.func = function(){}
  - 在node中，通过require() 函数来引入外部的模块
    - 使用 require() 引入模块以后，该函数会返回一个对象，这个对象代表的是引入模块
    - 模块分成两大类
      - 核心模块 
          由node引擎提供的模块
          核心模块的标识就是模块的名字
          - const fs = require('fs')
      - 文件模块
          由用户自己创建的模块
          文件模块的标识就是文件的路径（绝对路程，相对路径)
          - const node01 = require('./node01.js')

# global
  - 在node中有一个全局对象global，它的作用和网页中的window类似
      在全局中创建的变量或方法都会作为global的属性或方法保存          
      console.log(global)

# arguments
  - arguments.callee 这个属性保存的是当前执行的函数对象   
    console.log('' + arguments.callee)
  - 当node在执行模块中的代码时，模块中代码都是包装在一个函数执行的，如下代码：     
      function (exports, require, module, __filename, __dirname) {
        // ...  
      }

    入参解释
      exports
        - 该对象用来将变量或函数暴露到外部
      require
        - 函数，用来引入外部的模块
      module
        - 代表的是当前模块本身
        - exports就是module的属性（module.exports） 
      __filename
        - 当前模块的完整路径
       __dirname
        - 当前模块所在文件夹的完整路径 