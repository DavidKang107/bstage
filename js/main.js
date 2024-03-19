window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    document.querySelector('header').classList.add('hidden')
    } else {
    document.querySelector('header').classList.remove('hidden')
  }
});

new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true, 
  centeredSlides: true,
  autoplay: true,
  autoplay: {
    delay: 3000 
  },
  speed: 500,
  slidesPerView: 1,
  spaceBetween: 500,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});




