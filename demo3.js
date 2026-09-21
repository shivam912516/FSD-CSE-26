const num=[1,2,3,4,5];
// const a=num[0];
// const b=num[1];
// const c=num[2];
// const d=num[3];
// const e=num[4];
// Array Destructuring
const [a,b,c,d,e]=num;

console.log("a=",a);
console.log("b=",b);
console.log("c=",c);
console.log("d=",d);
console.log("e=",e);
const student={
    name: "XYZ",
    age:41,
    branch: "CSE"
}
// const name=student.name;
// const age=student.age;
// const branch=student.branch;
//object destructuring
const {name,age,branch}=student;

console.log(`my name is ${name} this is my old name`);
console.log("age=",age);
console.log("branch=",branch);