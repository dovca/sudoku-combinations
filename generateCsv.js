const combinationGenerator = require("./CombinationGenerator");
const digits = process.argv[2].split(',').map(s => parseInt(s, 10));
const grid = combinationGenerator(digits);
const csvContents = grid.map(row =>
    row.map(cell =>
        cell.map(comb =>
            comb.map(num =>
                num.toString(row.length + 1).toUpperCase()
            ).join('')
        ).join(',')
    ).join(';')
).join('\n')

process.stdout.write(csvContents);