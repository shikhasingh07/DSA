var lengthOfLongestSubstring = function(s) {
    let total = 0; 
    let i = 0; 

    let map = new Map(); 
    
    for (let max = 0; max < s.length; max++) {
        let ch = s[max]; 
        if (map.has(ch)) {
            i = Math.max(map.get(ch) + 1, i);
        }

        map.set(ch, max);

        total = Math.max(total, max - i + 1); 
    }

    return total; 
};

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3