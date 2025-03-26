

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('drawCanvas');
    const ctx = canvas.getContext('2d');
    const customCursor = document.getElementById('customCursor');
  
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
  
   
    ctx.strokeStyle = '#000000'; 
    ctx.lineWidth = 2; 
    ctx.lineJoin = 'round'; 
    ctx.lineCap = 'round'; 
  
    
    canvas.addEventListener('mousemove', function (e) {
      const rect = canvas.getBoundingClientRect(); 
      const x = e.clientX - rect.left; 
      const y = e.clientY - rect.top; 
  
  
      customCursor.style.display = 'block';
      customCursor.style.left = `${e.clientX}px`; 
      customCursor.style.top = `${e.clientY}px`;
    });
  
    
    canvas.addEventListener('mouseleave', function () {
      customCursor.style.display = 'none';
    });
  
    
    canvas.addEventListener('mousedown', function (e) {
      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY]; 
    });
  
   
    canvas.addEventListener('mousemove', function (e) {
      if (isDrawing) {
        const x = e.offsetX;
        const y = e.offsetY;

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.closePath();
  
       
        [lastX, lastY] = [x, y];
      }
    });
  
    
    canvas.addEventListener('mouseup', function () {
      isDrawing = false;
    });
  
    
    canvas.addEventListener('mouseleave', function () {
      isDrawing = false;
    });
  });