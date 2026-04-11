var totalFruit = function(fruits) {
    let map = new Map();

    let left = 0 ;
    let maxFruit = 0; 

    let ans = 0 ;
    for(let right = 0 ; right < fruits.length ; right ++){

        map.set(fruits[right], (map.get(fruits[right]) || 0) + 1);

        while(map.size > 2){
          let fruit = map.get(fruits[left]); 
          if(fruit === 1){
            map.delete(fruits[left]);
          }else {
            map.set(fruits[left] , fruit-1);
          }
          left++;
        }

        ans = Math.max(right-left+1,ans); 
    }
    return ans;
};