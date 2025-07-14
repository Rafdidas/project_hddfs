// 탭 active
function prdTab(no) {
  const tabs = document.querySelectorAll(".tab_prd li");

  if (!tabs.length) return;

  tabs.forEach((tab, idx) => {
    const tabCont = document.querySelector(".tabcnt_prd" + idx);
    const link = tab.querySelector("a");

    if (tabCont) tabCont.style.display = no === idx ? "block" : "none";
    if (link) link.classList.toggle("active", no === idx);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  prdTab(0);

  // 탭 이동
  const tabLinks = document.querySelectorAll(".main_section_tab a");
  const tabItems = document.querySelectorAll(".main_section_tab li");
  const sections = [...tabLinks].map((link) =>
    document.querySelector(link.getAttribute("href"))
  );
  const OFFSET = 60 + 56;

  if (tabLinks.length && tabItems.length && sections.length) {
    tabLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          const top = target.offsetTop - OFFSET;
          window.scrollTo({ top, behavior: "smooth" });
        }
      });
    });

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY + OFFSET + 1;
      sections.forEach((section, idx) => {
        if (!section) return;
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          tabItems.forEach((li) => li.classList.remove("active"));
          tabItems[idx]?.classList.add("active");
        }
      });
    });
  }

  // 일반 레이어
  const layerDimmed = document.querySelector(".layer_dimmed");
  const layerClose = document.querySelector(".layer_wrapper .close");

  if (layerDimmed && layerClose) {
    layerDimmed.addEventListener("click", closeLayer);
    layerClose.addEventListener("click", closeLayer);
  }

  // 카트 레이어
  const cartClose = document.querySelector(".cart_layer_wrapper .close");
  if (layerDimmed && cartClose) {
    layerDimmed.addEventListener("click", setCartCloseLayer);
    cartClose.addEventListener("click", setCartCloseLayer);
  }

  // 카트 알럿
  const cartBtn = document.querySelector(".set_cart_btn");
  const alertBox = document.querySelector(".cart_alert");

  if (cartBtn && alertBox) {
    cartBtn.addEventListener("click", () => {
      alertBox.classList.add("active");
      setTimeout(() => {
        alertBox.classList.remove("active");
      }, 2000);
    });
  }

  // 수량
  const qtyBox = document.querySelector(".qty_box");
  if (qtyBox) {
    const minusBtn = qtyBox.querySelector(".minus");
    const plusBtn = qtyBox.querySelector(".plus");
    const input = qtyBox.querySelector("input");

    if (minusBtn && plusBtn && input) {
      plusBtn.addEventListener("click", () => {
        const current = parseInt(input.value, 10) || 0;
        input.value = current + 1;
      });

      minusBtn.addEventListener("click", () => {
        const current = parseInt(input.value, 10) || 0;
        if (current > 0) input.value = current - 1;
      });
    }
  }

  // 레이어 카테고리/탭뷰 (중복 제거)
  const layerSwiperEl = document.querySelector(".layer_sort_slide");
  if (layerSwiperEl) {
    const slides = layerSwiperEl.querySelectorAll(".swiper-slide");
    const swiper_layer = new Swiper(".layer_sort_slide", {
      slidesPerView: "auto",
      freeMode: true,
      spaceBetween: 4,
    });

    slides.forEach((slide, idx) => {
      slide.addEventListener("click", () => {
        slides.forEach((s) => s.classList.remove("active"));
        slide.classList.add("active");
        swiper_layer.slideTo(idx, 300);
      });
    });
  }
});

// 레이어 토글 함수 (함수 정의만)
function toggleLayer() {
  const dimmed = document.querySelector(".layer_dimmed");
  const wrapper = document.querySelector(".layer_wrapper");

  if (dimmed && wrapper) {
    dimmed.style.display = "block";
    wrapper.classList.add("active");
    document.body.classList.add("view_nav");
  }
}

function closeLayer() {
  const dimmed = document.querySelector(".layer_dimmed");
  const wrapper = document.querySelector(".layer_wrapper");

  if (dimmed && wrapper) {
    dimmed.style.display = "none";
    wrapper.classList.remove("active");
    document.body.classList.remove("view_nav");
  }
}

function setCartToggleLayer() {
  const dimmed = document.querySelector(".layer_dimmed");
  const wrapper = document.querySelector(".cart_layer_wrapper");

  if (dimmed && wrapper) {
    dimmed.style.display = "block";
    wrapper.style.display = "block";
    document.body.classList.add("view_nav");
  }
}

function setCartCloseLayer() {
  const dimmed = document.querySelector(".layer_dimmed");
  const wrapper = document.querySelector(".cart_layer_wrapper");

  if (dimmed && wrapper) {
    dimmed.style.display = "none";
    wrapper.style.display = "none";
    document.body.classList.remove("view_nav");
  }
}
