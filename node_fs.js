const fs = require('fs')
/*
* fs: 文件系统（File System）
* - 文件系统简单来说既是通过 node 来操作系统中的文件
* - 核心模块，直接引用，不需要下载
*/ 

// console.log(fs);

// 同步，容易造成堵塞
// 1. 打开文件
let fd = fs.openSync('node_fs0001.js', 'w') // 文件路径， w:写 r：读, 

// 2. 向文件写入内容
fs.writeSync(fd, '你好呀，我是writeSync！');

// 3. 关闭文件
fs.closeSync(fd);