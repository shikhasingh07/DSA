class minHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    let parent = Math.floor((idx - 1) / 2);
    while (idx > 0 && this.heap[idx] < this.heap[parent]) {
      [this.heap[idx], this.heap[parent]] = [this.heap[parent], this.heap[idx]];
      idx = parent;
    }
  }

  bubbleDown() {
    let idx = 0;
    let len = this.size();

    while (true) {
      let left = 2 * idx + 1;
      let right = 2 * idx + 2;

      let smallest = idx;

      if (left < len && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < len && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest !== idx) {
        [this.heap[idx], this.heap[smallest]] = [
          this.heap[smallest],
          this.heap[idx],
        ];
        idx = smallest;
      }
      if (smallest === idx) break;
    }
  }

  remove() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }
}

class kthLargest {
  constructor(nums, k) {
    this.minHeap = new minHeap();
    this.k = k;

    for (let num of nums) {
      this.add(num);
    }
  }

  add(val) {
    this.minHeap.insert(val);
    if (this.minHeap.size() > this.k) {
      this.minHeap.remove();
    }
    return this.minHeap.peek();
  }
}
