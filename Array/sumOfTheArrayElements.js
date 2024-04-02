//Create a function that calculates the sum of all elements in an array.
1. By using For Loop
----------------------------
function sumArray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum ;
}

const array =[1,2,3,4,5];
console.log(sumArray(array));
_____________________________________________________________________

2. by using reduce()
---------------------------

const sumArray=(arr)=>{

return arr.reduce((acc, current )=>{return acc+current;})

}
const array =[1,2,3,4,5];
console.log(sumArray(array));
_______________________________________________________________________

3. By using ForEach Loop
--------------------------------

const sumArray=(arr)=>{
    let sum=0;
    arr.forEach((data)=>{
        sum=sum+data;
    })
    return sum;
}
const array = [1, 2, 3, 4, 5];
console.log(sumArray(array)); 

