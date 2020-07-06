(function () {

  var controller = new ScrollMagic.Controller();

  var tweenP1 = gsap.timeline()
  .fromTo(".p1-logo", { y: 100, opacity: 0, duration: 0.8, ease: "sine.inOut" }, { y: 0, opacity: 1, duration: 0.5, ease: "sine.inOut"})
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
  .fromTo(".p1-wave", { y: 0, duration: 0.8, ease: "sine.inOut" }, { y: -50, duration: 0.5, ease: "sine.inOut"}, "with")
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

})();