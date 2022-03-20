setTimeout(() => {
  console.log("foo");
});

Promise.resolve("baz")
  .then((res) => new Promise((resolve) => resolve(res)))
  .then((a) => a)
  .then((b) => console.log(b));

const promise = new Promise((resolve) => {
  console.log("bar1");
  resolve("bar");
  console.log("bar2");
});

promise.then((res) => {
  console.log(res);
});
