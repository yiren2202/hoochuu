let isloaded = false;
let progressbar =  document.getElementById("progressbar");

// progressbar__text animation
let progressbar__texts = document.getElementsByClassName("progressbar__text");
function progressbarTextAnimation(index) {
  if(index<progressbar__texts.length-1) {
    progressbar__texts[index].classList.toggle("fadeshow");
    progressbar__texts[index+1].classList.toggle("fadeshow");
  }
  else {
    progressbar__texts[index].classList.toggle("fadeshow");
    progressbar__texts[0].classList.toggle("fadeshow");
  }
}
progressbar__texts[0].addEventListener('animationend',function(e){
  e.stopPropagation();
  progressbarTextAnimation(0);
});
progressbar__texts[1].addEventListener('animationend',function(e){
  e.stopPropagation();
  progressbarTextAnimation(1);
});
progressbar__texts[2].addEventListener('animationend',function(e){
  e.stopPropagation();
  progressbarTextAnimation(2);
});
progressbar__texts[3].addEventListener('animationend',function(e){
  e.stopPropagation();
  progressbarTextAnimation(3);
});
progressbar__texts[0].classList.add("fadeshow");
progressbar.addEventListener('animationend',function(e){
  e.stopPropagation();
  console.log('CSS animation end');
  if(isloaded) progressbar.style.display = "none";
  else isloaded = true;
});


let mainpage = document.getElementById("mainpage");
let applysection = document.getElementById("apply");
applysection.style.display = "none";

function showApply() {
  mainpage.style.display = "none";
  applysection.style.display = "block";
  window.scrollTo(0, 0);
}
function showMain() {
  applysection.style.display = "none";
  mainpage.style.display = "block";
  window.scrollTo(0, 0);
}
window.onload = () => {
  //do work

let lastKnownScrollPosition = 0;
let ticking = false;
let innerW = window.innerWidth;
let innerH = window.innerHeight;
let cutebag__img_path = "./img/lottiefile/plastic_240302new.json";
let cutebag__img_index = 1;
let cutebag__img_start = 1;
let cutebag__img_end = 275;
let scrollPos__temp;
let lottie1 = document.getElementById("lottie1");
let lottie1HasShowed = false;
let animation1;
let scrollPos__check1 = document.getElementById("steps__text").offsetTop-400;
let scrollPos__check2 = document.getElementById("reasons__text").offsetTop-400;
let scrollPos__check3 = document.getElementById("about__text").offsetTop-400;
let scrollPos__check4 = document.getElementById("past__text").offsetTop-400;
let scrollPos__check5 = document.getElementById("share__text").offsetTop-400;
let scrollPos__check6 = document.getElementById("footer").offsetTop-400;
let scrollPos__bottom = document.body.scrollHeight-window.innerHeight;
let scrollPos__applybuttonTrigger = scrollPos__bottom-200;
let applybuttonHasMoved = false;
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
  scrollPos__check1 = document.getElementById("steps__text").offsetTop-400;
  scrollPos__check2 = document.getElementById("reasons__text").offsetTop-400;
  scrollPos__check3 = document.getElementById("about__text").offsetTop-400;
  scrollPos__check4 = document.getElementById("past__text").offsetTop-400;
  scrollPos__check5 = document.getElementById("share__text").offsetTop-400;
  scrollPos__check6 = document.getElementById("footer").offsetTop-400;
  scrollPos__bottom = document.body.scrollHeight-window.innerHeight;
  scrollPos__applybuttonTrigger = scrollPos__bottom-200;
  doSomething(lastKnownScrollPosition);
});
lottie1.addEventListener("click", function() {
  showApply();
});
sidebar__open.addEventListener("click", function() {
  sidebar.style.right = 0;
});
sidebar__close.addEventListener("click", function() {
  sidebar.style.right = "-480px";
});
let siderbarLinks = document.getElementsByClassName("sidebar-anchor");
for (var i=0; i<siderbarLinks.length; i++) { // create a scene for each element
  siderbarLinks[i].addEventListener("click", function() {
    sidebar.style.right = "-480px";
  });
}

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
            triggerHook: 0.4,
          })
          .setClassToggle(revealElements2[i], "visible") // add class toggle
          .duration(1200)
          .addTo(SMcontroller);
}

let scene__share = new ScrollMagic.Scene({triggerElement: "#trigger__share", duration: 300})
  .triggerHook(0)
  .setPin("#share__text", {pushFollowers: false})
  .addTo(SMcontroller);


