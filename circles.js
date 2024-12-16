function setup() {
  createCanvas(800, 800);
  noLoop();
  noFill();
  stroke(0);
  strokeWeight(2);
  
  // Start the recursive drawing from the center of the canvas
  let size = 200; // Initial size of the circle
  drawCircles(width / 2, height / 2, size, 4); // Change 4 for more or fewer recursion levels
}

function drawCircles(x, y, size, depth) {
  if (depth <= 0 || size < 2) return; // Base case: stop recursion

  // Draw the main circle at this level
  ellipse(x, y, size, size);

  // Calculate the offset for surrounding circles
  let offset = size / 2;

  // Recursively draw smaller circles at the four surrounding positions
  drawCircles(x - offset, y - offset, size / 2, depth - 1); // Top-left
  drawCircles(x + offset, y - offset, size / 2, depth - 1); // Top-right
  drawCircles(x - offset, y + offset, size / 2, depth - 1); // Bottom-left
  drawCircles(x + offset, y + offset, size / 2, depth - 1); // Bottom-right
}
