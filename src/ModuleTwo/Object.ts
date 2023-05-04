const user:{
    company:string,
    name:string,
    age:number,
    isMarried:boolean,
    wife?:string
}={
    company:'programming hero',
    name: 'Sayeem Sadat DDL',
    age: 25,
    isMarried: true,
    wife:'Sunny Leone'
}

/* 
টাইপক্রিপ্ট এর অবজেক্ট কে ডিক্লেয়ার করার জন্য প্রতিটা ভেল্যু কি টাইপ হবে সেটা আগে থেকেই নির্ধারন করে দিতে হয় । এবং অবজেক্টের ভেতরে যদি ভেল্যু অনুযায়ী মান না লিখি তাহলে এরর চলে আসবে । যেমন : উপরের অবজেক্টে এর মধ্যে আমি নেইম এর ভেল্যু স্ট্রিং হবে লিখেছি । এখন যদি আমি অবজেক্টের ভিতরে গিয়ে নেইমের ভেল্যু নাম্বার দেই তাহলে এটা এরর শো করবে । অথবা আমি যদি নেইমের ভেল্যু বুলিয়ান দিতে চাই তাহলেও হবে না । 


আবার চাইলে আমি টাইপস্ক্রিপ্ট এর যেকোন একটা অবজেক্ট প্রোপার্টির মান অবশনাল চেইনের মাধ্যমে প্রকাশ করতে পারবো । তাহলে আমি যদি ওই প্রোপার্টি টা না ও লিখি তারপরেও এরর আসবে না । যেমন উপরের wife  property  এর ভেল্যু  আমি না লিখলেও কোন সমস্যা হতো না । সেক্ষেত্রে এমন দেখাতো :
const user:{
    name:string,
    age:number,
    isMarried:boolean,
    wife?:string
}={
    name: 'Sayem Sadat',
    age: 25,
    isMarried: true,
}
*/

/* আমরা চাইলে কোন একটা অবজেক্ট প্রোপার্টির মান স্পেসিফিক ভাবে সেট করে দিতে পারবো । সেক্ষেত্রে আমাদের প্রথমেই সেট করে দিতে হবে যে ভেল্যুটা কি হবে । যেমন:
const user:{
    company:"programming hero",
    name:string,
    age:number,
    isMarried:boolean,
    wife?:string
}={
    company:"programming hero", এখানে কোম্পানি অন্য কোন মান লেখা যাবে না কারন আমি উপরে  েএর মান ফিক্সড করে দিয়েছি । 
    name: 'Sayem Sadat',
    age: 25,
    isMarried: true,
}
*/