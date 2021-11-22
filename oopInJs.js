class Animal {
    constructor(name, breed, color) {
        this.name = name;
        this.breed = breed;
        this.color = color;
    }
    sound() { return ''; }
}
class Dog extends Animal {
    constructor(name, breed, color) {
      super(name, breed, color);
    }
  
    sound() {
        return 'Woof!';
    }
    wantToWalk () {
        return 'Woof! Woof! Woof!';
    }
  }
  class Cat extends Animal {
    constructor(name, breed, color) {
        super(name, breed, color);
    }
    sound() {
        return 'Meow!';
    }
    wantToWalk () {
        return 'Runs away ...';
    }
  }
  class Cow extends Animal {
    constructor(name, breed, color) {
        super(name, breed, color);
    }
    sound() {
        return 'Moo!';
    }
    wantToWalk () {
        return 'Yes ...';
    }
  }
  class Horse extends Animal {
    constructor(name, breed, color) {
        super(name, breed, color);
    }
    sound() {
        return 'Phrr!';
    }
    wantToWalk () {
        return 'Want to fast run ...';
    }
  }
  const Bethoven = new Dog('Bethoven', 'hairy', 'brown');
  Bethoven.sound(); 
  const Jack = new Cat('Jack', 'nice', 'silver');
  console.log(Jack.name); 
  const Cowie = new Cow('Cowie', 'milky', 'white')
  console.log(Cowie.sound());
  const Horsie = new Horse('Horsie', 'running', 'black')
  console.log(Horsie.color);
  