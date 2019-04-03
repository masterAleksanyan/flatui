let stages = document.querySelectorAll('.stages');
if(stages.length){
  for(let i = 0; i<stages.length; i++){
    stages[i].addEventListener('click', function(ev){
      if(ev.target.className.match('stages__item')){
        let num = ev.target.innerHTML;
        let stagesItems = this.querySelectorAll('.stages__item');
        let level = this.querySelector('.stages__level');
        
        level.style.width = (num-1)*(100/(stagesItems.length - 1)) + '%';
        
        for(let j=0; j<stagesItems.length; j++){
          if(j<num && num != 1){
            stagesItems[j].classList.add('stages__item--active');
          } else {
            stagesItems[j].classList.remove('stages__item--active');
          }
        }
      }
    });
  }
}