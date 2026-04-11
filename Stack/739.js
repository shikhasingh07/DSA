var dailyTemperatures = function(temperatures) {
    let ans = [];
    let answer = new Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++) {
       
        while(ans.length > 0 && temperatures[i] > temperatures[ans[ans.length -1]]){
          let prev = ans.pop();
          answer[prev] = i - prev;
        }
        ans.push(i);
    }

    return answer;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))