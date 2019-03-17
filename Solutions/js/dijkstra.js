const { insert, extractMin, relax } = require('./utils');

function dijkstra(Graph, s) {
    const shortest = {};
    const prev = {};
    const Q = {};

    for (v in Graph) {
        if (Graph[v] === s) {
            shortest[v] = 0;
        } else {
            shortest[v] = Infinity;
        }
        prev[v] = null;
        insert(Q, v, Graph);
    }

    while (Object.keys(Q).length > 0) {
        const u = extractMin(Q, v, shortest);

        for (v in Graph) {
            if (Graph[u][v]) {
                relax(u, v, shortest, prev, Graph);
            }
        }
    }
    return { shortest, prev };
}

const graph = {
    s: { t: 6, y: 4 },
    y: { t: 1, x: 9, z: 3 },
    t: { y: 2, x: 3 },
    x: { z: 4 },
    z: { x: 5, s: 7 }
};

const { shortest, prev } = dijkstra(graph, graph.s);
console.log(shortest, prev);
