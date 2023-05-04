// ternary operator

const age : number=22;

if(age>=18){
    console.log("yes");
}else{
    console.log("no");
}

const isAdult=age>=18 ? "yes":"No";
console.log(isAdult);

const isAuthenticatedUser=null;

const userName= isAuthenticatedUser ?? "Guest" // double questionmark মানে Nullish Operator.এটা শুধুমাত্র Undefined আর null  ভেল্যুর জন্য কাজ করে । অন্যান্য ভেল্যুর জন্য কাজ করে না । 
console.log(userName);

type Manush={
    name: string,
    age:number,
    address:{
        city:'no City',
        road:"No road",
        home?:""
    }
}

const manush1:Manush={
    name:'Manush',
    age:100,
    address:{
        city:"no City",
        road:"No road"
    }
}

const myhome=manush1?.address?.home ?? "No Home"
console.log(myhome);