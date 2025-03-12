// document.addEventListener('DOMContentLoaded', function () {
//     const canvas = document.getElementById('drawCanvas');
//     const ctx = canvas.getContext('2d');
//     const customCursor = document.getElementById('customCursor');
  
//     let isDrawing = false;
//     let lastX = 0;
//     let lastY = 0;
  
//     // Set up initial drawing styles
//     ctx.strokeStyle = '#000000'; // Pen color
//     ctx.lineWidth = 2; // Pen thickness
//     ctx.lineJoin = 'round'; // Make lines smoother
//     ctx.lineCap = 'round'; // Make line ends round
  
//     // Show and move the custom cursor when mouse moves over the canvas
//     canvas.addEventListener('mousemove', function (e) {
//       const x = e.offsetX;
//       const y = e.offsetY;
  
//       // Update the custom cursor's position
//       customCursor.style.display = 'block';
//       customCursor.style.left = `${x}px`;
//       customCursor.style.top = `${y}px`;
//     });
  
//     // Hide the custom cursor when mouse leaves the canvas
//     canvas.addEventListener('mouseleave', function () {
//       customCursor.style.display = 'none';
//     });
  
//     // Start drawing when mouse is pressed down
//     canvas.addEventListener('mousedown', function (e) {
//       isDrawing = true;
//       [lastX, lastY] = [e.offsetX, e.offsetY]; // Set the starting point
//     });
  
//     // Draw while mouse is moving
//     canvas.addEventListener('mousemove', function (e) {
//       if (isDrawing) {
//         const x = e.offsetX;
//         const y = e.offsetY;
  
//         // Draw a line from the last position to the current position
//         ctx.beginPath();
//         ctx.moveTo(lastX, lastY);
//         ctx.lineTo(x, y);
//         ctx.stroke();
//         ctx.closePath();
  
//         // Update the last position
//         [lastX, lastY] = [x, y];
//       }
//     });
  
//     // Stop drawing when mouse is released
//     canvas.addEventListener('mouseup', function () {
//       isDrawing = false;
//     });
  
//     // Stop drawing if mouse leaves the canvas
//     canvas.addEventListener('mouseleave', function () {
//       isDrawing = false;
//     });
//   });


document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('drawCanvas');
    const ctx = canvas.getContext('2d');
    const customCursor = document.getElementById('customCursor');
  
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
  
    // Set up initial drawing styles
    ctx.strokeStyle = '#000000'; // Pen color
    ctx.lineWidth = 2; // Pen thickness
    ctx.lineJoin = 'round'; // Make lines smoother
    ctx.lineCap = 'round'; // Make line ends round
  
    // Show and move the custom cursor when mouse moves over the canvas
    canvas.addEventListener('mousemove', function (e) {
      const rect = canvas.getBoundingClientRect(); // Get canvas position relative to the viewport
      const x = e.clientX - rect.left; // Calculate mouse X position relative to the canvas
      const y = e.clientY - rect.top; // Calculate mouse Y position relative to the canvas
  
      // Update the custom cursor's position
      customCursor.style.display = 'block';
      customCursor.style.left = `${e.clientX}px`; // Position relative to the viewport
      customCursor.style.top = `${e.clientY}px`;
    });
  
    // Hide the custom cursor when mouse leaves the canvas
    canvas.addEventListener('mouseleave', function () {
      customCursor.style.display = 'none';
    });
  
    // Start drawing when mouse is pressed down
    canvas.addEventListener('mousedown', function (e) {
      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY]; // Set the starting point
    });
  
    // Draw while mouse is moving
    canvas.addEventListener('mousemove', function (e) {
      if (isDrawing) {
        const x = e.offsetX;
        const y = e.offsetY;
  
        // Draw a line from the last position to the current position
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.closePath();
  
        // Update the last position
        [lastX, lastY] = [x, y];
      }
    });
  
    // Stop drawing when mouse is released
    canvas.addEventListener('mouseup', function () {
      isDrawing = false;
    });
  
    // Stop drawing if mouse leaves the canvas
    canvas.addEventListener('mouseleave', function () {
      isDrawing = false;
    });
  });