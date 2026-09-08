document.addEventListener("DOMContentLoaded", function () {
    var menuToggle = document.getElementById("menu-toggle");
    var closeBtn = document.getElementById("close-btn");
    var mobileMenu = document.getElementById("mobile-menu");

    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("menu-open");
    });

    closeBtn.addEventListener("click", function () {
        mobileMenu.classList.remove("menu-open");
    });
});

function changeImage(src) {
    document.getElementById('mainImage').src = src;
}

function decrease() {
    let counter = document.getElementById('counter');
    let value = parseInt(counter.textContent);
    if (value > 1) {
        counter.textContent = value - 1;
    }
}

function increase() {
    let counter = document.getElementById('counter');
    let value = parseInt(counter.textContent);
    if (value < 5) {
        counter.textContent = value + 1;
    }
}
const pathName = window.location.pathname
if (pathName != "/odeme" && pathName != "/sepet") {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var swiper = new Swiper(".mySwiper2", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}
