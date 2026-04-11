/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {

    let countInFirst = 0;
    for (let i = 0; i < k; i++) {
        if (blocks[i] === "W") {
            countInFirst++;
        }
    }

    let ans = countInFirst;

    let left = 0;
    for (let i = k; i < blocks.length; i++) {
        if (blocks[left] === "W") {
            countInFirst--;
        }

        if (blocks[i] === "W") {
            countInFirst++;
        
        }
            left++;
        ans = Math.min(ans , countInFirst);
    }

    return ans;
};