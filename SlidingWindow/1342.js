var numOfSubarrays = function(arr, k, threshold) {
    
    let count = 0 ;
    let avg = 0 ; 
   
    for(let i = 0 ; i < k ; i++){
        avg += arr[i]; 
    }

    if(avg / k >= threshold){
        count ++; 
    }
    
    for(let i = k ; i < arr.length ; i ++){
        avg = avg - arr[i - k] + arr[i];

        if(avg / k  >= threshold){
            count ++ ;  
        }
    }

    return count; 
};