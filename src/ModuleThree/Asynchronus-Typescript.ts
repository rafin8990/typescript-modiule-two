const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = "Data is fatched";

        if (data) {
            resolve(data)
        } else {
            reject('failed to facthed')
        }
    })
};

const getPromiseData = async (): Promise<string> => {
    const data = await makePromise();
    return data;
}
const makePromiseBoolean = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const data: boolean = true

        if (data) {
            resolve(data)
        } else {
            reject('failed to facthed')
        }
    })
};


const getPromiseDataBoolean = async (): Promise<boolean> => {
    const data = await makePromiseBoolean();
    return data;
}


type DataType = {
    data: string
}
const makePromiseObject = (): Promise<DataType> => {
    return new Promise<DataType>((resolve, reject) => {
        const data: DataType = { data: "Rafin Hossain Loading" }

        if (data) {
            resolve(data)
        } else {
            reject('failed to facthed')
        }
    })
};





const getPromiseDataObject = async (): Promise<DataType> => {
    const data = await makePromiseObject();
    return data;
}

// json placeholder data 

interface Itodo{
    userId: number,
    id: number,
    title:string,
    completed:boolean
  }
const getTodo=async():Promise<Itodo>=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await res.json();
   
}

const getTodoData=async():Promise<void>=>{
    const result=await getTodo();
    console.log(result);
}

getTodoData()