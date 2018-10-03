// MOBILE NAV BAR AND INFO
let infoButton = document.getElementById('info');
let hamburger = document.querySelector('.hamburger-holder');

let mobileNav = document.getElementById('mobile-nav');
let mobileBar = document.getElementById('movile-bar');
let box = document.querySelectorAll('.box');
let boxHolder = document.querySelector('#box-holder');

let info = false;
let nav = false;

infoButton.addEventListener('click', ()=> {
  let deviceWidth = '';

  if (window.matchMedia("(max-width: 530px)").matches) {
    deviceWidth = '255px';
  }else{
    deviceWidth = '100px';
  }

  if(!info){
    info = true;
    ToggleMobileInfo(info, deviceWidth);
  }else{
    info = false;
    ToggleMobileInfo(info, deviceWidth);
  }
})

hamburger.addEventListener('click', ()=> {
  if(nav){
    nav = false;
    ToggleMobileNav(nav);
  }else{
    nav = true;
    ToggleMobileNav(nav);
  }
})

function ToggleMobileInfo(bool, deviceWidth){
  if(bool){
    boxHolder.style.height = `${deviceWidth}`;
    box.forEach((box) =>{
      box.style.opacity = '1';
    })
  }else{
    box.forEach((box) =>{
      box.style.opacity = '0';
    })
    setTimeout(() =>{
      boxHolder.style.height = '0px';
    }, 230);
  }
}

function ToggleMobileNav(bool){
  if(bool){
    hamburger.classList.add('hamActive');
    mobileNav.style.height = "270px";
  }else{
    mobileNav.style.height = "0px";
    hamburger.classList.remove('hamActive');
  }
}
