window.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("money-container");
  
    // When the mouse enters the container, add the "spread" class.
    container.addEventListener("mouseover", () => {
      container.classList.add("spread");
    });
  
    // When the mouse leaves, remove the "spread" class (bills stack back).
    container.addEventListener("mouseleave", () => {
      container.classList.remove("spread");
    });
  });