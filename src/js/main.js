let mainBlock = document.getElementById('main-block');

let dot1 = document.getElementById('dot0');
let dot2 = document.getElementById('dot1');
let dot3 = document.getElementById('dot2');
let previous = document.getElementById('arrow-circle-left');
let next = document.getElementById('arrow-circle-right');

/*let header = document.getElementsByClassName('navigation');*/
var slides = document.getElementsByClassName('slide');
var dots = document.getElementsByClassName('dot');
var currentSlide = 0;

function nextSlide() {
 goToSlide(currentSlide+1);
  /*slides[currentSlide].style.animation = 'movenext';
  slides[currentSlide].style.animationDuration = '.6s';*/
}

function previousSlide() {
 goToSlide(currentSlide-1);
 /* slides[currentSlide].style.animation = 'moveprev';
  slides[currentSlide].style.animationDuration = '.6s';*/
}

dot1.onclick = function(){
  slides[currentSlide].classList.remove('slide-showing');
  slides[currentSlide].style.animation = 'none';
  dot2.classList.remove('dot-active');
  dot3.classList.remove('dot-active');
  dot1.classList.add('dot-active');
  currentSlide = 0; 
    slides[currentSlide].classList.add('slide-'+currentSlide);
    slides[currentSlide].classList.add('slide-showing');
    slides[currentSlide].style.animation = 'slides';
    slides[currentSlide].style.animationDuration = '1s';
    /*autoplay(0);*/
}

dot2.onclick = function(){
  slides[currentSlide].classList.remove('slide-showing');
  slides[currentSlide].style.animation = 'none';
  dot1.classList.remove('dot-active');
  dot3.classList.remove('dot-active');
  dot2.classList.add('dot-active');
  currentSlide = 1; 
    slides[currentSlide].classList.add('slide-'+currentSlide);
    slides[currentSlide].classList.add('slide-showing');
    slides[currentSlide].style.animation = 'slides';
    slides[currentSlide].style.animationDuration = '1s';
    /*autoplay(0);*/
}

dot3.onclick = function(){
  slides[currentSlide].classList.remove('slide-showing');
      slides[currentSlide].style.animation = 'none';
  dot2.classList.remove('dot-active');
  dot1.classList.remove('dot-active');
  dot3.classList.add('dot-active');
  currentSlide = 2; 
    slides[currentSlide].classList.add('slide-'+currentSlide);
    slides[currentSlide].classList.add('slide-showing');
    slides[currentSlide].style.animation = 'slides';
    slides[currentSlide].style.animationDuration = '1s';
    /*autoplay(0);*/
}
 
function goToSlide(n) {
  dot1.classList.remove('dot-active');
  dot2.classList.remove('dot-active');
  dot3.classList.remove('dot-active');
    slides[currentSlide].style.animation = 'none';
    slides[currentSlide].className = 'slide'; 
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].classList.add('slide-'+currentSlide);
    slides[currentSlide].classList.add('slide-showing');
    slides[currentSlide].style.animation = 'slides';
    slides[currentSlide].style.animationDuration = '1s';
    if(currentSlide == 0){
       dot1.classList.add('dot-active');
    } else if(currentSlide == 1){
       dot2.classList.add('dot-active');
    } else if(currentSlide == 2){
       dot3.classList.add('dot-active');
    }
/*    setInterval(nextSlide,9000);*/
   
}


next.onclick = function() {
    nextSlide();
    /*autoplay(9000);*/
};
previous.onclick = function() {
    previousSlide();
    /*autoplay(9000);*/
};

/*
function autoplay(n=9000) {
  var active = document.getElementsByClassName('slide-showing');
  currentSlide+=1;
  if ( currentSlide > (slides.length-1) ) currentSlide = 0;
  
  setInterval(nextSlide,n);

}
*/

  let menu = document.getElementById('phone-menu');
  let button = document.getElementById('burger-button');
  let overlay = document.getElementById('overlay');
  let btnClick = 1;

  button.onclick = function(){
/*  if (btnClick%2 == 1){
    menu.classList.add('burger-menu-active');
  } else{
    menu.classList.remove('burger-menu-active');
  }
  btnClick++;
  console.log(btnClick);*/
  if(menu.className === "burger-menu"){
    menu.className += " burger-menu-active";
  }else{
     menu.className = "burger-menu";
  }
}

overlay.onclick = function(){
    menu.classList.remove('burger-menu-active');
}
