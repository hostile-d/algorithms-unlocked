function Dijkstra(Graph, s) {
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
        Q[v] = Graph[v];
    }
    while (Object.keys(Q).length > 0) {
        let u = null;
        let smallest = Infinity;

        for (v in shortest) {
            if (Q[v] && shortest[v] < smallest) {
                smallest = shortest[v];
                u = v;
            }
        }

        delete Q[u];

        for (v in Graph) {
            if (Graph[u][v]) {
                Relax(u, v, shortest, prev, Graph);
            }
        }
    }
    return { shortest, prev };
}

function Relax(u, v, shortest, prev, Graph) {
    const weight = Graph[u][v];
    if (shortest[u] + weight < shortest[v]) {
        shortest[v] = shortest[u] + weight;
        prev[v] = u;
    }
}

const graph = {
    s: { t: 6, y: 4 },
    y: { t: 1, x: 9, z: 3 },
    t: { y: 2, x: 3 },
    x: { z: 4 },
    z: { x: 5, s: 7 }
};

const { shortest, prev } = Dijkstra(graph, graph.s);
console.log(shortest, prev);
