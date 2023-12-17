let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = ()=>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


const swiper = new Swiper('.courses-slider', {
    // Default parameters
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
        el: "swiper-pagination",
        clickable: true,
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      540: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
      },
      // when window width is >= 640px
      1024: {
        slidesPerView: 3,
      }
    }
})

const swiperTwo = new Swiper('.teachers-slider', {
    // Default parameters
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
        el: "swiper-pagination",
        clickable: true,
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      540: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
      },
      // when window width is >= 640px
      1024: {
        slidesPerView: 3,
      }
    }
})

const swiperThree = new Swiper('.reviews-slider', {
    // Default parameters
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
        el: "swiper-pagination",
        clickable: true,
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      540: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
      },
      // when window width is >= 640px
      1024: {
        slidesPerView: 3,
      }
    }
})