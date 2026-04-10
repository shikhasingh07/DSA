function dfs(u, v, graph, visit) {
  if (u === v) {
    return true;
  }

  visit.add(u);

  for (let neigh of graph[u]) {
    if (!visit.has(neigh)) {
      if (dfs(neigh, v, graph, visit)) {
        return true;
      }
    }
  }
  return false;
}
var findRedundantConnection = function (edges) {
  let n = edges.length + 1;

  let graph = Array.from({ length: n }, () => []);

  for (let [u, v] of edges) {
    let visit = new Set();
    if (dfs(u, v, graph, visit)) {
      return [u, v];
    }
    graph[u].push(v);
    graph[v].push(u);
  }
  return graph;
};
let edges = [
  [1, 2],
  [1, 3],
  [2, 3],
];
console.log(findRedundantConnection(edges));
