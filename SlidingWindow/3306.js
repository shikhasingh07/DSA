var countOfSubstrings = function(word, k) {
    let response = 0;
    let currentK = 0;       // consonant count
    let vowels = 0;         // distinct vowels seen
    let extraLeft = 0;      // how many left chars can be skipped
    let left = 0;

    // freq map for vowels in the window
    let freq = new Map();

    for (let right = 0; right < word.length; right++) {
        let ch = word[right];

        // expand window
        if ("aeiou".includes(ch)) {
            freq.set(ch, (freq.get(ch) || 0) + 1);
            if (freq.get(ch) === 1) vowels++;
        } else {
            currentK++;
        }

        // shrink if too many consonants
        while (currentK > k) {
            let leftChar = word[left];
            if ("aeiou".includes(leftChar)) {
                freq.set(leftChar, freq.get(leftChar) - 1);
                if (freq.get(leftChar) === 0) {
                    freq.delete(leftChar);
                    vowels--;
                }
            } else {
                currentK--;
            }
            left++;
            extraLeft = 0; // reset when forced shrink
        }

        // optimize left side when still valid: skip extra vowels
        while (
            vowels === 5 &&
            currentK === k &&
            left < right &&
            "aeiou".includes(word[left]) &&
            freq.get(word[left]) > 1
        ) {
            extraLeft++;
            freq.set(word[left], freq.get(word[left]) - 1);
            left++;
        }

        // count valid substrings
        if (currentK === k && vowels === 5) {
            response += (1 + extraLeft);
        }
    }

    return response;
};

console.log(countOfSubstrings("aeiou", 0));
