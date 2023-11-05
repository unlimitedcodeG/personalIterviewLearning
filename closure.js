var Counter = (function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
})();


var Counter1 = makeCounter();
var Counter2 = makeCounter();


console.log(Counter1.value())  // 0
Counter.increment();
Counter.increment();
console.log(Counter1.value()); //2
Counter1.decrement();
console.log(Counter1.value()) //1 
console.log(Counter2.value()) 0 
// 因为闭包在处理速度和内存消耗方面对脚本性能具有负面影响
// 在创建新的对象或者类时，
// 方法通常应该关联于对象的原型，而不是定义到对象的构造器中。



function MyObject(name,message){
    this.name = name.toString();
    this.message = message.toString();
    this.getName= function(){
        return this.name;
    };

    this.getMessage = function(){
        return this.message;
    }
}
function MyObject2(name, message) {
    this.name = name.toString();
    this.message = message.toString();
  }
  MyObject2.prototype.getName = function() {
    return this.name;
  };
  MyObject2.prototype.getMessage = function() {
    return this.message;
  };


  const objNull = {}

  if(objNull.x == null){
    console.log("1");
  }


  // 而节省内存最好的方式是使用池，其将频用、
  // 可复用对象存储起来，减少创建和销毁操作
  // 图片请求接口每次请求都需要用到类 频繁操作会导致内存抖动

  // 使用对象池的机制，对这种频繁需要创建和销毁的对象保存在一个对象池中
  // 。每次用到该对象时，就取对象池空闲的对象，并对它进行初始化操作，从而提高框架的性能
  // {
  //   "totalCount": 1836,   // 总的条数
  //   "totalPages": 92,  // 总页数
  //   "currentPage": 1   // 当前页数
  //   "data": [     // 当前页的数据
  //     {
  //   ...
  //     }
  //  ]

  // 该实现过程是基于 Fiber节点实现，
  // 作为静态的数据结构来说，
  // 每个 Fiber 节点对应一个 
  // React element，
  // 保存了该组件的类型（函数组件/类组件/原生组件等等）、
  // 对应的 DOM 节点等信

  // Immutable 使用了 Structural Sharing（结构共享）

// 如果对象树中一个节点发生变化，
// 只修改这个节点和受它影响的父节点，其它节点则进行共享
//   Persistent Data Structure


// 错误边界在渲染期间、
// 生命周期方法和整个组件树的构造函数中捕获错误

// 形成错误边界组件的两个条件：

// 使用了 static getDerivedStateFromError()
// 使用了 componentDidCatch()

// 抛出错误后，请使用 static getDerivedStateFromError() 渲染备用 UI ，
// 使用 componentDidCatch() 打印错误信息：

//一个函数和对其周围状态(lexical environment)的引用捆绑在一起
// 这样的组合就是闭包(closure)

function init(){
  var name = "Mozilla" 
  function displayName(){
    alert(name);
  }
  displayName();
}

init()
// 其核心思想还是创建私有变量和延长变量的生命周期
