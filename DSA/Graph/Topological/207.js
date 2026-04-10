function dfs(course, graph, visit, pathVisited) {
  if (visit.has(course)) {
    return true;
  }

  if (pathVisited.has(course)) {
    return false;
  }

  pathVisited.add(course);

  for(let next of graph[course]){
    if(!dfs(next , graph , visit , pathVisited)){
        return false
    }
  }

  pathVisited.delete(course);
  visit.add(course);

  return true;
}
var canFinish = function (numCourses, prerequisites) {
  let graph = Array.from({ length: numCourses }, () => []);
  for (let [a, b] of prerequisites) {
    graph[b].push(a);
  }

  let visit = new Set();
  let pathVisited = new Set();

  // run DFS from every course
  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course, graph, visit, pathVisited)) {
      return false;
    }
  }

  return true;
};

console.log(canFinish(2, [[1, 0]]));
