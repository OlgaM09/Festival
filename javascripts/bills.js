window.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("money-container");
  
   
    container.addEventListener("mouseover", () => {
      container.classList.add("spread");
    });
  
   
    container.addEventListener("mouseleave", () => {
      container.classList.remove("spread");
    });
  });