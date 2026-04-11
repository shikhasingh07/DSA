var characterReplacement = function(s, k) {
    if(s.length === 0) {
        return -1; 
    }

    let left = 0 ;
    let maxLen = 0 ;
    let maxfreq = 0; 
    let freq = {}; 

   for(let right = 0 ; right < s.length ; right ++){

      freq[s[right]] = (freq[s[right]] || 0) + 1; 

      maxfreq = Math.max(freq[s[right]] , maxfreq); 

      if((right - left + 1) - maxfreq > k){

        freq[s[left]]--; 
        left ++; 
      }
 
      maxLen = Math.max(maxLen , (right-left+1)); 
   }

   return maxLen;
};

console.log(characterReplacement("ABAB",2))