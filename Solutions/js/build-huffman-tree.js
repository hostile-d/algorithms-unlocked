const { extractMin } = require('./utils');

function buildHuffmanTree(char, freq, n) {
    const Q = {};
    for (i = 0; i < n; i++) {
        const z = {
            char: char[i],
            freq: freq[i]
        };
        insert(Q, z);
    }
}
buildHuffmanTree();
