 const addCrushMind=<T extends {name: string, age:number, salary:number}>(myInfor:T)=>{
    const crush="kate Winslet";
    const newData={...myInfo, crush}
    return newData;
 }

 type myInfoType={
    name:string,
    age:number,
    salary:number
 }
 const myInfor:myInfoType = {
    name: "Persian",
    age: 15,
    salary: 1000000000,
}

const res1=addCrushMind(myInfor)


/* আমরা যদি কোন ফাংশনের প্যারামিটারে কি কি ভেল্যু থাকতে হবে সেটা ফিক্সড করে দিতে চাই তাহলে কনসট্যান্ট ইউজ করতে হয় । সেক্ষেত্রে জেনেরিক টাইপের সাথে extends লিখে কি কি নির্দিষ্ট থাকবে তার ভেল্যু কি টাইপ হবে সেটা সহ লিখে দিতে হয় । আমরা চাইলে এগুলা ছাড়াও অণ্য কিছুও প্যারামিটার দিতে পারি । কিন্তু এক্সটেন্ড এর যে মান ফিক্সড করে দিয়েছি সেগুলো দিতেই হবে প্যারামিটার হিসেবে ।  */