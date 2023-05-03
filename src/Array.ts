 const names: string[] = ['Rafin', 'Robin', 'Asrifa'];

 const numbers: number[]=[50, 60,70,80]

 /* 
 টাইপস্ক্রিপ্টে Array ডিক্লেয়ার সময় সেটা কোন টাইপ Array হবে সেটা উল্লেখ করে দিতে হবে ।
 যেমন : 
  const names: string[] = ['Rafin', 'Robin', 'Asrifa'];
  const numbers: number[]=[50, 60,70,80];
 */


  /* 
  যদি নাম্বার টাইপ Array এর ভিতর ম্যাপ চালালে প্রতিটা ভেল্যুর জন্য সব সময় নাম্বার মেথড ই আসবে । স্ট্র্রিং এর জন্য স্ট্রিং এর মেথড ই আসবে ।  

  যেমন:
  names.map(name=> name. লিখলে সব স্ট্রিং মেথড শো করবে । )
  numbers.map(number=> number. লিখলে সব নাম্বার মেথড শো করবে । )
  */

  
//Touples:
  const users:[number, string]=[412, "Rafin"];
/* টাপল মানে কাপল । অর্থাত আমি যদি কোন একটা এরে এর  প্রথম ইনডেক্স এর মান নাম্বার এবং দ্বিতীয ইনডেক্স এর মান স্ট্রিং রাখেতে চাই তাহলে টাপল ইউজ করতে হবে । সেখানে এরে সাইনের ভিতরে লিখে দিতে হবে । যেমন : 
const users:[number, string]=[412, "Rafin"];
users[0]= 555; এখানে আমাকে নাম্বারই ইউজ করতে হবে । স্ট্রিং িইউজ করতে পারবো না । কারন আমি টাপলের মধ্যে বলে দিয়েছি যে প্রথম ভেল্যুটা একটা নাম্বার হবে । 

*/