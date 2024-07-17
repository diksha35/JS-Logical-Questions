let myString="Diksha Deshmukh";

function longestString(myString){
    let longestString='';
    let words=myString.split(" ");
    for(let word of words){
        if(word.length>longestString.length){
            longestString=word;
        }
    }
    return longestString;
    
}
console.log(longestString(myString));