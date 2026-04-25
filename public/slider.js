(() => {
  const sliders = Array.from(document.querySelectorAll("[data-slider]"));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  sliders.forEach((slider) => {
    const slides = Array.from(slider.querySelectorAll(".auto-slider__slide"));
    const dots = Array.from(slider.querySelectorAll(".auto-slider__dot"));
    if (slides.length < 2) return;

    let activeIndex = 0;
    let timerId = null;

    const showSlide = (nextIndex) => {
      activeIndex = (nextIndex + slides.length) % slides.length;

      slides.forEach((slide, index) => {
        slide.classList.toggle("is-active", index === activeIndex);
      });

      dots.forEach((dot, index) => {
        const isActive = index === activeIndex;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-current", isActive ? "true" : "false");
      });
    };

    const stop = () => {
      if (timerId) {
        window.clearInterval(timerId);
        timerId = null;
      }
    };

    const start = () => {
      if (reduceMotion || timerId) return;
      timerId = window.setInterval(() => showSlide(activeIndex + 1), 3800);
    };

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        stop();
        showSlide(index);
        start();
      });
    });

    slider.addEventListener("mouseenter", stop);
    slider.addEventListener("mouseleave", start);
    slider.addEventListener("focusin", stop);
    slider.addEventListener("focusout", start);

    showSlide(0);
    start();
  });
})();
