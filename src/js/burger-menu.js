 let menu = document.getElementById('phone-menu');
  let button = document.getElementById('burger-button');
  let overlay = document.getElementById('overlay');
  let lines = document.getElementById('burgerLines');
  let btnClick = 1;

  button.onclick = function(){
  if (btnClick%2 == 1){
    menu.classList.add('burger-menu-active');
    lines.style.animation = 'burger-active';
    lines.style.animationDuration = '1s';
  } else{
    menu.classList.remove('burger-menu-active');
    lines.style.animation = 'burger-close';
    lines.style.animationDuration = '1s';
  }
  btnClick++;
}

overlay.onclick = function(){
    menu.classList.remove('burger-menu-active');
}




 /* console.log(btnClick);
  if(menu.className === "burger-menu"){
    menu.className += " burger-menu-active";
  }else{
     menu.className = "burger-menu";
  }*/
/*button.onmouseup = function(){
   if(menu.className === "burger-menu"){
    menu.className += " burger-menu-active";
  }else{
     menu.className = "burger-menu";
  }
}*/