const { relax } = require('./utils');
const graph = {
    s: { t: 6, y: 7 },
    y: { x: -3, z: 9 },
    t: { y: 8, x: 5, z: -4 },
    x: { t: -2 },
    z: { s: 7 }
};

function BellmanFord(Graph, s) {
    const shortest = {};
    const prev = {};

    for (v in Graph) {
        if (Graph[v] === s) {
            shortest[v] = 0;
        } else {
            shortest[v] = Infinity;
        }

        prev[v] = null;
    }

    for (let i = 0; i < Object.keys(Graph).length; i++) {
        const u = Object.keys(Graph)[i];
        for (v in Graph[u]) {
            relax(u, v, shortest, prev, Graph);
        }
    }

    return { shortest, prev };
}

const { shortest, prev } = BellmanFord(graph, graph.s);
console.log(shortest, prev);
