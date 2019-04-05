// plagins
import "../modules/calendar/jquery-ui.min.js"

// modules
import "../vendor/ripple.js"
import "../modules/pie_chart/pie_chart.js"
import "../modules/rangeSlider/range_slider.js"
import "../modules/rangeSlider2/range_slider2.js"
import "../modules/stages/stages.js"
import "../modules/formElements/form.js"
import "../modules/map/map.js"
import "../modules/calendar/calendar.js"
import "../modules/video/video.js"

// // javascript
//window.onload = function(){
//  let inputs = document.querySelectorAll('input, button, textarea, a');
//  if(inputs){
//    for(let i=0; i<inputs.length; i++){
//      inputs[i].addEventListener('keyup', function(ev){
//        if(ev.keyCode === 9){
//          removeFocuseItems();
//          this.classList.add('focuselem');
//        }
//      });
//      inputs[i].addEventListener('blur', removeFocuseItems);
//    }
//  }
//  function removeFocuseItems(){
//    for(let i=0; i<inputs.length;i++){
//      inputs[i].classList.remove('focuselem');
//    }
//  }
//}


// // jQuery
$(document).ready(function(){
  let inputs = $('input, button, textarea, a');
  if(inputs.length){
    inputs.on('keyup', function(ev){
      if(ev.keyCode === 9){
        inputs.removeClass('focuselem');
        $(this).addClass('focuselem');
      }
    });
    inputs.on('blur', function(){
      inputs.removeClass('focuselem');
    }); 
  }
});