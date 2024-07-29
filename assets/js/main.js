var swiperHome1 = new Swiper(".home-swiper1", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
    duration: 1000,
  },
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 1500,
});


    var homeSwiper3 = new Swiper(".mySwiper3", {
      slidesPerView: 1,
      spaceBetween: 20,
      grid: {
        rows: 3,
      },
      pagination: {
        el: ".swiper-pagination3",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
          grid: {
            rows: 3,
          },
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
          grid: {
            rows: 2,
          },
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
          grid: {
            rows: 2,
          },
        },
      },
    });






    document.addEventListener("DOMContentLoaded", () => {
      const counters = document.querySelectorAll(".number");
      counters.forEach((counter) => {
        const updateCount = () => {
          const target = +counter.getAttribute("data-count");
          const count = +counter.innerText;

          const speed = 200; 
          const increment = target / speed;

          if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
          } else {
            counter.innerText = target;
          }
        };

        updateCount();
      });
    });












   


class Accordion {
  constructor(el) {
    this.el = el;
    this.summary = el.querySelector("summary");
    this.content = el.querySelector(".accordion-content");
    this.expandIcon = this.summary.querySelector(".accordion-icon");
    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;
    this.summary.addEventListener("click", (e) => this.onClick(e));
  }

  onClick(e) {
    e.preventDefault();
    this.el.style.overflow = "hidden";

    if (this.isClosing || !this.el.open) {
      this.open();
    } else if (this.isExpanding || this.el.open) {
      this.shrink();
    }
  }

  shrink() {
    this.isClosing = true;

    const startHeight = `${this.el.offsetHeight}px`;
    const endHeight = `${this.summary.offsetHeight}px`;

    if (this.animation) {
      this.animation.cancel();
    }

    this.animation = this.el.animate(
      {
        height: [startHeight, endHeight],
      },
      {
        duration: 400,
        easing: "ease-out",
      }
    );
    this.animation.onfinish = () => {
      this.expandIcon.setAttribute(
        "src",
        "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/></svg>"
      );
      return this.onAnimationFinish(false);
    };

    this.animation.oncancel = () => {
      this.expandIcon.setAttribute(
        "src",
        "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/></svg>"
      );
      return (this.isClosing = false);
    };
  }

  open() {
    this.el.style.height = `${this.el.offsetHeight}px`;
    this.el.open = true;
    window.requestAnimationFrame(() => this.expand());
  }

  expand() {
    this.isExpanding = true;

    const startHeight = `${this.el.offsetHeight}px`;
    const endHeight = `${
      this.summary.offsetHeight + this.content.offsetHeight
    }px`;

    if (this.animation) {
      this.animation.cancel();
    }

    this.animation = this.el.animate(
      {
        height: [startHeight, endHeight],
      },
      {
        duration: 350,
        easing: "ease-out",
      }
    );

    this.animation.onfinish = () => {
      this.expandIcon.setAttribute(
        "src",
        "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/></svg>"
      );
      return this.onAnimationFinish(true);
    };
    this.animation.oncancel = () => {
      this.expandIcon.setAttribute(
        "src",
        "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/></svg>"
      );
      return (this.isExpanding = false);
    };
  }

  onAnimationFinish(open) {
    this.el.open = open;
    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;
    this.el.style.height = this.el.style.overflow = "";
  }
}

document.querySelectorAll("details").forEach((el) => {
  new Accordion(el);
});



var homeSwiper6 = new Swiper(".home-swiper6", {
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 5,
      spaceBetween:20
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});