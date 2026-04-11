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

var longestSubarray = function (nums, limit) {
  const maxD = new Deque();
  const minD = new Deque();

  let left = 0;
  let ans = 0;

  for (let right = 0; right < nums.length; right++) {
    let x = nums[right];
    while (!maxD.isEmpty() && nums[maxD.peekRear()] < nums[right]) {
      maxD.removeRear();
    }
    maxD.addRear(right);

    while (!minD.isEmpty() && nums[minD.peekRear()] > nums[right]) {
      minD.removeRear();
    }
    minD.addRear(right);

    while (
      !maxD.isEmpty() &&
      !minD.isEmpty() &&
      nums[maxD.peekFront()] - nums[minD.peekFront()] > limit
    ) {
      // if left index equals front of either deque, pop it
      if (maxD.peekFront() === left) maxD.removeFront();
      if (minD.peekFront() === left) minD.removeFront();
      left++;
    }

     ans = Math.max(ans, right - left + 1);
  }
  return ans;
};

console.log(longestSubarray([8, 2, 4, 7], 4));
