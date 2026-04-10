const Confusing = (n) => {
  if (n < 0) {
    return false;
  }

  let map = {
    0: 0,
    1: 1,
    6: 9,
    8: 8,
    9: 6,
  };

  let og = n; 
  let rev = 0; 

  while ( n > 0){
    let digit = n % 10; 
    if(map[digit] === undefined){
        return false; 
    }

    rev = rev * 10 + map[digit]; 
    n = Math.floor(n / 10);
  }

  return og !== rev;
};

console.log(Confusing(83));
