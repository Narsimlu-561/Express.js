

// function Person(name,age){
//   this.name =name;
//   this.age=age;
//   console.log(this);
// }

// let p1=new Person("narsimlu",20);
// let p2=new Person("achiever",20);

function Person(name,age){
  this.name =name;
  this.age=age;
}

Person.prototype.talk=function(){
  console.log(`Hi, my name is ${this.name} & my age is ${this.age}`);
}

let p1=new Person("narsimlu",20);
let p2=new Person("achiever",20);

console.log(p1);
console.log(p2);