var FreqStack = function () {
  this.max = 0;
  this.group = [];
  this.map = {};
};

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
  if (this.map[val]) {
    this.map[val] = this.map[val] + 1;
  } else {
    this.map[val] = 1;
  }
  const freq = this.map[val];
  //   means
//   {3:[5] , 4:[]}
  if(!this.group[freq]){
    this.group[freq] = []
  }
  this.group[freq].push(val);
  this.max = Math.max(freq , this.max); 
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
   const val = this.group[this.max].pop();

   this.map[val]--;
   if(this.group[this.max].length === 0){
    this.max --; 
   }
   return val;
};

const freqStack = new FreqStack();
freqStack.push(5); // The stack is [5]
freqStack.push(7); // The stack is [5,7]
freqStack.push(5); // The stack is [5,7,5]
freqStack.push(7); // The stack is [5,7,5,7]
freqStack.push(4); // The stack is [5,7,5,7,4]
freqStack.push(5); // The stack is [5,7,5,7,4,5]

console.log(freqStack.pop()); // 5
console.log(freqStack.pop()); // 7
console.log(freqStack.pop()); // 5
console.log(freqStack.pop()); // 4