function backtracking(n, idx, ans, current, visit, dragOne, dragTwo) {
  if (idx === n) {
    ans.push([...current]);
    return;
  }

  for (let col = 0; col < n; col++) {
    if (visit[col]) continue;

    let d1 = idx - col + (n - 1);
    let d2 = idx + col;

    if(dragOne[d1]) continue;
    if(dragTwo[d2]) continue;

    visit[col] = true;
    dragOne[d1] = true; 
    dragTwo[d2] = true; 
    current.push(col); 
    backtracking(n , idx + 1 , ans , current , visit , dragOne , dragTwo);
    current.pop();
    visit[col] = false; 
    dragOne[d1] = false;
    dragTwo[d2] = false;
  }
}
var totalNQueens = function (n) {
  var visit = new Array(n).fill(false);
  var dragOne = new Array(2 * n - 1).fill(false);
  var dragTwo = new Array(2 * n - 1).fill(false);

  var ans = [];
  backtracking(n, 0, ans, [], visit, dragOne, dragTwo);
  return ans.length;
};

console.log(totalNQueens(4));
