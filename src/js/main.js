let slider = document.getElementById('sl');

let dot0 = document.getElementById('dot0');
let dot1 = document.getElementById('dot1');
let dot2 = document.getElementById('dot2');
let previous = document.getElementById('arrow-circle-left');
let next = document.getElementById('arrow-circle-right');
let p = document.getElementById('left-phone-arrow');
let n = document.getElementById('right-phone-arrow');

/*let header = document.getElementsByClassName('navigation');*/
var slides = document.getElementsByClassName('slide');
var dots = document.getElementsByClassName('dot');
var currentSlide = 0;


/*function showSlide(){
  let i;
   for (i = 0; i < slides.length; i++) {
        dots[i].className = 'dot';
    }
  slides[currentSlide].classList.remove('slide-showig');
  slides[currentSlide].style.opacity = '0';
  slides[currentSlide].style.transition = 'all 1s';

 currentSlide = (currentSlide+1)%slides.length;
 slides[currentSlide].classList.add('slide-showing');
  dots[currentSlide].className += "dot-active";
}*/
function deleteActiveDots(){
   let i;
  for (i = 0; i < slides.length; i++) {
        dots[i].className = 'dot';
    }
}

function deleteActiveSlides(){
  let i;
   for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('slide-showing');
    } 
}


function nextSlide() {
  deleteActiveDots();
  deleteActiveSlides();
    /*slides[currentSlide].style.display = 'none';*/
    /*slides[currentSlide].classList.remove('slide-showing');*/
      if(currentSlide == 2 ) currentSlide = 0;
      else    currentSlide++;

    dots[currentSlide].classList.add('dot-active');
    slides[currentSlide].classList.add('slide-showing')
   slides[currentSlide].style.transition = 'all .6s';
}
 

 function previousSlide() {
  deleteActiveDots();
  deleteActiveSlides();
    /*slides[currentSlide].style.display = 'none';*/
      if(currentSlide == 0 ) currentSlide = 2;
      else    currentSlide--;

    dots[currentSlide].classList.add('dot-active');
    slides[currentSlide].classList.add('slide-showing')
   slides[currentSlide].style.transition = 'all .6s';
}
 
/*function previousSlide() {
    goToSlide(currentSlide-1);
}
 
function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].classList.add('slide-'+currentSlide);
    slides[currentSlide].className = 'slide-showing';
}
*/
function dotsOnclick(i){
  deleteActiveSlides();
  deleteActiveDots();
  slides[i].classList.add('slide-showing');
  slides[i].style.transition = 'all .6s';
}

dot0.onclick = function(){
  dotsOnclick(0); 
  dot0.classList.add('dot-active');
}
dot1.onclick = function(){
  dotsOnclick(1);
  dot1.classList.add('dot-active');
}
dot2.onclick = function(){
  dotsOnclick(2);
  dot2.classList.add('dot-active');
}


next.onclick = function() {
    nextSlide();
};


previous.onclick = function() {
    previousSlide();
};

n.onclick = function() {
    nextSlide();
};


p.onclick = function() {
    previousSlide();
};






