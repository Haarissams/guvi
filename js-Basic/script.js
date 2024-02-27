//primitive datatypes
// number
console.log(typeof 5);
//String
console.log(typeof "5");
//boolean
console.log(typeof true);

//non primitive datatypes
let arr=[1,2,3,4,5]; //array
console.log(typeof arr,arr);

let obj={1: "1"};//objects
console.log(typeof obj, obj);
let a = 10;
let b = a;
console.log(a);//10
console.log(b);//10
b=15;
console.log(a);//10
console.log(b);//15


let sam_arr = [1,2,3];
let sam_arr2=sam_arr;
console.log(sam_arr);//[1,2,3]
console.log(sam_arr2);//[1,2,3]
sam_arr2[1]=4;
console.log(sam_arr);//[1,4,3]
console.log(sam_arr2);//[1,4,3]
