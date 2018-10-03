function init() {
  const testimonialText = document.querySelectorAll('#testimonial-text');
  const testimonial = document.querySelectorAll('#img-container img');
  testimonialText[0].style.display = 'none';
  testimonialText[2].style.display = 'none';

  testimonial[0].addEventListener('click', () =>{
    var testimonialImg = GetTestimonial(0, testimonial);
    ChangeTestimonial(testimonialImg, 0, testimonial, testimonialText);
  })

  testimonial[1].addEventListener('click', () =>{
    var testimonialImg = GetTestimonial(1, testimonial);
    ChangeTestimonial(testimonialImg, 1, testimonial, testimonialText);
  })

  testimonial[2].addEventListener('click', () =>{
    var testimonialImg = GetTestimonial(2, testimonial);
    ChangeTestimonial(testimonialImg, 2, testimonial, testimonialText);
  })
}

function GetTestimonial(id, testimonial){
  let testimonialImg = testimonial[id].src;
  if(testimonialImg.includes('testimonial-00.jpeg')){
    return 0;
  }else if(testimonialImg.includes('testimonial-01.jpeg')){
    return 1;
  }else{
    return 2;
  }
}

function ChangeTestimonial(testimonialImg, id, testimonial, testimonialText){
  let currentImg = testimonial[1].src;
  for(var i = 0; i < testimonial.length; i++){
    if(testimonialImg == i){
      index = i;
      ChangeSlide('slideRight', testimonialText);
      FadeIn(testimonial[1]);
      testimonial[id].src = currentImg;
      testimonial[1].src = `img/testimonial-0${i}.jpeg`;
    }else{
      testimonialText[i].style.display = 'none';
    }
  }
}

init();
