let r_circle = document.querySelectorAll('.range-slide__circle');
if(r_circle){
  for(let i=0; i<r_circle.length; i++){
    
    var num = r_circle[i].previousElementSibling.innerText;
    var row = r_circle[i].parentNode.querySelector('.range-slide__row').clientWidth - r_circle[i].clientWidth;
    r_circle[i].style.left = (row/100)*num + 'px';
    r_circle[i].previousElementSibling.style.left = (row/100)*num + 'px';
    
    r_circle[i].addEventListener('touchstart', function(ev){
      var th = this;
      let sl = this.clientWidth;
      var rowW = th.parentElement.querySelector('.range-slide__row');
      var rowWidth = th.parentElement.querySelector('.range-slide__row').clientWidth - sl;
      var slide_num = th.parentElement.querySelector('.range-slide__num');
      var l = ev.touches[0].screenX;
      let p = th.parentElement.offsetLeft;
      
      document.body.addEventListener('touchmove', f);
      document.body.addEventListener('touchend', function(){
        document.body.removeEventListener('touchmove', f);
      },{once: true});
      
      function f(e){
        let b = e.touches[0].pageX - p - sl/2;
        
        if(e.touches[0].pageX <= p + sl){
          th.style.left = 0;
          slide_num.style.left = 0;
          slide_num.innerText = 0;
          return false;
        } else if(e.touches[0].pageX >= p + rowWidth){
          th.style.left = rowWidth + 'px';
          slide_num.style.left = rowWidth + 'px';
          slide_num.innerText = 100;
          return false;
        } else {
          b = b < 0 ? 0 : b;
          b = b > rowWidth ? rowWidth : b;
          th.style.left = b + 'px';
          slide_num.style.left = b + 'px';
          slide_num.innerText = Math.round((b*100)/rowWidth);
        }
      }
    });
    
    r_circle[i].addEventListener('mousedown', function(ev){
      var th = this;
      let sl = th.clientWidth;
      var rowW = th.parentElement.querySelector('.range-slide__row');
      var rowWidth = th.parentElement.querySelector('.range-slide__row').clientWidth - sl;
      var slide_num = th.parentElement.querySelector('.range-slide__num');
      var l = ev.offsetX;
      let p = th.parentElement.offsetLeft;
      
      document.body.addEventListener('mousemove', f);
      document.body.addEventListener('mouseup', function(){
        document.body.removeEventListener('mousemove', f);
      },{once: true});
      
      function f(e){
        let b = (e.pageX - l) - p - sl/2;
        
        if(e.pageX <= p + sl){
          th.style.left = 0;
          slide_num.style.left = 0;
          slide_num.innerText = 0;
          return false;
        } else if(e.pageX >= p + rowW.clientWidth){
          th.style.left = rowWidth + 'px';
          slide_num.style.left = rowWidth + 'px';
          slide_num.innerText = 100;
          return false;
        } else {
          b = b < 0 ? 0 : b;
          b = b > rowWidth ? rowWidth : b;
          th.style.left = b + 'px';
          slide_num.style.left = b + 'px';
          slide_num.innerText = Math.round((b*100)/rowWidth);
        }
      }
    });
  }
}