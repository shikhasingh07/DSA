var checkInclusion = function(s1, s2) {
  
    if(s1.length > s2.length){
       return false; 
    }
     
    // {a:1,b:1}
    let map = {}; 
    for(let i = 0 ; i < s1.length ; i++){
       map[s1[i]] = (map[s1[i]] || 0) + 1; 
    }

    let right = 0 , left = 0 , count = s1.length; 
    
    while (right< s2.length){

        if(map[s2[right]] > 0){
            count--; 
        }
        map[s2[right]] --; 
        right ++; 

        if(count === 0){
            return true;
        }

        if(right - left === s1.length){
            if(map[s2[left]] >= 0){
               count++; 
            }
            map[s2[left]]++;
            left++; 
        }
    }
    return false;
};

console.log(checkInclusion("ab","eidbaooo"))