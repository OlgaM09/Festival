
window.addEventListener("load", function() {
  // Second script
  const canvas = document.getElementById("scratch1");
  const context = canvas.getContext("2d");

  // Ensure the canvas size matches its displayed size
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;

  // Initialize the canvas with a solid green rectangle (the scratch layer)
  const init = () => {
    context.fillStyle = "#5800FF";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  // The scratch function will erase a circular area at (x, y)
  const scratch = (x, y) => {
    // Set composite operation to "destination-out" so drawing will erase pixels
    context.globalCompositeOperation = "destination-out";
    context.beginPath();
    context.arc(x, y, 24, 0, 2 * Math.PI);
    context.fill();
  };

  // Listen for mouse movements over the canvas
  canvas.addEventListener("mousemove", (event) => {
    scratch(event.offsetX, event.offsetY);
  });

  init(); // Draw the initial green rectangle
});