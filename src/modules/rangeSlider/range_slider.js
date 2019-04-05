let r_circle = document.querySelectorAll('.range-slide__circle');
if(r_circle.length){
  for(let i=0; i<r_circle.length; i++){
    let th = r_circle[i];
    let pagex = 0;
    
    let num = th.previousElementSibling.innerText;
    let row = th.parentNode.querySelector('.range-slide__row').clientWidth - r_circle[i].clientWidth;
    th.style.left = (row/100)*num + 'px';
    th.previousElementSibling.style.left = (row/100)*num + 'px';
    
    th.addEventListener('touchstart', function(){
      document.body.addEventListener('touchmove', f);
      document.body.addEventListener('touchend', function(){
        document.body.removeEventListener('touchmove', f);
      });
      
      function f(e){
        pagex = e.touches[0].pageX;
        slide(pagex);
      }
    });
    
    th.addEventListener('mousedown', function(){
      document.body.addEventListener('mousemove', f);
      document.body.addEventListener('mouseup', function(){
        document.body.removeEventListener('mousemove', f);
      });
      
      function f(e){
        pagex = e.pageX;
        slide(pagex);
      }
    });
    
    let sl = th.clientWidth;
    let parent = th.parentElement;
    let rowW = parent.querySelector('.range-slide__row').clientWidth;
    let slide_num = parent.querySelector('.range-slide__num');
    let p = parent.offsetLeft;
    
    
    window.addEventListener('resize', ()=> {
      let newP = parent.offsetLeft;
      if (newP > p+20 || newP < p-20){
        p = newP;
      }
    });
    
    parent.addEventListener('click', function(ev){
      if(document.innerWidth < 1025){
        slide(ev.touches[0].pageX);
      } else {
        slide(ev.pageX);
      }
    });
      
    function slide(pagex){
      let x = pagex - p;
      if(x > 0 && pagex < p + rowW){
        th.style.left = x - sl/2 + 'px';
        slide_num.style.left = x - sl/2 + 'px';
        slide_num.innerText = Math.round((x*100)/rowW);
      }
    }
  }
}