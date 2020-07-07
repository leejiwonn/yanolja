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
  .addIndicators({
    name: "10"
  });

  var tweenP11 = gsap.timeline()
  .fromTo(".p6-persona-title", {y: -10, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 20, opacity: 1, duration: 0.8, ease: "sine.inOut"});

  var sceneP11 = new ScrollMagic.Scene({
    triggerElement: ".p6-trigger-1",
    triggerhook: 0.8
  })
  .setTween(tweenP11)
  .addTo(controller)
  .addIndicators({
    name: "11"
  });

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
  .addIndicators({
    name: "12"
  });

  var tweenP13 = gsap.timeline()
  .fromTo(".p6-persona-content-label-arrow", {y: -20, rotate: -20, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 0, rotate: 0, opacity: 1, duration: 0.8, ease: "sine.inOut"})

  var sceneP13 = new ScrollMagic.Scene({
    triggerElement: ".p6-trigger-3",
    triggerhook: 0.8
  })
  .setTween(tweenP13)
  .addTo(controller)
  .addIndicators({
    name: "13"
  });

  var tweenP14 = gsap.timeline()
  .fromTo(".p6-vlog-list", {x: 0, duration: 2, ease: "power4.inOut"}, {x: -850, duration: 2.5, ease: "power4.inOut"})

  var sceneP14 = new ScrollMagic.Scene({
    triggerElement: ".p6-trigger-4",
    triggerhook: 0.8
  })
  .setTween(tweenP14)
  .addTo(controller)
  .addIndicators({
    name: "14"
  });

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
  .addIndicators({
    name: "15"
  });

  var tweenP16 = gsap.timeline()
  .fromTo(".p7-title", {y: -50, opacity: 0, duration: 1, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.8, ease: "sine.inOut"}, "with")
  .fromTo(".p6-vlog-title-wave", {y: 0, duration: 0.8, ease: "sine.inOut"}, {y: 50, duration: 0.8, ease: "sine.inOut"}, "with");

  var sceneP16 = new ScrollMagic.Scene({
    triggerElement: ".p7-trigger-1",
    triggerhook: 0.8
  })
  .setTween(tweenP16)
  .addTo(controller)
  .addIndicators({
    name: "16"
  });

  var tweenP17 = gsap.timeline()
  .fromTo(".p7-text-box", {y: 50, opacity: 0, duration: 1, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.8, ease: "sine.inOut"}, "with1")
  .fromTo(".p7-text-1", {y: -30, opacity: 0, duration: 1, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.8, ease: "sine.inOut"}, "with2");

  var sceneP17 = new ScrollMagic.Scene({
    triggerElement: ".p7-trigger-2",
    triggerhook: 0.8
  })
  .setTween(tweenP17)
  .addTo(controller)
  .addIndicators({
    name: "17"
  });

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
  .addIndicators({
    name: "18"
  });

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
  .addIndicators({
    name: "19"
  });

  var tweenP20 = gsap.timeline()
  .fromTo(".p7-chat", {x: -50, opacity: 0, duration: 1, ease: "sine.inOut"}, {x: 0, opacity: 1, duration: 0.8, ease: "sine.inOut"}, "with")
  .fromTo(".p7-chat-image", {x: 50, opacity: 0, duration: 1, ease: "sine.inOut"}, {x: 0, opacity: 1, duration: 0.8, ease: "sine.inOut"}, "with");

  var sceneP20 = new ScrollMagic.Scene({
    triggerElement: ".p7-trigger-5",
    triggerhook: 0.8
  })
  .setTween(tweenP20)
  .addTo(controller)
  .addIndicators({
    name: "20"
  });

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
  .addIndicators({
    name: "21"
  });

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
  .addIndicators({
    name: "22"
  });

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
  .addIndicators({
    name: "23"
  });

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
  .addIndicators({
    name: "24"
  });

})();