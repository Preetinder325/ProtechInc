(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const counters = Array.from(document.querySelectorAll("[data-count-to]"));
  const ratings = Array.from(document.querySelectorAll("[data-rating]"));
  const animated = new WeakSet();

  const animateCounter = (counter) => {
    if (animated.has(counter)) return;
    animated.add(counter);

    const target = Number(counter.dataset.countTo);
    const decimals = Number(counter.dataset.countDecimals || 0);
    const suffix = counter.dataset.countSuffix || "";
    const duration = 1900;
    const startTime = performance.now();

    if (reduceMotion) {
      counter.textContent = `${target.toFixed(decimals)}${suffix}`;
      return;
    }

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      counter.textContent = `${value.toFixed(decimals)}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        counter.textContent = `${target.toFixed(decimals)}${suffix}`;
      }
    };

    requestAnimationFrame(tick);
  };

  const animateRating = (rating) => {
    if (animated.has(rating)) return;
    animated.add(rating);

    const value = Number(rating.dataset.rating || 0);
    const stars = Array.from(rating.querySelectorAll(".star"));

    stars.forEach((star, index) => {
      const fill = Math.max(0, Math.min(1, value - index)) * 100;
      const delay = reduceMotion ? 0 : index * 170;

      window.setTimeout(() => {
        star.style.setProperty("--star-fill", `${fill}%`);
        star.classList.add("is-lit");
      }, delay);
    });
  };

  const runAnimations = (element) => {
    element.querySelectorAll("[data-count-to]").forEach(animateCounter);
    element.querySelectorAll("[data-rating]").forEach(animateRating);

    if (element.matches("[data-count-to]")) animateCounter(element);
    if (element.matches("[data-rating]")) animateRating(element);
  };

  if (!("IntersectionObserver" in window)) {
    counters.forEach(animateCounter);
    ratings.forEach(animateRating);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runAnimations(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.35 }
  );

  document.querySelectorAll(".stat-card").forEach((card) => observer.observe(card));
})();
