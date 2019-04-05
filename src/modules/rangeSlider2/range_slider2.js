let slide2__btn = document.querySelectorAll('.range-slide2__btn');

if(slide2__btn.length){
  for(let i = 0; i<slide2__btn.length; i++){
    
    let th = slide2__btn[i];
    let thisWidth = th.clientWidth;
    let levelElem = th.parentNode;
    let parent = th.parentNode.parentNode;
    let slideWidth = parent.clientWidth;
    let slideItemWidth = slideWidth/4;
    let pagex = 0;
    
    let slideOffLeft = parent.offsetLeft;
    window.addEventListener('resize', ()=> {
      let newP = parent.offsetLeft;
      if (newP > slideOffLeft+20 || newP < slideOffLeft-20){
        slideOffLeft = newP;
      }
    });
    
    parent.addEventListener('click', function(ev){
      if(document.innerWidth < 1025){
        slider(ev.touches[0].pageX);
      } else {
        slider(ev.pageX);
      }
    });
    
    levelElem.style.width = levelElem.attributes['data-level'].value + '%';
    
    th.addEventListener('touchstart', function(){
      
      document.body.addEventListener('touchmove', f);
      document.body.addEventListener('touchend', function(){
        document.body.removeEventListener('touchmove', f);
      });
      
      function f(e){
        pagex = e.touches[0].pageX;
        slider(pagex);
      }
    });
    
    th.addEventListener('mousedown', function(e){
      document.addEventListener('mousemove', f);
      document.addEventListener('mouseup', function(){
        document.removeEventListener('mousemove', f);
      });
      
      function f(ev){
        pagex = ev.pageX;
        slider(pagex);
      }
    });
    
    function slider(pagex){
      if(pagex - slideOffLeft > 0 && pagex < slideOffLeft + slideWidth){
        var x = pagex - slideOffLeft;
        if(x > slideItemWidth * 3 + slideItemWidth/2){
          levelElem.style.width = 100 + '%';
        }
        if(x > slideItemWidth * 2 + slideItemWidth/2 && x < slideItemWidth * 3 + slideItemWidth/2){
          levelElem.style.width = 75 + '%'
        }
        if(x > slideItemWidth + slideItemWidth/2 && x < slideItemWidth * 2 + slideItemWidth/2){
          levelElem.style.width = 50 + '%';
        }
        if(x > slideItemWidth/2 && x < slideItemWidth + slideItemWidth/2){
          levelElem.style.width = 25 + '%';
        }
        if(x < slideItemWidth/2){
          levelElem.style.width = thisWidth/2 + 'px';
        }
      }
    }
  }
}