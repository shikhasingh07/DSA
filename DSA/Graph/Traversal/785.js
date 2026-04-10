function dfs(i, graph, color) {
  for (let neigh of graph[i]) {
    if (color[neigh] === -1) {
      color[neigh] = 1 - color[i];

      if (!dfs(neigh, graph, color)) {
        return false;
      }
    } else if (color[neigh] === color[i]) {
      return false;
    }
  }
  return true;
}
var isBipartite = function (graph) {
  let n = graph.length;
  let color = new Array(n).fill(-1);

  for (let i = 0; i < n; i++) {
    if (color[i] === -1) {
      color[i] = 0;
      if (!dfs(i, graph, color)) {
        return false;
      }
    }
  }
  return true;
};
let graph = [
  [1, 2, 3],
  [0, 2],
  [0, 1, 3],
  [0, 2],
];
console.log(isBipartite(graph));
