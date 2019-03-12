let nameReg = /^[a-zA-Zа-яёА-ЯЁ ]+(([',. -][a-zA-Zа-яёА-ЯЁ ])?[a-zA-Zа-яёА-ЯЁ]*)*$/g;
let mailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let inputs = document.querySelectorAll('input.inp_item');
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
          this.nextElementSibling.nextElementSibling.classList.remove('msg-active');
          this.nextElementSibling.classList.remove('msg-active');
        }
      });
    });
  }
}

if(forms){
  for(let i=0; i<forms.length; i++){
    forms[i].addEventListener('submit', function(ev){
      let thisForm = this.querySelectorAll('input.inp_item');
      for(let j=0; j<thisForm.length; j++){
        if(thisForm[j].value.trim().length < 2 || thisForm[j].nextElementSibling.classList.contains('msg-active')){
          ev.preventDefault();
          thisForm[j].nextElementSibling.classList.add('msg-active');
        }
      }
    });
  }
}

function reginputs(t, rg){
  let vl = t.value.trim();
  if(vl.match(rg)){
    t.nextElementSibling.nextElementSibling.classList.add('msg-active');
    t.nextElementSibling.classList.remove('msg-active');
    return true;
  } else {
    t.nextElementSibling.nextElementSibling.classList.remove('msg-active');
    t.nextElementSibling.classList.add('msg-active');
    return false;
  }
}


















