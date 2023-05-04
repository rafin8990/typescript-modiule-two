const SearchName=(value:string| null)=>{
    if(value === null){
        console.log('There is Nothing to Search')
    }
    else{
        console.log("searching")
    }
}
SearchName('Rafin')
SearchName(null)


const getMyCarSpeed=(speed: unknown)=>{
if(typeof speed === 'number'){
    const convertedSpeed=(speed * 1000)/3600
    console.log(`my car speed is ${convertedSpeed}`);
}
if(typeof speed === "string"){
    const [value, unit]=speed.split(' ')
    const convertedSpeed=(parseFloat(value) * 1000)/3600
}
};
getMyCarSpeed(10)
getMyCarSpeed("10 kmh-^1")