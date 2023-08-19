import { TimelineMax } from "gsap/gsap-core";
var tl = new TimelineMax({
    paused:true
  });
  // letter animation
  tl.fromTo(".anim-typewriter", 8, {
    width: "0",
  }, {
    width: "20.18em", /* same as CSS .line-1 width */
    ease:  SteppedEase.config(37)
  }, 0);
  // text cursor animation
  tl.fromTo(".anim-typewriter", 0.5, {
    "border-right-color": "rgba(255,255,255,0.75)"
  }, {
    "border-right-color": "rgba(255,255,255,0)",
    repeat: -1,
    ease:  SteppedEase.config(37)
  }, 0);
  
  tl.play();