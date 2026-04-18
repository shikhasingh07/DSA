var getConcatenation = function(nums) {
    let ans = new Array(nums.length * 2); 

    ans = [...nums , ...nums]; 

    return ans;
};
// https://leetcode.com/problems/concatenation-of-array/description/ 
console.log(getConcatenation([1,2,1]))