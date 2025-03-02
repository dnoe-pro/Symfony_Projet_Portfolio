const initializeCircleCursor = () => {
  const circle = document.getElementById("cursor-circle");
  if (!circle) return;
  let mouseX = 0, mouseY = 0;

  const updatePosition = () => {
      circle.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      requestAnimationFrame(updatePosition);
  };

  document.addEventListener('mousemove', (e) => {
      const offsetX = circle.offsetWidth / 2;
      const offsetY = circle.offsetHeight / 2;
      mouseX = e.clientX - offsetX;
      mouseY = e.clientY - offsetY;
  });
  updatePosition();
};

const init = () => {
  initializeCircleCursor();
  setupAJAXNavigation();
};

const setupAJAXNavigation = () => {
  const links = document.querySelectorAll("a");
  links.forEach(link => {
      link.addEventListener("click", async (e) => {
          if (link.target === "_blank" || link.href.startsWith("#")) return;
          e.preventDefault();
          const response = await fetch(link.href, { headers: { "X-Requested-With": "XMLHttpRequest" } });
          if (!response.ok) {
              console.error("Erreur lors du chargement de la page");
              return;
          }

          const html = await response.text();
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          const newContent = doc.querySelector("body");
          document.body.innerHTML = newContent.innerHTML;
          init();
      });
  });
};
document.addEventListener("DOMContentLoaded", init);