var MinStack = function() {
    this.min = [];
    this.stack = [];
};

MinStack.prototype.push = function(val) {
  this.min.push(val);
  if(this.stack.length === 0 || val <= this.stack[this.stack.length-1]){
    this.stack.push(val);
  }
};

MinStack.prototype.pop = function() {
   let remove = this.min.pop()
   if(remove === this.stack[this.stack.length-1]){
    this.stack.pop();
   }
};


MinStack.prototype.top = function() {
    return this.min[this.min.length-1];
};

MinStack.prototype.getMin = function() {
    return Math.min(...this.stack);
};

var obj = new MinStack();
obj.push(2);
obj.push(0);
obj.push(3);
obj.push(0);
