// function hello() {

// }

const hello = (name) => `Hello ${name}`;

class Contact {
  constructor(prenom) {
    this.prenom = prenom;
  }
  hello() {
    console.log(`My name is ${this.prenom}`);
  }
  helloAsync() {
    setTimeout(() => {
      console.log(`My name is ${this.prenom}`);
    }, 1000);
  }
  helloAsyncMethod() {
    setTimeout(this.hello.bind(this), 1000);
  }
}

const romain = new Contact('Romain');
romain.hello();
romain.helloAsync();
romain.helloAsyncMethod();
