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
  scrollHeaderMenu();
});

// Your functions here

function showLazyImages() {
  var observer = window.lozad("[data-lazyload]", {
    rootMargin: "500px 0px",
    loaded: function loaded(el) {
      el.style.opacity = "1";
      el.classList.add("is-loaded");
      el.parentNode.parentNode.classList.add("lazy-loaded");
    }
  });
  observer.observe();
}
function animationMove() {
  var controller = new ScrollMagic.Controller();
  var revealElements = document.getElementsByClassName("animation");
  for (var i = 0; i < revealElements.length; i++) {
    new ScrollMagic.Scene({
      triggerElement: revealElements[i],
      offset: 50,
      triggerHook: 0.9,
      reverse: false
    }).setClassToggle(revealElements[i], "animated").addTo(controller);
  }
}
function showDropdownBlock() {
  $('[data-dropdown]').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
    $(this).next().slideToggle(300);
  });
}
function reviewsSlider() {
  var swiper = new Swiper(".reviews__container", {
    slidesPerView: "auto",
    spaceBetween: 16,
    navigation: {
      nextEl: ".reviews-button-next",
      prevEl: ".reviews-button-prev"
    },
    breakpoints: {
      768: {
        spaceBetween: 20
      }
    }
  });
}
function videosSlider() {
  var swiper = new Swiper(".videos__container", {
    slidesPerView: "auto",
    spaceBetween: 16,
    navigation: {
      nextEl: ".videos-button-next",
      prevEl: ".videos-button-prev"
    },
    breakpoints: {
      768: {
        spaceBetween: 20
      }
    }
  });
}
function menuShow() {
  $('.menu__burger').on('click', function (e) {
    e.preventDefault();
    $('.menu__modal').addClass('is-active');
    $('.overlay').addClass('is-active');
    $('body').addClass('is-active');
  });
}
function menuHide() {
  $('.menu__modal-close').on('click', function (e) {
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
function scrollHeaderMenu() {
  $(window).scroll(function () {
    var menu = $('.menu'),
      scroll = $(window).scrollTop();
    if (scroll >= 20) menu.addClass('fixed');else menu.removeClass('fixed');
  });
}