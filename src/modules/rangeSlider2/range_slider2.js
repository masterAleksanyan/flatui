let slide2__btn = document.querySelectorAll('.range-slide2__btn');
if(slide2__btn){
  for(let i = 0; i<slide2__btn.length; i++){
    slide2__btn[i].addEventListener('mousedown', function(e){
      let thisWidth = this.clientWidth;
      let levelElem = this.parentNode;
      let slideWidth = this.closest('.range-slide2').clientWidth;
      let slideOffLeft = this.closest('.range-slide2').offsetLeft;
      let slideItemWidth = slideWidth/4;
      let pagex = 0;
      
      document.addEventListener('mousemove', f);
      document.addEventListener('mouseup', function(){
        document.removeEventListener('mousemove', f);
      });
      
      function f(ev){
        pagex = ev.pageX;
        slide(pagex);
      }
      
      function slide(pagex){
        if(pagex - slideOffLeft > 0 && pagex < slideOffLeft + slideWidth){
          var x = pagex - slideOffLeft;
          if(x > slideItemWidth * 3 + slideItemWidth/2){
            levelElem.style.width = 100 + '%';
          }
          if(x > slideItemWidth * 2 + slideItemWidth/2 && x < slideItemWidth * 3 + slideItemWidth/2){
            levelElem.style.width = 75 + '%';
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
    });
  }
}