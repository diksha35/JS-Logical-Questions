let counter1=0;
let counter2=0;
const Mythrottle=(fn,d)=>{
    return function(...args){
    document.getElementById("throttleBtn").disabled=true;
   setTimeout(()=>{fn()
   
    
   },d)
    }
}

const ThrottleFunction= Mythrottle(()=>{
    console.log("User Clicked " +counter1++);
    document.getElementById("throttleBtn").disabled=false;
},3000)


const NormalFunction=()=>{
    console.log("Normal Button clicked ",+counter2++);
}