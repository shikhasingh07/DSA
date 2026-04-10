function dfs(path, graph, visit) {
  visit.add(path);
  let count = 0;

  for (let [neighbor, needsRev] of graph[path]) {
    if (!visit.has(neighbor)) {
      count += needsRev;
      count += dfs(neighbor, graph, visit);
    }
  }

  return count;
}
var minReorder = function (n, connections) {
  let graph = Array.from({ length: n }, () => []);
  // making graph
  for (let [a, b] of connections) {
    graph[a].push([b, 1]); // original direction
    graph[b].push([a, 0]); // reverse direction
  }

  console.log(graph);
  let visit = new Set();

  return dfs(0, graph, visit);
};
let connections = [
  [0, 1],
  [1, 3],
  [2, 3],
  [4, 0],
  [4, 5],
];
console.log(minReorder(6, connections));
