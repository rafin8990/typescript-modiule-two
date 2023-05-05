// normally typescript array function
const createArray = (param: string): string[] => {
    return [param]
}

// generic array Function 
const createArray1 = <T>(param: T): T[] => {
    return [param]
}

const result1 = createArray1<string>('Bangladesh')

// Generic Function use korar niyom:
/* 
1. Function er paramer type ta generic kore dite hobe
2. Parameter er age <> er Vitor a oi generic type ta use korte hobe
3. Function er return type generic Ullekh kore dite hobee 
4.function jekhan theke call korbo sekhaneo <> er vitore parameterr ki type hobe bole dite hobe
*/

//spread Operator

const Crush = "Kate Winslet";


// const newData = { ...myInfo, Crush }

const addCrushInMymind=<T>(myInfo:T)=>{
    const crush="Kate Winslet";
    const crushRes={...myInfo, crush}
    return crushRes;
}
const myInfo = {
    name: "Persian",
    age: 15,
    salary: 1000000000,
}

const resu=addCrushInMymind(myInfo);