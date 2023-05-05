// Generic interface 
interface CrushInterface<T, U = null> {
    name: string,
    husband: T //এখানে T হলো জেনেরিক টাইপ । আমরা যখন কোথাও কোন নির্দিষ্ট মানের জন্য  কোন টাইপ ভেল্যু ইউজ করবো সেটা না জানি তাাহলে জেনেরিক টাইপ ইউজ করতে হয় । এখনে T এর মান স্ট্রিং নাম্বার বুলিয়ান সহ যেকোন টা ইউজ করতে পারি । শুধু আমাদের যেখানে এই টাইপ ব্যবহার করবো সেখানে এই ইন্টার ফেসের সাথে <> ব্রাকেট এর ভেতরে টাইপ টা উল্লেখ করে দিবো । 

    wife?: U
}

const CrushOne: CrushInterface<boolean, string> = {
    name: "Rafin Hossain",
    husband: true,
    wife: "Moina Pakhi"
}

const CrushTwoInterface: CrushInterface<string> = {
    name: "Kate Winlet",
    husband: "Korean"
}

interface HusbandInterface {
    name: string,
    salary: number
}
const crushThree: CrushInterface<HusbandInterface> = {
    name: "kate Winslet",
    husband: {
        name: "Rafin Hossain",
        salary: 20000
    }
}
