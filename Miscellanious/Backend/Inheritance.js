class Person{
  constructor(name,age,marks){
    console.log("person class constructor");
    this.name=name;
    this.age=age;
    this.marks=marks;
  }
  talk(){
    console.log(`my name is ${this.name}`);
  }
}

class Student extends Person{
  constructor(name,age,marks){
    console.log("student class constructor");//parent class constructor is called
    super(name,age);
    this.marks=marks;
  }
}

class Teacher extends Person{
  constructor(name,age,subject){
    console.log("teacher class constructor");
    super(name,age);
    this.subject=subject;
  }
}
let stu1=new Student("adam",20,95);
console.log(stu1);
let teacher=new Teacher("bob",25,99);
console.log(teacher);



