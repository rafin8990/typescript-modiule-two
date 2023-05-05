type personType={
    name:string,
    age:number,
    address:string
}

type Newtype="name"| "age" | "address" // manually Union


// keyOf operator 
type newTypeUsingKeyOf=keyof personType;

const a:Newtype='address'
const b:newTypeUsingKeyOf='address'

function getProps<x,y extends keyof x>(obj:x, key:y){
    obj[key]
}
 
const resul=getProps({name:"Mr x", age:100}, "name")

// উপরের র্ফাশনে Y = "name" | "age"