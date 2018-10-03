function NewsletterValidation(){
  let subscribeBtn = document.getElementById('subscribe');
  let subscribeError = document.getElementById('newsletterError');
  subscribeError.style.display = 'none';
  subscribeError.style.marginTop = '8px';

  subscribe.addEventListener('click', (event) =>{
    subscribeError.style.display = 'block';
    FadeIn(subscribeError);
    let subscribeInput = document.getElementById('subscribeInput');

    if(subscribeInput.value == ''){
      subscribeError.textContent = 'Please enter your email.';
    }else if(!validateEmail(subscribeInput.value)){
      subscribeError.textContent = 'Email is invalid.';
    }else{
      subscribeError.textContent = 'Success!';
    }

    event.preventDefault();
  })
}

function MessageValidation(){
  let messageError = document.getElementById('messageError');
  let messageButton = document.getElementById('messageButton');
  let messageName = document.getElementById('messageName');
  let messageEmail = document.getElementById('messageEmail');
  let messageSubject = document.getElementById('messageSubject');
  let messageText = document.getElementById('messageText');

  messageError.style.display = 'none';

  messageButton.addEventListener('click', (event) =>{
    messageError.style.display = 'block';
    messageError.style.marginBottom = '8px';
    messageError.style.color = "#EBEBEB";
    messageError.style.fontSize = '20px';

    FadeIn(messageError);

    if((messageName.value == '')|| (messageEmail.value == '') || (messageSubject.value == '') || (messageText.value = '')){
      messageError.textContent = 'Please fill out all the fields.';
    }else if(!validateEmail(messageEmail.value)){
      messageError.textContent = 'Email is invalid.';
    }else{
      messageError.textContent = 'Success!';
    }
    event.preventDefault();
  })
}

function validateEmail(email) {
    var validation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validation.test(String(email).toLowerCase());
}

NewsletterValidation();
MessageValidation();
