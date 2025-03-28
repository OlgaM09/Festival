
const duration = 5 * 10,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const interval = setInterval(function () {
  const timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  const particleCount = 50 * (timeLeft / duration);


  document.getElementById('text').addEventListener('click', function () {
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.9, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(1, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
});















