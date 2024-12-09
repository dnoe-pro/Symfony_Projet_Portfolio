// script.js
const circle = document.getElementById('cursor-circle');
let mouseX = 0, mouseY = 0;

// Met à jour la position
const updatePosition = () => {
  circle.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  requestAnimationFrame(updatePosition);
};

// Suivi de la position du curseur
document.addEventListener('mousemove', (e) => {
  const offsetX = circle.offsetWidth / 2;
  const offsetY = circle.offsetHeight / 2;
  mouseX = e.clientX - offsetX;
  mouseY = e.clientY - offsetY;
});

// Lance la boucle d'animation
updatePosition();
``
