(function () {

  var controller = new ScrollMagic.Controller();

  var tweenP1 = gsap.timeline()
  .fromTo(".p1-logo", { y: 30, opacity: 0, duration: 0.8, ease: "sine.inOut" }, { y: 0, opacity: 1, duration: 0.5, ease: "sine.inOut"}, "with")
  .fromTo(".p1-title", {y: 0, duration: 0.8, ease: "sine.inOut"}, {y: -30, duration: 0.5, ease: "sine.inOut"}, "with")
  .to(".p1-logo", {y: 30, duration: 0.8, ease: "sine.inOut", repeat: -1, yoyo: true});
 

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
  .fromTo(".p1-wave", { y: 0, duration: 0.8, ease: "sine.inOut" }, { y: -60, duration: 0.5, ease: "sine.inOut"}, "with")
  .fromTo(".illurst", { y: 30, duration: 0.8, ease: "sine.inOut" }, { y: -50, duration: 0.5, ease: "sine.inOut", delay: 0.2}, "with")
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
  .fromTo(".p2-logo", {y: 0, opacity: 0, duration: 0.8, ease: "sine.inOut" }, {y: -10, opacity: 1, duration: 0.8, ease: "sine.inOut"}, "with")
  .fromTo(".right-box", {y: 0, opacity: 0, duration: 0.8, ease: "sine.inOut" }, {y: -10, opacity: 1, duration: 0.8, ease: "sine.inOut", delay: 0.8}, "with");

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
  .fromTo(".p2-text", {y: 0, scale: 1, opacity: 0, duration: 0.8, ease: "sine.inOut" }, {y: -10, scale: 1.1, opacity: 1, duration: 0.7, ease: "sine.inOut"}, "with");

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
  .fromTo(".p2-wave1", { y: 60, duration: 0.8, ease: "sine.inOut" }, { y: 0, duration: 0.5, ease: "sine.inOut"}, "with")
  .fromTo(".p2-wave2", { y: 60, duration: 0.8, ease: "sine.inOut" }, { y: 0, duration: 0.5, ease: "sine.inOut", delay: 0.1}, "with")
  .fromTo(".p3-title1", {y: 0, opacity: 0, duration: 0.8, ease: "sine.inOut" }, {y: -10, opacity: 1, duration: 0.8, ease: "sine.inOut", delay: 0.3}, "with");

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
  .fromTo(".p3-c1", {opacity: 0, scale: 1.1, duration: 0.8, ease: "sine.inOut"}, {opacity: 1, scale: 1, duration: 0.8, ease: Elastic.easeOut}, "with")
  .fromTo(".p3-c2", {opacity: 0, scale: 1.1, duration: 0.8, ease: "sine.inOut"}, {opacity: 1, scale: 1, duration: 0.8, ease: Elastic.easeOut, delay: 0.5}, "with")
  .fromTo(".p3-c3", {opacity: 0, scale: 1.1, duration: 0.8, ease: "sine.inOut"}, {opacity: 1, scale: 1, duration: 0.8, ease: Elastic.easeOut, delay: 1}, "with")
  .fromTo(".p3-c4", {opacity: 0, scale: 1.1, duration: 0.8, ease: "sine.inOut"}, {opacity: 1, scale: 1, duration: 0.8, ease: Elastic.easeOut, delay: 1.5}, "with")

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
  .fromTo(".p3-title2", {y: 0, opacity: 0, scale: 1, duration: 0.8, ease: "sine.inOut"}, {y: 10, opacity: 1, scale: 1.1, duration: 0.8, ease: "sine.inOut"}, "with")
  .fromTo(".p3-wave1", { y: -60, duration: 0.8, ease: "sine.inOut" }, { y: 0, duration: 0.5, ease: "sine.inOut", delay: 0.1}, "with")
  .fromTo(".p3-wave2", { y: -60, duration: 0.8, ease: "sine.inOut" }, { y: 0, duration: 0.5, ease: "sine.inOut", delay: 0.2}, "with");


  var sceneP7 = new ScrollMagic.Scene({
    triggerElement: ".p3-trigger-2",
    triggerhook: 0.8
  })
  .setTween(tweenP7)
  .addTo(controller)
  .addIndicators({
    name: "7"
  });

})();