const fs = require('fs');
const combinationGenerator = require("./CombinationGenerator");
const SVGGenerator = require("./SVGGenerator");
const digits = process.argv[2].split(',').map(s => parseInt(s, 10));
const grid = combinationGenerator(digits);

grid.forEach((row, rowIndex) => {
    row.forEach((cell) => {
        cell.forEach(comb => {
            const svgContents = SVGGenerator({
                digits: comb,
                cellSize: 20,
            });

            const slug = `${rowIndex + 1}_${comb.join('')}`;

            fs.writeFileSync(`svg/${slug}.svg`, svgContents);
        })
    })
});