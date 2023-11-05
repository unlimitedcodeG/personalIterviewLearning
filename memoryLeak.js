// 内存泄漏（Memory leak）是在计算机科学中，
// 由于疏忽或错误造成程序未能释放已经不再使用的内存
// 并非指内存在物理上的消失，
// 而是应用程序分配某段内存后，由于设计错误，
// 导致在释放该段内存之前就失去了对该段内存的控制，从而造成了内存的浪费
// 程序的运行需要内存。只要程序提出要求，操作系统或者运行时就必须供给内存
// 为什么要做内存管理
// 对于持续运行的服务进程，必须及时释放不再用到的内存。

// const { add } = require("lodash");

// 否则，内存占用越来越高，轻则影响系统性能，重则导致进程崩溃
var m = 1,
  n = 19;
console.log(m, n);
add(m, n);

console.log(n);
function add(a, b) {
  a++;
  var c = a + b;
  console.log(c);
  return c;
}

// 没有清理对DOM元素的引用同样造成内存泄露
const refA = document.getElementById("refA");
document.body, removeChild(refA); // dom 删除了
console.log(refA, "refA");
refA = null; // 手动设置为null 解除引用
console.log(refA, "refA");
// 包括使用事件监听addEventListener监听的时候，
// 在不监听的情况下使用removeEventListener取消对事件监听
//定时器也常会造成内存泄露
var someResource = getData();
setInterval(function () {
  var node = document.getElementById("Node");
  if (node) {
    // 处理node 和 someResource
    node.innerHTML = JSON.stringify(someResource);
  }
}, 10000);
// 如果id为Node的元素从DOM中移除，
// 该定时器仍会存在，同时
// 因为回调函数中包含对someResource的引用，
// 定时器外面的someResource也不会被释放

clearInterval();


function bindEvent(){
    var obj = document.createElement('XXX');
    var unused = function(){
        console.log(obj,'闭包内引用obj obj不会被释放');
    };
    obj = null; // 解决方法;
}

