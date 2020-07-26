class Graph {
  constructor() {
    this.adjacencyList = [];
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex] === undefined)
      this.adjacencyList[vertex] = [];
    return this;
  }

  addEdge(vertex1, vertex2) {
    if (
      this.adjacencyList[vertex1] === undefined ||
      this.adjacencyList[vertex2] === undefined
    )
      return undefined;

    this.adjacencyList[vertex2].push(vertex1);
    this.adjacencyList[vertex1].push(vertex2);
  }

  removeEdge(vertex1, vertex2) {
    let adjacencyList = this.adjacencyList;
    if (
      adjacencyList[vertex1] === undefined ||
      adjacencyList[vertex2] === undefined
    )
      return undefined;
    adjacencyList[vertex1] = adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    adjacencyList[vertex2] = adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex] === undefined) return undefined;
    for (let v of this.adjacencyList[vertex]) {
      this.removeEdge(v, vertex);
    }
    delete this.adjacencyList[vertex];
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
console.log(graph.removeVertex());
console.log(graph.removeEdge("india", "russia"));
print(graph.adjacencyList);
