var re = function(n, k) {
    if(n===1){
        return 0; 
    }

    let total = Math.pow(2 , n-1); 
    let half = total / 2 ; 

    if(k > half){
        return 1 - re(n,k-half); 
    }

    return re(n-1,k);
};

let kthGrammar = function(n, k) {
    return re(n, k);
};

console.log(kthGrammar(2,2))