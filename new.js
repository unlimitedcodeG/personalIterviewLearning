// new 操作符

// 在JavaScript中 new操作符用于创建一个给定构造函数实例对象

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayName = function () {
  console.log(this.name);
};

const persona1 = new Person("Tom", 20);

console.log(persona1); // Persona {name: "Tom", age: 29}

t.sayName(); // 'Tom'

//  new 通过构造函数Person 创建出来的实例可以访问到构造函数原型链中的熟悉
function Test(name) {
  this.name = name;
  return 1;
}

const t = new Test("xxx");
console.log(t.name); // 'xxx'

function Test2(name) {
  this.name = name;
  console.log(this);
  return { age: 26 };
}

const t = new Test("xxx");

console.log(t); // {age:26}
console.log(t.name);

// 手写new 操作符

function mynew(Func, ...args) {
  // 1.创建一个新对象
  const obj = {};
  // 2.新对象原型指向构造函数原型对象
  obj.__proto__ = Func.prototype;
  // 3.将构建函数的this指向新对象
  let result = Func.apply(obj, args);
  // 4.根据返回值判断

  return result instanceof Object ? result : obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.say = function () {
  console.log(this.name);
};

let p = mynew(Person, "huihui", 123);
console.log(p);
p.say();
