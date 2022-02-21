const SingletonProxy = new Proxy(People, {
  construct(target, args) {
    if (!SingletonProxy.instance) {
      SingletonProxy.instance = new target(args);
    }
    return SingletonProxy.instance;
  },
});
function People(name) {
  this.name = name;
}
const single1 = new SingletonProxy("xia");
const single2 = new SingletonProxy("xiao");
console.log(single1, single2, single1 === single2);
