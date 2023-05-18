
// ? Opción con visited como arreglito
// function SolveGraph(graph, start, target, visited = []) {
//   // Tu código aquí
//   // console.log(start);
//   // console.log(target);
//   // if(graph[start].includes(target)) return true;
//   // console.log(visited);
//   if(visited.includes(start)) return false;
//   visited.push(start)
//   console.log(visited[4]);
//   for (const node of graph[start]) {
//     // console.log(node);
//     if(node === target) return true
//     if(SolveGraph(graph, node, target, visited)) return true
//   }
//   return false;
// }

// ? Opción con visited como objetito

function SolveGraph(graph, start, target, visited = {}) {
  // Tu código aquí
  // console.log(start);
  // console.log(target);
  // if(graph[start].includes(target)) return true;
  // console.log(visited);
  if(visited[start]) return false;
 visited[start] = true
  // console.log(visited);
  for (const node of graph[start]) {
    // console.log(node);
    if(node === target) return true
    if(SolveGraph(graph, node, target, visited)) return true
  }
  return false;
}

// * O(n)

module.exports = SolveGraph;

const graph = {
  a: ["c"],
  b: ["c"],
  c: ["s", "r","z"],
  d: ["a"],
  s: ["a", "c"],
  r: ["d"],
  z: ["z"],
}

  console.log(SolveGraph(graph, "a", "c"))//(true);
  console.log(SolveGraph(graph, "a", "r"))//(true);
  console.log(SolveGraph(graph, "a", "d"))//(true);
  console.log(SolveGraph(graph, "s", "b"))//(false);
  console.log(SolveGraph(graph, "c", "z"))