function relax(u, v, shortest, prev, Graph) {
    const weight = Graph[u][v];
    if (shortest[u] + weight < shortest[v]) {
        shortest[v] = shortest[u] + weight;
        prev[v] = u;
    }
}
function insert(Q, v, Graph) {
    Q[v] = Graph[v];
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
module.exports = { insert, extractMin, relax };
