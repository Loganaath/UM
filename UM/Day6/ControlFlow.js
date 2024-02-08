let obj = {
    C_Name : "Nature",
    CommencedAt : "12/3/2000"
};
if(obj.C_Name=="Nature"){
    console.log(true);
}
else{
    console.log(false);
}
switch(obj.C_Name){
    case 1:
        check = "Nature" == obj.C_Name;
        console.log(true);
    case 2:
        check = "nature" == obj.C_Name;
        console.log(false);
    default:
        console.log(null);    
}
for(let a=1; a<5; a++){
    console.log(a);
}
for(let x in obj){
    console.log(x);
}
let num = [12,43,54,565];
for(let x of num){
    console.log(x);
}
let number = 15;
while(number<=20){
    console.log(number);
    number++;
}
do{
    console.log(number);
    number++;
    if(number==100){
        break;
    }
}
while(number>10);