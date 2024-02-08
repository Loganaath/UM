// Self invoking function
(function(){
    console.log(true);
})
();

//constructor
let cons = new Function('a','b','return a+b');
console.log(cons(2,3));

//hoisting
console.log(add(5,5));
function add(a,b){
    return a*b;
}
//Shows number of arguments
function func(a,b,c){
    return arguments.length;
}
console.log(func(2));

//Arrow Function
let arrow = (x,y) => x+y;
console.log(arrow(2,2));

const myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return myObject.firstName + " " +myObject.lastName;
    }
  }
console.log(myObject.fullName());

//call() and apply() method
let obj1 = {
  Name : "David"
};
let obj2 = {
  Show : function(age){
    return obj1.Name +" "+ age;
  }
};
console.log(obj2.Show.call(obj1,12));
console.log(obj2.Show.apply(obj1,[12]));
console.log(obj2.Show.bind(obj1));