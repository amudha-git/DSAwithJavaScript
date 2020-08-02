class Graph {
  constructor() {
    // to store vertex and its neighbours
    //   [
    //       india:['china','sri lanka'],
    //       srilanka:[ neighbours ],
    //       china: [neighbors]
    //     ]

    this.adjacencyList = [];
  }

  addVertex(vertex) {
    // check if vertex exists or not
    if (this.adjacencyList[vertex] === undefined)
      // if vertex doesnot exist, make it an empty array so that we can push neighbours into it
      this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    const adjacencyList = this.adjacencyList;
    // check if vertices exists or not
    if (
      adjacencyList[vertex1] === undefined ||
      adjacencyList[vertex2] === undefined
    )
      return undefined;
    // push vertex1 to vertex2's neighbour list
    adjacencyList[vertex2].push(vertex1);
    // push vertex2 to vertex1's neighbour list
    adjacencyList[vertex1].push(vertex2);
  }

  removeEdge(vertex1, vertex2) {
    const adjacencyList = this.adjacencyList;
    // check if vertices exists or not
    if (
      adjacencyList[vertex1] === undefined ||
      adjacencyList[vertex2] === undefined
    )
      return undefined;
    // remove vertex2 from vertex1's neighbour list
    adjacencyList[vertex1] = adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    );

    // remove vertex1 from vertex2's neighbour list
    adjacencyList[vertex2] = adjacencyList[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  }

  removeVertex(vertex) {
    const adjacencyList = this.adjacencyList;
    // check if vertex exists or not
    if (adjacencyList[vertex] === undefined) return undefined;
    // remove every edge between other vertices
    for (let neightbourVertex of adjacencyList[vertex]) {
      // remove edge between currentVertex and neighbourVertex
      this.removeEdge(neightbourVertex, vertex);
    }
    // delete the vertex from adjacencyList
    delete adjacencyList[vertex];
  }
}

function print(data) {
  console.table(data);
}

const graph = new Graph();

graph.addVertex("india");
graph.addVertex("china");
graph.addVertex("russia");
graph.addVertex("japan");
graph.addVertex("united states");
graph.addVertex("canada");
graph.addVertex("mexico");
graph.addVertex("brazil");
graph.addVertex("argentina");
graph.addVertex("south africa");
graph.addVertex("madagascar");
graph.addVertex("pakistan");
graph.addVertex("australia");
graph.addVertex("new zealand");
graph.addVertex("sri lanka");

graph.addEdge("india", "china");
graph.addEdge("china", "russia");
graph.addEdge("russia", "japan");
graph.addEdge("china", "australia");
graph.addEdge("australia", "new zealand");
graph.addEdge("japan", "united states");
graph.addEdge("united states", "canada");
graph.addEdge("canada", "mexico");
graph.addEdge("mexico", "brazil");
graph.addEdge("brazil", "south africa");
graph.addEdge("brazil", "argentina");
graph.addEdge("south africa", "argentina");
graph.addEdge("south africa", "madagascar");
graph.addEdge("madagascar", "pakistan");
graph.addEdge("pakistan", "india");
graph.addEdge("india", "sri lanka");

print(graph.adjacencyList);

graph.removeVertex("japan");
console.log(graph.removeEdge("india", "india"));
print(graph.adjacencyList);
