function faStringMatcher(t, nextState, m) {
    const n = t.length;
    let state = 0;
    for (let i = 1; i < n; i++) {
        if (state === m) {
            console.log(`The pattern occurs with shift ${i - m}`);
        }
        state = nextState[state][t[i]];
    }
}

function generateState(p, alphabet) {
    // const m = p.length;
    // for (let i = 0; i < m; i++) {
    //     for (let j = 0; j < alphabet.length; j++) {
    //         let k = Math.min(m + 1, i + 2);
    //         //https://github.com/onurozuduru/string-matcher-project
    //         while (p[k] === p[i] + alphabet[j]) {
    //             k--;
    //         }
    //         nextState[i][alphabet[j]] = k;
    //     }
    // }
    // return nextState;
}
const t = 'GTAACAGTAAACG';
const p = 'AAC';
const alphabet = 'ACGT';
// const nextState = generateState(p, alphabet);
const nextState = [
    { A: 1, C: 0, G: 0, T: 0 },
    { A: 2, C: 0, G: 0, T: 0 },
    { A: 2, C: 3, G: 0, T: 0 },
    { A: 1, C: 0, G: 0, T: 0 }
];

const result = faStringMatcher(t, nextState, p.length);
