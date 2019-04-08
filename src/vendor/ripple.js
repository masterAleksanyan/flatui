let buttons = document.querySelectorAll('.ripple-elem');
if(buttons.length){
  [].forEach.call(buttons, function (b) {
    b.addEventListener('click', createRipple);
  });
}

function createRipple (e) {
  let circle = document.createElement('div');
  let d = Math.max(this.clientWidth, this.clientHeight);
  
  circle.style.width = circle.style.height = d + 'px';
  var rect = this.getBoundingClientRect();
  
  circle.style.left = e.clientX - rect.left - d/2 + 'px';
  circle.style.top = e.clientY - rect.top - d/2 + 'px';
  
  circle.classList.add('ripple');
  this.appendChild(circle);
}