var MyQueue = function () {
    this.ans = [];
};


MyQueue.prototype.push = function (x) {
    this.ans.push(x);
};

MyQueue.prototype.pop = function () {
    return this.ans.shift();
};


MyQueue.prototype.peek = function () {
    return this.ans[0];
};


MyQueue.prototype.empty = function () {
    return this.ans.length === 0;
};
