// tuple generic type

type GenericTuple<x, y> = [x, y];
type RelationWithSellaryType = { Name: string, Sellary: number }

const relation: GenericTuple<string, string> = ["Rafin", "Hossain"];

const relationWithSellary: GenericTuple<object, string> = [
    {
        Age: 785,
        sellary: 1500000
    },
    "Sagorika Akter"
]

// Another generic type 
const relationWithSellary2: GenericTuple<RelationWithSellaryType, string> = [
    {
        Name: "Pandey",
        Sellary: 1500000
    },
    "Sagorika Akter"
]

// generic type in typescript 
type GenericArray<T> = Array<T>

//Number Array declare korar 2 ta niyom: 
const someNumber: number[] = [44, 22, 44, 55, 66];
const someNumber3: GenericArray<number> = [44, 22, 44, 55, 66];
// String Array Declare korar 2 ta niyom :
const someNumber2: string[] = ['2', '4', '6', '8'];
const someNumber4: GenericArray<string> = ['2', '4', '6', '8'];
// boolean Array Declare korar 2 ta niyom

const SomeNumber5: GenericArray<boolean> = [true, false];
const SomeNumber6: boolean[] = [true, false];

type NameRollType = { name: string, roll: number }
//object Array 

const userNameAndRollNumber: GenericArray<NameRollType> = [
    {
        name: "Rafin Hossain",
        roll: 555
    },
    {
        name: "Robin Hossain",
        roll: 454
    }
]



