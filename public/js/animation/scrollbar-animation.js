document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("scrollTopBtn");
  
    function updateScrollButton() {
      const scrollbarHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (!btn) return;
      if (scrollbarHeight > 10) {
        const scrollPercentage = window.scrollY / scrollbarHeight;
        const minTop = 50; 
        const maxTop = window.innerHeight - 150; 
        const topPosition = minTop + scrollPercentage * (maxTop - minTop);
        btn.style.position = "fixed";
        btn.style.top = `${topPosition}px`;
        btn.style.right = "10px";
        btn.style.transform = "none";
        btn.style.opacity = "1";
        btn.classList.remove("hidden");
      } else {
        btn.style.position = "fixed";
        btn.style.top = "50%";
        btn.style.right = "10px";
        btn.style.transform = "translateY(-50%)";
        btn.style.opacity = "1";
        btn.classList.remove("hidden");
      }
    }
    document.addEventListener("scroll", updateScrollButton);
    window.addEventListener("resize", updateScrollButton);
    updateScrollButton(); 
  });
  