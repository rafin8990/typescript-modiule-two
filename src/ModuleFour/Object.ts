class Animal {
    constructor(public name:string, public species:string,public sound:string){
    }

 public makeSound(){
        console.log(`the ${this.name} says ${this.sound}`);
    }
};

const dog = new Animal('German Sheparrd', 'dog','Ghew  Ghew');
const cat = new Animal('Rafin', 'cat', " Meaw Meaw");

dog.makeSound()
cat.makeSound()