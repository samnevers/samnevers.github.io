// Not so secret messages
console.log("%c Hi there! Thanks for popping by. ","background-color:black; color: white; font-family: 'Courier New', font-weight: bold");
console.log("%c Like what you see and want to chat? Email me at s.ki@live.com ","background-color: black; color: #6fccda; font-family: 'Courier New', font-weight: bold;");
console.log("%c Psst... poke the potato :) ","background-color:black; color: white; font-family: 'Courier New', font-weight: bold");

// Random function for rotating fries
var randomNumber = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  var randomX = function () {
    var divWidth = $("#ocean-header").innerWidth();
  return Math.random() * divWidth;
};

var dist = window.innerWidth;
dist += "px";

// Potato Animation
var rollAnimations = function () {
  var $potato = $(".potato");
  TweenMax.to($potato, 10, {
    rotation: 2600,
    left: dist,
    ease: Linear.easeNone,
    repeat: -1,
    repeatDelay: 0.5,
    yoyo: true,
    xPercent: window.innerWidth * 2.4
  }, 1.5);
};

// It's raining fries animation
var animateFries = function () {
  TweenMax.staggerTo(".fry", 0.8, {
    rotation: 720,
    ease: Linear.easeNone,
    yPercent: 2000,
    onComplete: function () {
      $fries.remove();
    }
  }, 0.1);
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

  // Potato easter egg!
  var $potato = $(".potato");
  $potato.on("click", function() {

    $("#ocean-header").css({"backgroundColor": "#6fccda"});
    $("body").css({"backgroundColor": "#6fccda"});
    for (var i = 0; i < 50; i ++) {
      var $fryImg = $("<img></img>");
      $fryImg.attr("src", "assets/fry.png");
      $fryImg.addClass("fry");
      $fryImg.css({
        left: randomX() + "px",
        top: -10 + "px",
        zIndex: 200,
        position: "absolute",
        transform: "rotate("+ randomNumber(0, 360) + "deg)"
      });

      $("body").prepend($fryImg);
    }
    animateFries();
  });

});
