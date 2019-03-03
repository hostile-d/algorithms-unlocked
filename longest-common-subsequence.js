function computeLCSTable(x, y, m, n) {
    m++;
    n++;
    const l = matrix(m, n);

    for (let i = 0; i < m; i++) {
        l[i][0] = 0;
    }
    for (let j = 0; j < n; j++) {
        l[0][j] = 0;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (x[i - 1] === y[j - 1]) {
                l[i][j] = l[i - 1][j - 1] + 1;
            } else {
                l[i][j] = Math.max(l[i][j - 1], l[i - 1][j]);
            }
        }
    }
    return l;
}
function matrix(x, y) {
    const matrix = [];
    for (let i = 0; i < x; i++) {
        matrix[i] = [];
        for (let j = 0; j < y; j++) {
            matrix[i][j] = undefined;
        }
    }
    return matrix;
}
function assembleLCS(x, y, l, i, j) {
    if (l[i][j] === 0) {
        return '';
    } else if (x[i - 1] === y[j - 1]) {
        return `${assembleLCS(x, y, l, i - 1, j - 1)}${x[i - 1]}`;
    } else if (l[i][j - 1] > l[i - 1][j]) {
        return `${assembleLCS(x, y, l, i, j - 1)}`;
    } else if (l[i][j - 1] <= l[i - 1][j]) {
        return `${assembleLCS(x, y, l, i - 1, j)}`;
    }
}

const x = 'CATCGA';
const y = 'GTACCGTCA';
const m = x.length;
const n = y.length;
const LCSTable = computeLCSTable(x, y, m, n);
const LCS = assembleLCS(x, y, LCSTable, m, n);
console.log(LCS);
