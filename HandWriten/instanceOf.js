function myInstanceOf(example, classFunc) {
  let proto = Reflect.getPrototypeOf(example);
  while (true) {
    if (proto == null) return false;
    if (proto == classFunc.prototype) return true;
    // proto = proto.__proto__;
    proto = Reflect.getPrototypeOf(proto);
  }
}

console.log(myInstanceOf([], Array));
