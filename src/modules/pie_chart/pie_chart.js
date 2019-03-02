function updateDonutChart (el, percent, donut) {
  percent = Math.round(percent);
  if (percent > 100) {
      percent = 100;
  } else if (percent < 0) {
      percent = 0;
  }
  var deg = Math.round(360 * (percent / 100));
  var elem = document.getElementById(el);
  var elemPie = elem.querySelector('.pie');
  var elemRightSide = elem.querySelector('.right-side');
  var elemLeftSide = elem.querySelector('.left-side');
  var elemShadow = elem.querySelector('.shadow');
  var elemNum = elem.querySelector('.num');

  if(percent > 50){
    elemPie.style.clip = 'rect(auto, auto, auto, auto)';
    elemRightSide.style.transform = 'rotate(180deg)';
  } else {
    elemPie.style.clip = 'rect(0, 1em, 1em, 0.5em)';
    elemRightSide.style.transform = 'rotate(0deg)';
  }
  if(donut){
    elemRightSide.style.borderWidth = '0.053em';
    elemLeftSide.style.borderWidth = '0.053em';
    elemShadow.style.borderWidth = '0.053em';
  } else {
    elemRightSide.style.borderWidth = '0.5em';
    elemLeftSide.style.borderWidth = '0.5em';
    elemShadow.style.borderWidth = '0.5em';
  }
  elemNum.innerHTML = percent;
  elemLeftSide.style.transform = "rotate(" + deg + "deg)";
}
