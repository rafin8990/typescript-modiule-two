let emni: any;

emni = "Hello sir! I am Your Boss . Please Open the Door otherwise I'm gonna kill you very soon";

(emni as string).length; //এটা টাইপস্ক্রিপ্টের টাইপ এজারশন । আমরা যখন টাইপস্ক্রিপ্টের থেকে ভালো বুঝি তখন এই মেথড ব্যবহার করা হয় । 
<string>emni.length

function kgToGram(param: string | number): string | number | undefined {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `The converted result is : ${value} gram`
    }
    if (typeof param === 'number') {
        const value = param * 1000;
        return value;
    }
}

const result= kgToGram(1000) as number; //এখানে বলে দিতে হবে কোন টাইপ হবে ।

type CustomErrorType={
    message:string
}
try{

}
catch(err){
    console.log((err as CustomErrorType ).message);
}