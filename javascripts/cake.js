// window.addEventListener('DOMContentLoaded', () => {
//     // Select the container that holds the cake and its decorations.
//     const cakeScene = document.querySelector('.cake-scene');
//     let dragItem = null;  // The element currently being dragged
//     let offsetX = 0;
//     let offsetY = 0;

//     // Select all draggable items: candles, stars, and dots.
//     const draggables = document.querySelectorAll('.candle, .star, .dot');

//     // Add mousedown event to each draggable item to start dragging.
//     draggables.forEach(item => {
//       // Ensure the element is positioned absolutely (it is already via CSS)
//       item.style.position = 'absolute';
//       // Set a pointer cursor to indicate it can be grabbed.
//       item.style.cursor = 'grab';

//       item.addEventListener('mousedown', (e) => {
//         dragItem = item;
//         // Get the item's current position relative to the viewport.
//         const rect = dragItem.getBoundingClientRect();
//         // Calculate the offset between the mouse pointer and the element's top-left corner.
//         offsetX = e.clientX - rect.left;
//         offsetY = e.clientY - rect.top;
//         // Change the cursor to indicate dragging.
//         dragItem.style.cursor = 'grabbing';
//       });
//     });

//     // Listen for mousemove events on the document.
//     document.addEventListener('mousemove', (e) => {
//       if (!dragItem) return; // Only move if an item is being dragged.
//       // Get the container's position.
//       const containerRect = cakeScene.getBoundingClientRect();
//       // Calculate new positions relative to the container.
//       const newLeft = e.clientX - containerRect.left - offsetX;
//       const newTop = e.clientY - containerRect.top - offsetY;
//       // Update the dragged item's position.
//       dragItem.style.left = newLeft + 'px';
//       dragItem.style.top = newTop + 'px';
//     });

//     // When the mouse is released, stop dragging.
//     document.addEventListener('mouseup', () => {
//       if (dragItem) {
//         dragItem.style.cursor = 'grab';
//       }
//       dragItem = null;
//     });
//   });



  window.addEventListener('DOMContentLoaded', () => {
    const cakeScene = document.querySelector('.cake-scene');
    const cakeImage = document.querySelector('.cake');
    let dragItem = null;
    let offsetX = 0;
    let offsetY = 0;
    let fireworksTriggered = false; // To ensure fireworks appear only once

    // Select all draggable items: candles, stars, and dots.
    const draggables = document.querySelectorAll('.candle, .star, .dot');

    // Add mousedown event to each draggable item to start dragging.
    draggables.forEach(item => {
      // Ensure the element is absolutely positioned (it is via CSS).
      item.style.position = 'absolute';
      // Set a pointer cursor to indicate it can be grabbed.
      item.style.cursor = 'grab';

      item.addEventListener('mousedown', (e) => {
        dragItem = item;
        const rect = dragItem.getBoundingClientRect();
        // Calculate the offset between the mouse pointer and the element's top-left corner.
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        dragItem.style.cursor = 'grabbing';
      });
    });

    // Update position as the mouse moves.
    document.addEventListener('mousemove', (e) => {
      if (!dragItem) return;
      const containerRect = cakeScene.getBoundingClientRect();
      const newLeft = e.clientX - containerRect.left - offsetX;
      const newTop = e.clientY - containerRect.top - offsetY;
      dragItem.style.left = newLeft + 'px';
      dragItem.style.top = newTop + 'px';
    });

    // On mouseup, stop dragging and check if all items are on the cake.
    document.addEventListener('mouseup', (e) => {
      if (dragItem) {
        dragItem.style.cursor = 'grab';
      }
      dragItem = null;

      // Check if all draggable items are on the cake.
      if (!fireworksTriggered && allDraggablesOnCake()) {
        fireworksTriggered = true;
        // Trigger fireworks at the center of the cake.
        const cakeRect = cakeImage.getBoundingClientRect();
        const centerX = cakeRect.left + cakeRect.width / 2;
        const centerY = cakeRect.top + cakeRect.height / 2;
        createFireworks(centerX, centerY);
      }
    });

    // Helper function to determine if all draggables are "on" the cake.
    function allDraggablesOnCake() {
      const cakeRect = cakeImage.getBoundingClientRect();
      let allInside = true;
      draggables.forEach(item => {
        const rect = item.getBoundingClientRect();
        // Calculate the center point of the draggable.
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        if (
          centerX < cakeRect.left ||
          centerX > cakeRect.right ||
          centerY < cakeRect.top ||
          centerY > cakeRect.bottom
        ) {
          allInside = false;
        }
      });
      return allInside;
    }

    // Function to create a simple fireworks effect at (x, y).
    function createFireworks(x, y) {
      const fireworks = document.createElement('div');
      fireworks.className = 'fireworks';
      fireworks.style.left = x + 'px';
      fireworks.style.top = y + 'px';
      cakeScene.appendChild(fireworks);

      // Create 10 particles.
      for (let i = 0; i < 1000; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const angle = Math.random() * 2 * Math.PI;
        const distance = 1000 + Math.random() * 2000; // 50 to 100px
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        particle.style.backgroundColor = randomColor();
        fireworks.appendChild(particle);
      }

      // Remove the fireworks container after 1s.
      setTimeout(() => {
        fireworks.remove();
      }, 1000);
    }

    // Helper function to pick a random color.
    function randomColor() {
      const colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];
      return colors[Math.floor(Math.random() * colors.length)];
    }
  });

