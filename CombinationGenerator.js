module.exports = function generator(numbers) {
    const sortedNumbers = numbers.slice().sort();
    const maxSum = sortedNumbers.reduce((sum, val) => sum + val);
    const resultGrid = Array(maxSum);

    for (let i = 0; i < maxSum; i++) {
        const row = Array(sortedNumbers.length);

        for (let j = 0; j < sortedNumbers.length; j++) {
            row[j] = [];
        }

        resultGrid[i] = row;
    }

    sortedNumbers.forEach((number) => {
        resultGrid[number - 1][0].push([number]);
    });

    for (let i = 1; i < sortedNumbers.length; i++) {
        for (let j = 0; j < maxSum; j++) {
            sortedNumbers.forEach(number => {
                if (number > j) {
                    return;
                }

                const prevCombinations = resultGrid[j - number][i - 1];
                const possibleToAdd = prevCombinations.filter(comb => comb.length && comb[0] > number);

                possibleToAdd.forEach(comb => {
                    resultGrid[j][i].push([number, ...comb]);
                });
            });
        }
    }

    return resultGrid;
}