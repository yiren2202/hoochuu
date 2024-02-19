window.onload = () => {
  //do work
let lastKnownScrollPosition = 0;
let ticking = false;
let innerW = window.innerWidth;
let cutebag__img_path = "img/lottiefile/plastic_240216_2.json";
let cutebag__img_index = 1;
let cutebag__img_start = 1;
let cutebag__img_end = 75;
let scrollPos__temp;
let scrollPos__check1 = 700;
let scrollPos__check2 = 1400;
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
for(let i=1; i<=cutebag__img_end; i++)
{
  preload_image("img/0126_compressed/running"+i+".png");
}
function doSomething(scrollPos) {
  // 依據捲動位置進行某些操作
  console.log(scrollPos);
  let bagleft = 0;
  if(scrollPos <= scrollPos__check1)
  {
    bagleft = innerW*0.5 + innerW*0.4*(scrollPos/scrollPos__check1) ;
    document.getElementById("cutebag").style.left = bagleft+"px";
    lottie1.style.left = bagleft+"px";
  }
  else if(scrollPos <= scrollPos__check2)
  {
    bagleft = innerW*0.9 - innerW*0.4*((scrollPos-scrollPos__check1)/(scrollPos__check2-scrollPos__check1));
    // console.log(bagleft);
    document.getElementById("cutebag").style.left = bagleft+"px";
    lottie1.style.left = bagleft+"px";
  }
  else
  {
    document.getElementById("cutebag").style.left = "50vw";
    lottie1.style.left = "50vw";
  }
  // document.getElementById("cutebag").style.top = mapRange(scrollPos, 0, innerW*0.7, 0+innerW*0.35, innerW-innerW*0.8)+ "px";
  // document.getElementById("cutebag").style.left = mapRange(scrollPos, 0, innerW*0.7, 0+innerW*0.5, innerW-innerW*0.01)+ "px";
  // if(scrollPos-scrollPos__temp > 0)
  // {
  //   if(cutebag__img_index < cutebag__img_end)
  //   {
  //       cutebag__img_index++;
  //   }
  //   else{
  //       cutebag__img_index = 1;
  //   }
  // }
  // else
  // {
  //   if(cutebag__img_index >1)
  //   {
  //       cutebag__img_index--;
  //   }
  //   else{
  //       cutebag__img_index = cutebag__img_end;
  //   }
  // }
  // scrollPos__temp = scrollPos;
  cutebag__img_index = Math.round(mapRange(scrollPos, 0, scrollPos__bottom, 1, cutebag__img_end));
  console.log(cutebag__img_index);
  animation1.goToAndStop(cutebag__img_index, true);
  document.getElementById("cutebag__img").src = "img/0126_compressed/running"+cutebag__img_index+".png";
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
// let lottie2 = document.getElementById("lottie2");
let animation1;
// let animation2;

animation1 = lottie.loadAnimation({
  container: lottie1, // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: cutebag__img_path // the path to the animation json
});

// player1.addEventListener("ready", () => {
//   LottieInteractivity.create({
// 			  mode:"scroll",
// 			  player: "#lottie1",
// 			  actions: [
//         {
//             visibility:[0, 1.0],
//             type: "seek",
//             frames: [0, 300],
//         },
//         ]
// 			});
// });
// player2.addEventListener("ready", () => {
//   LottieInteractivity.create({
// 			  mode:"scroll",
// 			  player: "#lottie2",
// 			  actions: [
//         {
//             visibility:[0, 1.0],
//             type: "seek",
//             frames: [0, 300],
//         },
//         ]
// 			});
// });

}