function display(some){
    return some;
}

function add(a,b){
    let sum = a+b;
    return display(sum);
}
console.log(add(1,1));

async function calculation(){
    let a = 10,b = 20;
    const sum = a+b;
    return sum;
}
console.log(calculation());
/*
function positive(x){
    if(x>=0){
        return x;
    }
}
console.log(positive(numbers));
*/

const numbers = [10,-12,34,6,-1];
function remove(num,val){
    const arr = [];
    for(let x of num){
        if(val(x)){
            arr.push(x);
        }
    }
    return arr;
}
console.log(remove(numbers,(val)=>val>=0));

console.table([1,2,3,4,5,10]);
