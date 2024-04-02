// Remove Duplicates from array
____________________________________________________________________________
1.By using set object
---------------------
 function removeDuplicates(array){
    return [...new Set(array)];
}

//Example usage
const array=[1,2,3,4,2,4,6,5,2,12,5]
const uniqueArray=removeDuplicates(array);
console.log(uniqueArray);
_______________________________________________________________________________

2. By using filter method
--------------------------

function removeDuplicates(arr){
    return arr.filter((element, index)=>{
        return arr.indexOf(element)===index;
    })
}
const num=[1,2,4,4,63,23,4,2,3,2,2,1]
console.log(removeDuplicates(num));
__________________________________________________________________________________

3. Using reduce()
--------------------

3.1
+++++++++++++++++++++++++++++++

function removeDuplicates(arr){
    return arr.reduce((acc, current)=>{
        return acc.includes(current)? acc:[...acc,current];
    },[])
}
const num=[1,2,4,4,63,23,4,2,3,2,2,1]
console.log(removeDuplicates(num))
====================================================================================
3.2

function removeDuplicates(arr){
    return arr.reduce((acc, current)=>{

        //Check if the current item is already in the acc array or not 
      
	 if(!acc.includes(current)){
         	  // if not the add  it to the acc array
          		 acc.push(current);
       }
       //return the updated acc array for the next iteration 
       return acc;
    },[])
}
const num=[1,2,4,4,63,23,4,2,3,2,2,1]
console.log(removeDuplicates(num))



