window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('hidden')
    } else {
    document.querySelector('header').classList.remove('hidden')
  }
});

// 어워즈 섹션 슬라이드 기능
