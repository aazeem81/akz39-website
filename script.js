document.addEventListener("DOMContentLoaded", () => {
  const animatedItems = document.querySelectorAll(
    "section, .service-card, .portfolio-list div, .feature-card, .contact-form"
  );

  animatedItems.forEach((item) => {
    item.classList.add("reveal-on-scroll");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -60px 0px",
    }
  );

  animatedItems.forEach((item) => observer.observe(item));
});
