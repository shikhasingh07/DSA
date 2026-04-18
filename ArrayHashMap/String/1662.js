var arrayStringsAreEqual = function(word1, word2) {
    
    let i = 0 ; 
    let j = 0 ; 
   
    let ansOne = ""; 
    while ( i < word1.length ){
           ansOne += word1[i];
           i++; 
    }

    let ansTwo = "";
    while ( j < word2.length ){
        ansTwo += word2[j]; 
        j++;
    }

    console.log(ansOne ,ansTwo)
    if(ansOne !== ansTwo){
        return false; 
    }

    return true; 
};

console.log(arrayStringsAreEqual(["ab", "c"],["a", "bc"]))