function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

function pow2(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

// ，即一个函数中所有递归形式的调用都出现在函数的末尾，
// 对于尾递归来说，由于只存在一个调用记录，
// 所以永远不会发生"栈溢出"错误
function fib(n) {
  if (n === 1) return 1;
  return n * fib(n - 1);
}

console.log(fib(4));

function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

// 数组求和
function sumArray(arr, total) {
  if (arr.length === 1) {
    return total;
  }
  return sum(arr, total + arr.pop());
}

function fib2(n, start = 1, total = 1) {
  if (n <= 2) {
    return total;
  }
  return fib2(n - 1, total, total + start);
}

console.log(fib2(5));

// 数组扁平化/

function flat(arr = [], result = []) {
  arr.forEach((v) => {
    if (Array.isArray(v)) {
      result = result.concat(flat(v, []));
    } else {
      result.push(v);
    }
  });
  return result;
}
//数组对象格式化
// 代码实现
function keysLower(obj) {
  let reg = new RegExp("([A-Z]+)", "g");
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let temp = obj[key];
      if (reg.test(key.toString())) {
        // 将修改后的属性名重新赋值给temp，并在对象obj内添加一个转换后的属性
        temp = obj[
          key.replace(reg, function (result) {
            return result.toLowerCase();
          })
        ] = obj[key];
        // 将之前大写的键属性删除
        delete obj[key];
      }
      // 如果属性是对象或者数组，重新执行函数
      if (
        typeof temp === "object" ||
        Object.prototype.toString.call(temp) === "[object Array]"
      ) {
        keysLower(temp);
      }
    }
  }
  return obj;
}
let obj = {
  a: "1",
  b: {
    c: "2",
    D: {
      E: "3",
    },
  },
};

console.log(keysLower(obj));

// 命令式编程，声明式编程和函数式编程
// 命令编程
var array = [0, 1, 2, 3];
for (let i = 0; i < array.length; i++) {
  array[i] = Math.pow(array[i], 2);
}

[0, 1, 2, 3].map((num) => Math.pow(num, 2));

let value = (value) => value * 2;

// test("double(2)等于4", () => {
//   expect(double(2)).toBe(4);
// });

const forEach = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
};

let arr = [1, 2, 3];

forEach(arr, (item) => {
  console.log(item);
});

// 柯里化
let fn = (x, y) => x + y;

const curry = function (fn) {
  return function (x) {
    return function (y) {
      return fn(x, y);
    };
  };
};

let myFn = curry(fn);

console.log(myFn(1)(2));

// const curry2 = function (fn) {
//   return function curriedFn(...args) {
//     if (args.length < fn.length) {
//       return function () {
//         return curriedFn(...args.concat([...arguments]));
//       };
//     }
//     return fn(...args);
//   };
// };
// const fn2 = (x, y, z, a) => x + y + z + a;
// const myfn2 = curry(fn2);
// console.log(myfn2(1)(2)(3)(1));
// 关于柯里化函数的意义如下：

// 让纯函数更纯，每次接受一个参数，松散解耦
//惰性执行
// 组合与管道
function afn(a) {
  return a * 2;
}

function bfn(b) {
  return b * 3;
}

const compose = (a, b) => (c) => a(b(c));

const compose2 = (a, b) =>
  function (c) {
    return a(b(c));
  };

let myFn3 = compose(afn, bfn);
console.log(myFn3(2));

const compose3 =
  (...fns) =>
  (val) =>
    fns.reverse().reduce((acc, fn) => fn(acc), val);
const pipe =
  (...fns) =>
  (val) =>
    fns.reduce((acc, fn) => fn(acc), val);
