var swiper = new Swiper(".mySwiper", {
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


var swiper = new Swiper(".LightBoxSwiper", {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,
  centerSlide:'true',
  fade:'true',
  gragCursor: 'true',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    0:{
      slidesPerView:1
    },
    576:{
      slidesPerView:2
    },
    768:{
      slidesPerView:3
    },
    992:{
      slidesPerView:4
    }
  }
});