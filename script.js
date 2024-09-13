// tenho que verificar se o indice puxado é igual ao indice final 
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "")
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    } return true;
}


function arrayMaxMin(arr) {
    /* Seu código aqui */
}
