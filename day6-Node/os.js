

//<<<<  OS Package  >>>>> //Inbuilt package

// Gives the details of the operating system

var reqos = require('os')

console.log(reqos.platform())

console.log(reqos.arch())

console.log(reqos.freemem())

console.log(reqos.hostname())

// Output

C:\Users\nikhi\Desktop\Learn@WEB\day6-Node>node os.js
win32
x64
1076293632
LAPTOP-OC4IKK10