function adjustBottomPosition(viewBounds, height) {
    // Calculate the bottom position ensuring it is not negative
    var bottom = Math.max(0, Math.ceil(viewBounds.y2 - height));
    return bottom;
}

// Example usage:
var viewBounds = { x1: 0, y1: 0, x2: 100, y2: 200 };
var height = 50;

var bottomPosition = adjustBottomPosition(viewBounds, height);
console.log(bottomPosition); // Outputs the calculated bottom position
