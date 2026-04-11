var isPerfectSquare = function (num) {

    if (num < 2) return true;
    let left = 2;
    let right = Math.floor(num / 2);

    let square, mid;
    while (left <= right) {
        mid = Math.floor(left + (right - left) / 2);
        square = mid * mid;
        if (square === num) {
            return true;
        }
        if (square > num) {
            right = mid - 1;

        } else {
            left = mid + 1;
        }
    }

    return false;
};