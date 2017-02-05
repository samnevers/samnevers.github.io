
var dist = window.innerWidth;
dist += "px";

// Potato Animation
var rollAnimations = function () {
  var $potato = $(".potato");
  TweenMax.to($potato, 5, {
    rotation: 2600,
    left: dist,
    ease: Linear.easeNone,
    repeat: -1,
    repeatDelay: 0.5,
    yoyo: true,
    xPercent: window.innerWidth * 2.4
  }, 1.5);
};


$(document).ready(function() {

  rollAnimations();

  // Name changing
  $("h1").hover(function () {
    var $sam = $(".sam");
    $sam.html("SAM KI");
  }, function() {
    var $sam = $(".sam");
    $sam.html("SAMANTHA KI");
  });
});
