
window.addEventListener("load", function() {

  const canvas = document.getElementById("scratch1");
  const context = canvas.getContext("2d");

  
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;

  
  const init = () => {
    context.fillStyle = "#5800FF";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  const scratch = (x, y) => {
    context.globalCompositeOperation = "destination-out";
    context.beginPath();
    context.arc(x, y, 24, 0, 2 * Math.PI);
    context.fill();
  };

 
  canvas.addEventListener("mousemove", (event) => {
    scratch(event.offsetX, event.offsetY);
  });

  init(); 
});