(function () {

  var controller = new ScrollMagic.Controller();

  var tweenP1 = gsap.timeline()
  .fromTo(".p1-logo", { y: 40, opacity: 0, duration: 0.8, ease: "sine.inOut" }, { y: 0, opacity: 1, duration: 0.5, ease: "sine.inOut"}, "with")
  .fromTo(".p1-title", {y: 10, duration: 0.8, ease: "sine.inOut"}, {y: -30, duration: 0.5, ease: "sine.inOut"}, "with")
  .to(".p1-logo", {y: 40, duration: 0.8, ease: "sine.inOut", repeat: -1, yoyo: true});
 

  var sceneP1 = new ScrollMagic.Scene({
    triggerElement: ".p1-trigger-1",
    triggerhook: 0.8
  })
  .setTween(tweenP1)
  .addTo(controller)
  .addIndicators({
    name: "1"
  });

  var tweenP2 = gsap.timeline()
  .fromTo(".p1-wave", { y: 0, duration: 0.8, ease: "sine.inOut" }, { y: -80, duration: 0.5, ease: "sine.inOut"}, "with")
  .fromTo(".illurst", { y: 30, duration: 0.8, ease: "sine.inOut" }, { y: -70, duration: 0.5, ease: "sine.inOut", delay: 0.2}, "with")
  .fromTo(".ill-back", { x: 0, duration: 0.8, ease: "sine.inOut" }, { x: -10, duration: 0.5, ease: "sine.inOut", delay: 0.5}, "with");

  var sceneP2 = new ScrollMagic.Scene({
    triggerElement: ".p1-trigger-2",
    triggerhook: 0.8
  })
  .setTween(tweenP2)
  .addTo(controller)
  .addIndicators({
    name: "2"
  });

  var tweenP3 = gsap.timeline()
  .fromTo(".p2-logo", {y: 10, opacity: 0, duration: 0.8, ease: "sine.inOut" }, {y: -20, opacity: 1, duration: 0.8, ease: "sine.inOut"}, "with")
  .fromTo(".right-box", {y: 10, opacity: 0, duration: 0.8, ease: "sine.inOut" }, {y: -20, opacity: 1, duration: 0.8, ease: "sine.inOut", delay: 0.5}, "with");

  var sceneP3 = new ScrollMagic.Scene({
    triggerElement: ".p2-trigger-1",
    triggerhook: 0.8
  })
  .setTween(tweenP3)
  .addTo(controller)
  .addIndicators({
    name: "3"
  });

  var tweenP4 = gsap.timeline()
  .fromTo(".p2-text", {y: 10, scale: 1, opacity: 0, duration: 0.8, ease: "sine.inOut" }, {y: -20, scale: 1.2, opacity: 1, duration: 0.7, ease: "sine.inOut"}, "with");

  var sceneP4 = new ScrollMagic.Scene({
    triggerElement: ".p2-trigger-2",
    triggerhook: 0.8
  })
  .setTween(tweenP4)
  .addTo(controller)
  .addIndicators({
    name: "4"
  });

  var tweenP5 = gsap.timeline()
  .fromTo(".p2-wave1", { y: 80, duration: 0.8, ease: "sine.inOut" }, { y: 0, duration: 0.5, ease: "sine.inOut"}, "with")
  .fromTo(".p2-wave2", { y: 80, duration: 0.8, ease: "sine.inOut" }, { y: 0, duration: 0.5, ease: "sine.inOut", delay: 0.1}, "with")
  .fromTo(".p3-title1", {y: 10, opacity: 0, duration: 0.8, ease: "sine.inOut" }, {y: -20, opacity: 1, duration: 0.8, ease: "sine.inOut", delay: 0.2}, "with");

  var sceneP5 = new ScrollMagic.Scene({
    triggerElement: ".p2-trigger-3",
    triggerhook: 0.8
  })
  .setTween(tweenP5)
  .addTo(controller)
  .addIndicators({
    name: "5"
  });

  var tweenP6 = gsap.timeline()
  .fromTo(".p3-c1", {opacity: 0, scale: 1.2, duration: 0.8, ease: "sine.inOut"}, {opacity: 1, scale: 1, duration: 0.8, ease: Back.easeInOut}, "with")
  .fromTo(".p3-c2", {opacity: 0, scale: 1.2, duration: 0.8, ease: "sine.inOut"}, {opacity: 1, scale: 1, duration: 0.8, ease: Back.easeInOut, delay: 0.5}, "with")
  .fromTo(".p3-c3", {opacity: 0, scale: 1.2, duration: 0.8, ease: "sine.inOut"}, {opacity: 1, scale: 1, duration: 0.8, ease: Back.easeInOut, delay: 1}, "with")
  .fromTo(".p3-c4", {opacity: 0, scale: 1.2, duration: 0.8, ease: "sine.inOut"}, {opacity: 1, scale: 1, duration: 0.8, ease: Back.easeInOut, delay: 1.5}, "with")

  var sceneP6 = new ScrollMagic.Scene({
    triggerElement: ".p3-trigger-1",
    triggerhook: 0.8
  })
  .setTween(tweenP6)
  .addTo(controller)
  .addIndicators({
    name: "6"
  });

  var tweenP7 = gsap.timeline()
  .fromTo(".p3-title2", {y: -10, opacity: 0, scale: 1, duration: 0.8, ease: "sine.inOut"}, {y: 20, opacity: 1, scale: 1.2, duration: 0.8, ease: "sine.inOut", delay: 0.1}, "with")
  .fromTo(".p3-wave1", { y: -80, duration: 0.8, ease: "sine.inOut" }, { y: 0, duration: 0.5, ease: "sine.inOut", delay: 0.25}, "with")
  .fromTo(".p3-wave2", { y: -80, duration: 0.8, ease: "sine.inOut" }, { y: 0, duration: 0.5, ease: "sine.inOut", delay: 0.35}, "with");

  var sceneP7 = new ScrollMagic.Scene({
    triggerElement: ".p3-trigger-2",
    triggerhook: 0.8
  })
  .setTween(tweenP7)
  .addTo(controller)
  .addIndicators({
    name: "7"
  });

  var tweenP8 = gsap.timeline()
  .fromTo(".p4-title", {y: -10, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 20, opacity: 1, duration: 0.8, ease: "sine.inOut", delay: 0.1}, "with");

  var sceneP8 = new ScrollMagic.Scene({
    triggerElement: ".p4-trigger-1",
    triggerhook: 0.8
  })
  .setTween(tweenP8)
  .addTo(controller)
  .addIndicators({
    name: "8"
  });

  var tweenP9 = gsap.timeline()
  .fromTo(".cir1", {opacity: 0.1, scale: 1.4, duration: 0.8, ease: Bounce.easeOut}, {opacity: 1, scale: 1, duration: 0.8, ease: Bounce.easeOut}, "with1")
  .fromTo(".p4-main-1", {y: -10, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 10, opacity: 1, duration: 0.8, ease: Back.easeOut}, "with1")
  .fromTo(".cir2", {opacity: 0.1, scale: 1.4, duration: 0.8, ease: Bounce.easeOut}, {opacity: 1, scale: 1, duration: 0.8, ease: Bounce.easeOut}, "with2")
  .fromTo(".p4-main-2", {y: -10, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 10, opacity: 1, duration: 0.8, ease: Back.easeOut}, "with2")
  .fromTo(".cir3", {opacity: 0.1, scale: 1.4, duration: 0.8, ease: Bounce.easeOut}, {opacity: 1, scale: 1, duration: 0.8, ease: Bounce.easeOut}, "with3")
  .fromTo(".p4-main-3", {y: -10, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 10, opacity: 1, duration: 0.8, ease: Back.easeOut}, "with3");

  var sceneP9 = new ScrollMagic.Scene({
    triggerElement: ".p4-trigger-2",
    triggerhook: 0.8
  })
  .setTween(tweenP9)
  .addTo(controller)
  .addIndicators({
    name: "9"
  });

})();