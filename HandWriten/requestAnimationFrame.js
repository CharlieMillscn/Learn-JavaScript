(() => {
  let startTime = Date.now();

  function handleTicker() {
    foo(Date.now() - startTime);
    startTime = Date.now();
    requestAnimationFrame(handleTicker);
  }

  requestAnimationFrame(handleTicker);

  let t = 0;
  function foo(timeInterval) {
    t += timeInterval;
    console.log("🚀🚀~ t:", t);
    if (t > 1000) {
      console.log("🚀🚀~ 搞事情");
      t = 0;
    }
  }
})();
