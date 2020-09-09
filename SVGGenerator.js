const digitToCoord = digit => ({
    x: (digit - 1) % 3,
    y: 2 - Math.floor((digit - 1) / 3),
});

module.exports = function SVGGenerator({digits, cellSize = 20}) {
    const canvasWidth = 3 * cellSize;
    const canvasHeight = 3 * cellSize;

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${canvasWidth} ${canvasHeight}">
    <style>.digit { fill: black; } .border { stroke-width: 2px; stroke: black; fill: none; }</style>
    <rect class="border" width="${canvasWidth}" height="${canvasHeight}" />
    ${digits.map(d => {
        const {x, y} = digitToCoord(d);
        
        return `<rect class="digit" x="${x * cellSize}" y="${y * cellSize}" width="${cellSize}" height="${cellSize}" />`;
    }).join('\n')}
</svg>`
};