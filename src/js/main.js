let slider = document.getElementById('sl');

let dot0 = document.getElementById('dot0');
let dot1 = document.getElementById('dot1');
let dot2 = document.getElementById('dot2');
let previous = document.getElementById('arrow-circle-left');
let next = document.getElementById('arrow-circle-right');
let p = document.getElementById('left-phone-arrow');
let n = document.getElementById('right-phone-arrow');
let credentials = document.getElementsByClassName('credentials-image')[0];

/*let header = document.getElementsByClassName('navigation');*/
var slides = document.getElementsByClassName('slide');
var dots = document.getElementsByClassName('dot');
var currentSlide = 0;



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


if(window.matchMedia('(max-width: 577px)').matches)
{
  credentials.innerHTML = '<img src="img/arms.png" class="arms"><div class="circle circle-first"></div><div class="circle circle-second"></div><div class="circle circle-third"></div><div class="circle circle-fourth"></div><div class="circle circle-fifth"></div>';
  document.getElementsByClassName('credentials')[0].style.height = '160vh';
  credentials.style.marginTop = '2rem';
  document.getElementsByClassName('credentials-text-second')[0].style.position = 'absolute';
  document.getElementsByClassName('credentials-text-second')[0].style.marginTop = '36rem';
} 

/*window.onscroll = function(e){
  let top = e.clientY;
  parallax(top);
}

function parallax(e){
  document.getElementsByClassName('circle-first')[0].style.transform = 'top(' + (e.clientY/8) + 'px)';
  document.getElementsByClassName('circle-second')[0].style.transform = 'top(' + (e.clientY/8) + 'px)';
  document.getElementsByClassName('circle-third')[0].style.transform = 'top(' + (e.clientY/8) + 'px)';
  document.getElementsByClassName('circle-fourth')[0].style.transform = 'top(' + (e.clientY/8) + 'px)';
  document.getElementsByClassName('circle-fifth')[0].style.transform = 'top(' + (e.clientY/8) + 'px)';
}
*/
/*function fc(){
  var c1 = document.getElementsByClassName('circle-first')[0];
  let e = c1.offsetTop;
  console.log(e);
}
*/
