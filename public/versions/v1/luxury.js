(function () {
  // Scroll progress bar
  const bar = document.createElement("div");
  bar.className = "progress";
  document.body.prepend(bar);

  const topbar = document.querySelector(".topbar");

  function onScroll() {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const p = max > 0 ? (h.scrollTop / max) * 100 : 0;
    bar.style.width = p + "%";
    if (topbar) topbar.classList.toggle("scrolled", h.scrollTop > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Reveal on scroll
  const els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
  } else {
    els.forEach((el) => el.classList.add("in"));
  }

  // Soft magnetic buttons
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.08}px, ${y * 0.12}px)`;
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
    });
  });
})();
