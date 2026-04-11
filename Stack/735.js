var asteroidCollision = function (asteroids) {
  let ans = [];
  for (let item of asteroids) {
    while (ans.length > 0 && ans[ans.length - 1] > 0 && item < 0) {
      let nvg = ans.pop();
      if (Math.abs(nvg) > Math.abs(item)) {
        ans.push(nvg);
        item = 0;
      } else if (Math.abs(nvg) === Math.abs(item)) {
        item = 0;
      }
    }

    if (item !== 0) ans.push(item);
  }

  return ans;
};

console.log(asteroidCollision([8 , -8]));
