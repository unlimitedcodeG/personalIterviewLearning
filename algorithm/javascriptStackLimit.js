let i = 0;
function recursiveFn() {
  i++;
  recursiveFn();
}

try {
  recursiveFn();
} catch (ex) {
  console.log("i=" + i + "error:" + ex);
  //i=13954error:RangeError: Maximum call stack size exceeded
}

// ECMAScript 2015 有尾调用优化（tail call optimization）。如果函数内的最后一个操作是调用
// 函数（就像示例中加粗的那行），会通过“跳转指令”（jump）而不是“子程序调用”（subroutine
// call）来控制。也就是说，在 ECMAScript 2015 中，这里的代码可以一直执行下去。因此，具有
// 停止递归的基线条件非常重要
