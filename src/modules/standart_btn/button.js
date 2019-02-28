let st_buttons = document.querySelectorAll('.st-btn');
for(let i = 0; i<st_buttons.length; i++){
  st_buttons[i].addEventListener('mousemove', function(ev){
    let span = this.querySelector('span');
    span.style.left = ev.offsetX + 'px';
    span.style.top = ev.offsetY + 'px';
  });
}