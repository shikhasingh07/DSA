function dfs(current, target, visit, graph) {
  if (current === target) {
    return true;
  }

  visit.add(current);

  for (let neigh of graph[current]) {
    if (!visit.has(neigh)) {
      if (dfs(neigh, target, visit, graph)) {
        return true;
      }
    }
  }

  return false;
}

var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
  let graph = Array.from({ length: numCourses }, () => []);

  for (let [a, b] of prerequisites) {
    graph[a].push(b);
  }

  let ans = [];

  for (let [u, v] of queries) {
    let visit = new Set();
    if (dfs(u, v, visit, graph)) {
      ans.push(true);
    } else {
      ans.push(false);
    }
  }

  return ans;
};

console.log(
  checkIfPrerequisite(
    2,
    [[1, 0]],
    [
      [0, 1],
      [1, 0],
    ],
  ),
);
