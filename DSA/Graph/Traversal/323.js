function dfs(graph, visit, node) {
  visit.add(node);
  for (let neigh of graph[node]) {
    if (!visit.has(neigh)) {
      dfs(graph, visit, neigh);
    }
  }
}

var findConnected = function (n, edges) {
  let graph = Array.from({ length: n }, () => []);

  for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  let visit = new Set();
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (!visit.has(i)) {
      dfs(graph, visit, i); // FIX 3: pass node
      count++; // FIX 4: increment here
    }
  }

  return count;
};

console.log(
  findConnected(5, [
    [0, 1],
    [1, 2],
    [3, 4],
  ]),
);
