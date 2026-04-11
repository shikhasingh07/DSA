var carFleet = function(target, position, speed) {
    
    //making pair 

    let pair = []; 
    for(let i = 0 ; i < position.length ; i++){
        pair.push([position[i],speed[i]]);
    }
    
    pair.sort((a,b) => b[0]-a[0]);

    let fleet = 0;
    let curr = Number.NEGATIVE_INFINITY;
    for(let i = 0; i < pair.length; i++){
        let currt = (target-pair[i][0])/pair[i][1]; 
        if(currt > curr){
            fleet++; 
            curr = currt;
        }
    }
   return fleet;
};


console.log(carFleet(12, [10,8,0,5,3], [2,4,1,1,3]));