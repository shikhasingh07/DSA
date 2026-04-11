function isAtlantic(heights, row, col, atlantic) {
  let rows = heights.length;
  let cols = heights[0].length;

  let key = row + "," + col;
  if (row < 0 || col < 0 || row >= rows || col >= cols || atlantic.has(key)) {
    return;
  }

  atlantic.add(key);

  if (row + 1 < rows && heights[row + 1][col] >= heights[row][col])
    isAtlantic(heights, row + 1, col, atlantic);

  if (row - 1 >= 0 && heights[row - 1][col] >= heights[row][col])
    isAtlantic(heights, row - 1, col, atlantic);

  if (col + 1 < cols && heights[row][col + 1] >= heights[row][col])
    isAtlantic(heights, row, col + 1, atlantic);

  if (col - 1 >= 0 && heights[row][col - 1] >= heights[row][col])
    isAtlantic(heights, row, col - 1, atlantic);
}

function isPacific(heights, row, col, pacific) {
  let rows = heights.length;
  let cols = heights[0].length;
  let key = row + "," + col;
  if (row < 0 || col < 0 || row >= rows || col >= cols || pacific.has(key)) {
    return;
  }

  pacific.add(key);

  if (row + 1 < rows && heights[row + 1][col] >= heights[row][col])
    isPacific(heights, row + 1, col, pacific);

  if (row - 1 >= 0 && heights[row - 1][col] >= heights[row][col])
    isPacific(heights, row - 1, col, pacific);

  if (col + 1 < cols && heights[row][col + 1] >= heights[row][col])
    isPacific(heights, row, col + 1, pacific);

  if (col - 1 >= 0 && heights[row][col - 1] >= heights[row][col])
    isPacific(heights, row, col - 1, pacific);
}

var pacificAtlantic = function (heights) {
  let pacific = new Set();
  let atlantic = new Set();
  let rows = heights.length;
  let cols = heights[0].length;
  let ans = [];
  for (let row = 0; row < heights.length; row++) {
    for (let col = 0; col < heights[0].length; col++) {
      if ((row === 0 || col === 0) && !pacific.has(row + "," + col)) {
        isPacific(heights, row, col, pacific);
      }
      if (
        (row === heights.length - 1 || col === heights[0].length - 1) &&
        !atlantic.has(row + "," + col)
      ) {
        isAtlantic(heights, row, col, atlantic);
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let key = r + "," + c;
      if (pacific.has(key) && atlantic.has(key)) {
        ans.push([r, c]);
      }
    }
  }
  return ans
};

let heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
console.log(pacificAtlantic(heights))