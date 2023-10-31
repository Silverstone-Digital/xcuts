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
  centerSlide:'false',
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

var swiper = new Swiper("#swiperbxes", {
  slidesPerView: 3,
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

var swiper = new Swiper("#swiperDoor", {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: false,
  centerSlide:'false',
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
      slidesPerView:4,
    },
    1200:{
      slidesPerView:5
    }
  }
});
var swiper = new Swiper("#swiperPanel", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: false,
  centerSlide:'false',
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
    }
  }
});


const accordionHeader= document.querySelectorAll('.accordion-header')

accordionHeader.forEach(accordionHeader =>{
  accordionHeader.addEventListener("click", event => {
	accordionHeader.classList.toggle("active")
	const accordionContent = accordionHeader.nextElementSibling
	if(accordionHeader.classList.contains("active")){
		accordionContent.style.maxHeight = accordionContent.scrollHeight + "px"
	}
	else{
		accordionContent.style.maxHeight = 0
	}
});
});


// let items = document.querySelectorAll('.accordion .item .header');

// items.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     items.forEach((header)=>{
//       header.closest(".item").classList.remove("active");
//     });
//     e.currentTarget.closest(".item").classList.toggle('active');
    
//   })
// })




  /* toggle between hiding and showing the dropdown content */
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show"); //adding a class show
 }
 // Close the dropdown if the user clicks outside of it
 window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
       var dropdowns = document.getElementsByClassName("dropdown-content");
       var i;
       for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
             openDropdown.classList.remove('show');
          }
       }
    }
 }



