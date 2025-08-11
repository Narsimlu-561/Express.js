class Animal{
  constructor(name){
    this.name=this.name;
    this.type="warm-blooded";
  }
  eat(){
    console.log("I am eating grass");
  }
}

class Dog extends Animal{
  constructor(name){
    super(name);
  }
  bark(){
    console.log("wooff..")
  }
  eat(){
    console.log("dog is eating");
  }
}

class Cat extends Animal{
  constructor(name){
    super(name);
  }
  meow(){
    console.log("meow...");
  }
}

let dog=new Dog("Puppy");
console.log(dog);

let cat=new Cat("cutty");
console.log(cat);