AOS.init({
    duration: 800,
    easing: 'slide'
});

(function($) {

   "use strict";

   // About 이미지 페이드 슬라이더 로직
   var aboutSlider = function() {
    var slides = $('.about-slide');
    var currentSlide = 0;
    
    if(slides.length > 1) {
        setInterval(function() {
            $(slides[currentSlide]).removeClass('active');
            currentSlide = (currentSlide + 1) % slides.length;
            $(slides[currentSlide]).addClass('active');
        }, 4000); // 4초마다 전환
    }
};
aboutSlider();



   $(window).stellar({
   responsive: true,
   parallaxBackgrounds: true,
   parallaxElements: true,
   horizontalScrolling: false,
   hideDistantElements: false,
   scrollProperty: 'scroll'
 });


   var fullHeight = function() {

       $('.js-fullheight').css('height', $(window).height());
       $(window).resize(function(){
           $('.js-fullheight').css('height', $(window).height());
       });

   };
   fullHeight();

   // loader
   var loader = function() {
       setTimeout(function() { 
           if($('#ftco-loader').length > 0) {
               $('#ftco-loader').removeClass('show');
           }
       }, 1);
   };
   loader();

   // Scrollax
  $.Scrollax();



  // Burger Menu
   var burgerMenu = function() {

       $('body').on('click', '.js-fh5co-nav-toggle', function(event){

           event.preventDefault();

           if ( $('#ftco-nav').is(':visible') ) {
               $(this).removeClass('active');
           } else {
               $(this).addClass('active');	
           }

           
           
       });

   };
   burgerMenu();


   var onePageClick = function() {


       $(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
       event.preventDefault();

       var href = $.attr(this, 'href');

       $('html, body').animate({
           scrollTop: $($.attr(this, 'href')).offset().top - 70
       }, 500, function() {
           // window.location.hash = href;
       });
       });

   };

   onePageClick();
   

   var carousel = function() {
       $('.home-slider').owlCarousel({
       loop:true,
       autoplay: true,
       margin:0,
       animateOut: 'fadeOut',
       animateIn: 'fadeIn',
       nav:false,
       autoplayHoverPause: false,
       items: 1,
       navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
       responsive:{
         0:{
           items:1
         },
         600:{
           items:1
         },
         1000:{
           items:1
         }
       }
       });
   };
   carousel();

   $('nav .dropdown').hover(function(){
       var $this = $(this);
       // 	 timer;
       // clearTimeout(timer);
       $this.addClass('show');
       $this.find('> a').attr('aria-expanded', true);
       // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
       $this.find('.dropdown-menu').addClass('show');
   }, function(){
       var $this = $(this);
           // timer;
       // timer = setTimeout(function(){
           $this.removeClass('show');
           $this.find('> a').attr('aria-expanded', false);
           // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
           $this.find('.dropdown-menu').removeClass('show');
       // }, 100);
   });


   $('#dropdown04').on('show.bs.dropdown', function () {
     console.log('show');
   });

   // scroll
   var scrollWindow = function() {
       $(window).scroll(function(){
           var $w = $(this),
                   st = $w.scrollTop(),
                   navbar = $('.ftco_navbar'),
                   sd = $('.js-scroll-wrap');

           if (st > 150) {
               if ( !navbar.hasClass('scrolled') ) {
                   navbar.addClass('scrolled');	
               }
           } 
           if (st < 150) {
               if ( navbar.hasClass('scrolled') ) {
                   navbar.removeClass('scrolled sleep');
               }
           } 
           if ( st > 350 ) {
               if ( !navbar.hasClass('awake') ) {
                   navbar.addClass('awake');	
               }
               
               if(sd.length > 0) {
                   sd.addClass('sleep');
               }
           }
           if ( st < 350 ) {
               if ( navbar.hasClass('awake') ) {
                   navbar.removeClass('awake');
                   navbar.addClass('sleep');
               }
               if(sd.length > 0) {
                   sd.removeClass('sleep');
               }
           }
       });
   };
   scrollWindow();

   

   var counter = function() {
       
       $('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

           if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

               var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
               $('.number').each(function(){
                   var $this = $(this),
                       num = $this.data('number');
                       console.log(num);
                   $this.animateNumber(
                     {
                       number: num,
                       numberStep: comma_separator_number_step
                     }, 7000
                   );
               });
               
           }

       } , { offset: '95%' } );

   }
   counter();


   var contentWayPoint = function() {
       var i = 0;
       $('.ftco-animate').waypoint( function( direction ) {

           if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
               
               i++;

               $(this.element).addClass('item-animate');
               setTimeout(function(){

                   $('body .ftco-animate.item-animate').each(function(k){
                       var el = $(this);
                       setTimeout( function () {
                           var effect = el.data('animate-effect');
                           if ( effect === 'fadeIn') {
                               el.addClass('fadeIn ftco-animated');
                           } else if ( effect === 'fadeInLeft') {
                               el.addClass('fadeInLeft ftco-animated');
                           } else if ( effect === 'fadeInRight') {
                               el.addClass('fadeInRight ftco-animated');
                           } else {
                               el.addClass('fadeInUp ftco-animated');
                           }
                           el.removeClass('item-animate');
                       },  k * 50, 'easeInOutExpo' );
                   });
                   
               }, 100);
               
           }

       } , { offset: '95%' } );
   };
   contentWayPoint();

   // magnific popup
   $('.image-popup').magnificPopup({
   type: 'image',
   closeOnContentClick: true,
   closeBtnInside: false,
   fixedContentPos: true,
   mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    gallery: {
     enabled: true,
     navigateByImgClick: true,
     preload: [0,1] // Will preload 0 - before current, and 1 after the current image
   },
   image: {
     verticalFit: true
   },
   zoom: {
     enabled: true,
     duration: 300 // don't foget to change the duration also in CSS
   }
 });

 $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
   disableOn: 700,
   type: 'iframe',
   mainClass: 'mfp-fade',
   removalDelay: 160,
   preloader: false,

   fixedContentPos: false
 });


 var goHere = function() {

       $('.mouse-icon').on('click', function(event){
           
           event.preventDefault();

           $('html,body').animate({
               scrollTop: $('.goto-here').offset().top
           }, 500, 'easeInOutExpo');
           
           return false;
       });
   };
   goHere();

   // $("#myScrollspy").scrollspy({ offset: -75 });



