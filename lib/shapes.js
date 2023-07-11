function generateShapes(shape, wat) {
    if (shape.toLocaleLowerCase() == 'triangle') {
        const triangle = ' <polygon points="0 200, 100 0, 200 200" width="200" height="200" ' + wat + ' /> '
        return triangle
    }
    if (shape.toLocaleLowerCase() == 'square') {
        const square = ' <rect x="0" y-"0" width="200" height="200" ' + wat + ' /> '
        return square
    }
    if (shape.toLocaleLowerCase() == 'circle') {
        const circle = ' <circle cx="100" cy="100" r="100" ' + wat + ' /> '
        return circle
    }
        exports = { generateShapes }

// ERROR in this code. Something isn't right. 