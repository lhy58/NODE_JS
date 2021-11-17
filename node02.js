// 编译命令：node node02.js
const Path = require('path')
const fs = require('fs')
const fsPromise = fs.promises;
const { execSync } = require('child_process');
var a = '1111'
b = '我是全局变量，我会作为global的属性保存'

// console.log(global)

/*
*  arguments.callee
*    -- 这个属性保存的是当前执行的函数对象  
*/
// console.log(arguments)
// console.log('' + arguments.callee)
// 打印输出
/*

function (exports, require, module, __filename, __dirname) {
  ...
}

*/

// console.log(__filename)
console.log(Path.resolve('./node03.js'))
console.log(Path.resolve(__dirname, './node03.js'))
// console.log('fsPromise', fsPromise)


/*
* 进程 process
*/
// console.log(process.argv)
// execSync('yarn install')
console.log(execSync('node node03.js'))