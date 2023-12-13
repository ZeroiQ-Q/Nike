var tl = gsap.timeline();

tl.from(".left img", {
  delay: 0.3,
  scale: 2.5,
  duration: 0.8,
});

tl.from(".left .moto span", {
  opacity: 0,
  duration: 0.25,
  stagger: 0.1,
});

tl.from(".nav p", {
  opacity: 0,
  y: "-100%",
  duration: 0.8,
  stagger: 0.15,
  ease: "easeInOut",
});

tl.from(".model p", {
  y: "100%",
  opacity: 0,
  duration: 0.45,
  stagger: 0.3,
  ease: "easeInOut",
});

tl.from(".description p", {
  y: "100%",
  opacity: 0,
  duration: 0.35,
  ease: "easeInOut",
});

tl.from(".image-section .shoe", {
  x: "100%",
  opacity: 0,
  duration: 1,
  ease: "easeInOut",
});

tl.from(".image-section div", {
  opacity: 0,
  duration: 0.8,
  stagger: 0.25,
});

tl.from(".price p", {
  x: -100,
  opacity: 0,
  duration: 0.3,
  ease: "easeInOut",
});

tl.from(".description button", {
  opacity: 0,
});
