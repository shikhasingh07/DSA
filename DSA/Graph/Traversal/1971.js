function dfs(graph, visit, curr, ds) {
  if (curr === ds) {
    return true;
  }

  if (visit.has(curr)) return false;
  visit.add(curr);

  for (let neighbor of graph[curr]) {
    if (dfs(graph, visit, neighbor, ds)) {
      return true;
    }
  }

  return false;
}
var validPath = function (n, edges, source, destination) {
  let graph = Array.from({ length: n }, () => []);

  for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  let visit = new Set();

  return dfs(graph, visit, source, destination);
};

console.log(
  validPath(
    3,
    [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    0,
    2,
  ),
);
