// 函数缓存，就是将函数运算过的结果进行缓存

// 本质上就是用空间（缓存存储）换时间（计算过程）

// 常用于缓存数据计算结果和缓存对象

const add = (a, b) => a + b;
const calc = memoize(add);

calc(10, 20); //30
calc(10, 20); // 30 缓存

(function () {
  var a = 1;
  function add() {
    const b = 2;
    let sum = b + a;
    console.log(sum);
  }
  add();
});
// 实现函数缓存主要依靠闭包、柯里化、高阶函数，这里再简单复习下
// 闭包
// 闭包可以理解成，函数 + 函数体内可访问的变量总和

(function(){
    var = 1; 
    function add(){
        const b = 2;
        let sum = b + a ;
        console.log(sum);
    }
    add()
})()
// 柯里化
var add = function(x,y){
    return x+y;
}

add(3,4)// 7


// 函数柯里化
var add2= function(x){
    return function(y){
        return x+y;
    }
}

add2(3)(4);

function foo(){
    var a = 2;

    function bar(){
        console.log(a);
    }
    return bar;
}
var baz = foo();
baz();

const memoize = function(func,content){
    let cache = Object.create(null);
    content = content || this 
    return (...key)=>{
        if(!cache[key]){
            cache[key] =func.apply(content,key)
        }
        return  cache[key]
    }
}

const calc = memoize(add);
const num1 = calc(100,200)
const num2 = calc(100,200) // 缓存得到的结果