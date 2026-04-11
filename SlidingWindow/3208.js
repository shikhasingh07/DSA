/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors, k) {

    const N = colors.length;
    if (N === 0) return 0;
    if (k > N) return 0;    
    if (k <= 1) return N;


    let l = 0;
    let res = 0;

    for (let r = 1; r <= N + k - 2; r++) {

        let curr = colors[r % N];
        let prev = colors[(r - 1) % N]

        if (prev === curr) {
            l = r;
        }

        if (r - l + 1 > k) {
            l += 1;
        }

        if (r - l + 1 === k) {
            res += 1;
        }
    }

    return res;
};