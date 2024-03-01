window.onload = () => {
  //do work
let lastKnownScrollPosition = 0;
let ticking = false;
let innerW = window.innerWidth;
let innerH = window.innerHeight;
let cutebag__img_path = "img/lottiefile/plastic_240228_inline_fixed.json";
let cutebag__img_index = 1;
let cutebag__img_start = 1;
let cutebag__img_end = 279;
let scrollPos__temp;
let lottie1 = document.getElementById("lottie1");
let animation1;
let scrollPos__check1 = document.getElementById("steps__text").offsetTop-400;
let scrollPos__check2 = document.getElementById("reasons__text").offsetTop-400;
let scrollPos__check3 = document.getElementById("about__text").offsetTop-400;
let scrollPos__check4 = document.getElementById("past__text").offsetTop-400;
let scrollPos__check5 = document.getElementById("share__text").offsetTop-400;
let scrollPos__bottom = document.body.scrollHeight-window.innerHeight;
let applybutton = document.getElementById("applybutton");

let sidebar__open = document.getElementById("sidebar__open");
let sidebar__close = document.getElementById("sidebar__close");
let sidebar = document.getElementById("sidebar");

// init controller
let SMcontroller = new ScrollMagic.Controller();


// Map function to convert the range
function mapRange(value, inMin, inMax, outMin, outMax) {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
// preload any image
function preload_image(im_url) {
  let img = new Image();
  img.src = im_url;
}

window.addEventListener("resize", function() {
  innerW = window.innerWidth;
  innerH = window.innerHeight;
  doSomething(lastKnownScrollPosition);
});
lottie1.addEventListener("click", function() {
  window.location = "/apply";
});
sidebar__open.addEventListener("click", function() {
  sidebar.style.right = 0;
});
sidebar__close.addEventListener("click", function() {
  sidebar.style.right = "-480px";
});

// build scenes
let revealElements = document.getElementsByClassName("digit");
for (var i=0; i<revealElements.length; i++) { // create a scene for each element
  new ScrollMagic.Scene({
            triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
            offset: 50,												 // start a little later
            triggerHook: 0.9,
          })
          .setClassToggle(revealElements[i], "visible") // add class toggle
          .addTo(SMcontroller);
}
let revealElements2 = document.getElementsByClassName("reasons__digit");
let revealElements2triggers = document.getElementsByClassName("trigger__reasons__digit");
for (var i=0; i<revealElements2.length; i++) { // create a scene for each element
  new ScrollMagic.Scene({
            triggerElement: revealElements2triggers[i], // y value has modified, so we use other element as trigger
            offset: 50,												 // start a little later
            triggerHook: 0.2,
          })
          .setClassToggle(revealElements2[i], "visible") // add class toggle
          .addTo(SMcontroller);
}

let scene__share = new ScrollMagic.Scene({triggerElement: "#trigger__share", duration: 300})
  .triggerHook(0)
  .setPin("#share__text", {pushFollowers: false})
  .addTo(SMcontroller);

function doSomething(scrollPos) {
  // 依據捲動位置進行某些操作
  // console.log(scrollPos);
  let bagtop = 0;
  let bagleft = 0;
  bagtop = innerH*-0.15;
  if(scrollPos <= scrollPos__check1)
  {
    bagleft = innerW*0.5 + innerW*0.4*(scrollPos/scrollPos__check1) ;
    // lottie1.style.left = bagleft+"px";
  }
  else if(scrollPos <= scrollPos__check2)
  {
    bagleft = innerW*0.9 - innerW*0.4*( (scrollPos-scrollPos__check1)/(scrollPos__check2-scrollPos__check1) );
    // console.log(bagleft);
    // lottie1.style.left = bagleft+"px";
  }
  else if(scrollPos <= scrollPos__check3)
  {
    bagleft = innerW*0.5;
  }
  else if(scrollPos <= scrollPos__check4)
  {
    bagleft = innerW*0.5 - innerW*0.4*( (scrollPos-scrollPos__check3)/(scrollPos__check4-scrollPos__check3) ) ;
    // lottie1.style.left = bagleft+"px";
  }
  else if(scrollPos <= scrollPos__check5)
  {
    bagleft = innerW*0.1 + innerW*0.4*( (scrollPos-scrollPos__check4)/(scrollPos__check5-scrollPos__check4) ) ;
    // lottie1.style.left = bagleft+"px";
  }
  else
  {
    bagleft = innerW*0.5;
  }
  if(innerW > 768) {
    lottie1.style.top = bagtop+"px";
    lottie1.style.left = bagleft+"px";
  }
  cutebag__img_index = Math.round(mapRange(scrollPos, 0, scrollPos__bottom, 1, cutebag__img_end));
  // console.log(cutebag__img_index);
  animation1.goToAndStop(cutebag__img_index, true);
}

document.addEventListener("scroll", function (e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});



animation1 = lottie.loadAnimation({
  container: lottie1, // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: cutebag__img_path // the path to the animation json
});

let splide = new Splide( '.splide', {
  type   : 'loop',
  focus  : 'center',
  perPage: 3,
  height : '35vw',
  gap    : '5rem',
  padding: '5rem',
  breakpoints: {
    768: {
      perPage: 1,
      height : '90vw',
      gap    : '1rem',
      
    },
  },
});
splide.mount();

}