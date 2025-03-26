
  window.addEventListener('DOMContentLoaded', () => {
    const cakeScene = document.querySelector('.cake-scene');
    const cakeImage = document.querySelector('.cake');
    let dragItem = null;
    let offsetX = 0;
    let offsetY = 0;
    let fireworksTriggered = false; 

  
    const draggables = document.querySelectorAll('.candle, .star, .dot');

  
    draggables.forEach(item => {
      item.style.position = 'absolute';
      item.style.cursor = 'grab';

      item.addEventListener('mousedown', (e) => {
        dragItem = item;
        const rect = dragItem.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        dragItem.style.cursor = 'grabbing';
      });
    });

 
    document.addEventListener('mousemove', (e) => {
      if (!dragItem) return;
      const containerRect = cakeScene.getBoundingClientRect();
      const newLeft = e.clientX - containerRect.left - offsetX;
      const newTop = e.clientY - containerRect.top - offsetY;
      dragItem.style.left = newLeft + 'px';
      dragItem.style.top = newTop + 'px';
    });

   
    document.addEventListener('mouseup', (e) => {
      if (dragItem) {
        dragItem.style.cursor = 'grab';
      }
      dragItem = null;

    
      if (!fireworksTriggered && allDraggablesOnCake()) {
        fireworksTriggered = true;
        const cakeRect = cakeImage.getBoundingClientRect();
        const centerX = cakeRect.left + cakeRect.width / 2;
        const centerY = cakeRect.top + cakeRect.height / 2;
        createFireworks(centerX, centerY);
      }
    });

    function allDraggablesOnCake() {
      const cakeRect = cakeImage.getBoundingClientRect();
      let allInside = true;
      draggables.forEach(item => {
        const rect = item.getBoundingClientRect();
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

    
    function createFireworks(x, y) {
      const fireworks = document.createElement('div');
      fireworks.className = 'fireworks';
      fireworks.style.left = x + 'px';
      fireworks.style.top = y + 'px';
      cakeScene.appendChild(fireworks);

  
      for (let i = 0; i < 1000; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const angle = Math.random() * 2 * Math.PI;
        const distance = 1000 + Math.random() * 2000; 
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        particle.style.backgroundColor = randomColor();
        fireworks.appendChild(particle);
      }

    
      setTimeout(() => {
        fireworks.remove();
      }, 1000);
    }

  
    function randomColor() {
      const colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];
      return colors[Math.floor(Math.random() * colors.length)];
    }
  });

