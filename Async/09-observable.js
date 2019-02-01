const { Observable } = require('rxjs');

function interval(delay) {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next(delay);
    }, delay);
  });
}

interval(1000)
  .subscribe((delay) => {
    console.log('1s');
  });
