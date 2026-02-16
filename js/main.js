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
    // --- Main Projects ---
    noobgame: {
        title: "Noob: Multiplayer Battle",
        tech: "Unreal Engine 5 / C++ / Steam SDK",
        role: "메인 로직 및 네트워크 리플리케이션",
        img: "images/p-noob.jpg",
        content: `<h4>Key Features</h4><ul><li>C++ 기반의 서버-클라이언트 리플리케이션 구현</li><li>Steam SDK를 활용한 P2P 매칭 및 세션 관리</li><li>모듈형 어빌리티 시스템 설계</li></ul>`
    },
    capstone_vr: {
        title: "Capstone VR Training",
        tech: "Unreal Engine 5 / VR / Meta Quest",
        role: "가상 현실 훈련 시스템 설계",
        img: "images/p-capstone.jpg",
        content: `<h4>Key Features</h4><ul><li>OpenXR을 활용한 VR 상호작용 시스템 구축</li><li>실제 산업 현장 데이터를 기반으로 한 시뮬레이션 로직</li><li>사용자 퍼포먼스 데이터 트래킹 및 분석 기능</li></ul>`
    },
    persona: {
        title: "Persona",
        tech: "Unreal Engine 5 / AI / Character Design",
        role: "AI 기반 페르소나 구현 프로젝트",
        img: "images/p-persona.jpg",
        content: `<h4>Key Features</h4><ul><li>LLM 연동을 통한 실시간 NPC 대화 시스템</li><li>상황별 감정 표현 및 애니메이션 블루프린트 연동</li><li>페르소나 데이터 세트를 활용한 캐릭터 성격 정의</li></ul>`
    },
    light_shadow: {
        title: "Light & Shadow",
        tech: "Unreal Engine 5 / Niagara / Sequencer",
        role: "시각 효과 및 라이팅 연출",
        img: "images/p-light.jpg",
        content: `<h4>Key Features</h4><ul><li>Lumen을 활용한 실시간 전역 조명 최적화</li><li>Niagara 파티클을 이용한 고퀄리티 이펙트 제작</li><li>시퀀서를 활용한 시네마틱 연출 및 포스트 프로세싱</li></ul>`
    },

    // --- Side Projects ---
    web_photobook: {
        title: "Web Photobook",
        tech: "React / Firebase",
        role: "프론트엔드 개발",
        img: "images/p-web.jpg",
        content: `<p>개인 사진 기록을 위한 반응형 웹 포토북입니다. Firebase를 활용한 이미지 업로드 및 실시간 데이터 바인딩을 구현했습니다.</p>`
    },
    othello: {
        title: "3D Modeling Othello With Chess",
        tech: "Blender / Unreal Engine 5",
        role: "에셋 제작 및 로직 구현",
        img: "images/p-othello.jpg",
        content: `<p>블렌더로 제작한 체스 기물을 활용한 3D 오셀로 게임입니다. 보드 게임 로직을 블루프린트로 설계했습니다.</p>`
    },
    Udemy: {
        title: "Udemy Study 실습",
        tech: "Unreal Engine 5 / VFX",
        role: "이펙트 연구",
        img: "images/p-niagara.jpg",
        content: `<p>나이아가라의 벡터 필드와 GPU 파티클을 활용하여 자연 현상 및 마법 효과를 구현하는 스터디입니다.</p>`
    },
    nier: {
        title: "Nier Style Scene",
        tech: "Environment Art / Lighting",
        role: "배경 연출",
        img: "images/p-nier.jpg",
        content: `<p>니어 오토마타 특유의 황량하면서도 몽환적인 포스트 아포칼립스 배경을 언리얼 엔진으로 재현한 씬입니다.</p>`
    },
    laonzena: {
        title: "VR Laonzena",
        tech: "Unity / VR / C#",
        role: "VR 상호작용 개발",
        img: "images/p-laonzena.jpg",
        content: `<p>유니티 엔진을 활용한 VR 건축 시각화 프로젝트로, 공간 내부의 인터랙션을 담당했습니다.</p>`
    },
    face_app: {
        title: "Face App",
        tech: "Python / OpenCV / AI",
        role: "AI 로직 개발",
        img: "images/p-face.jpg",
        content: `<p>파이썬과 오픈소스를 활용한 안면 인식 및 필터 적용 어플리케이션 프로젝트입니다.</p>`
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