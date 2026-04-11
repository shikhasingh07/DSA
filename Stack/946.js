var validateStackSequences = function(pushed, popped) {
    let ans =[];
    let i = 0;
    for(let item of pushed){
        ans.push(item);
        while(ans.length > 0 && ans[ans.length-1] === popped[i]){
            ans.pop();
            i++;
        }
    }
    return ans.length === 0;
};

console.log(validateStackSequences([1,2,3,4,5],[4,5,3,2,1]))