// Deque implementation
class Deque {
    constructor() {
        this.items = [];
    }

    addFront(element) {
        this.items.unshift(element);
    }

    addRear(element) {
        this.items.push(element);
    }

    removeFront() {
        return this.items.shift();
    }

    removeRear() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peekFront() {
        return this.items[0];
    }

    peekRear() {
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }
}

var maxSlidingWindow = function(nums, k) {
    const deque = new Deque(); // ✅ must use "new"
    const res = [];

    for (let right = 0; right < nums.length; right++) {
        // Remove smaller values from the back
        while (!deque.isEmpty() && nums[deque.peekRear()] < nums[right]) {
            deque.removeRear();
        }

        // Add current index
        deque.addRear(right);

        // Remove out-of-window index from front
        if (deque.peekFront() <= right - k) {
            deque.removeFront();
        }

        // Record max once window size >= k
        if (right >= k - 1) {
            res.push(nums[deque.peekFront()]);
        }
    }

    return res;
};

// Example
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));
// Expected: [3,3,5,5,6,7]



var maxSlidingWindow = function(nums, k) {
    const deque = []; // store indices
    const res = [];

    for (let right = 0; right < nums.length; right++) {
        // Remove smaller values from back
        while (deque.length && nums[deque[deque.length - 1]] < nums[right]) {
            deque.pop();
        }

        // Add current index
        deque.push(right);

        // Remove out-of-window index from front
        if (deque[0] <= right - k) {
            deque.shift();
        }

        // Record max once window size >= k
        if (right >= k - 1) {
            res.push(nums[deque[0]]);
        }
    }

    return res;
};
