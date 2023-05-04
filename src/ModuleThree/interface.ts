// type Alias 
type User={
    name:string,
    age:number,

}

// interface 

interface IUser {
    name:string,
    age:number,
}
/* 
Interface lekhar niyom :
1. first interface likhte hobe 
2. Interface er ekta naam dite hobe 
3.erpor = use na kore {} likhte hobe
*/

/* 
Interface হলো টাইপ এলিয়াসের খালাতো ভাই । কারন দুইটা একই রকম কাজ করে 
Interface চাইলে এক্সটেন্ড করা যায় 
 
*/
const userWithTypeAlias:User={
    name:"Type Alias",
    age:100
}

const UserWithInterface:IUser={
name:"Interface",
age:100
}



interface IextendUser extends IUser {
    role:string
}
const NewMyUser:IextendUser={
    name:"Rafin Hossain",
    age:25,
    role:"Admin"
}

type extendedUser=User & {
    role:string
}

/* 
Object er jonno interface othoba type alias jekono ekta use korte pari
Interface Sudhumatro Object er jonno use korte hoy
kintu premitive type er khetre type alias use korte hobe : Jamon:
type rollNumber=number;
*/

// Array interface 

// type Array

type rollNumberType=number[];

interface IRollNumbers{
    [index:number]:string
}

const rollsNumber:IRollNumbers=['1', '2', '3'];
const rollsNumber2:IRollNumbers=['1', '2', '3'];


