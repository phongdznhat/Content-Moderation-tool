// Initialize Lucide Icons
lucide.createIcons();

// Intersection Observer for Reveal Animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

// Observe all reveal elements
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
