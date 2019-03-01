 let mainBlock = document.getElementById('main-block');
 let menu = document.getElementById('phone-menu');
  let button = document.getElementById('burger-button');
  let overlay = document.getElementById('overlay');
  let lines = document.getElementById('burgerLines');
  let form = document.getElementsByClassName('contacts')[0];
  let btnClick = 1;

  button.onclick = function(){
  if (btnClick%2 == 1){
    menu.classList.add('burger-menu-active');
    lines.style.animation = 'burger-active';
    lines.style.animationDuration = '1s';
    form.style.display = 'none';
    mainBlock.style.background =  'url("img/iphone-black-bg.png") center no-repeat';
    mainBlock.style.backgroundSize = 'cover'; 
  } else{
    menu.classList.remove('burger-menu-active');
    lines.style.animation = 'burger-close';
    lines.style.animationDuration = '1s';
    form.style.display = 'block';
    mainBlock.style.background =  'url("img/iPhone-XS-Max.png") center no-repeat';
    mainBlock.style.backgroundSize = 'cover'; 
  }
  btnClick++;
}

overlay.onclick = function(){
    menu.classList.remove('burger-menu-active');
}
