// password

const inputRePassword = document.querySelector('[name="re-password"]');

inputRePassword.addEventListener('input', function (e) {
    const passwordInput = document.querySelector('[name="password"]');
    const rePasswordInput = document.querySelector('[name="re-password"]'); 
    const password = passwordInput.value;
    const rePassword = rePasswordInput.value;
    if (password === rePassword) {
        passwordInput.style.border = '3px solid green';
        rePasswordInput.style.border = '3px solid green';
    } else if (password !== rePassword) {
        passwordInput.style.border = '3px solid red';
        rePasswordInput.style.border = '3px solid red';
    }
});

// rating

const stars = document.querySelectorAll('.rating-item-input');

stars.forEach((e) => {
    e.addEventListener('change', function () {
        const checkedNumber = document.querySelector('.rating-item-input:checked').value || undefined;
        stars.forEach((element) => {
            const currentStar = element.previousElementSibling.firstElementChild;
            (element.value <= checkedNumber) ? currentStar.classList.add('check') : currentStar.classList.remove('check');
        })
    });   
});


// scroll in pricing-plans, logo-mobile 

const pricingPlan = document.querySelector('.pricing-plans-row');
const block = document.querySelector('.pricing-plans-row');
const mediaQuery = window.matchMedia('(max-width: 767px)');
const logo = document.querySelector('.logo');


function handleMobileChange(e) {
  if (e.matches) {
    pricingPlan.classList.remove('center');
    block.scrollLeft = 270;
    logo.src = 'img/header/logo-mobile.svg';
  } else {
    pricingPlan.classList.add('center');
  }
}
mediaQuery.addListener(handleMobileChange)
handleMobileChange(mediaQuery)

// mobile-menu

const burger = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.header-menu-mobile-list'); 

let flag = false;

burger.addEventListener("click", function (e) {
  if (flag) {
    mobileMenu.style.left = '-100%';
    flag = false;
  } else {
    mobileMenu.style.left = '0';
    flag = true;
  }
});


