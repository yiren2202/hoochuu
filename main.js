window.onload = () => {
  //do work
let lastKnownScrollPosition = 0;
let ticking = false;
let innerW = window.innerWidth;
let cutebag__img_path = "img/lottiefile/plastic_240216_2.json";
let cutebag__img_index = 1;
let cutebag__img_start = 1;
let cutebag__img_end = 91;
let scrollPos__temp;
let scrollPos__check1 = 700;
let scrollPos__check2 = 1400;
let scrollPos__check3 = 5800;
let scrollPos__check4 = 6500;
let scrollPos__check5 = 7200;
let scrollPos__bottom = document.body.scrollHeight-window.innerHeight;
// console.log(document.body.scrollHeight);
// console.log(window.innerHeight);
// Map function to convert the range
function mapRange(value, inMin, inMax, outMin, outMax) {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
// preload any image
function preload_image(im_url) {
  let img = new Image();
  img.src = im_url;
}

function doSomething(scrollPos) {
  // 依據捲動位置進行某些操作
  // console.log(scrollPos);
  let bagleft = 0;
  if(scrollPos <= scrollPos__check1)
  {
    bagleft = innerW*0.5 + innerW*0.4*(scrollPos/scrollPos__check1) ;
    lottie1.style.left = bagleft+"px";
  }
  else if(scrollPos <= scrollPos__check2)
  {
    bagleft = innerW*0.9 - innerW*0.4*( (scrollPos-scrollPos__check1)/(scrollPos__check2-scrollPos__check1) );
    // console.log(bagleft);
    lottie1.style.left = bagleft+"px";
  }
  else if(scrollPos <= scrollPos__check3)
  {
    lottie1.style.left = "50vw";
  }
  else if(scrollPos <= scrollPos__check4)
  {
    bagleft = innerW*0.5 - innerW*0.4*( (scrollPos-scrollPos__check3)/(scrollPos__check4-scrollPos__check3) ) ;
    lottie1.style.left = bagleft+"px";
  }
  else if(scrollPos <= scrollPos__check5)
  {
    bagleft = innerW*0.1 + innerW*0.4*( (scrollPos-scrollPos__check4)/(scrollPos__check5-scrollPos__check4) ) ;
    lottie1.style.left = bagleft+"px";
  }
  else
  {
    lottie1.style.left = "50vw";
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

let lottie1 = document.getElementById("lottie1");
let animation1;

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
  gap    : '2rem',
  breakpoints: {
    640: {
      perPage: 1,
      gap    : '.7rem',
      height : '6rem',
    },
  },
});
splide.mount();

}