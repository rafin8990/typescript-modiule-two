class Parent {
    name: string;
    age: number;
    address: string

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    makeSleep(hours: number): string {
        return `This ${this.name} will sleep for ${hours}`
    }
}

class Student extends Parent {

    constructor(name: string, age: number, address: string) {
        super(name, age, address)
    }
    /*
    
    makeSleep(hours: number): string {
        return `This ${this.name} will sleep for ${hours}`
    } */
}
const Student1 = new Student("Mr x", 25, "Dhaka")

class Teacher extends Parent {

    designation: string;


    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address)
        this.designation = designation; // defferent class

    }
    takeClasses(specialClass: number): string {
        return `this ${this.name} will take ${specialClass} class`
    }
}

const teacherOne= new Teacher("Rafin", 25, "Dhaka, Bangladesh", " Professor")

