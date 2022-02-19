function Parent5(name) {
  this.name = name;
  this.play = [1, 2, 3];
}
function Child5(name) {
  Parent5.call(this, name);
  this.type = "child5";
}

/** 
 1. 这一步不用Child.prototype = Parent.prototype的原因是怕共享内存，修改父类原型对象就会影响子类
 2. 不用Child.prototype = new Parent()的原因是会调用2次父类的构造方法（另一次是call），会存在一份多余的父类实例属性
 3. Object.create是创建了父类原型的副本，与父类原型完全隔离
*/

Child5.prototype = Object.create(Parent5.prototype);
Child5.prototype.say = function () {
  console.log(`${this.name}好，我是练习时长两年半的${this.type}`);
};
Child5.prototype.constructor = Child5;
var s3 = new Child5("a");
var s4 = new Child5("b");
s3.play.push(4);
console.log(s3, s4); // [1,2,3,4] [1,2,3]
s3.say();
