let pick = 6;

let guess = (n) => {
    if(n === pick) return n; 
    return n > mid ? 1 : -1;
}

var guessNumber = function(n) {
    
    //binary search 
    let left = 1; 
    let right = n; 

    while(left <= right){
        let mid = Math.floor((left+right)/2); 
        let res = guess(mid); 
        if(res === 0){
            return mid; 
        }else if(res < 0){
            left = mid + 1; 
        }else {
            right = mid - 1;
        }
    }
    return -1 ;
};

console.log(guessNumber(10))