type CrushType = {
    name: string,
    age?: number,
    profession: string,
    address: string
}

const crush1: CrushType = {
    name: 'Jaan Pakhi',
    age: 16,
    profession: 'web Developer',
    address: 'Malaysia'
}
const crush2: CrushType = {
    name: 'Moina Pakhi',
    age: 18,
    profession: 'web Developer',
    address: 'Mexico'
}

/* 
এরকম সেইম আরেকটা ক্রাশের নাম যদি আমি ডিকলেয়ার করতে চাই , তাহলে আমাকে আবারো সেইম কোড লিখে টাইপ বলে দিয়ে তারপর ভেল্যু সেট করতে হবে । কিন্তু এই কাজটা সহজ করে দেওয়ার জন্যই টাইপস্ক্রিপ্টের এলিয়াস মেথড ইউজ করতে হয় । 
Type Alias Use Korar Niyom:
# প্রথমে type  লিখতে হয় । 
# তারপর  একটা নাম সেট করতে হয় । 
# তারপর একটা অবজেক্টের ভেতরে সব টাইপ গুলো সেট করে তারপর ইউজ করতে হয় । 

*/


//typeScript Operation Type:

// primary 
const numberSum=(number1:number, number2:number, operation:(x:number, y:number)=>number)=>{
    return operation(number1,number2);
}

numberSum(10,20,(x,y)=>x+y);

//Operation type
type OperationType=(number1:number, number2:number)=>number;

const numSum=(number1:number, number2:number, operation:OperationType)=>{
    return operation(number1,number2);
}

numSum(10,20,(x,y)=>x+y);