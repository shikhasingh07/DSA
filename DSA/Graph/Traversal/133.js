function dfs(visit, node) {
  if (node === null) return null;
  if (visit.get(node.val)) {
    return visit[node.val];
  }

  let clonedVal = new Node(node.val);
  visit.set(node, clonedVal);

  for (let val of node.neighbors) {
    clonedVal.neighbors.push(dfs(visit, neighbor));
  }

  return clonedVal;
}

var cloneGraph = function (node) {
  let visit = new Map();
  return dfs(visit, node);
};
