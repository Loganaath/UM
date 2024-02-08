function display(a){
    return a;
}
function add(a,b,c=10){
    let sum = a+b+c;
    return sum;
}
let result = add(2,3);
console.log(display(result));

function A(some){
    return some;
}
function B(a,b,callback){
    let sum = a+b;
    callback = sum;
    return callback;
}
console.log(B(1,1,A));

function time(){
    console.log("I will be visible after 2 seconds");
}
setTimeout(time,2000);


let ID;
function time1(){
    let d = new Date();
    console.log(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
}
ID = setInterval(time1,1000);
function clear(){
    clearTimeout(ID,1000);
}
console.log(clear());

function something(some){
    console.log(some);
}
let myPromise = new Promise(function(resolve,reject){
    let x = 0;
    if(x==0){
        resolve(true);
    }
    else{
        reject(false);
    }
});

let res = myPromise.then(
    function(val){
        something(val);
    },
    function(err){
        something(err);
    }
);
console.log(res);

function pro(){
    return Promise.resolve(true);
}
console.log(pro());

async function pro1(){
    return true;
}
console.log(pro1());