var TxtRotate = function(el, toRotate, period) {
 this.toRotate = toRotate;
 this.el = el;
 this.loopNum = 0;
 this.period = parseInt(period, 10) || 2000;
 this.txt = '';
 this.tick();
 this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
 var i = this.loopNum % this.toRotate.length;
 var fullTxt = this.toRotate[i];

 if (this.isDeleting) {
   this.txt = fullTxt.substring(0, this.txt.length - 1);
 } else {
   this.txt = fullTxt.substring(0, this.txt.length + 1);
 }

 this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

 var that = this;
 var delta = 300 - Math.random() * 100;

 if (this.isDeleting) { delta /= 2; }

 if (!this.isDeleting && this.txt === fullTxt) {
   delta = this.period;
   this.isDeleting = true;
 } else if (this.isDeleting && this.txt === '') {
   this.isDeleting = false;
   this.loopNum++;
   delta = 500;
 }

 setTimeout(function() {
   that.tick();
 }, delta);
};

window.onload = function() {
 var elements = document.getElementsByClassName('txt-rotate');
 for (var i=0; i<elements.length; i++) {
   var toRotate = elements[i].getAttribute('data-rotate');
   var period = elements[i].getAttribute('data-period');
   if (toRotate) {
     new TxtRotate(elements[i], JSON.parse(toRotate), period);
   }
 }
 // INJECT CSS
 var css = document.createElement("style");
 css.type = "text/css";
 css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
 document.body.appendChild(css);
};


})(jQuery);







// this makes the height of each page equal to the height of the window
// $('.page').css('height', $( window ).height());

// scrollspy section
(function($){
 //variable that will hold the href attr of the links in the menu
 var sections = [];
 //variable that stores the id of the section
 var id = false;
 //variable for the selection of the anchors in the navbar
 var $navbara = $('#navi a');
 
 $navbara.click(function(e){
   //prevent the page from refreshing
   e.preventDefault();
   //set the top offset animation and speed
   $('html, body').animate({
     scrollTop: $($(this).attr('href')).offset().top - 180
},500);
   hash($(this).attr('href'));
 });
 
 
 
 //select all the anchors in the navbar one after another
 $navbara.each(function(){
  // and adds them in the sections variable
   sections.push($($(this).attr('href')));
   
 })
 $(window).scroll(function(e){
   // scrollTop retains the value of the scroll top with the reference at the middle of the page
   var scrollTop = $(this).scrollTop() + ($(window).height()/2);
   //cycle through the values in sections array
   for (var i in sections) {
     var section = sections[i];
     //if scrollTop variable is bigger than the top offset of a section in the sections array then 
     if (scrollTop > section.offset().top){
       var scrolled_id = section.attr('id');
     }
   }
   if (scrolled_id !== id) {
     id = scrolled_id;
     $($navbara).removeClass('current');
     $('#navi a[href="#' + id + '"]').addClass('current'); 
   }
 })
})(jQuery);

hash = function(h){
 if (history.pushState){
   history.pushState(null, null, h);
 }else{
   location.hash = h;
 }
}


