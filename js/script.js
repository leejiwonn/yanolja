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
  // .addIndicators({
  //   name: "1"
  // });

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
  // .addIndicators({
  //   name: "2"
  // });

  var tweenP3 = gsap.timeline()
  .fromTo(".p2-logo", {y: 10, opacity: 0, duration: 0.8, ease: "sine.inOut" }, {y: -20, opacity: 1, duration: 0.8, ease: "sine.inOut"}, "with")
  .fromTo(".right-box", {y: 10, opacity: 0, duration: 0.8, ease: "sine.inOut" }, {y: -20, opacity: 1, duration: 0.8, ease: "sine.inOut", delay: 0.5}, "with");

  var sceneP3 = new ScrollMagic.Scene({
    triggerElement: ".p2-trigger-1",
    triggerhook: 0.8
  })
  .setTween(tweenP3)
  .addTo(controller)
  // .addIndicators({
  //   name: "3"
  // });

  var tweenP4 = gsap.timeline()
  .fromTo(".p2-text", {y: 10, scale: 1, opacity: 0, duration: 0.8, ease: "sine.inOut" }, {y: -20, scale: 1.2, opacity: 1, duration: 0.7, ease: "sine.inOut"}, "with");

  var sceneP4 = new ScrollMagic.Scene({
    triggerElement: ".p2-trigger-2",
    triggerhook: 0.8
  })
  .setTween(tweenP4)
  .addTo(controller)
  // .addIndicators({
  //   name: "4"
  // });

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
  // .addIndicators({
  //   name: "5"
  // });

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
  // .addIndicators({
  //   name: "6"
  // });

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
  // .addIndicators({
  //   name: "7"
  // });

  var tweenP8 = gsap.timeline()
  .fromTo(".p4-title", {y: -10, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 20, opacity: 1, duration: 0.8, ease: "sine.inOut", delay: 0.1}, "with");

  var sceneP8 = new ScrollMagic.Scene({
    triggerElement: ".p4-trigger-1",
    triggerhook: 0.8
  })
  .setTween(tweenP8)
  .addTo(controller)
  // .addIndicators({
  //   name: "8"
  // });

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
  // .addIndicators({
  //   name: "9"
  // });

  var tweenP10 = gsap.timeline()
  .fromTo(".p5-text", {y: -50, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 20, opacity: 1, duration: 0.8, ease: "sine.inOut"}, "with")
  .fromTo(".p6-top-arrow", {y: -10, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 20, opacity: 1, duration: 0.8, ease: "sine.inOut", delay: 0.2}, "with")
  .fromTo(".p6-wave", {y: -50, duration: 0.8, ease: "sine.inOut"}, {y: 0, duration: 0.8, ease: "sine.inOut", delay: 0.4}, "with");

  var sceneP10 = new ScrollMagic.Scene({
    triggerElement: ".p4-trigger-3",
    triggerhook: 0.8
  })
  .setTween(tweenP10)
  .addTo(controller)
  // .addIndicators({
  //   name: "10"
  // });

  var tweenP11 = gsap.timeline()
  .fromTo(".p6-persona-title", {y: -10, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 20, opacity: 1, duration: 0.8, ease: "sine.inOut"});

  var sceneP11 = new ScrollMagic.Scene({
    triggerElement: ".p6-trigger-1",
    triggerhook: 0.8
  })
  .setTween(tweenP11)
  .addTo(controller)
  // .addIndicators({
  //   name: "11"
  // });

  var tweenP12 = gsap.timeline()
  .fromTo(".p6-persona-avatar", {x: -80, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {x: 0, opacity: 1, duration: 0.8, ease: "sine.inOut"}, "with1")
  .fromTo(".p6-persona-avatar-name", {y: 20, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.8, ease: "sine.inOut", delay: 0.4}, "with1")
  .fromTo(".p6-persona-avatar-job", {y: 20, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.8, ease: "sine.inOut", delay: 0.6}, "with1")
  .fromTo(".p6-cir-1", {opacity: 0, scale: 0.8, duration: 0.8, ease: Bounce.easeOut}, {opacity: 1, scale: 1, duration: 0.8, ease: Bounce.easeOut}, "with2")
  .fromTo(".p6-cir-3", {opacity: 0, scale: 0.8, duration: 0.8, ease: Bounce.easeOut}, {opacity: 1, scale: 1, duration: 0.8, ease: Bounce.easeOut, delay: 0.5}, "with2")
  .fromTo(".p6-cir-4", {opacity: 0, scale: 0.8, duration: 0.8, ease: Bounce.easeOut}, {opacity: 1, scale: 1, duration: 0.8, ease: Bounce.easeOut, delay: 1}, "with2")
  .fromTo(".p6-cir-2", {opacity: 0, scale: 0.8, duration: 0.8, ease: Bounce.easeOut}, {opacity: 1, scale: 1, duration: 0.8, ease: Bounce.easeOut, delay: 1.5}, "with2")
  .fromTo(".p6-cir-6", {opacity: 0, scale: 0.8, duration: 0.8, ease: Bounce.easeOut}, {opacity: 1, scale: 1, duration: 0.8, ease: Bounce.easeOut, delay: 2}, "with2")
  .fromTo(".p6-cir-5", {opacity: 0, scale: 0.8, duration: 0.8, ease: Bounce.easeOut}, {opacity: 1, scale: 1, duration: 0.8, ease: Bounce.easeOut, delay: 2.5}, "with2");

  var sceneP12 = new ScrollMagic.Scene({
    triggerElement: ".p6-trigger-2",
    triggerhook: 0.8
  })
  .setTween(tweenP12)
  .addTo(controller)
  // .addIndicators({
  //   name: "12"
  // });

  var tweenP13 = gsap.timeline()
  .fromTo(".p6-persona-content-label-arrow", {y: -20, rotate: -20, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 0, rotate: 0, opacity: 1, duration: 0.8, ease: "sine.inOut"})

  var sceneP13 = new ScrollMagic.Scene({
    triggerElement: ".p6-trigger-3",
    triggerhook: 0.8
  })
  .setTween(tweenP13)
  .addTo(controller)
  // .addIndicators({
  //   name: "13"
  // });

  var tweenP14 = gsap.timeline()
  .fromTo(".p6-vlog-list", {x: 0, duration: 2, ease: "power4.inOut"}, {x: -850, duration: 2.5, ease: "power4.inOut"})

  var sceneP14 = new ScrollMagic.Scene({
    triggerElement: ".p6-trigger-4",
    triggerhook: 0.8
  })
  .setTween(tweenP14)
  .addTo(controller)
  // .addIndicators({
  //   name: "14"
  // });

  var tweenP15 = gsap.timeline()
  .fromTo(".p6-vlog-title-down", {y: -50, opacity: 0, duration: 1, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.8, ease: "sine.inOut"}, "with")
  .fromTo(".p6-title", {y: -50, opacity: 0, duration: 1, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.8, ease: "sine.inOut", delay: 0.2}, "with")
  .fromTo(".p6-vlog-title-highlight", {y: 50, scale: 0.8, opacity: 0, duration: 0.8, ease: Bounce.easeOut}, {y: 0, scale: 1, opacity: 1, duration: 1.3, ease: Bounce.easeOut, delay: 1}, "with");

  var sceneP15 = new ScrollMagic.Scene({
    triggerElement: ".p6-trigger-5",
    triggerhook: 0.8
  })
  .setTween(tweenP15)
  .addTo(controller)
  // .addIndicators({
  //   name: "15"
  // });

  var tweenP16 = gsap.timeline()
  .fromTo(".p7-title", {y: -50, opacity: 0, duration: 1, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.8, ease: "sine.inOut"}, "with")
  .fromTo(".p6-vlog-title-wave", {y: 0, duration: 0.8, ease: "sine.inOut"}, {y: 50, duration: 0.8, ease: "sine.inOut"}, "with");

  var sceneP16 = new ScrollMagic.Scene({
    triggerElement: ".p7-trigger-1",
    triggerhook: 0.8
  })
  .setTween(tweenP16)
  .addTo(controller)
  // .addIndicators({
  //   name: "16"
  // });

  var tweenP17 = gsap.timeline()
  .fromTo(".p7-text-box", {y: 50, opacity: 0, duration: 1, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.8, ease: "sine.inOut"}, "with1")
  .fromTo(".p7-deco-1", {scale: 0.8, opacity: 0, duration: 1, ease: "sine.inOut"}, {scale: 1, opacity: 1, duration: 0.8, ease: Bounce.easeOut, delay: 0.2}, "with1")
  .fromTo(".p7-deco-1-1", {scale: 1.2, opacity: 0, duration: 1, ease: "sine.inOut"}, {scale: 1, opacity: 1, duration: 0.8, ease: Bounce.easeOut, delay: 0.3}, "with1")
  .fromTo(".p7-text-1", {y: -30, opacity: 0, duration: 1, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.8, ease: "sine.inOut"}, "with2");

  var sceneP17 = new ScrollMagic.Scene({
    triggerElement: ".p7-trigger-2",
    triggerhook: 0.8
  })
  .setTween(tweenP17)
  .addTo(controller)
  // .addIndicators({
  //   name: "17"
  // });

  var tweenP18 = gsap.timeline()
  .fromTo(".p7-map1-0", {opacity: 0, duration: 1, ease: "sine.inOut"}, {opacity: 1, duration: 0.8, ease: "sine.inOut"})
  .fromTo(".p7-map1-1", {opacity: 0, duration: 0.4, ease: "sine.inOut"}, {opacity: 1, duration: 0.3, ease: "sine.inOut"})
  .fromTo(".p7-line1-1", {x: -100, opacity: 0, duration: 0.4, ease: "sine.inOut"}, {x: 0, opacity: 1, duration: 0.5, ease: "sine.inOut"}, "with1")
  .fromTo(".p7-map1-2", {opacity: 0, duration: 0.4, ease: "sine.inOut"}, {opacity: 1, duration: 0.3, ease: "sine.inOut", delay: 0.4}, "with1")
  .fromTo(".p7-line1-2", {x: -100, opacity: 0, duration: 0.4, ease: "sine.inOut"}, {x: 0, opacity: 1, duration: 0.5, ease: "sine.inOut"}, "with2")
  .fromTo(".p7-map1-3", {opacity: 0, duration: 0.4, ease: "sine.inOut"}, {opacity: 1, duration: 0.3, ease: "sine.inOut", delay: 0.4}, "with2")
  .fromTo(".p7-line1-3", {x: -100, opacity: 0, duration: 0.4, ease: "sine.inOut"}, {x: 0, opacity: 1, duration: 0.5, ease: "sine.inOut"}, "with3")
  .fromTo(".p7-map1-4", {opacity: 0, duration: 0.4, ease: "sine.inOut"}, {opacity: 1, duration: 0.3, ease: "sine.inOut", delay: 0.4}, "with3");


  var sceneP18 = new ScrollMagic.Scene({
    triggerElement: ".p7-trigger-3",
    triggerhook: 0.8
  })
  .setTween(tweenP18)
  .addTo(controller)
  // .addIndicators({
  //   name: "18"
  // });

  var tweenP19 = gsap.timeline()
  .fromTo(".p7-map2-0", {opacity: 0, duration: 1, ease: "sine.inOut"}, {opacity: 1, duration: 0.8, ease: "sine.inOut"})
  .fromTo(".p7-map2-1", {opacity: 0, duration: 0.4, ease: "sine.inOut"}, {opacity: 1, duration: 0.3, ease: "sine.inOut"})
  .fromTo(".p7-line2-1", {x: -100, opacity: 0, duration: 0.4, ease: "sine.inOut"}, {x: 0, opacity: 1, duration: 0.5, ease: "sine.inOut"}, "with1")
  .fromTo(".p7-map2-2", {opacity: 0, duration: 0.4, ease: "sine.inOut"}, {opacity: 1, duration: 0.3, ease: "sine.inOut", delay: 0.4}, "with1")
  .fromTo(".p7-line2-2", {x: -100, opacity: 0, duration: 0.4, ease: "sine.inOut"}, {x: 0, opacity: 1, duration: 0.5, ease: "sine.inOut"}, "with2")
  .fromTo(".p7-map2-3", {opacity: 0, duration: 0.4, ease: "sine.inOut"}, {opacity: 1, duration: 0.3, ease: "sine.inOut", delay: 0.4}, "with2")
  .fromTo(".p7-line2-3", {y: -100, opacity: 0, duration: 0.4, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.5, ease: "sine.inOut"}, "with3")
  .fromTo(".p7-map2-4", {opacity: 0, duration: 0.4, ease: "sine.inOut"}, {opacity: 1, duration: 0.3, ease: "sine.inOut", delay: 0.4}, "with3")
  .fromTo(".p7-line2-4", {x: -100, opacity: 0, duration: 0.4, ease: "sine.inOut"}, {x: 0, opacity: 1, duration: 0.5, ease: "sine.inOut"}, "with4")
  .fromTo(".p7-map2-5", {opacity: 0, duration: 0.4, ease: "sine.inOut"}, {opacity: 1, duration: 0.3, ease: "sine.inOut", delay: 0.4}, "with4")
  .fromTo(".p7-line2-5", {y: -100, opacity: 0, duration: 0.4, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.5, ease: "sine.inOut"}, "with4")
  .fromTo(".p7-map2-6", {opacity: 0, duration: 0.4, ease: "sine.inOut"}, {opacity: 1, duration: 0.3, ease: "sine.inOut", delay: 0.4}, "with4")
  .fromTo(".p7-line2-6", {y: -100, opacity: 0, duration: 0.4, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.5, ease: "sine.inOut"}, "with5")
  .fromTo(".p7-map2-7", {opacity: 0, duration: 0.4, ease: "sine.inOut"}, {opacity: 1, duration: 0.3, ease: "sine.inOut", delay: 0.4}, "with5")
  .fromTo(".p7-bold-0", {scale: 0.8, opacity: 0, duration: 1, ease: "sine.inOut"}, {scale: 1, opacity: 1, duration: 0.8, ease: Bounce.easeOut}, "with6")
  .fromTo(".p7-progress-0st-result", {y: -20, opacity: 0, duration: 1, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.8, ease: "sine.inOut", delay: 0.5}, "with6")
  .fromTo(".p7-progress-desc", {x: -50, opacity: 0, duration: 1, ease: "sine.inOut"}, {x: 0, opacity: 1, duration: 0.8, ease: "sine.inOut", delay: 0.5}, "with7");

  var sceneP19 = new ScrollMagic.Scene({
    triggerElement: ".p7-trigger-4",
    triggerhook: 0.8
  })
  .setTween(tweenP19)
  .addTo(controller)
  // .addIndicators({
  //   name: "19"
  // });

  var tweenP20 = gsap.timeline()
  .fromTo(".p7-chat", {x: -50, opacity: 0, duration: 1, ease: "sine.inOut"}, {x: 0, opacity: 1, duration: 0.8, ease: "sine.inOut"}, "with")
  .fromTo(".p7-chat-image", {x: 50, opacity: 0, duration: 1, ease: "sine.inOut"}, {x: 0, opacity: 1, duration: 0.8, ease: "sine.inOut"}, "with");

  var sceneP20 = new ScrollMagic.Scene({
    triggerElement: ".p7-trigger-5",
    triggerhook: 0.8
  })
  .setTween(tweenP20)
  .addTo(controller)
  // .addIndicators({
  //   name: "20"
  // });

  var tweenP21 = gsap.timeline()
  .fromTo(".p7-text-2", {scale: 1.2, opacity: 0, duration: 1, ease: "back.inOut" }, {scale: 1, opacity: 1, duration: 0.8, ease: "back.inOut"}, "with")
  .fromTo(".p7-main-deco-1", {y: -30, opacity: 0, duration: 0.5, ease: "sine.inOut" }, {y: 0, opacity: 1, duration: 0.6, ease: Bounce.easeOut, delay: 0.8}, "with")
  .fromTo(".p7-main-deco-2", {y: 30, opacity: 0, duration: 0.5, ease: "sine.inOut" }, {y: 0, opacity: 1, duration: 0.6, ease: Bounce.easeOut, delay: 0.8}, "with");

  var sceneP21 = new ScrollMagic.Scene({
    triggerElement: ".p7-trigger-6",
    triggerhook: 0.8
  })
  .setTween(tweenP21)
  .addTo(controller)
  // .addIndicators({
  //   name: "21"
  // });

  var tweenP22 = gsap.timeline()
  .fromTo(".p7-map3-0", {opacity: 0, duration: 1, ease: "sine.inOut"}, {opacity: 1, duration: 0.8, ease: "sine.inOut"})
  .fromTo(".p7-map3-1", {opacity: 0, duration: 0.4, ease: "sine.inOut"}, {opacity: 1, duration: 0.3, ease: "sine.inOut"})
  .fromTo(".p7-line3-1", {x: -100, opacity: 0, duration: 0.4, ease: "sine.inOut"}, {x: 0, opacity: 1, duration: 0.5, ease: "sine.inOut"}, "with1")
  .fromTo(".p7-map3-2", {opacity: 0, duration: 0.4, ease: "sine.inOut"}, {opacity: 1, duration: 0.3, ease: "sine.inOut", delay: 0.4}, "with1")
  .fromTo(".p7-line3-2", {y: -100, opacity: 0, duration: 0.4, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.5, ease: "sine.inOut"}, "with2")
  .fromTo(".p7-map3-3", {opacity: 0, duration: 0.4, ease: "sine.inOut"}, {opacity: 1, duration: 0.3, ease: "sine.inOut", delay: 0.4}, "with2")
  .fromTo(".p7-line3-3", {y: -100, opacity: 0, duration: 0.4, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.5, ease: "sine.inOut"}, "with3")
  .fromTo(".p7-map3-4", {opacity: 0, duration: 0.4, ease: "sine.inOut"}, {opacity: 1, duration: 0.3, ease: "sine.inOut", delay: 0.4}, "with3")
  .fromTo(".p7-line3-4", {x: -100, opacity: 0, duration: 0.4, ease: "sine.inOut"}, {x: 0, opacity: 1, duration: 0.5, ease: "sine.inOut"}, "with4")
  .fromTo(".p7-map3-5", {opacity: 0, duration: 0.4, ease: "sine.inOut"}, {opacity: 1, duration: 0.3, ease: "sine.inOut", delay: 0.4}, "with4")
  .fromTo(".p7-line3-5", {y: -100, opacity: 0, duration: 0.4, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.5, ease: "sine.inOut"}, "with5")
  .fromTo(".p7-map3-6", {opacity: 0, duration: 0.4, ease: "sine.inOut"}, {opacity: 1, duration: 0.3, ease: "sine.inOut", delay: 0.4}, "with5")
  .fromTo(".p7-line3-6", {y: -100, opacity: 0, duration: 0.4, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.5, ease: "sine.inOut"}, "with6")
  .fromTo(".p7-map3-7", {opacity: 0, duration: 0.4, ease: "sine.inOut"}, {opacity: 1, duration: 0.3, ease: "sine.inOut", delay: 0.4}, "with6")
  .fromTo(".p7-bold-1", {scale: 0.8, opacity: 0, duration: 1, ease: "sine.inOut"}, {scale: 1, opacity: 1, duration: 0.8, ease: Bounce.easeOut}, "with7")
  .fromTo(".p7-progress-1st-result", {y: -20, opacity: 0, duration: 1, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.8, ease: "sine.inOut", delay: 0.5}, "with7");

  var sceneP22 = new ScrollMagic.Scene({
    triggerElement: ".p7-trigger-7",
    triggerhook: 0.8
  })
  .setTween(tweenP22)
  .addTo(controller)
  // .addIndicators({
  //   name: "22"
  // });

  var tweenP23 = gsap.timeline()
  .fromTo(".p7-ut-title", {opacity: 0, duration: 1, ease: "sine.inOut"}, {opacity: 1, duration: 1, ease: "sine.inOut"})
  .fromTo(".p7-ut-item-1", {y: 30, opacity: 0, duration: 0.6, ease: Back.easeOut}, {y: 0, opacity: 1, duration: 0.8, ease: Back.easeOut}, "with")
  .fromTo(".p7-ut-item-2", {y: 30, opacity: 0, duration: 0.6, ease: Back.easeOut}, {y: 0, opacity: 1, duration: 0.8, ease: Back.easeOut, delay: 0.4}, "with")
  .fromTo(".p7-ut-item-3", {y: 30, opacity: 0, duration: 0.6, ease: Back.easeOut}, {y: 0, opacity: 1, duration: 0.8, ease: Back.easeOut, delay: 0.2}, "with");

  var sceneP23 = new ScrollMagic.Scene({
    triggerElement: ".p7-trigger-8",
    triggerhook: 0.8
  })
  .setTween(tweenP23)
  .addTo(controller)
  // .addIndicators({
  //   name: "23"
  // });

  var tweenP24 = gsap.timeline()
  .fromTo(".p7-ut-result-title", {scale: 1.2, opacity: 0, duration: 1, ease: "back.inOut" }, {scale: 1, opacity: 1, duration: 0.8, ease: "back.inOut"}, "with")
  .fromTo(".p7-ut-result-highlight", {y: 30, opacity: 0, duration: 0.5, ease: "sine.inOut" }, {y: -10, opacity: 1, duration: 0.6, ease: Bounce.easeOut, delay: 0.6}, "with")
  .fromTo(".p7-ut-result-illust", {x: -500, opacity: 0, duration: 1.2, ease: "sine.inOut" }, {x: 0, opacity: 1, duration: 1.5, ease: Back.easeOut, delay: 1.5}, "with");

  var sceneP24 = new ScrollMagic.Scene({
    triggerElement: ".p7-trigger-9",
    triggerhook: 0.8
  })
  .setTween(tweenP24)
  .addTo(controller)
  // .addIndicators({
  //   name: "24"
  // });

  var tweenP25 = gsap.timeline()
  .fromTo(".p8-arrow", {x: -150, y: -500, rotate: -30, opacity: 0, duration: 1, ease: "back.inOut" }, {x: 0, y: 0, rotate: 0, opacity: 1, duration: 1.2, ease: "back.inOut"}, "with")
  .fromTo(".p8-q", {x: 300, opacity: 0, duration: 1, ease: "sine.inOut" }, {x: 0, opacity: 1, duration: 0.8, ease: Back.easeOut, delay: 1}, "with")
  .fromTo(".p8-q-back", {x: -20, y: 20, opacity: 0, duration: 0.8, ease: "sine.inOut" }, {x: 0, y: 0, opacity: 1, duration: 1, ease: Back.easeOut, delay: 2}, "with")
  .fromTo(".p8-q-event", {x: 30, opacity: 0, duration: 1, ease: "sine.inOut" }, {x: 0, opacity: 1, duration: 0.8, ease: Back.easeOut, delay: 2.5}, "with");

  var sceneP25 = new ScrollMagic.Scene({
    triggerElement: ".p8-trigger-1",
    triggerhook: 0.8
  })
  .setTween(tweenP25)
  .addTo(controller)
  // .addIndicators({
  //   name: "25"
  // });

  var tweenP26 = gsap.timeline()
  .fromTo(".p8-map4-0", {opacity: 0, duration: 1, ease: "sine.inOut"}, {opacity: 1, duration: 0.8, ease: "sine.inOut"})
  .fromTo(".p8-map4-1", {opacity: 0, duration: 0.4, ease: "sine.inOut"}, {opacity: 1, duration: 0.3, ease: "sine.inOut"})
  .fromTo(".p8-line4-1", {x: -100, opacity: 0, duration: 0.4, ease: "sine.inOut"}, {x: 0, opacity: 1, duration: 0.5, ease: "sine.inOut"}, "with1")
  .fromTo(".p8-map4-2", {opacity: 0, duration: 0.4, ease: "sine.inOut"}, {opacity: 1, duration: 0.3, ease: "sine.inOut", delay: 0.4}, "with1")
  .fromTo(".p8-line4-2", {y: -100, opacity: 0, duration: 0.4, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.5, ease: "sine.inOut"}, "with2")
  .fromTo(".p8-map4-3", {opacity: 0, duration: 0.4, ease: "sine.inOut"}, {opacity: 1, duration: 0.3, ease: "sine.inOut", delay: 0.4}, "with2")
  .fromTo(".p8-line4-3", {y: -100, opacity: 0, duration: 0.4, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.5, ease: "sine.inOut"}, "with3")
  .fromTo(".p8-map4-4", {opacity: 0, duration: 0.4, ease: "sine.inOut"}, {opacity: 1, duration: 0.3, ease: "sine.inOut", delay: 0.4}, "with3")
  .fromTo(".p8-line4-4", {y: -100, opacity: 0, duration: 0.4, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.5, ease: "sine.inOut"}, "with4")
  .fromTo(".p8-map4-5", {opacity: 0, duration: 0.4, ease: "sine.inOut"}, {opacity: 1, duration: 0.3, ease: "sine.inOut", delay: 0.4}, "with4")
  .fromTo(".p8-line4-5", {x: -100, opacity: 0, duration: 0.4, ease: "sine.inOut"}, {x: 0, opacity: 1, duration: 0.5, ease: "sine.inOut"}, "with5")
  .fromTo(".p8-map4-6", {opacity: 0, duration: 0.4, ease: "sine.inOut"}, {opacity: 1, duration: 0.3, ease: "sine.inOut", delay: 0.4}, "with5")
  .fromTo(".p8-line4-6", {y: -100, opacity: 0, duration: 0.4, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.5, ease: "sine.inOut"}, "with6")
  .fromTo(".p8-map4-7", {opacity: 0, duration: 0.4, ease: "sine.inOut"}, {opacity: 1, duration: 0.3, ease: "sine.inOut", delay: 0.4}, "with6")
  .fromTo(".p7-bold-2", {scale: 0.8, opacity: 0, duration: 1, ease: "sine.inOut"}, {scale: 1, opacity: 1, duration: 0.8, ease: Bounce.easeOut}, "with7")
  .fromTo(".p8-2st-text1", {y: -20, opacity: 0, duration: 1, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.8, ease: "sine.inOut", delay: 0.5}, "with7")
  .fromTo(".p8-2st-arrow", {x: -30, y: 50, rotate: 15, opacity: 0, duration: 1, ease: "sine.inOut"}, {x: 0, y: 0, rotate: 0, opacity: 1, duration: 0.8, ease: Back.easeOut}, "with8")
  .fromTo(".p8-2st-text2", {y: 20, opacity: 0, duration: 1, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.8, ease: Back.easeOut, delay: 0.4}, "with8");

  var sceneP26 = new ScrollMagic.Scene({
    triggerElement: ".p8-trigger-2",
    triggerhook: 0.8
  })
  .setTween(tweenP26)
  .addTo(controller)
  // .addIndicators({
  //   name: "26"
  // });

  var tweenP27 = gsap.timeline()
  .fromTo(".p8-ut-item-1", {y: 30, opacity: 0, duration: 1, ease: Back.easeOut}, {y: 0, opacity: 1, duration: 1.2, ease: Back.easeOut, delay: 1.2}, "with")
  .fromTo(".p8-ut-item-2", {y: 30, opacity: 0, duration: 1, ease: Back.easeOut}, {y: 0, opacity: 1, duration: 1.2, ease: Back.easeOut}, "with")
  .fromTo(".p8-ut-item-3", {y: 30, opacity: 0, duration: 1, ease: Back.easeOut}, {y: 0, opacity: 1, duration: 1.2, ease: Back.easeOut, delay: 0.4}, "with")
  .fromTo(".p8-ut-item-4", {y: 30, opacity: 0, duration: 1, ease: Back.easeOut}, {y: 0, opacity: 1, duration: 1.2, ease: Back.easeOut, delay: 0.8}, "with");

  var sceneP27 = new ScrollMagic.Scene({
    triggerElement: ".p8-trigger-3",
    triggerhook: 0.8
  })
  .setTween(tweenP27)
  .addTo(controller)
  // .addIndicators({
  //   name: "27"
  // });

  var tweenP28 = gsap.timeline()
  .fromTo(".p8-result-title1", {scale: 1.2, opacity: 0, duration: 1, ease: "back.inOut" }, {scale: 1, opacity: 1, duration: 0.8, ease: "back.inOut"}, "with1")
  .fromTo(".p8-result-highlight-1", {y: -30, opacity: 0, duration: 0.7, ease: "sine.inOut" }, {y: 0, opacity: 1, duration: 0.8, ease: Bounce.easeOut, delay: 0.5}, "with1")
  .fromTo(".p8-result-highlight-2", {y: 30, opacity: 0, duration: 0.7, ease: "sine.inOut" }, {y: 0, opacity: 1, duration: 0.8, ease: Bounce.easeOut, delay: 1}, "with1")
  .fromTo(".p8-result-title2", {scale: 1.2, opacity: 0, duration: 1, ease: "back.inOut" }, {scale: 1, opacity: 1, duration: 0.8, ease: "back.inOut", delay: 0.3}, "with2")
  .fromTo(".p8-result-highlight-3", {y: 50, opacity: 0, duration: 0.7, ease: "sine.inOut" }, {y: 0, opacity: 1, duration: 0.8, ease: Bounce.easeOut, delay: 1.1}, "with2")
  .fromTo(".p8-result-deco1", {x: 100, y: -50, rotate: -10, opacity: 0, duration: 0.8, ease: "sine.inOut" }, {x: 0, y: 0, rotate: 0, opacity: 1, duration: 1, ease: Back.easeOut}, "with3")
  .fromTo(".p8-result-deco2", {x: -100, y: -50, rotate: -10, opacity: 0, duration: 0.8, ease: "sine.inOut" }, {x: 0, y: 0, rotate: 0, opacity: 1, duration: 1, ease: Back.easeOut}, "with3")
  .fromTo(".p8-result-img", {y: -30, opacity: 0, duration: 0.8, ease: "sine.inOut" }, {y: 0, opacity: 1, duration: 1, ease: "sine.inOut"}, "with4");

  var sceneP28 = new ScrollMagic.Scene({
    triggerElement: ".p8-trigger-4",
    triggerhook: 0.8
  })
  .setTween(tweenP28)
  .addTo(controller)
  // .addIndicators({
  //   name: "28"
  // });

  var tweenP29 = gsap.timeline()
  .fromTo(".p8-wave", {y: 0, duration: 0.8, ease: "sine.inOut"}, {y: -100, duration: 0.8, ease: "sine.inOut"}, "with")
  .fromTo(".p9-title-wrapper", {y: 20, opacity: 0, duration: 1, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 1, ease: "sine.inOut"}, "with");

  var sceneP29 = new ScrollMagic.Scene({
    triggerElement: ".p8-trigger-5",
    triggerhook: 0.8
  })
  .setTween(tweenP29)
  .addTo(controller)
  // .addIndicators({
  //   name: "29"
  // });

  var tweenP30 = gsap.timeline()
  .fromTo(".p9-content-middle", {opacity: 0, duration: 1, ease: "sine.inOut"}, {opacity: 1, duration: 1, ease: "sine.inOut"}, "with1")
  .fromTo(".p9-cir-1", {scale: 0.8, opacity: 0, duration: 1, ease: "sine.inOut"}, {scale: 1, opacity: 1, duration: 1, ease: Back.easeOut}, "with1")
  .fromTo(".p9-content-title", {x: -50, opacity: 0, duration: 1, ease: "sine.inOut"}, {x: 0, opacity: 1, duration: 1, ease: "sine.inOut"})
  .fromTo(".p9-cir-2", {scale: 0.8, opacity: 0, duration: 1, ease: "sine.inOut"}, {scale: 1, opacity: 1, duration: 1, ease: Back.easeOut}, "with2")
  .fromTo(".p9-cir-3", {scale: 0.8, opacity: 0, duration: 1, ease: "sine.inOut"}, {scale: 1, opacity: 1, duration: 1, ease: Back.easeOut, delay: 0.3}, "with2")
  .fromTo(".p9-cir-4", {scale: 0.8, opacity: 0, duration: 1, ease: "sine.inOut"}, {scale: 1, opacity: 1, duration: 1, ease: Back.easeOut, delay: 0.6}, "with2")
  .fromTo(".p9-content-text", {y: -50, opacity: 0, duration: 0.7, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.8, ease: "sine.inOut", delay: 1}, "with2")

  var sceneP30 = new ScrollMagic.Scene({
    triggerElement: ".p9-trigger-1",
    triggerhook: 0.8
  })
  .setTween(tweenP30)
  .addTo(controller)
  // .addIndicators({
  //   name: "30"
  // });

  var tweenP31 = gsap.timeline()
  .fromTo(".p9-illust-1", {y: -30, opacity: 0, duration: 0.5, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.6, ease: "sine.inOut"}, "with1")
  .fromTo(".p9-bt-1", {y: -20, opacity: 0, duration: 0.5, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.6, ease: "sine.inOut", delay: 0.2}, "with1")
  .fromTo(".p9-illust-2", {y: -30, opacity: 0, duration: 0.5, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.6, ease: "sine.inOut"}, "with2")
  .fromTo(".p9-bt-2", {y: -20, opacity: 0, duration: 0.5, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.6, ease: "sine.inOut", delay: 0.2}, "with2")

  var sceneP31 = new ScrollMagic.Scene({
    triggerElement: ".p9-trigger-2",
    triggerhook: 0.8
  })
  .setTween(tweenP31)
  .addTo(controller)
  // .addIndicators({
  //   name: "31"
  // });

  var tweenP32 = gsap.timeline()
  .fromTo(".p9-insight-title", {y: -10, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 20, opacity: 1, duration: 0.8, ease: "sine.inOut"}, "with1")
  .fromTo(".p9-main-insight", {y: -50, opacity: 0, duration: 0.7, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.8, ease: Back.easeOut, delay: 0.4}, "with1")
  .fromTo(".p9-deco1", {y: -30, opacity: 0, duration: 0.5, ease: "sine.inOut" }, {y: 0, opacity: 1, duration: 0.6, ease: Back.easeOut, delay: 1}, "with1")
  .fromTo(".p9-deco2", {y: 30, opacity: 0, duration: 0.5, ease: "sine.inOut" }, {y: 0, opacity: 1, duration: 0.6, ease: Back.easeOut, delay: 1}, "with1")
  .fromTo(".p9-insight-result-arrow", {x: -30, y: 50, rotate: 15, opacity: 0, duration: 1, ease: "sine.inOut"}, {x: 0, y: 0, rotate: 0, opacity: 1, duration: 0.8, ease: Back.easeOut}, "with2")
  .fromTo(".p9-insight-result-text", {y: 20, opacity: 0, duration: 1, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.8, ease: Back.easeOut, delay: 0.4}, "with2");

  var sceneP32 = new ScrollMagic.Scene({
    triggerElement: ".p9-trigger-3",
    triggerhook: 0.8
  })
  .setTween(tweenP32)
  .addTo(controller)
  // .addIndicators({
  //   name: "32"
  // });

  var tweenP32 = gsap.timeline()
  .fromTo(".p9-insight-title", {y: -10, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 20, opacity: 1, duration: 0.8, ease: "sine.inOut"}, "with1")
  .fromTo(".p9-main-insight", {y: -50, opacity: 0, duration: 0.7, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.8, ease: Back.easeOut, delay: 0.4}, "with1")
  .fromTo(".p9-deco1", {y: -30, opacity: 0, duration: 0.5, ease: "sine.inOut" }, {y: 0, opacity: 1, duration: 0.6, ease: Back.easeOut, delay: 1}, "with1")
  .fromTo(".p9-deco2", {y: 30, opacity: 0, duration: 0.5, ease: "sine.inOut" }, {y: 0, opacity: 1, duration: 0.6, ease: Back.easeOut, delay: 1}, "with1")
  .fromTo(".p9-insight-result-arrow", {x: -30, y: 50, rotate: 15, opacity: 0, duration: 1, ease: "sine.inOut"}, {x: 0, y: 0, rotate: 0, opacity: 1, duration: 0.8, ease: Back.easeOut}, "with2")
  .fromTo(".p9-insight-result-text", {y: 20, opacity: 0, duration: 1, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.8, ease: Back.easeOut, delay: 0.4}, "with2");

  var sceneP32 = new ScrollMagic.Scene({
    triggerElement: ".p10-trigger-1",
    triggerhook: 0.8
  })
  .setTween(tweenP32)
  .addTo(controller)
  // .addIndicators({
  //   name: "32"
  // });

  var tweenP33 = gsap.timeline()
  .fromTo(".p9-wave-wave", { y: 80, duration: 0.8, ease: "sine.inOut" }, { y: 0, duration: 0.5, ease: "sine.inOut"}, "with")
  .fromTo(".p9-insight-coktail", {y: 50, opacity: 0, duration: 0.7, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.8, ease: Back.easeOut, delay: 0.4}, "with")
  .fromTo(".p9-insight-coktail-heart", {y: -30, opacity: 0, duration: 0.5, ease: "sine.inOut" }, {y: 0, opacity: 1, duration: 0.6, ease: Back.easeOut, delay: 1}, "with");

  var sceneP33 = new ScrollMagic.Scene({
    triggerElement: ".p9-trigger-4",
    triggerhook: 0.8
  })
  .setTween(tweenP33)
  .addTo(controller)
  // .addIndicators({
  //   name: "33"
  // });

  var tweenP34 = gsap.timeline()
  .fromTo(".p10-title", {y: -30, opacity: 0, duration: 1, ease: "sine.inOut" }, {y: 0, opacity: 1, duration: 0.8, ease: "sine.inOut"})
  .fromTo(".p10-card-1-left", { x: -50, opacity: 0, duration: 1, ease: "sine.inOut" }, { x: 0, opacity: 1, duration: 0.8, ease: "sine.inOut"}, "with")
  .fromTo(".p10-f-1", {y: 100, opacity: 0, duration: 0.7, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.6, ease: "sine.inOut", delay: 0.5}, "with")
  .fromTo(".p10-b-1", {x: -20, y: -10, opacity: 0, duration: 0.6, ease: "sine.inOut" }, {x: 0, y: 0, opacity: 1, duration: 0.5, ease: "sine.inOut", delay: 0.7}, "with");

  var sceneP34 = new ScrollMagic.Scene({
    triggerElement: ".p10-trigger-1",
    triggerhook: 0.8
  })
  .setTween(tweenP34)
  .addTo(controller)
  // .addIndicators({
  //   name: "34"
  // });

  var tweenP35 = gsap.timeline()
  .fromTo(".p10-card-2-right", { x: 50, opacity: 0, duration: 1, ease: "sine.inOut" }, { x: 0, opacity: 1, duration: 0.8, ease: "sine.inOut"}, "with")
  .fromTo(".p10-f-2", {y: 100, opacity: 0, duration: 0.7, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.6, ease: "sine.inOut", delay: 0.5}, "with")
  .fromTo(".p10-b-2", {x: -20, y: -10, opacity: 0, duration: 0.6, ease: "sine.inOut" }, {x: 0, y: 0, opacity: 1, duration: 0.5, ease: "sine.inOut", delay: 0.7}, "with")
  .fromTo(".p10-f-3", {x: -30, opacity: 0, duration: 0.7, ease: "sine.inOut"}, {x: 0, opacity: 1, duration: 0.6, ease: "sine.inOut", delay: 1}, "with")
  .fromTo(".p10-b-3", {x: -20, y: -10, opacity: 0, duration: 0.6, ease: "sine.inOut" }, {x: 0, y: 0, opacity: 1, duration: 0.5, ease: "sine.inOut", delay: 1.2}, "with");

  var sceneP35 = new ScrollMagic.Scene({
    triggerElement: ".p10-trigger-2",
    triggerhook: 0.8
  })
  .setTween(tweenP35)
  .addTo(controller)
  // .addIndicators({
  //   name: "35"
  // });

  var tweenP36 = gsap.timeline()
  .fromTo(".p10-info-0", { y: -30, opacity: 0, duration: 1, ease: "sine.inOut" }, { y: 0, opacity: 1, duration: 0.8, ease: "sine.inOut"}, "with1")
  .fromTo(".p10-illust-1", {opacity: 0, scale: 0.8, duration: 0.8, ease: Back.easeOut}, {opacity: 1, scale: 1, duration: 0.6, ease: Back.easeOut}, "with2")
  .fromTo(".p10-illust-2", {opacity: 0, scale: 0.8, duration: 0.8, ease: Back.easeOut}, {opacity: 1, scale: 1, duration: 0.6, ease: Back.easeOut, delay: 0.3}, "with2")
  .fromTo(".p10-illust-3", {opacity: 0, scale: 0.8, duration: 0.8, ease: Back.easeOut}, {opacity: 1, scale: 1, duration: 0.6, ease: Back.easeOut, delay: 0.6}, "with2")
  .fromTo(".p10-illust-4", {opacity: 0, scale: 0.8, duration: 0.8, ease: Back.easeOut}, {opacity: 1, scale: 1, duration: 0.6, ease: Back.easeOut, delay: 0.9}, "with2")
  .fromTo(".p10-illust-5", {opacity: 0, scale: 0.8, duration: 0.8, ease: Back.easeOut}, {opacity: 1, scale: 1, duration: 0.6, ease: Back.easeOut, delay: 1.2}, "with2")
  .fromTo(".p10-illust-6", {opacity: 0, scale: 0.8, duration: 0.8, ease: Back.easeOut}, {opacity: 1, scale: 1, duration: 0.6, ease: Back.easeOut, delay: 1.5}, "with2");

  var sceneP36 = new ScrollMagic.Scene({
    triggerElement: ".p10-trigger-3",
    triggerhook: 0.8
  })
  .setTween(tweenP36)
  .addTo(controller)
  // .addIndicators({
  //   name: "36"
  // });

  var tweenP37 = gsap.timeline()
  .fromTo(".p10-info-2", { x: -50, opacity: 0, duration: 1, ease: "sine.inOut" }, { x: 0, opacity: 1, duration: 0.8, ease: "sine.inOut"}, "with")
  .fromTo(".p10-f-4", {y: 100, opacity: 0, duration: 0.7, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.6, ease: "sine.inOut", delay: 0.5}, "with")
  .fromTo(".p10-b-4", {x: -20, y: -10, opacity: 0, duration: 0.6, ease: "sine.inOut" }, {x: 0, y: 0, opacity: 1, duration: 0.5, ease: "sine.inOut", delay: 0.7}, "with")
  .fromTo(".p10-f-5", {x: -30, opacity: 0, duration: 0.7, ease: "sine.inOut"}, {x: 0, opacity: 1, duration: 0.6, ease: "sine.inOut", delay: 1}, "with")
  .fromTo(".p10-b-5", {x: -20, y: -10, opacity: 0, duration: 0.6, ease: "sine.inOut" }, {x: 0, y: 0, opacity: 1, duration: 0.5, ease: "sine.inOut", delay: 1.2}, "with");

  var sceneP37 = new ScrollMagic.Scene({
    triggerElement: ".p10-trigger-4",
    triggerhook: 0.8
  })
  .setTween(tweenP37)
  .addTo(controller)
  // .addIndicators({
  //   name: "37"
  // });

  var tweenP38 = gsap.timeline()
  .fromTo(".p10-f-6", {y: 100, opacity: 0, duration: 0.7, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.6, ease: "sine.inOut", delay: 0.5}, "with")
  .fromTo(".p10-info-3", {x: -30, opacity: 0, duration: 0.7, ease: "sine.inOut"}, {x: 0, opacity: 1, duration: 0.6, ease: "sine.inOut", delay: 0.7}, "with")
  .fromTo(".p10-b-6", {x: -20, y: -10, opacity: 0, duration: 0.6, ease: "sine.inOut" }, {x: 0, y: 0, opacity: 1, duration: 0.5, ease: "sine.inOut", delay: 0.7}, "with")
  .fromTo(".p10-f-7", {x: -30, opacity: 0, duration: 0.7, ease: "sine.inOut"}, {x: 0, opacity: 1, duration: 0.6, ease: "sine.inOut", delay: 1}, "with")
  .fromTo(".p10-b-7", {x: -20, y: -10, opacity: 0, duration: 0.6, ease: "sine.inOut" }, {x: 0, y: 0, opacity: 1, duration: 0.5, ease: "sine.inOut", delay: 1.2}, "with")
  .fromTo(".p10-f-8", {x: -30, opacity: 0, duration: 0.7, ease: "sine.inOut"}, {x: 0, opacity: 1, duration: 0.6, ease: "sine.inOut", delay: 1.5}, "with")
  .fromTo(".p10-b-8", {x: -20, y: -10, opacity: 0, duration: 0.6, ease: "sine.inOut" }, {x: 0, y: 0, opacity: 1, duration: 0.5, ease: "sine.inOut", delay: 1.7}, "with");

  var sceneP38 = new ScrollMagic.Scene({
    triggerElement: ".p10-trigger-5",
    triggerhook: 0.8
  })
  .setTween(tweenP38)
  .addTo(controller)
  // .addIndicators({
  //   name: "38"
  // });

  var tweenP39 = gsap.timeline()
  .fromTo(".p10-card-3-left", { x: -50, opacity: 0, duration: 1, ease: "sine.inOut" }, { x: 0, opacity: 1, duration: 0.8, ease: "sine.inOut"}, "with");

  var sceneP39 = new ScrollMagic.Scene({
    triggerElement: ".p10-trigger-6",
    triggerhook: 0.8
  })
  .setTween(tweenP39)
  .addTo(controller)
  // .addIndicators({
  //   name: "39"
  // });

  var tweenP40 = gsap.timeline()
  .fromTo(".p10-c4-info-1", {opacity: 0.3, scale: 1.4, duration: 0.8, ease: Bounce.easeOut}, {opacity: 1, scale: 1, duration: 0.8, ease: Bounce.easeOut}, "with1")
  .fromTo(".p10-f-9", {y: -30, opacity: 0, duration: 0.7, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.6, ease: "sine.inOut", delay: 1}, "with1")
  .fromTo(".p10-b-9", {x: -20, y: -10, opacity: 0, duration: 0.6, ease: "sine.inOut" }, {x: 0, y: 0, opacity: 1, duration: 0.5, ease: "sine.inOut", delay: 1.2}, "with1")
  .fromTo(".p10-c4-info-2", {opacity: 0.3, scale: 1.4, duration: 0.8, ease: Bounce.easeOut}, {opacity: 1, scale: 1, duration: 0.8, ease: Bounce.easeOut}, "with2")
  .fromTo(".p11-line", {y: -50, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.8, ease: "sine.inOut", delay: 0.5}, "with2")
  .fromTo(".p11-card-4-bottom", {opacity: 0, duration: 0.8, ease: "sine.inOut"}, {opacity: 1, duration: 0.8, ease: "sine.inOut", delay: 0.7}, "with2")
  .fromTo(".p10-f-10", {x: 30, opacity: 0, duration: 0.7, ease: "sine.inOut"}, {x: 0, opacity: 1, duration: 0.6, ease: "sine.inOut", delay: 1}, "with2")
  .fromTo(".p10-b-10", {x: -20, y: -10, opacity: 0, duration: 0.6, ease: "sine.inOut" }, {x: 0, y: 0, opacity: 1, duration: 0.5, ease: "sine.inOut", delay: 1.2}, "with2")
  .fromTo(".p10-f-11", {x: -30, opacity: 0, duration: 0.7, ease: "sine.inOut"}, {x: 0, opacity: 1, duration: 0.6, ease: "sine.inOut", delay: 1}, "with2")
  .fromTo(".p10-b-11", {x: -20, y: -10, opacity: 0, duration: 0.6, ease: "sine.inOut" }, {x: 0, y: 0, opacity: 1, duration: 0.5, ease: "sine.inOut", delay: 1.2}, "with2");

  var sceneP40 = new ScrollMagic.Scene({
    triggerElement: ".p10-trigger-7",
    triggerhook: 0.8
  })
  .setTween(tweenP40)
  .addTo(controller)
  // .addIndicators({
  //   name: "40"
  // });

  var tweenP41 = gsap.timeline()
  .fromTo(".p10-f-12", {y: -30, opacity: 0, duration: 0.7, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.6, ease: "sine.inOut"}, "with2")
  .fromTo(".p10-b-12", {x: -20, y: -10, opacity: 0, duration: 0.6, ease: "sine.inOut" }, {x: 0, y: 0, opacity: 1, duration: 0.5, ease: "sine.inOut", delay: 0.2}, "with2")
  .fromTo(".p11-card-layer-1", {opacity: 0, scale: 1.2, duration: 0.8, ease: Bounce.easeOut}, {opacity: 1, scale: 1, duration: 0.8, ease: Bounce.easeOut, delay: 0.4}, "with2")
  .fromTo(".p11-5-text-1", {x: -50, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {x: 1, opacity: 1, duration: 1, ease: "sine.inOut", delay: 1}, "with2")
  .fromTo(".p11-1-img-1", {y: -30, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 1, opacity: 1, duration: 0.9, ease: "sine.inOut", delay: 1.5}, "with2")
  .fromTo(".p11-1-img-2", {y: -30, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 1, opacity: 1, duration: 0.9, ease: "sine.inOut", delay: 1.6}, "with2");

  var sceneP41 = new ScrollMagic.Scene({
    triggerElement: ".p10-trigger-8",
    triggerhook: 0.8
  })
  .setTween(tweenP41)
  .addTo(controller)
  // .addIndicators({
  //   name: "41"
  // });

  var tweenP42 = gsap.timeline()
  .fromTo(".p11-card-layer-2", {opacity: 0, scale: 1.2, duration: 0.8, ease: Bounce.easeOut}, {opacity: 1, scale: 1, duration: 0.8, ease: Bounce.easeOut, delay: 0.4}, "with2")
  .fromTo(".p11-5-text-2", {x: -50, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {x: 1, opacity: 1, duration: 1, ease: "sine.inOut", delay: 1}, "with2")
  .fromTo(".p11-box-1", {y: -30, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 1, opacity: 1, duration: 0.9, ease: "sine.inOut", delay: 1.5}, "with2")
  .fromTo(".p11-box-2", {y: -30, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 1, opacity: 1, duration: 0.9, ease: "sine.inOut", delay: 1.5}, "with2");

  var sceneP42 = new ScrollMagic.Scene({
    triggerElement: ".p10-trigger-9",
    triggerhook: 0.8
  })
  .setTween(tweenP42)
  .addTo(controller)
  // .addIndicators({
  //   name: "42"
  // });

  var tweenP43 = gsap.timeline()
  .fromTo(".p11-wave-wave", {y: 20, duration: 0.8, ease: "sine.inOut"}, {y: -60, duration: 0.8, ease: "sine.inOut"}, "with")
  .fromTo(".p12-card-title", { x: 50, opacity: 0, duration: 1, ease: "sine.inOut" }, { x: 0, opacity: 1, duration: 0.8, ease: "sine.inOut", delay: 0.2}, "with");

  var sceneP43 = new ScrollMagic.Scene({
    triggerElement: ".p12-trigger-1",
    triggerhook: 0.8
  })
  .setTween(tweenP43)
  .addTo(controller)
  // .addIndicators({
  //   name: "43"
  // });

  var tweenP44 = gsap.timeline()
  .fromTo(".p12-box-1", {x: -50, opacity: 0, duration: 1, ease: "sine.inOut"}, {x: 0, opacity: 1, duration: 0.8, ease: "sine.inOut"}, "with")
  .fromTo(".p12-box-2", {x: -30, opacity: 0, duration: 1, ease: "sine.inOut" }, {x: 0, opacity: 1, duration: 0.8, ease: "sine.inOut", delay: 0.2}, "with");

  var sceneP44 = new ScrollMagic.Scene({
    triggerElement: ".p12-trigger-2",
    triggerhook: 0.8
  })
  .setTween(tweenP44)
  .addTo(controller)
  // .addIndicators({
  //   name: "44"
  // });

  var tweenP45 = gsap.timeline()
  .fromTo(".p12-wave-wave", {y: -30, duration: 0.8, ease: "sine.inOut"}, {y: 0, duration: 0.8, ease: "sine.inOut"}, "with");

  var sceneP45 = new ScrollMagic.Scene({
    triggerElement: ".p12-trigger-3",
    triggerhook: 0.8
  })
  .setTween(tweenP45)
  .addTo(controller)
  // .addIndicators({
  //   name: "45"
  // });

  var tweenP46 = gsap.timeline()
  .fromTo(".p13-title", {scale: 1.2, opacity: 0, duration: 1, ease: "back.inOut" }, {scale: 1, opacity: 1, duration: 0.8, ease: "back.inOut"}, "with")
  .fromTo(".p13-title-highlight-1", {y: 30, opacity: 0, duration: 0.5, ease: "sine.inOut" }, {y: -10, opacity: 1, duration: 0.6, ease: Bounce.easeOut, delay: 0.6}, "with")
  .fromTo(".p13-title-highlight-3", {x: -500, opacity: 0, duration: 1.2, ease: "sine.inOut" }, {x: 0, opacity: 1, duration: 0.6, ease: Bounce.easeOut, delay: 1}, "with")
  .fromTo(".p13-title-highlight-2", {x: 50, opacity: 0, duration: 1.2, ease: "sine.inOut" }, {x: 0, opacity: 1, duration: 0.6, ease: Bounce.easeOut, delay: 1.4}, "with");

  var sceneP46 = new ScrollMagic.Scene({
    triggerElement: ".p13-trigger-1",
    triggerhook: 0.8
  })
  .setTween(tweenP46)
  .addTo(controller)
  // .addIndicators({
  //   name: "46"
  // });

  var tweenP47 = gsap.timeline()
  .fromTo(".p13-wave-wave", {y: 50, duration: 0.8, ease: "sine.inOut"}, {y: 0, duration: 0.8, ease: "sine.inOut"}, "with")
  .fromTo(".p13-people-front", {y: 50, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.8, ease: Bounce.easeOut, delay: 0.4}, "with")
  .fromTo(".p13-people-back", {y: 50, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.8, ease: Bounce.easeOut, delay: 0.4}, "with")
  .fromTo(".p13-people-particle", {y: 50, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.8, ease: Bounce.easeOut, delay: 0.7}, "with");

  var sceneP47 = new ScrollMagic.Scene({
    triggerElement: ".p13-trigger-2",
    triggerhook: 0.8
  })
  .setTween(tweenP47)
  .addTo(controller)
  // .addIndicators({
  //   name: "47"
  // });

  var tweenP48 = gsap.timeline()
  .fromTo(".p14-end", {opacity: 0, scale: 1.1, duration: 0.8, ease: "sine.inOut"}, {opacity: 1, scale: 1, duration: 0.8, ease: "sine.inOut"}, "with")
  .fromTo(".p14-particle", {scale: 0.6, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {scale: 1, opacity: 1, duration: 0.8, ease: Back.easeOut, delay: 0.3}, "with")

  var sceneP48 = new ScrollMagic.Scene({
    triggerElement: ".p14-trigger-1",
    triggerhook: 0.8
  })
  .setTween(tweenP48)
  .addTo(controller)
  // .addIndicators({
  //   name: "48"
  // });

})();