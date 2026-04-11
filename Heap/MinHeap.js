// left child i * 2
// right child i * 2 + 1
// parent i/2 
let min = function () {
    let heap = []; 
    this.insert = function(num){
        heap.push(num);      
        if(heap.length > 2){
            let idx = heap.length - 1; 
            //element needs to put   root/parent eleme 
            while (heap[idx] < heap[Math.floor(idx / 2)]){
                if(idx >= 1){
                    // swapping of parent and child 
                    [heap[Math.floor(idx/2)] , heap[idx]] = [heap[idx] , heap[Math.floor(idx/2)]];
                    if(Math.floor(idx/2) > 1){
                        idx = Math.floor(idx/2); 
                    }else {
                        break; 
                    }
                }
            }
        }

    }
}

4 -> 3 -> 6