var StockSpanner = function() {
    this.stack = []
};

StockSpanner.prototype.next = function(price) {
    
    let span  = 1; 
    while(this.stack.length > 0 && this.stack[this.stack.length-1][0] <= price ){
       span += this.stack.pop()[1]
    }
    
    this.stack.push([price ,span])
    return span; 
};

//monotonic stack
let stockSpanner = new StockSpanner();
console.log(stockSpanner.next(100))
console.log(stockSpanner.next(80))
console.log(stockSpanner.next(60))
console.log(stockSpanner.next(70))
console.log(stockSpanner.next(60))
console.log(stockSpanner.next(75))
console.log(stockSpanner.next(85))
