function dfs(course, graph, visit, pathVisited, ans) {
    if(visit.has(course)){
      return true;
    }
    
    if(pathVisited.has(course)){
        return false;
    }

    pathVisited.add(course);

    for(let next of graph[course]){
        if(!dfs(next, graph, visit, pathVisited, ans)){
            return false;
        }
    }


  pathVisited.delete(course);
  visit.add(course);
  ans.push(course);
  return true;
}
var findOrder = function (numCourses, prerequisites) {
  let graph = Array.from({ length: numCourses }, () => []);
  for (let [a, b] of prerequisites) {
    graph[b].push(a);
  }

  let visit = new Set();
  let pathVisited = new Set();

  let ans = [];
  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course, graph, visit, pathVisited, ans)) {
      return [];
    }
  }
  console.log(ans);
  return ans.reverse();
};

console.log(findOrder(2, [[1, 0]]));
