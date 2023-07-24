// SWIPER CAROUSEL MENGGUNAKAN JAVA SCRIPT 
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper-slider", {
    slidesPerView: "1",
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    loop: false,
    loopedSlides: 4, // Jumlah slide yang looped, sesuaikan dengan jumlah total slide yang ingin ditampilkan
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },

    breakpoints: {
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

  // Berfungsi untuk mengontrol autoplay berdasarkan lebar layar
  function handleAutoplay() {
    if (window.matchMedia("(min-width: 992px)").matches) {
      // Aktifkan putar otomatis untuk tampilan desktop (lebar >= 992px)
      swiper.params.autoplay.disableOnInteraction = false; // Aktifkan kembali putar otomatis
      swiper.autoplay.start();
    } else {
      // Nonaktifkan putar otomatis untuk tampilan seluler (lebar < 992px)
      swiper.autoplay.stop();
    }
  }

  // Panggil fungsi handleAutoplay saat memuat halaman
  handleAutoplay();

  // Panggil fungsi handleAutoplay setiap kali jendela diubah ukurannya
  window.addEventListener("resize", handleAutoplay);
});

function showBlogContent() {
  window.open('template.html', '_blank');
}


