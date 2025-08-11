
function PersonMaker(name,age){
  const person={
    name:name,
    age:age,
    talk(){
      console.log(`my name is ${name}`);
    }
  }
  return person;
}

let p1=PersonMaker("achiever",20);
console.log(p1);


let p2=PersonMaker("narsimlu",20);
console.log(p2);