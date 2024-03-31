let isloaded = false;
let progressbar =  document.getElementById("progressbar");
try{tracker.trackPageview('loading');}catch{}

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
  if(isloaded){
    progressbar.style.display = "none";
    try{tracker.trackPageview('/home');}catch{}
  }
  else isloaded = true;
});


let mainpage = document.getElementById("mainpage");
let applysection = document.getElementById("apply");
let formElement = document.getElementById('data');
applysection.style.display = "none";

function showApply() {
  mainpage.style.display = "none";
  applysection.style.display = "block";
  window.scrollTo(0, 0);
  try{tracker.trackPageview('/form');}catch{}
}
function showMain() {
  applysection.style.display = "none";
  mainpage.style.display = "block";
  formElement.reset();
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
let sidebar__reasons = document.getElementById("sidebar__reasons");
let sidebar__about = document.getElementById("sidebar__about");
let sidebar__past = document.getElementById("sidebar__past");
let sidebar__share = document.getElementById("sidebar__share");
let sidebar__footer = document.getElementById("sidebar__footer");
let sidebar__ig1 = document.getElementById("sidebar__ig1");
let sidebar__ig2 = document.getElementById("sidebar__ig2");
let sidebar__email1 = document.getElementById("sidebar__email1");
let sidebar__email2 = document.getElementById("sidebar__email2");

let footer__ig1 = document.getElementById("footer__ig1");
let footer__ig2 = document.getElementById("footer__ig2");
let footer__email1 = document.getElementById("footer__email1");
let footer__email2 = document.getElementById("footer__email2");

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

window.scrollTo(0, 0);
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
  try{tracker.trackPageview('/menu');}catch{}
});
sidebar__close.addEventListener("click", function() {
  sidebar.style.right = "-480px";
});
sidebar__reasons.addEventListener("click", function() {
  try{tracker.trackEvent('/menu/reasons');}catch{}
});
sidebar__about.addEventListener("click", function() {
  try{tracker.trackEvent('/menu/about');}catch{}
});
sidebar__past.addEventListener("click", function() {
  try{tracker.trackEvent('/menu/past-issues');}catch{}
});
sidebar__share.addEventListener("click", function() {
  try{tracker.trackEvent('/menu/together');}catch{}
});
sidebar__footer.addEventListener("click", function() {
  try{tracker.trackEvent('/menu/contact');}catch{}
});
sidebar__ig1.addEventListener("click", function() {
  try{tracker.trackEvent('/menu/ig');}catch{}
});
sidebar__ig2.addEventListener("click", function() {
  try{tracker.trackEvent('/menu/ig');}catch{}
});
sidebar__email1.addEventListener("click", function() {
  try{tracker.trackEvent('/menu/email');}catch{}
});
sidebar__email2.addEventListener("click", function() {
  try{tracker.trackEvent('/menu/email');}catch{}
});
footer__ig1.addEventListener("click", function() {
  try{tracker.trackEvent('/contact/ig');}catch{}
});
footer__ig2.addEventListener("click", function() {
  try{tracker.trackEvent('/contact/ig');}catch{}
});
footer__email1.addEventListener("click", function() {
  try{tracker.trackEvent('/contact/email');}catch{}
});
footer__email2.addEventListener("click", function() {
  try{tracker.trackEvent('/contact/email');}catch{}
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
          .on("enter", function (e) {
              // console.log(e.target.triggerElement().getAttribute("id"));              
              switch(e.target.triggerElement().getAttribute("id"))
              {
                case "trigger__reasons__digit1":
                  try{tracker.trackPageview('/reasons/01');}catch{}
                  console.log("reason1 entered.");
                  break;
                case "trigger__reasons__digit2":
                  try{tracker.trackPageview('/reasons/02');}catch{}
                  console.log("reason2 entered.");
                  break;
                case "trigger__reasons__digit3":
                  try{tracker.trackPageview('/reasons/03');}catch{}
                  console.log("reason3 entered.");
                  break;
                case "trigger__reasons__digit4":
                  try{tracker.trackPageview('/reasons/04');}catch{}
                  console.log("reason4 entered.");
                  break;
                case "trigger__reasons__digit5":
                  try{tracker.trackPageview('/reasons/05');}catch{}
                  console.log("reason5 entered.");
                  break;
              }
          })
          .addTo(SMcontroller);
}

let scene__share = new ScrollMagic.Scene({triggerElement: "#trigger__share", duration: 100})
  .triggerHook(0)
  .setPin("#share__text", {pushFollowers: false})
  .addTo(SMcontroller);


function doSomething(scrollPos) {
  // 依據捲動位置進行某些操作
  // console.log(scrollPos);
  let bagtop;
  let bagleft;

  // All Device Scroll
  if(scrollPos <= scrollPos__check1)
  {
    if(lottie1HasShowed) {
      lottie1.classList.remove("fadein");
      lottie1.classList.add("fadeout");
      lottie1HasShowed = false;
    }
  }
  else if(scrollPos <= scrollPos__check2)
  {
    try{tracker.trackPageview('/steps');}catch{}
    if(!lottie1HasShowed) {
      lottie1.classList.remove("fadeout");
      lottie1.classList.add("fadein");
      lottie1HasShowed = true;
    }
  }
  else if(scrollPos <= scrollPos__check3)
  {

  }
  else if(scrollPos <= scrollPos__check4)
  {
    try{tracker.trackPageview('/about');}catch{}
  }
  else if(scrollPos <= scrollPos__check5)
  {

  }
  else if(scrollPos <= scrollPos__check6)
  {
    try{tracker.trackPageview('/together');}catch{}
  }
  else
  {
    try{tracker.trackPageview('/contact');}catch{}
  }
  if(scrollPos <= scrollPos__applybuttonTrigger)
    {
      if(applybuttonHasMoved) {
        lottie1.classList.remove("clickme");
        applybuttonHasMoved = false;
      }
    }
    else
    {
      if(!applybuttonHasMoved) {
        lottie1.classList.add("clickme");
        applybuttonHasMoved = true;
      }
    }

  // Mobile Scroll
  if(innerW < 768) {
    bagtop = innerH*0.25;
    bagleft = innerW*0.5;

    // if(scrollPos <= scrollPos__check1)
    // {
    //   bagtop = innerH*-0.18;
    //   // bagtop = innerH*0.25 - innerH*0.43*(scrollPos/scrollPos__check1);
    // }
    // else if(scrollPos<=scrollPos__check2)
    // {
    //   bagtop = innerH*-0.18;
    // }
    // else 
    if(scrollPos<=scrollPos__check5)
    {
      bagtop = innerH*-0.18;
    }
    else
    {
      bagtop = innerH*-0.18 + innerH*0.15*((scrollPos-scrollPos__check5)/(scrollPos__bottom-scrollPos__check5)) ;
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
  if(isloaded){
    progressbar.style.display = "none";
    try{tracker.trackPageview('/home');}catch{}
  }
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
splide.on( 'active', function (e) {
  // console.log(e.index);
  switch(e.index)
  {
    case 0:
      try{tracker.trackPageview('/past-issues/01');}catch{}
      break;
    case 1:
      try{tracker.trackPageview('/past-issues/02');}catch{}
      break;
    case 2:
      try{tracker.trackPageview('/past-issues/03');}catch{}
      break;
    case 3:
      try{tracker.trackPageview('/past-issues/04');}catch{}
      break;
    case 4:
      try{tracker.trackPageview('/past-issues/05');}catch{}
      break;
    case 5:
      try{tracker.trackPageview('/past-issues/06');}catch{}
      break;
  }
} );
splide.mount();

}