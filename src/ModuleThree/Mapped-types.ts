const arrayNumbers = [1, 2, 3];
const arrayString = arrayNumbers.map(num => num.toString())
console.log(arrayString);

type Volume = {
    height: number;
    width: number;
}

type AA = Volume['height'] // look up types
type BB = keyof Volume; // 'width' | 'height'

type AreaString = {
    height: string;
    width: string;
}

type AreaReadOnly={
 readonly   height:number;
  readonly  width:number;
}

const rectangular:Volume={
    height:10,
    width:20
}

const circle:AreaReadOnly={
    height:52,
    width:10
}

// circle.height=20
// একই রকম টাইপকে একাধিক বার লেখার জন্য ম্যাপ টাইপ ব্যবহার করা হয় । 
// যেমন: উপরের কোডগুলোতে প্রত্যেকটা টাইপের মধ্যে height আর width  আছে । এবং এদের ভেল্যু কোন সময় নাম্বার কোন সময় স্ট্র্রিং ব্যাবহার করা হইতেছে । 
// এই সেইম ধরনের টাইপ বোঝার জন্য ম্যপ ইউজ করা লাগে
type Area1={
    [key in keyof Volume ]:string;
}
type Area2<T>={
    [key in keyof T ]:T[key];
}

const area2:Area2<{name:string}>={name:"Rafin"}