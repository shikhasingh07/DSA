class MyStack {
    constructor(){
        this.queue = []
    }

    push(ele){
        this.queue.push(ele);
        let size = this.queue.length;
        while(size > 1){
            this.queue.push(this.queue.shift()); 
            size--;
        }
    }

    pop(){
        return this.queue.shift();
    }

    top(){
        return this.queue[0]; 
    }

    isEmpty(){
        return this.queue.length === 0;
    }
}