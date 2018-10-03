// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });
//
//
// function ResetPosition() {
//    if (document.body.scrollTop!=0 || document.documentElement.scrollTop !=0){
//    		window.scrollBy(0,-55);
//     	setTimeout('ResetPosition()',9);
//   	}
// }


class CallSmoothScroll {
  constructor() {
    this.targets = document.querySelectorAll('nav ul a');
    this.mobileTargets = document.querySelectorAll('#mobile-nav a');

    this.targets.forEach((link) => {
      link.addEventListener('click', (e) =>{
        e.preventDefault();
        this.getSelectedTarget(link.href);
      })
    })

    this.mobileTargets.forEach((link) => {
      link.addEventListener('click', (e) =>{
        e.preventDefault();
        this.getSelectedTarget(link.href);
      })
    })
  }

  getSelectedTarget(url){
    if(url.includes('#services')){
      let targetDiv = document.querySelector('#services');
      SmoothScroll(targetDiv, 80, 1000);
    }

    if(url.includes('#about-me')){
      let targetDiv = document.querySelector('#about-me');
      SmoothScroll(targetDiv, 100, 1000);
    }

    if(url.includes('#work')){
      let targetDiv = document.querySelector('#work');
      SmoothScroll(targetDiv, 80, 1000);
    }

    if(url.includes('#crew')){
      let targetDiv = document.querySelector('#crew');
      SmoothScroll(targetDiv, 80, 1000);
    }

    if(url.includes('#testimonial')){
      let targetDiv = document.querySelector('#testimonial');
      SmoothScroll(targetDiv, 80, 1000);
    }
  }
}

const smoothScroll = new CallSmoothScroll;
