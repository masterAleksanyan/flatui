let nameReg = /^[a-zA-Zа-яёА-ЯЁ ]+(([',. -][a-zA-Zа-яёА-ЯЁ ])?[a-zA-Zа-яёА-ЯЁ]*)*$/g;
let mailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let inputs = document.querySelectorAll('input.inp__item');
let forms = document.querySelectorAll('form.form_elements');

if(inputs){
  for(let i=0; i<inputs.length; i++){
    inputs[i].addEventListener('focus', function(){
      this.addEventListener('input', function(){
        if(this.value.trim().length > 1){
          if(this.type === 'text'){
            reginputs(this, nameReg);
          }
          if(this.type === 'email'){
            reginputs(this, mailReg);
          }
        } else{
          this.nextElementSibling.nextElementSibling.classList.remove('inp__msg--active');
          this.nextElementSibling.classList.remove('inp__msg--active');
        }
      });
    });
  }
}

if(forms){
  for(let i=0; i<forms.length; i++){
    forms[i].addEventListener('submit', function(ev){
      let thisForm = this.querySelectorAll('input.inp__item');
      for(let j=0; j<thisForm.length; j++){
        if(thisForm[j].value.trim().length < 2 || thisForm[j].nextElementSibling.classList.contains('inp__msg--active')){
          ev.preventDefault();
          thisForm[j].nextElementSibling.classList.add('inp__msg--active');
        }
      }
    });
  }
}

function reginputs(t, rg){
  let vl = t.value.trim();
  if(vl.match(rg)){
    t.nextElementSibling.nextElementSibling.classList.add('inp__msg--active');
    t.nextElementSibling.classList.remove('inp__msg--active');
    return true;
  } else {
    t.nextElementSibling.nextElementSibling.classList.remove('inp__msg--active');
    t.nextElementSibling.classList.add('inp__msg--active');
    return false;
  }
}


















