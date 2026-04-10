function dfs(current, target, product, visit, graph) {
  if (!graph.has(current)) {
    return -1;
  }

  if (current === target) {
    return product;
  }

  visit.add(current);

  for (let [neigh, val] of graph.get(current)) {
    if (!visit.has(neigh)) {
      let result = dfs(neigh, target, product * val, visit, graph);

      if (result !== -1) return result;
    }
  }

  return -1;
}
var calcEquation = function (equations, values, queries) {
  let graph = new Map();

  for (let i = 0; i < equations.length; i++) {
    let [u, v] = equations[i];
    let val = values[i];

    if (!graph.has(u)) graph.set(u, []);
    if (!graph.has(v)) graph.set(v, []);

    graph.get(u).push([v, val]);
    graph.get(v).push([u, 1 / val]);
  }

  let ans = [];
  for (let [u, v] of queries) {
    if (!graph.has(u) || !graph.has(v)) {
      ans.push(-1);
      continue;
    }
    let visit = new Set();
    let result = dfs(u, v, 1, visit, graph);
    ans.push(result);
  }
  return ans;
};

let equations = [
  ["a", "b"],
  ["b", "c"],
];
let values = [2.0, 3.0];
let queries = [
  ["a", "c"],
  ["b", "a"],
  ["a", "e"],
  ["a", "a"],
  ["x", "x"],
];
console.log(calcEquation(equations, values, queries));
