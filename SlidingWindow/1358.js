/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
    let left = 0;
    let count = 0;

    let map = { a: 0, b: 0, c: 0 };
    for (let i = 0; i < s.length; i++) {
        map[s[i]]++;

        while (map['a'] > 0 && map['b'] > 0 && map['c'] > 0) {
            count += s.length - i;
            map[s[left]]--;
            left++;
        }

    }

    return count;
};