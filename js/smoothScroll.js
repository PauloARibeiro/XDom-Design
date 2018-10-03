function SmoothScroll(targetDiv, distanceFromHeader, duration){
  // THIS WILL GET THE TARGETS POSITION
  let targetPosition = targetDiv.getBoundingClientRect().top;
  // THIS WILL CALCULATE THE DISTANCE FROM THE TARGET POSITION AND THE HEADER
  targetPosition -= distanceFromHeader;
  // THIS WILL CALCULATE THE CURRENT POSITION OF THE SCREEN
  let startPosition = window.pageYOffset;
  // START TIME
  let startTime = null;
  // HOW LONG DOES THE ANIMATION LAST
  // let duration = 1000;

  function ScrollAnimation(currentTime){
    if(startTime === null){
      startTime = currentTime;
    }
    let timeElapsed = currentTime - startTime;
    // THIS FUNCTION IS RESPONSIBLE FOR THE TYPE OF SCROLL ANIMATION, CHECK BELOW FOR THE LIST OF DIFFERENT TYPES OF ANIMATIONS
    let runAnimation = EaseOutSine(timeElapsed, startPosition, targetPosition, duration);

    window.scrollTo(0, runAnimation);
    if(timeElapsed < duration){
      requestAnimationFrame(ScrollAnimation);
    }
  }


  // THESE ARE THE MATH FORMULAS THAT WILL GIVE IT THE COOL SCROLL EFFECT CREDIT GOES TO: http://www.gizma.com/easing/
  // simple linear tweening - no easing, no acceleration
  function LinearTween(t, b, c, d){
    return c*t/d + b;
  }

  // quadratic easing out - decelerating to zero velocity
  function EaseOutQuad(t, b, c, d){
    t /= d;
    return -c * t*(t-2) + b;
  }

  // quadratic easing in - accelerating from zero velocity
  function EaseInQuad(t, b, c, d){
     t /= d;
	   return c*t*t + b;
  }

  // quadratic easing in/out - acceleration until halfway, then deceleration
  function EaseInOutQuad(t, b, c, d){
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  }

  // sinusoidal easing out - decelerating to zero velocity
  function EaseOutSine(t, b, c, d){
    return c * Math.sin(t/d * (Math.PI/2)) + b;
  }

  // sinusoidal easing in - accelerating from zero velocity
  function EaseInSine(t, b, c, d){
    return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
  }

  // sinusoidal easing in/out - accelerating until halfway, then decelerating
  function EaseInOutSine(t, b, c, d){
    return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
  }

  // circular easing in/out - acceleration until halfway, then deceleration
  function EaseInOutCircle(t, b, c, d){
    t /= d/2;
  	if (t < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
  	t -= 2;
  	return c/2 * (Math.sqrt(1 - t*t) + 1) + b;
  }

  // exponential easing in/out - accelerating until halfway, then decelerating
  function EaseInOutExpo(t, b, c, d){
    t /= d/2;
  	if (t < 1) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
  	t--;
  	return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;
  }

  // exponential easing in - accelerating from zero velocity
  function EaseInExpo(t, b, c, d){
    return c * Math.pow( 2, 10 * (t/d - 1) ) + b;
  }

  // exponential easing out - decelerating to zero velocity
  function EaseOutExpo(t, b, c, d){
    return c * ( -Math.pow( 2, -10 * t/d ) + 1 ) + b;
  }

  requestAnimationFrame(ScrollAnimation);
}
