let charts = document.querySelectorAll('.pie-chart');
let elem = null;

if(charts.length){
  for(let i=0; i<charts.length; i++){
    let pre = charts[i].attributes['data-pracent'].value;
    let b = charts[i].attributes['data-boolean'].value;
    elem = charts[i];
    updateDonutChart(pre, b);
  }
}

function updateDonutChart (percent, donut) {
  percent = Math.round(percent);
  if (percent > 100) {
      percent = 100;
  } else if (percent < 0) {
      percent = 0;
  }
  var deg = Math.round(360 * (percent / 100));
  var elemPie = elem.querySelector('.pie-chart__pie');
  var elemRightSide = elem.querySelector('.right-side');
  var elemLeftSide = elem.querySelector('.left-side');
  var elemShadow = elem.querySelector('.pie-chart__shadow');
  var elemNum = elem.querySelector('.pie-chart__num');

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
