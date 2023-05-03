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

const person: {
    name: string,
    balance: number,
    addBalance(money: number): number
} = {
    name: 'Rafin Hossain',
    balance: 5,
    addBalance(money: number) {
        return this.balance + money
    }
}

// default parameter

const sum = (num1: number, num2: number=50) => {
    return num1 + num2;
}
sum(1);

/* 
TypeScript er Function er vitor Default Value use korte hole 
1. কখনোই আমাদের প্রথম প্যারামিটারে ডিফল্ট ভেল্যু ইউজ করা যাবে না । 
2. ডিফল্ট ভেল্যু ইউজ করতে হলে দ্বিতীয় প্যারামিটারে ইউজ করতে হবে । 
3.
*/

// spread oparator 

const myFriends:string[]=['Nickel', 'Alex', 'Lamia', 'Nahid'];
const newFriends:string[]=['Rashed', 'Nupur', 'Monika', 'Kazi', 'Borsha'];

myFriends.push(...newFriends)
// console.log(myFriends)

// rest operator 

const greatFriend=(...myFriends:string[]):void=>{
console.log(myFriends)
myFriends.map(fri=>console.log(`hi ${fri}`))
}

const res= greatFriend(...myFriends)
console.log(res);


const myBestFriend={
    fullName:'Abul Hossain',
}

const {fullName}=myBestFriend;

/* 
Object Destructuring er somoy const {fullName:এইখানে কোন টাইপ যেমন স্ট্রিং , নাম্বার বলে দেওয়া যাবে না । এখানে টাইপ বলে দিলে সেটা টাইপ হিসেবে নেয় না । সেটা  fullName  এর অন্য একটা নাম হিসেবে ব্যবহৃত হবে। }=myBestFriend;

*/