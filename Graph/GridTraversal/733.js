function isVisited(image, sr, sc, color, visited, original) {
  let rows = image.length;
  let cols = image[0].length;
  if (
    sr < 0 ||
    sc < 0 ||
    sr >= rows ||
    sc >= cols ||
    image[sr][sc] !== original
  ) {
    return color;
  }

  let key = sr + "," + sc;

  // already visited
  if (visited.has(key)) return 0;

  // mark visited
  visited.add(key);
  image[sr][sc] = color;
  isVisited(image, sr + 1, sc, color, visited, original);
  isVisited(image, sr - 1, sc, color, visited, original);
  isVisited(image, sr, sc + 1, color, visited, original);
  isVisited(image, sr, sc - 1, color, visited, original);
}

var floodFill = function (image, sr, sc, color) {
  let visited = new Set();
  let original = image[sr][sc];

  isVisited(image, sr, sc, color, visited, original);
  return image;
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2,
  ),
);
