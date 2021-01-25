import { globalAgent } from "http";

let memoryUsage = process.memoryUsage();

global.gc()
console.log('已使用内存', memoryUsage.heapUsed);

let arr = new Array(100000);
arr.forEach(item => item = 1);

memoryUsage = process.memoryUsage();
console.log('已使用内存', memoryUsage.heapUsed);
memoryUsage = process.memoryUsage();
console.log('已使用内存', memoryUsage.heapUsed);

arr = null;
global.gc();
memoryUsage = process.memoryUsage();
console.log('已使用内存', memoryUsage.heapUsed);