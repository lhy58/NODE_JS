const fs = require('fs')
/*
* fs: 文件系统（File System）
* - 文件系统简单来说既是通过 node 来操作系统中的文件
* - 核心模块，直接引用，不需要下载
*/ 

// console.log(fs);

/****同步，容易造成堵塞*****/ 
// 1. 打开文件
// let fd = fs.openSync('message01.txt', 'w') // 文件路径， w:写 r：读, 

// 2. 向文件写入内容
// fs.writeSync(fd, '你好呀，我是writeSync！');

// 3. 关闭文件
// fs.closeSync(fd);


/******简单文件写入*******/ 
// file：c/user/admin/message02.txt;
// fs.writeFile('message02.txt', '你好呀，我是writeFile！', {
//   flag: 'a', // a: 追加； r: 读； w：写；
// }, (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });


/*******流式文件写入******/ 
/*
* 同步，异步，简单文件的写入都不适合大文件的写入，性能较差，容易导致内存溢出
*/

// const ws = fs.createWriteStream('message03.txt') // 创建写入流

// ws.write('你好呀，我是流式文件写入01。')
// ws.write('你好呀，我是流式文件写入02。')
// ws.write('你好呀，我是流式文件写入03。')

// 流关闭
// ws.close();

// 监听流的open，close
// ws.on('open', function(){ // 多次
//   console.log('流打开了~')
// })

// ws.once('open', function(){ // 一次
//   console.log('流打开了~')
// })
// ws.once('close', function(){
//   console.log('流关闭了~')
// })

/*******简单文件读取******/ 
// fs.readFile('message03.txt', function(err,data) {
//   if(!err){
//     // console.log(data) // Buffer
//     console.log(data.toString()) // 
//   }
// })


/*******流式文件读取******/ 
/*
* - 大文件，分多次将文件读取到内存中
*/ 
const rs = fs.createReadStream('message03.txt')
const ws = fs.createWriteStream('message04.txt') // 创建写入流

// 监听
rs.once('open', function(){
  console.log('流打开了~')
})
rs.once('close', function(){
  console.log('可读流关闭了~')
})
ws.once('close', function(){
  console.log('可写流关闭了~')
  // ws.close();
})

// 读取可读流中的数据时，必须为可读流绑定一个data事件，data事件绑定完毕，它会自动读取数据，后自动关闭
// rs.on('data', function(data){ // 这里不能用once绑定
//   // console.log(data);
//   ws.write(data)
// })

// 将可读流中的内容直接输出到可写流中
rs.pipe(ws) // 自动关闭
