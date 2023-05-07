
/* type Alphanumeric = string | number
function add(param1: Alphanumeric, param2: Alphanumeric):Alphanumeric {
    if (typeof param1 === 'number' && typeof param2 === 'string') {
        return param1 + param2
    }
else{
    return param1.toString()+param2.toString()
}
}

add('1','2'); */

type NorrmalUserType={
    name:string
}
type AdminUserType={
    name:string;
    role:'admin'
}

function getUser(user:NorrmalUserType|AdminUserType){
    if('role'in user){
        return `I am an admin and my Role is ${user.role}`
    }
    else{
        return 'I am a noraml user'
    }
}

const normalUserOne:NorrmalUserType={name:"mr. kallu"};
const AdminUserOne:AdminUserType={name:"Mr Rafin", role:'admin'}

console.log(getUser(normalUserOne));
console.log(getUser(AdminUserOne));

// instanceof guard 

class NewAnimal{
    name:string;
    species:string;

    constructor(name:string, species:string){
        this.name=name;
        this.species=species;
    }

    makeNewAnimalSound(){
        console.log(`I am making Sound`);
    }
}

class Dog extends NewAnimal{
    constructor(name:string, species:string){
        super(name, species)
    }

    makeBerk(){
        console.log(` i am barking ghew ghew`);
    }
}
class Cat extends NewAnimal{
    constructor(name:string, species:string){
        super(name, species)
    }

    makeMiaw(){
        console.log(` i am Sounding Miaw miaw`);
    }
}

function getAnimalSound(obj:NewAnimal){
    if(obj instanceof Dog){
        obj.makeBerk()
    }
    else if(obj instanceof Cat){
        obj.makeMiaw()
    }
    else{
        obj.makeNewAnimalSound();
    }
}

const AnimalOne=new Dog('German Vai', 'Dog')
const AnimalTwo=new Cat('Rafin Vai', 'Cat')