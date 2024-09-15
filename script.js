const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

gsap.from(".nlink", {
  stagger: 0.1,
  duration: 2,
  y: "-100vh",
  ease: "Power3.easeOut",
  opacity: 0,
});

gsap.from(".logo", {
    duration: 2,
    y: "-100vh", // Moves the logo from 100vh above, outside of the viewport
    ease: "Power3.easeOut", // Ease-out effect to slow down towards the end
    opacity: 0,
});


gsap.from(".anim2", {
  stagger: 0.2,
  y: 50,
  duration: 2,
  opacity: 0,
  ease: Expo,
});
Shery.imageEffect("#ephem img", {
  style: 3,
  config: {
    uFrequencyX: { value: 11.45, range: [0, 100] },
    uFrequencyY: { value: 4.58, range: [0, 100] },
    uFrequencyZ: { value: 45.8, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 18.7 },
    zindex: { value: "-999699", range: [-9999999, 9999999] },
    aspect: { value: 0.75 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.43, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

Shery.imageEffect("#susimagewrapper img , .anim3", {
  style: 5,
  config: {
    a: { value: 1.83, range: [0, 30] },
    b: { value: -0.65, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.7058738554265448 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.21, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

Shery.textAnimate("#headings h1", {
  style: 2,
  y: 10,
  delay: 1,
  duration: 4,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.2,
});

gsap.from("#ephem img", {
  z: -7,
  duration: 4,
  ease: "Expo.easeInOut",
  opacity: 0,
});

Shery.imageEffect("#bimg", {
  style: 5,
  config: {
    a: { value: 0.92, range: [0, 30] },
    b: { value: -0.89, range: [-1, 1] },
    zindex: { value: -999699, range: [-999999, 999999] },
    aspect: { value: 1.9080167248019553 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 2.39, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.27, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.99, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 33 } },
    discard_threshold: { value: 0.58, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.29, range: [0, 2] },
    noise_scale: { value: 19.85, range: [0, 100] },
  },
  gooey: true,
});

document.querySelector("#ftext button")
.addEventListener("mouseover", function() {
    gsap.to("#future video", {
        opacity: 1,
        duration: 1,
        ease: Power3,
    });
    
});
document.querySelector("#ftext button")
.addEventListener("mouseleave", function() {
    gsap.to("#future video", {
        opacity: 0,
        duration: 1,
        ease: Power3,
    });
    
});
