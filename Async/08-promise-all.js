function timeout(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delay);
    }, delay);
  });
}

(async () => {
   const delays = await Promise.all([
    timeout(Math.floor(Math.random() * 1001)),
    timeout(Math.floor(Math.random() * 1001)),
   ]);

   console.log(delays[0], delays[1]);
})()
