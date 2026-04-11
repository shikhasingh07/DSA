var maxVowels = function (s, k) {
    let left = 0;
    let max = 0;
    let curr = '';
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']); 
    for (let right = 0; right < s.length; right++) {
        if(vowels.has(s[right])){
            curr++; 
        }

        if(right - left + 1 > k){
            if(vowels.has(s[left])){
              curr -- ;
            }
            left ++; 
        }

        if(right - left + 1 ===k){
            max = Math.max(curr , max);
        }
    }
    return max ; 
};