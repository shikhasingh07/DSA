class Stack {
    constructor(){
        this.items =[];
    }

   push(ele){
    this.items.push(ele);
   } 

   pop(ele){
    if(this.isEmpty()){
        return "Stack is Empty";
    }
    return this.items.pop()
   }

   isEmpty(){
    return this.items.length === 0; 
   }

   peek(){
    if(this.isEmpty()){
        return "Stack is Empty";
    }
    return this.items[this.items.length-1];
   }

   size(){
    return this.items.length;
   }

   print(){
    console.log(this.items)
   }
}

const stack = new Stack();
stack.push(10);
stack.push(20); 
stack.push(30); 
console.log(stack.peek());
console.log(stack.pop());  
console.log(stack.size()); 
console.log(stack.isEmpty());
stack.print();