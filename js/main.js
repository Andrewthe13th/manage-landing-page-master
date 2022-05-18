/* globals */
var hamburgerButton = document.querySelector('#hamburger');
var bHamburgerClicked = false;
var hamburgerMenu = document.querySelector('#hamburger-Menu');
var dimmer = document.querySelector('#dimmer');
var reviews = document.querySelectorAll('.review');
var reviewsSelector = document.querySelectorAll('input[name=carousel]');

/* functions */
function hamburgerClicked(){
  if(bHamburgerClicked)
  {
    bHamburgerClicked = false;
    hamburgerButton.src = './images/icon-hamburger.svg';
    hamburgerMenu.classList.add('mobile-hidden');
    dimmer.classList.add('mobile-hidden');
    console.log('hamburger closed!')
  } 
  else{
    bHamburgerClicked = true;
    hamburgerButton.src = './images/icon-close.svg';
    hamburgerMenu.classList.remove('mobile-hidden');
    dimmer.classList.remove('mobile-hidden');
    console.log('hamburger opened')
  }
}

function dimmerClicked(){
  hamburgerClicked();
}

function radioChecked(e){
  let value = 0;
  if('target' in e){
    value = e.target.value;
  }
  else{
    value = e.value;
  }
  
  reviews.forEach( (elem) => {
    if(!elem.classList.contains('hidden')){
      elem.classList.add('hidden');
    }
  });
  reviews[value].classList.remove('hidden');
}

function findRadioChecked(){
  reviewsSelector.forEach( (e) => {
    if(e.checked){
      // radioChecked(e)
    }
  });
}

/* event bindings */
hamburgerButton.addEventListener('click', hamburgerClicked);
dimmer.addEventListener('click', dimmerClicked);
reviewsSelector.forEach((e) => {
  // e.onclick = radioChecked;
})

/* main */
//findRadioChecked()