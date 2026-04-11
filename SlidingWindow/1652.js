/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
    let n = code.length;
    let ans = new Array(n).fill(0);

    if (k === 0) return ans;

    let first = 0;
    if (k > 0) {
        for (let i = 1; i <= k; i++) {
            first += code[i % n];
        }
        ans[0] = first;
        for (let i = 1; i < n; i++) {
            first = first - code[i] + code[(i + k) % n];
            ans[i] = first;
        }
    } else {
        k = -k;
        for (let i = 1; i <= k; i++) {
            first += code[(n - i) % n];
        }
        ans[0] = first;
        for (let i = 1; i < n; i++) {
            first = first - code[(i - 1 - k + n) % n] + code[(i - 1 + n) % n];
            ans[i] = first;
        }
    }

    return ans;
};