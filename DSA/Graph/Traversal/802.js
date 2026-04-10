function dfs(i , state){
    if(state[i] === 1) return false;
    if(state[i] === 2) return true;

    state[i] = 1; 

    for(let neigh of graph[i]){
        if(!dfs(neigh , state)){
            return false;
        }
    }

    state[i] = 2;

    return true;
}
// DFS cycle detection - directed
var eventualSafeNodes = function (graph) {
  let n = graph.length;
  let state = new Array(n).fill(0);
  let ans = [];

  for (let i = 0; i < n; i++) {
    if (dfs(i,state)) {
      ans.push(i);
    }
  }

  return ans;
};

let graph = [[1, 2], [2, 3], [5], [0], [5], [], []];
console.log(eventualSafeNodes(graph));
