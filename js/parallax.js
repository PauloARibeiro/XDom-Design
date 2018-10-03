// window.onscroll = () =>{				//THIS WILL TRIGGER WHEN THE USER  SCROLLS DOWN
//   this.IntroParallax();
//   // this.NavBar();
// };

// THIS WILL CREATE A PARALLAX EFFECT WITH THE INTRO TEXT
function IntroParallax(){
  let scrollValue = document.documentElement.scrollTop;
  let showcaseBoxes = document.querySelectorAll('#showcase-info');
  let leftArrow = document.querySelector('#left-arrow');
  let rightArrow = document.querySelector('#right-arrow');

  showcaseBoxes.forEach((box) =>{
    box.style.transform = `translate(0px, ${scrollValue/4}%)`;
    leftArrow.style.transform = `translate(0px, ${scrollValue/2}%)`;
    rightArrow.style.transform = `translate(0px, ${scrollValue/2}%)`;
  })

  // document.querySelector('#showcase-info').style.transform = `translate(0px, ${scrollValue/2}%)`;
}
