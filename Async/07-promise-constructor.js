function timeout(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delay);
    }, delay);
  });
}

(async () => {
  let delay = await timeout(1000);
  console.log(`${delay}ms`);
  delay = await timeout(500);
  console.log(`${delay}ms`);
})()
