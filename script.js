
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "")
    let fraseInvertida = str.split("").reverse().join("")
    
    
    for (let i = 0; i < str.length ; i++) {
        if (str[i] != fraseInvertida[i]) {
            return false;
        }
    } 
    return true;
}


function arrayMaxMin(arr) {
    let arrayMax = arr[0];
    let arrayMin = arr[0];
    
    for (let i = 1 ;  i < arr.length ; i++){
        if(arr[i] > arrayMax){
            arrayMax = arr[i];
        }
        if(arr[i] < arrayMin){
            arrayMin = arr[i]
        }
         }return [arrayMin, arrayMax]
    } 



