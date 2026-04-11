function dfs(graph, visit, node, parent) {
  if (visit.has(node)) {
    return true;
  }

  visit.add(node);

  for (let neigh of graph[node]) {
    if (!visit.has(neigh)) {
      if (!dfs(graph, visit, neigh, node)) {
        return false;
      }
    } else if (neigh !== parent) {
      return false;
    }
  }
  return true;
}

// DFS cycle detection - undirected
const validTree = (n, edges) => {
  if (edges.length !== n - 1) return false;
  let graph = Array.from({ length: n }, () => []);
  for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  let visit = new Set();
  if (!dfs(graph, visit, 0, -1)) {
    return false;
  }
  return visit.size === n;
};
let n = 5;
let edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [1, 3],
  [1, 4],
];
console.log(validTree(n, edges));
