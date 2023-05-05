//when a type depends on another type is called Conditional type :
// for example:

type A = string;
type B = A extends string ? string : null;

// nasted conditional type 
type C = undefined;
type D = number;

type e = A extends null ?
    null :
    C extends number
    ? number
    : D extends number
    ? number
    : null;

    type HabibiType={
        wife1:string,
        wife2:string
    }
type checkProperty<T, k>=k extends keyof HabibiType ? true : false;
type checkWifeOne=checkProperty<HabibiType, 'wife1'>
    // type check korbe ei type wiffe1 ache ki na ? true:false

type friends='aa' | 'bb' | 'cc'
type removeFriends<T, K >=T extends K ? never : T;
type currentFriends=removeFriends<friends, 'aa'>