var removeKdigits = function(num, k) {
    if ( k >= num.length){
        return "0";
    }

    let nums = String(num).split('');
    let stack = []
    for(let i of nums){
        if(k > 0 && stack.length >0 && stack[stack.length -1] > i){
            stack.pop();
            k--;
        }
        stack.push(i);
    }

    while(k > 0){
        stack.pop();
        k--;
    }
    return stack.join("").replace(/^0+/,'');
};


console.log(removeKdigits(1432219,3))