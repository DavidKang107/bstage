window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('hidden')
    } else {
    document.querySelector('header').classList.remove('hidden')
  }
});

new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true, 
  centeredSlides: true,
  autoplay: true,
  autoplay: {
    delay: 5000 
  },
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 3000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});