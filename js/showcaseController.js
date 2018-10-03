// THIS SECTION IS FOR THE MOBILE SWIPE EVENTS (BIG THANKS TO givanse FROM STACKOVERFLOW)
const gestureZone = document.getElementById('showcase');
const showcaseBoxes = document.querySelectorAll('#showcase-info');

let index = 0;
let xDown = null;
let yDown = null;

gestureZone.addEventListener('touchstart', handleTouchStart, false);
gestureZone.addEventListener('touchmove', handleTouchMove, false);

function getTouches(event) {
  return event.touches;
}

function handleTouchStart(event) {
  xDown = getTouches(event)[0].clientX;
  yDown = getTouches(event)[0].clientY;
};

function handleTouchMove(event) {
  if ( ! xDown || ! yDown ) {
    return;
  }

  var xUp = event.touches[0].clientX;
  var yUp = event.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
    if ( xDiff > 0 ) {
      LeftCheck();
      ChangeSlide('slideRight', showcaseBoxes);
    } else {
      RightCheck();
      ChangeSlide('slideLeft', showcaseBoxes);
    }
  }

  xDown = null;
  yDown = null;
};


// DESKTOP SHOWCASE
document.getElementById('left-arrow').addEventListener('click', () =>{
  LeftCheck();
  ChangeSlide('slideleft', showcaseBoxes);
  // ResetTimer();
})
document.getElementById('right-arrow').addEventListener('click', () =>{
  RightCheck();
  ChangeSlide('slideRight', showcaseBoxes);
  // ResetTimer();
})

// THIS WILL CHECK IF THE INDEX OF THE SHOWCASE IS WITHIN BOUNDS
function LeftCheck(){
  if(index >= 2){
    index = 0;
  }else {
    index++;
  }
}
// THIS WILL CHECK IF THE INDEX OF THE SHOWCASE IS WITHIN BOUNDS
function RightCheck(){
  if(index <= 0){
    index = 2;
  }else {
    index--;
  }
}

let timer = setInterval(TimeOutChange, 8000);

function TimeOutChange(){
  RightCheck();
  ChangeSlide('slideRight', showcaseBoxes);
}

//CHANGES THE CURRENT SLIDE (SHOWCASE, SERVICES & CREW)
function ChangeSlide(animation, showcaseBoxes){
  clearInterval(timer);
  timer = setInterval(TimeOutChange, 8000);
  showcaseBoxes.forEach((box, i) =>{
    if(index === i){
      if(animation === 'slideRight'){
        SlideRight(box);
      }else{
        SlideLeft(box);
      }
      box.style.display = 'block';
    }else{
      box.style.display = 'none';
    }
  })
}
