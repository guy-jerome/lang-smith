function calculatePacking() {
  const circleDiameter = parseFloat(
    document.getElementById("circleDiameter").value
  );
  const spaceWidth = parseFloat(document.getElementById("spaceWidth").value);
  const spaceHeight = parseFloat(document.getElementById("spaceHeight").value);

  // Basic row/column packing (we'll enhance this later)
  const circlesPerRow = Math.floor(spaceWidth / circleDiameter);
  const circlesPerColumn = Math.floor(spaceHeight / circleDiameter);
  const maxCircles = circlesPerRow * circlesPerColumn;

  document.getElementById(
    "result"
  ).textContent = `Maximum Circles: ${maxCircles}`;

  // Visualization with Canvas (optional)
  visualizePacking(circlesPerRow, circlesPerColumn, circleDiameter);
}

function visualizePacking(circlesPerRow, circlesPerColumn, circleDiameter) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = document.getElementById("spaceWidth").value;
  canvas.height = document.getElementById("spaceHeight").value;

  for (let row = 0; row < circlesPerColumn; row++) {
    for (let col = 0; col < circlesPerRow; col++) {
      let x = circleDiameter / 2 + col * circleDiameter;
      let y = circleDiameter / 2 + row * circleDiameter;
      ctx.beginPath();
      ctx.arc(x, y, circleDiameter / 2, 0, 2 * Math.PI);
      ctx.stroke();
    }
  }

  document.getElementById("visualization").appendChild(canvas);
}
