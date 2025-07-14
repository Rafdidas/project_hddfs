const swiper_recome = new Swiper(".recom_slide", {
  slidesPerView: 2.7,
  loop: false,
  spaceBetween: 16,
});

const swiper_grid = new Swiper(".grid_slide", {
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiper_set = new Swiper(".set_prd_slide", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});
