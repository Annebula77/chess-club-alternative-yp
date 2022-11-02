const swiper = new Swiper('.team__slider', {
  grabCursor: true,
  touchRatio: 3,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  autohight: true,
  slidesPerView: 'auto',
  watchOverflow: true,
  spaceBetween: 30,
  autoplay: {
    delay: 1000,
    stopOnLastSlide: true,
    disableOnInteraction: false,
  },
  speed: 800,
  breakpoints: {
    320: {
       pagination:  {
        el: '.swiper-pagination',
        enabled: true,
        clickable: true,
        dynamicBullets: true,
      },
    },
    767: {

    },
    1080: {


    },
  },
 });

const swiperButtles = new Swiper('.buttles__slider', {

  grabCursor: true,
  touchRatio: 3,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  autohight: true,
  slidesPerView: 'auto',
  watchOverflow: true,
  spaceBetween: 30,
  autoplay: {
    delay: 1000,
    stopOnLastSlide: true,
    disableOnInteraction: false,
  },
  speed: 800,
  breakpoints: {
    320: {
       pagination:  {
        el: '.swiper-pagination',
        enabled: true,
        clickable: true,
        dynamicBullets: true,
      },
    },
    767: {

    },
    1080: {
   },
  },
});


const popUpOpenButtons = document.querySelectorAll("#buttonOpen");
const popUpForm = document.querySelector(".popup-form ");
const popUpCloseButton = document.querySelector(".register-batton_leave");

function openForm(popUpForm) {
  popUpForm.classList.add("popup-form_active");
};

function closeForm(popUpForm) {
  popUpForm.classList.remove("popup-form_active");
};

popUpOpenButtons.forEach((button) => {
  button.addEventListener("click", function(e) {
    openForm(popUpForm);
  })
});

popUpCloseButton.addEventListener("click", function(e) {
  closeForm(popUpForm);
});

