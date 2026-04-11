function TilePossibilities(tiles, current, ans, used) {
  if (current.length > 0) {
    ans.add(current);
  }

  for (let i = 0; i < tiles.length; i++) {
    if (used[i]) continue;
    if (i > 0 && tiles[i] === tiles[i - 1] && !used[i - 1]) continue;

    used[i] = true;
    TilePossibilities(tiles, current + tiles[i], ans, used);
    used[i] = false;
  }
}

var numTilePossibilities = function (tiles) {
  tiles = tiles.split("").sort().join("");
  let ans = new Set();
  TilePossibilities(tiles, "", ans, new Array(tiles.length).fill(false));
  return ans.size;
};

console.log(numTilePossibilities("AAB"));
