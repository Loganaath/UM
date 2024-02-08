const data = {
    Name : "Carnage",
    Age : 100,
    BodyColor : "Red",
    FirstName : null,
    LastName : "V252",
    FullName : function(){
        return this.FirstName+" "+this.LastName;
    },
    Skills : [
        {
            Fighting : true,
            Emotions : true,
            Human_Like : false
        }
    ]
};
for(let i in data){
    console.log(data[i]);
}

for(let i in data.Skills){
    console.log(data.Skills[i]);
    for(let j in data.Skills[i].Emotions){
        console.log(data.Skills[i].Emotions);
    }
}

const obj_to_arr = Object.values(data.Name,data.Age);
console.log(obj_to_arr);

const Json = JSON.stringify(data);
console.log(Json);

const counter = {
    count : 0
};
Object.defineProperty(counter,"reset",{
    get : function(){
        this.count = 0;
    }
});

Object.defineProperty(counter,"increment",{
    get : function(){
        this.count++;
    }
});

Object.defineProperty(counter,"decrement",{
    get : function(){
        this.count--;
    }
});

Object.defineProperty(counter,"add",{
    set : function(val){
        this.count += val;
    }
});

Object.defineProperty(counter,"sub",{
    set : function(val){
        this.count -= val;
    }
});

counter.reset;
counter.add = 1;
counter.sub = 1;
counter.increment;
counter.decrement;
console.log(counter.count);

function test(name,age){
    this.name = name,
    this.age = age
}
const per = new test("Venom",100);
console.log(per.name,per.age);
test.prototype.color = "Black";
console.log(per.color);

function number(){
    let n =0;
    return{
        next : function(){
            n+=10;
            return{
                val : n,
                done : false
            }
        }
    };
}

const num = number();
num.next();
num.next();
console.log(num.next().val);