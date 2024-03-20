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
  let scrollButton = document.getElementById("to-top");

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

const spyEls = document.querySelectorAll('.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({ // 감시할 장면(Scene) 추가 및 옵션 지정
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.7 // 화면의 80% 지점에서 보여짐 여부 감시(0~1사이 지정)
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
  // 라이브러리에서 지정한 문법으로 깊게 이해X
});

const spyEls_2 = document.querySelectorAll('.scroll-spy_2');
spyEls_2.forEach(function (spyEl) {
  new ScrollMagic.Scene({ // 감시할 장면(Scene) 추가 및 옵션 지정
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 1 // 화면의 80% 지점에서 보여짐 여부 감시(0~1사이 지정)
  })
  .setClassToggle(spyEl, 'show_2') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
  // 라이브러리에서 지정한 문법으로 깊게 이해X
});


window.addEventListener('scroll', handleScroll);
function handleScroll(event) {
  // 특정 클래스 추가 여부 확인
  if (document.querySelector('.show_2')) {
    // y축으로 스크롤한 값
    const scrollY = window.scrollY;
    console.log('Scrolled Y:', scrollY);
    const box = document.querySelectorAll('.show_2 > div:first-child')
    box.forEach(function (item) {
      item.style.transform = `translateY(${scrollY*0.4-2000}px)`
    })
  }
};





