// Animations
function SlideIn(element){
  element.style.display = 'block';
  element.classList.add('slide-in');

  setTimeout(function(){
    element.classList.remove('slide-in');
  },250);
}

function SlideOut(element){
  element.classList.add('slide-out');

  setTimeout(function(){
    element.classList.remove('slide-out');
    element.style.display = 'none';
  },260);
}

function FadeIn(element){
  element.classList.add('fade-in');
  element.style.display = 'block';

  setTimeout(function(){
    element.classList.remove('fade-in');
  },460);
}

function SlideRight(element){
  element.classList.add('slide-right');

  setTimeout(function(){
    element.classList.remove('slide-right');
  },460);
}

function SlideLeft(element){
  element.classList.add('slide-left');

  setTimeout(function(){
    element.classList.remove('slide-left');
  },460);
}
