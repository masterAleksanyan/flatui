let btn = document.getElementById('burger_btn');
if(btn){
  btn.addEventListener('click', function(){
    this.classList.toggle('active');
    document.getElementById('header-menu').classList.toggle('active');
  });
}