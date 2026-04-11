// https://leetcode.com/problems/score-of-a-string/

var scoreOfString = function(s) {
   
    let score = 0 ;
    
    for(let i = 0 ; i < s.length - 1 ; i++){
        let f = s.charCodeAt(i) ; 
        let n = s.charCodeAt(i + 1);
        score += Math.abs(f - n); 
    }

    return score;
};

console.log(scoreOfString("hello"))