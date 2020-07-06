(function () {

  var controller = new ScrollMagic.Controller();

  var tweenP1 = gsap.fromTo(".p1-logo", { y: 100, opacity: 0, duration: 1, ease: "sine.inOut" }, { y: 0, opacity: 1, duration: 0.8, ease: "sine.inOut" });

  var sceneP1 = new ScrollMagic.Scene({
    triggerElement: ".trigger1",
    triggerhook: 0.8
  })
    .setTween(tweenP1)
    .addTo(controller)
    .addIndicators({
      name: "1"
    });

})();