function doSomething(scrollPos) {
  // 依據捲動位置進行某些操作
  // console.log(scrollPos);
  let bagtop;
  let bagleft;
  
  // Mobile Scroll
  if(innerW < 768) {
    bagtop = innerH*0.25;
    bagleft = innerW*0.5;

    if(scrollPos <= scrollPos__check1)
    {
      bagtop = innerH*0.25 - innerH*0.37*(scrollPos/scrollPos__check1) ;
    }
    else if(scrollPos<=scrollPos__check2)
    {
      bagtop = innerH*-0.12;
    }
    else if(scrollPos<=scrollPos__check5)
    {
      bagtop = innerH*-0.12;
    }
    else
    {
      bagtop = innerH*-0.12 + innerH*0.1*((scrollPos-scrollPos__check5)/(scrollPos__bottom-scrollPos__check5)) ;
    }
  }
  // Desktop Scroll
  else if(innerW >= 768) {
    bagtop = innerH*-0.15;
    bagleft = innerW*0.5;

    if(scrollPos <= scrollPos__check1)
    {
      bagtop = innerH*-0.15;
      bagleft = innerW*0.5 + innerW*0.4*(scrollPos/scrollPos__check1);
    }
    else if(scrollPos <= scrollPos__check2)
    {
      bagtop = innerH*-0.15 - innerH*0.05*((scrollPos-scrollPos__check1)/(scrollPos__check2-scrollPos__check1)) ;
      bagleft = innerW*0.9 - innerW*0.4*( (scrollPos-scrollPos__check1)/(scrollPos__check2-scrollPos__check1) );
      // console.log(bagleft);
    }
    else if(scrollPos <= scrollPos__check3)
    {
      bagtop = innerH*-0.2;
      bagleft = innerW*0.5;
    }
    else if(scrollPos <= scrollPos__check4)
    {
      bagtop = innerH*-0.2;
      bagleft = innerW*0.5 - innerW*0.4*( (scrollPos-scrollPos__check3)/(scrollPos__check4-scrollPos__check3) ) ;
    }
    else if(scrollPos <= scrollPos__check5)
    {
      bagtop = innerH*-0.2;
      bagleft = innerW*0.1 + innerW*0.4*( (scrollPos-scrollPos__check4)/(scrollPos__check5-scrollPos__check4) );
    }
    else
    {
      bagtop = innerH*-0.2 + innerH*0.1*( (scrollPos-scrollPos__check5)/(scrollPos__bottom-scrollPos__check5) );
      bagleft = innerW*0.5 - innerW*0.1*( (scrollPos-scrollPos__check5)/(scrollPos__bottom-scrollPos__check5) );
    }
    // All Device Scroll
    if(scrollPos <= scrollPos__check1)
    {
      if(lottie1HasShowed) {
        lottie1.classList.remove("fadein");
        lottie1.classList.add("fadeout");
        lottie1HasShowed = false;
      }
    }
    else
    {
      if(!lottie1HasShowed) {
        lottie1.classList.remove("fadeout");
        lottie1.classList.add("fadein");
        lottie1HasShowed = true;
      }
    }
    if(scrollPos <= scrollPos__applybuttonTrigger)
    {
      if(applybuttonHasMoved) {
        lottie1.classList.remove("clickme");
        // applybutton.classList.remove("tocenter");
        // applybutton.classList.add("toleft");
        applybuttonHasMoved = false;
      }
    }
    else
    {
      if(!applybuttonHasMoved) {
        lottie1.classList.add("clickme");
        // applybutton.classList.remove("toleft");
        // applybutton.classList.add("tocenter");
        applybuttonHasMoved = true;
      }
    }
  }

  // console.log(bagtop);
  // console.log(bagleft);
  lottie1.style.top = bagtop+"px";
  lottie1.style.left = bagleft+"px";
  
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
animation1.addEventListener('data_ready', () => {
  console.log('main animation data has loaded');
  if(isloaded) progressbar.style.display = "none";
  else isloaded = true;
});

let splide = new Splide( '.splide', {
  type   : 'loop',
  focus  : 'center',
  perPage: 3,
  height : '35vw',
  fixedWidth: '25vw',
  fixedHeight: '35vw',
  gap    : '5rem',
  padding: '5rem',
  breakpoints: {
    768: {
      perPage: 1,
      fixedWidth: '90vw',
      fixedHeight : '110vw',
      gap    : '5rem',
    },
  },
});
splide.mount();

}