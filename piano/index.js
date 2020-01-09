let animation = anime({
  targets: "li",
  translateX: 270,
  borderRadius: 50,
  duration: 2000,
  easing: "easeInOutQuad",
  delay: anime.stagger(100, { from: "center" }),

  complete: function(anim) {
    console.log("done");
  }
});
