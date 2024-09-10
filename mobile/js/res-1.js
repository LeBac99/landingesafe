// JavaScript Document

$(document).ready(function () {
  var h = $(window).height();
  var w = $(window).width();
  if (w > 690) {
    $('.wrapper').css({ transform: "scale(" + w / 1920 + ")" });
    var iw = $(".wrapper")[0].getBoundingClientRect().width;
    var ih = $(".wrapper")[0].getBoundingClientRect().height;
    $('body').css({ height: ih, width: iw });

  }
  else if (320 < w < 690) {
    $('.wrapper, .btn-tai-fixed').css({ transform: "scale(" + w / 690 + ")" });
    var iw = $(".wrapper")[0].getBoundingClientRect().width;
    var ih = $(".wrapper")[0].getBoundingClientRect().height;
    $('body').css({ height: ih, width: iw });
  }

  $(window).on('resize', function () {	  
    var h = $(window).height();
    var w = $(window).width();
    if (w > 690) {
      $('.wrapper').css({ transform: "scale(" + w / 1920 + ")" });
      var iw = $(".wrapper")[0].getBoundingClientRect().width;
      var ih = $(".wrapper")[0].getBoundingClientRect().height;
      $('body').css({ height: ih, width: iw });

    }
    else if (320 < w < 690) {
      $('.wrapper, .btn-tai-fixed').css({ transform: "scale(" + w / 690 + ")" });
      var iw = $(".wrapper")[0].getBoundingClientRect().width;
      var ih = $(".wrapper")[0].getBoundingClientRect().height;
      $('body').css({ height: ih, width: iw });
    }
  });
});
/* 
AOS.init({

  disable: function () {
    var maxWidth = 1440;
    return window.innerWidth < maxWidth;
  }
	
}); */

//var swiper = new Swiper(".mySwiper", {
//      direction: "vertical",
//      slidesPerView: 1,
//      spaceBetween: 0,
//      mousewheel: {
//		forceToAxis: true,
//		sensitivity: 1,
//		releaseOnEdges: true,
//	  },
//       pagination: {
//        el: ".swiper-pagination",
//        clickable: true,
//        renderBullet: function (index, className) {
//          return '<span class="' + className + '">' + (index + 1) + "</span>";
//        },
//      },
//    });
//document.addEventListener('scroll', function() {
//	var sectionOffsetTop = document.querySelector('.section-3').getBoundingClientRect().top;
//	if(sectionOffsetTop <=0 ){		
//		swiper.mousewheel.enable();
//	} else {
//		swiper.mousewheel.disable();
//	}
//
//});
var swiper1 = new Swiper(".mySwiper1", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
//Begin Countdown section-5
const counter = document.getElementById('counter');
let value = 60;
const intervalID = setInterval(() => {
  const nextValue = --value;
  
  if (nextValue === -1) {
    clearInterval(intervalID);    
    return;
  }  
  requestAnimationFrame(() => {
    // Update the value and remove the `big` class in the next frame, so that
    // the text becomes smaller again:
    counter.textContent = nextValue;
    counter.classList.remove('big');
  
    requestAnimationFrame(() => {
      // One more frame after that (so that the element has time to be re-rendered
      // with the smaller font-size, add the `big` class again:
      counter.classList.add('big');
    });
  });
  
}, 1000);
//End Countdown section-5


//Begin button Tai Mien Phi fixed bottom
const btnScrollToTop = document.querySelector(".btn-tai-fixed");
// scroll to top of page when button clicked
btnScrollToTop.addEventListener("click", e => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});

// toggle 'scroll to top' based on scroll position
window.addEventListener('scroll', e => {
	var width = window.innerWidth;
  if (width > 300) {
  	btnScrollToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
  }
	else {
		btnScrollToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
	}
});
//End button Tai Mien Phi fixed bottom