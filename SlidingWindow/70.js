//memo
var memofun = (n , memo={}) => {
    if(n in memo){
        return memo[n]; 
    }

    if(n === 1) return 1; 
    if(n === 2) return 2; 
    // {1:1,2:2}
    memo[n] = memofun(n-1 , memo) + memofun(n-2,memo);
    return memo[n];
}

//basic
var climbStairs = function(n) {
//    if(n  === 1 ) return 1; 
//    if(n === 2) return 2 ;

//    return climbStairs(n-1) + climbStairs(n-2);
 
   let map = {}
   let ans = memofun(n , {});
   return ans; 
};

console.log(climbStairs(44))