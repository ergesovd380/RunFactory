import '../functions/swiper-bundle.min.js'

new Swiper('.swiper__knowledge', {
  slidesPerView: 1,
  spaceBetween: 40,
  scrollbar: {
    el: '.swiper__scroll',
    draggable: true,
  },
  navigation: {
    nextEl: '.swiper__next',
    prevEl: '.swiper__prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  }
});

new Swiper('.swiper__partner', {
  slidesPerView: 2,
  spaceBetween: 40,
  loop: true,
  breakpoints: {
    1200: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 4,
    },
    576: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 1000,
  },
  on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });
      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  },
});
