let lastScrollTop = 0; 
window.addEventListener("scroll", function() {
    let currentScroll = document.documentElement.scrollTop; // 현재 스크롤 위치
    let scrollButton = document.querySelector('header');

    if (currentScroll > lastScrollTop) {
        scrollButton.classList.add("hidden"); 
    } else {
        scrollButton.classList.remove("hidden"); 
    }

    lastScrollTop = currentScroll; 
});

window.addEventListener('scroll', function() {
  let scrollButton = document.getElementById("scrollButton");

  if (window.scrollY > 50) {
      scrollButton.classList.add("active");
  } else {
      scrollButton.classList.remove("active");
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

document.querySelector('.footer__button--top').addEventListener("click", function() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth' 
  });
});




