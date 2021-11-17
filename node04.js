console.log('node04.js')

// 一个字节/byte=8位/bit（00000000）
// 一个中文等于3个字节/byte

/*
  8bit = 1byte(字节)
  1024byte = 1kb
  1024kb = 1mb
  1024mb = 1gb
  tb
  ...
*/

// Buffer 缓冲区
/*
 buffer 中的一个元素，占用内存的一个字节
 buffer 以二进制存储，以十六进制显示
*/
var atr = 'buffer'

var buf = Buffer.from(atr)  // 将一个字符串转换成Buffer

console.log(buf) // <Buffer 62 75 66 66 65 72>
console.log(buf.toString()) // buffer


/*
 创建一个10字节的buffer
*/

var buf2 = Buffer.alloc(10)
buf2[0] = 11
buf2[1] = 0xaa // 写入一个十六进制（十六进制以0x开头）

// 只要是数字，控制台页面输出中一定是十进制 
console.log(buf2[1]) // 170
console.log(buf2[1].toString(16)) // 转换成16进制输出： aa
