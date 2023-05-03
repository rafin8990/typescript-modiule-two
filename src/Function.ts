// Normal Function

function add(num1: number, num2: number): number {
    return num1 + num2
}

add(2, 2)

// ‍arrow function

const addArrow = (num1: number, num2: number): number => {
    return num1 + num2
}
const arr = [1, 4, 5];
const newArray = arr.map((num: number) => num * num);

/* 
Typescript function lekhar jonno bishes kichu niyom follow korte hoy
1. Function er parameter add korar somoy perameter ki type hobe 
    seta ullekh kore dite hobe
2. আর যদি রিটার্ন এর ভেল্যু টা কি হবে সেটা জানা থাকে তাহলে সেটাও উল্লেখ করে দেওয়া যাবে । 
3. TypeScript er type declare korle sekhane onno kono type kokhonoi use kora jabe na . 
*/

const person:{
    name:string,
    balance:number,
    addBalance(money:number):number
} = {
    name: 'Rafin Hossain',
    balance: 5,
    addBalance(money: number) {
        return this.balance + money
    }
}