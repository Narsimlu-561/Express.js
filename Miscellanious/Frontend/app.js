//OOPS can reduce Re-writing the code 
// we can avoid writing the same code multiple times

const student1={
  name:"adam",
  age :25,
  marks : 95,
  getMarks:function(){
    return this.marks;
  },
};

const student2={
  name:"Bob",
  age :25,
  marks : 95,
  getMarks:function(){
    return this.marks;
  }
}

const student3={
  name:"Peter",
  age :25,
  marks : 85,
  getmarks:function (){
    return this.marks;
  }
}


let arr=[1,2,3,4,5];
let arr2=[1,2,3,4,5];

//it is in-effiecient
arr.sayHello=()=>{
  console.log("hello, i am array ");
}

arr2.sayHello=()=>{
  console.log("hello, i am array ");
}

