var finalPrices = function (prices) {
  let result = [...prices];
  let stack = [];
  for (let i = 0 ; i < prices.length ;i++) {
    //here index are storing not values
    while (stack.length > 0 && prices[i] <= prices[stack[stack.length - 1]] ) {
      let ans = stack.pop();
      result[ans] -= prices[i];
    }
    stack.push(i);
  }
  return result;
};

console.log(finalPrices([8, 4, 6, 2, 3]));
