let counter=0;
function getData(){
    const inputVlaue=document.querySelector("#search").value;
    console.log("fetching  : "+counter++ +"  Value : "+inputVlaue)
}
function myDebounce(call,d){
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer);
        timer=setTimeout(() => {
            call();
        }, d);
    }
}


const BetterFunction=myDebounce(getData,3000);