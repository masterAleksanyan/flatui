//import "../../node_modules/jquery/dist/jquery.min.js"
import "../vendor/jquery.jchart.js"
import "../modules/pie_chart/pie_chart.js"
import "../modules/pie_chart2/pie_chart2.js"
import "../modules/rangeSlider/range_slider.js"
import "../modules/rangeSlider2/range_slider2.js"
import "../modules/standart_btn/button.js"
import "../modules/stages/stages.js"
import "../modules/formElements/form.js"
import "../modules/map/map.js"

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
  inputs.on('keyup', function(ev){
    if(ev.keyCode === 9){
      inputs.removeClass('focuselem');
      $(this).addClass('focuselem');
    }
  });
  inputs.on('blur', function(){
    inputs.removeClass('focuselem');
  })
})