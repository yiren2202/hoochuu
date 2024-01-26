// 參考來源：http://www.html5rocks.com/en/tutorials/speed/animations/

let lastKnownScrollPosition = 0;
let ticking = false;
let innerW = window.innerWidth;
let cutebag__img_index = 1;
let scrollPos__temp;
// Map function to convert the range
function mapRange(value, inMin, inMax, outMin, outMax) {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
 }

function doSomething(scrollPos) {
  // 依據捲動位置進行某些操作
  console.log(scrollPos);
  document.getElementById("cutebag").style.top = mapRange(scrollPos, 0, innerW*0.7, 0+innerW*0.35, innerW-innerW*0.8)+ "px";
  document.getElementById("cutebag").style.left = mapRange(scrollPos, 0, innerW*0.7, 0+innerW*0.5, innerW-innerW*0.01)+ "px";
  if(scrollPos-scrollPos__temp > 0)
  {
    if(cutebag__img_index <117)
    {
        cutebag__img_index++;
    }
    else{
        cutebag__img_index = 1;
    }
  }
  else
  {
    if(cutebag__img_index >1)
    {
        cutebag__img_index--;
    }
    else{
        cutebag__img_index = 117;
    }
  }
  scrollPos__temp = scrollPos;
//   cutebag__img_index = scrollPos%117 + 1;
  document.getElementById("cutebag__img").src = "img/0125Test/running"+cutebag__img_index+".png";
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
