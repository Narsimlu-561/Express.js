
class Person{
  constructor(name,age){
    this.name=name;
    this.age=age;
  }

  talk(){
    console.log(`my name is ${this.name}, my age is ${this.age}`);
  }
}

let p1=new Person("achiever",20);
let p2=new Person("narsimlu",21);

console.log(p1);
console.log(p2);