$(function() {

 $(".progress").each(function() {

   var value = $(this).attr('data-value');
   var left = $(this).find('.progress-left .progress-bar');
   var right = $(this).find('.progress-right .progress-bar');

   if (value > 0) {
     if (value <= 50) {
       right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
     } else {
       right.css('transform', 'rotate(180deg)')
       left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
     }
   }

 })

 function percentageToDegrees(percentage) {

   return percentage / 100 * 360

 }

 var counter = function() {
  $('#section-counter, .ftco-about').waypoint( function( direction ) {
      if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
          var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
          $('.number').each(function(){
              var $this = $(this),
                  num = $this.data('number');
              $this.animateNumber({ number: num, numberStep: comma_separator_number_step }, 5000);
          });
      }
  } , { offset: '95%' } );
}
counter();

// Skills Animation
var contentWayPoint = function() {
  $('.ftco-animate').waypoint( function( direction ) {
      if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
          $(this.element).addClass('item-animate fadeInUp ftco-animated');
      }
  } , { offset: '95%' } );
};
contentWayPoint();

});



(function($) {
  "use strict";

  // 💡 상세 데이터 관리
  const projectData = {
      p1: {
          title: "Noob: 1vs1 Multiplayer Battle",
          tech: "Unreal Engine 5 / C++ / Steam SDK",
          role: "메인 게임 로직 및 네트워크 프로그래밍",
          img: "images/main-p1.jpg",
          content: `
              <img src="images/main-p1.jpg" class="main-detail-img shadow">
              <h4>상세 구현</h4>
              <p>멀티플레이어 환경에서의 동기화 문제를 해결하기 위해 Unreal의 Replication 시스템을 활용했습니다.</p>
              <ul>
                  <li>Steam Online Subsystem 매칭 시스템</li>
                  <li>서버 사이드 판정 설계</li>
              </ul>`
      },
      p2: {
          title: "Light & Shadow: VFX Art",
          tech: "Unreal Engine 5 / Niagara",
          role: "비주얼 이펙트 및 시네마틱 연출",
          img: "images/main-p2.jpg",
          content: `
              <img src="images/main-p2.jpg" class="main-detail-img shadow">
              <h4>VFX 핵심</h4>
              <p>Niagara 시스템을 활용하여 절차적 빛 효과를 구현했습니다.</p>`
      },
      p3: {
          title: "QPI 소개팅 웹 서비스",
          tech: "React / Node.js",
          role: "프론트엔드 UI/UX 개발",
          img: "images/side-project-1.png",
          content: `<img src="images/side-project-1.png" class="main-detail-img shadow"><h4>개발 역량</h4><p>반응형 인터페이스 구축</p>`
      }
  };

  // 프로젝트 확장 (멀미 방지 버전)
  window.expandProject = function(id) {
      const data = projectData[id];
      const $grid = $('#project-grid-area, #project-header-area');
      const $expandView = $('#expanded-project-view');

      // 1. 기존 리스트 페이드 아웃 (위치 고정)
      $grid.css('opacity', 0);
      
      setTimeout(() => {
          $grid.hide();
          
          // 2. 내용 주입
          $('#project-detail-body').html(`
              <span style="color:#3e64ff; font-weight:700;">${data.tech}</span>
              <h2 class="mt-2 mb-3">${data.title}</h2>
              <p><strong>역할:</strong> ${data.role}</p>
              <hr class="my-4">
              <div>${data.content}</div>
          `);

          // 3. 사이드바 업데이트
          let sideHTML = '';
          for (let key in projectData) {
              if (key !== id) {
                  sideHTML += `
                      <div class="mini-card" onclick="expandProject('${key}')">
                          <div class="mini-img" style="background-image: url(${projectData[key].img})"></div>
                          <div class="mini-text"><h5>${projectData[key].title}</h5></div>
                      </div>`;
              }
          }
          $('#expanded-side-list').html(sideHTML);

          // 4. 상세 뷰 페이드 인
          $expandView.show().removeClass('hidden').addClass('active');
          // 강제 스크롤 이동 제거 (멀미 방지)
      }, 400);
  };

  window.closeProject = function() {
      const $grid = $('#project-grid-area, #project-header-area');
      const $expandView = $('#expanded-project-view');

      $expandView.removeClass('active').addClass('hidden');
      
      setTimeout(() => {
          $expandView.hide();
          $grid.show();
          setTimeout(() => { $grid.css('opacity', 1); }, 50);
      }, 400);
  };

  // 기존 템플릿 로직
  $(window).on('load', function() { $('#ftco-loader').removeClass('show'); });
  AOS.init({ duration: 800, easing: 'slide' });

})(jQuery);

// 이력서 보기 창 열기 함수
window.expandResumeView = function() {
  // 배경 스크롤 방지
  $('body').css('overflow', 'hidden');
  // 페이드 인 효과로 표시
  $('#quick-resume-view').fadeIn(300).addClass('active');
};

// 이력서 보기 창 닫기 함수
window.closeResumeView = function() {
  // 배경 스크롤 허용
  $('body').css('overflow', 'auto');
  // 페이드 아웃 효과로 숨김
  $('#quick-resume-view').fadeOut(300).removeClass('active');
};

// (추가 팁) ESC 키 누르면 이력서 창 닫기
$(document).keyup(function(e) {
   if (e.key === "Escape") closeResumeView();
});