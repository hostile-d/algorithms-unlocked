function relax(u, v, shortest, prev, Graph) {
    const weight = Graph[u][v];
    if (shortest[u] + weight < shortest[v]) {
        shortest[v] = shortest[u] + weight;
        prev[v] = u;
    }
}

function extractMin(Q, v, shortest) {
    let u = null;
    let smallest = Infinity;
    for (v in shortest) {
        if (Q[v] && shortest[v] < smallest) {
            smallest = shortest[v];
            u = v;
        }
    }
    delete Q[u];
    return u;
}
module.exports = { extractMin, relax };
