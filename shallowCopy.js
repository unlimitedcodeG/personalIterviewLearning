function shallowClone(obj) {
  const newObj = {};
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      newObj[prop] = obj[prop];
    }
  }
  return newObj;
}

// 在JavaScript中，存在浅拷贝的现象有：

// Object.assign
// Array.prototype.slice(), Array.prototype.concat()
// 使用拓展运算符实现的复制

