class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty(){
    return this.items.length ===0
  }
  clear(){
    this.items= []
  }
  size(){
    return this.items.length
  }

}
// 跟栈十分相似，队列是一种特殊的线性表，特殊之处在于它只允许在表的前端（front）进行删除操作，而在表的后端（rear）进行插入操作
class Queue(){
    constructor(){
        this.list = []
        this.frontIndex=0
        this.tailIndex=0
    }
    // 向队列尾部添加一个（或多个）新的项；
    enqueue(item){
        this.list[this.tailIndex++]=item
    }
    // 移除队列的第一（即排在队列最前面的）项，并返回被移除的元素；
    dequeue(){
        const item  = this.list[this.frontIndex]
        this.frontIndex++        
        return this.list.unshift(item)
    }
}


// function restParamaterFunction (x, y, ...a) { 
//     return (x + y) * a.length; 
//    } 
//    console.log(restParamaterFunction(1, 2, "hello", true, 7));
//    function restParamaterFunction (x, y) { 
//     var a = Array.prototype.slice.call(arguments, 2); 
//     return (x + y) * a.length; 
//    } 
//    console.log(restParamaterFunction(1, 2, 'hello', true, 7));