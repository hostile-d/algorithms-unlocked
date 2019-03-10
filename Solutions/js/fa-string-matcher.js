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
    const m = p.length;

    let nextState = [];
    for (let i = 0; i < m + 1; i++) {
        //i is iterating over FA states
        nextState[i] = {};
        for (let j = 0; j < alphabet.length; j++) {
            //j is iterating over all alphabet characters
            let k = Math.min(m, i + 1);
            while (!(p.slice(0, i) + alphabet[j]).endsWith(p.slice(0, k))) {
                k--;
            }
            nextState[i][alphabet[j]] = k;
        }
    }
    return nextState;
}

const t = 'GTAACAGTAAACG';
const p = 'AAC';
const alphabet = 'ACGT';
const nextState = generateState(p, alphabet);

const result = faStringMatcher(t, nextState, p.length);
console.log(result);
