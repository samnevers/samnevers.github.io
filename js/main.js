console.log("Yo");
console.log(innerWidth);
var dist = window.innerWidth;
dist += "px";
// var potatoAnimation = null;
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
  // $(".potato").on("click", rollAnimations);
  console.log( dist );
  rollAnimations();

  // $(".project-one").hover( function () {
  //   $(this).append( $("<img src='assets/project-1.jpg'>"));
  // });
});
