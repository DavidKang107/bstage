window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('hidden')
    } else {
    document.querySelector('header').classList.remove('hidden')
  }
});

new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: false, 
  centeredSlides: true,
  autoplay: true,
  autoplay: {
    delay: 5000 
  },
  speed: 20,
  slidesPerView: 1,
  spaceBetween: 500,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
