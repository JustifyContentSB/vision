"use strict";

$(document).ready(function () {
   // Your code here
   animationMove();
   showLazyImages();
   showDropdownBlock();
   reviewsSlider();
   videosSlider();
   menuShow();
   menuHide();
});

// Your functions here

function showLazyImages() {
   const observer = window.lozad("[data-lazyload]", {
   rootMargin: "500px 0px",
   loaded: function (el) {
      el.style.opacity = "1";
      el.classList.add("is-loaded");
      el.parentNode.parentNode.classList.add("lazy-loaded");
   }
   });
   observer.observe();
}

function animationMove() {
   let controller = new ScrollMagic.Controller();
   let revealElements = document.getElementsByClassName("animation");
   for (let i = 0; i < revealElements.length; i++) {
      new ScrollMagic.Scene({
         triggerElement: revealElements[i],
         offset: 50,
         triggerHook: 0.9,
         reverse: false
      })
         .setClassToggle(revealElements[i], "animated")
         .addTo(controller);
   }
}

function showDropdownBlock() {
   $('[data-dropdown]').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('is-active');
      $(this).next().slideToggle(300);
   });
}

function reviewsSlider() {
   const swiper = new Swiper(".reviews__container", {
      slidesPerView: "auto",
      spaceBetween: 16,
      navigation: {
         nextEl: ".reviews-button-next",
         prevEl: ".reviews-button-prev",
      },
      breakpoints: {
         768: {
           spaceBetween: 20,
         },
      },
   });
}

function videosSlider() {
   const swiper = new Swiper(".videos__container", {
      slidesPerView: "auto",
      spaceBetween: 16,
      navigation: {
         nextEl: ".videos-button-next",
         prevEl: ".videos-button-prev",
      },
      breakpoints: {
         768: {
           spaceBetween: 20,
         },
      },
   });
}

function menuShow() {
   $('.menu__burger').on('click', function(e) {
      e.preventDefault();
      $('.menu__modal').addClass('is-active');
      $('.overlay').addClass('is-active');
      $('body').addClass('is-active');
   });
}

function menuHide() {
   $('.menu__modal-close').on('click', function(e) {
      e.preventDefault();
      $('.menu__modal').removeClass('is-active');
      $('.overlay').removeClass('is-active');
      $('body').removeClass('is-active');
   });

   $(window).on('click', function (e) {
      if (!e.target.closest('.menu__burger') && !e.target.closest('.menu__modal')) {
         $('.menu__modal').removeClass('is-active');
         $('.overlay').removeClass('is-active');
         $('body').removeClass('is-active');
      }
   });
}