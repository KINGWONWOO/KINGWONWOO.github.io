AOS.init({
    duration: 800,
    easing: 'slide'
});

(function($) {

   "use strict";

   // About 이미지 페이드 슬라이더
   //  - 4.5초마다 다음 사진으로 자동 전환 (마지막 → 첫 사진으로 순환)
   //  - 하단 인디케이터 클릭으로 직접 이동
   //  - 마우스를 올리면 멈추고, 벗어나면 다시 재생
   var aboutSlider = function () {
       var $slides = $('.about-slide');
       if ($slides.length < 2) return;

       var $wrap = $slides.first().closest('.about-photo');
       if (!$wrap.length) $wrap = $slides.first().parent();

       var idx = 0, timer = null;
       var DELAY = 4500;

       var $dots = $('<div class="about-dots"></div>');
       $slides.each(function (i) {
           $('<button type="button" class="about-dot"></button>')
               .attr('aria-label', (i + 1) + '번째 사진')
               .toggleClass('active', i === 0)
               .on('click', function () { go(i); restart(); })
               .appendTo($dots);
       });
       $wrap.append($dots);

       function go(n) {
           $slides.eq(idx).removeClass('active');
           $dots.children().eq(idx).removeClass('active');
           idx = (n + $slides.length) % $slides.length;
           $slides.eq(idx).addClass('active');
           $dots.children().eq(idx).addClass('active');
       }
       function start() { timer = setInterval(function () { go(idx + 1); }, DELAY); }
       function stop() { clearInterval(timer); }
       function restart() { stop(); start(); }

       $wrap.on('mouseenter', stop).on('mouseleave', restart);

       // 다른 탭에 있는 동안에는 전환을 멈춰 둔다
       $(document).on('visibilitychange', function () {
           if (document.hidden) { stop(); } else { restart(); }
       });

       start();
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

  // 💡 프로젝트 상세 데이터
  // 작성 규칙: [상황/문제] → [나의 역할] → [해결 방법] → [결과]
  // ⚠️ <em class="ph">○○</em> 로 표시된 부분은 실제 수치로 반드시 교체하세요.
  const projectData = {
    // ================= Main Projects =================
    noobgame: {
        title: "Noob : Multiplayer Battle",
        tech: "Unreal Engine 5 · C++ · Steam SDK · GAS",
        role: "서버-클라이언트 리플리케이션 · 어빌리티 시스템 설계",
        period: "20○○.○○ – 20○○.○○ (약 ○개월)",
        team: "팀 프로젝트 · ○명 (프로그래머 ○ / 아트 ○ / 기획 ○)",
        img: "images/p-noob.jpg",
        links: [
            { label: "GitHub 저장소", url: "#" },
            { label: "플레이 영상", url: "#" }
        ],
        content: `
<h4>문제 상황</h4>
<p>싱글 플레이로 만들어 둔 전투 프로토타입을 멀티플레이어로 확장해야 했습니다.
로컬에서는 문제없던 로직이 네트워크 환경에서는 클라이언트마다 다른 결과를 보여 주는 것이 핵심 과제였습니다.</p>

<h4>내가 맡은 일</h4>
<ul>
  <li>서버 권위(Server-Authoritative) 구조로 전투 로직 전면 재설계</li>
  <li>Steam SDK를 이용한 세션 생성 · 참가 · 로비 흐름 구현</li>
  <li>어빌리티를 데이터로 추가할 수 있도록 모듈화</li>
</ul>

<h4>해결 방법</h4>
<ul>
  <li><strong>판정은 서버에서만</strong> 수행하고 클라이언트는 예측 연출만 담당하도록 분리해,
      핵 및 상태 불일치 가능성을 구조적으로 차단했습니다.</li>
  <li>피격·이펙트처럼 눈에 보이는 요소는 Multicast RPC, 체력·상태 같은 지속 값은
      <strong>Replicated 변수 + OnRep 콜백</strong>으로 나누어 불필요한 대역폭을 줄였습니다.</li>
  <li>어빌리티를 인터페이스와 데이터 애셋으로 분리해, 새 스킬 추가 시
      C++ 수정 없이 데이터만 등록하면 되도록 만들었습니다.</li>
</ul>

<h4>결과</h4>
<ul>
  <li>최대 <em class="ph">○</em>인 동시 접속 세션에서 <em class="ph">○○</em>분 연속 플레이 중 데스싱크 미발생</li>
  <li>어빌리티 1종 추가에 걸리는 시간 <em class="ph">○</em>시간 → <em class="ph">○</em>분으로 단축</li>
  <li>패킷 전송량 <em class="ph">○○</em>% 감소 (Network Profiler 기준)</li>
</ul>

<h4>배운 점</h4>
<p>“동작하는 코드”와 “여러 클라이언트에서 같은 결과를 보장하는 코드”는 전혀 다른 문제라는 것을 체감했습니다.
이후로는 기능을 만들기 전에 <strong>어떤 값이 어디서 결정되는가</strong>를 먼저 정리하는 습관이 생겼습니다.</p>
`
    },

    capstone_vr: {
        title: "Capstone VR Training",
        tech: "Unreal Engine 5 · OpenXR · Meta Quest",
        role: "VR 상호작용 시스템 설계 · 퍼포먼스 최적화",
        period: "20○○.○○ – 20○○.○○ (졸업작품)",
        team: "팀 프로젝트 · ○명",
        img: "images/p-capstone.jpg",
        links: [
            { label: "시연 영상", url: "#" },
            { label: "발표 자료", url: "#" }
        ],
        content: `
<h4>문제 상황</h4>
<p>PC에서 만든 훈련 시뮬레이터를 Meta Quest 단독 구동으로 옮기자 프레임이 급락했습니다.
VR에서 낮은 프레임은 곧 멀미로 이어지기 때문에, 표현 품질보다 <strong>프레임 예산 확보</strong>가 최우선 과제가 되었습니다.</p>

<h4>내가 맡은 일</h4>
<ul>
  <li>OpenXR 기반 손 상호작용(집기 · 놓기 · 스냅) 시스템 구현</li>
  <li>모바일 GPU 기준 렌더링 최적화</li>
  <li>훈련 수행 데이터 기록 및 리포트 기능</li>
</ul>

<h4>해결 방법</h4>
<ul>
  <li>동적 라이팅을 베이크 라이팅으로 전환하고 머티리얼 인스트럭션 수를 정리해
      GPU 비용이 큰 항목부터 제거했습니다.</li>
  <li>상호작용 오브젝트를 오브젝트 풀로 관리해 훈련 반복 시 발생하던 스파이크를 없앴습니다.</li>
  <li>물체를 정확히 잡지 못하는 사용성 문제는 판정 범위를 넓히는 대신
      <strong>스냅 포인트 방식</strong>으로 바꿔, 성능 부담 없이 조작감을 개선했습니다.</li>
</ul>

<h4>결과</h4>
<ul>
  <li>Quest 실기 기준 <em class="ph">○○</em>FPS → <em class="ph">○○</em>FPS로 개선</li>
  <li>드로우콜 <em class="ph">○○○</em> → <em class="ph">○○○</em>회로 감소</li>
  <li>테스터 <em class="ph">○</em>명 대상 시연에서 멀미 호소 <em class="ph">○</em>건</li>
</ul>

<h4>배운 점</h4>
<p>VR에서는 성능이 곧 사용자 경험이라는 점을 배웠습니다.
“예쁘게 만든 뒤 최적화한다”가 아니라 <strong>프레임 예산을 먼저 정하고 그 안에서 표현을 설계</strong>해야 한다는 순서를 익혔습니다.</p>
`
    },

    persona: {
        title: "Persona : LLM 기반 대화 NPC",
        tech: "Unreal Engine 5 · LLM API · Animation Blueprint",
        role: "실시간 NPC 대화 파이프라인 구현",
        period: "20○○.○○ – 20○○.○○ (개인 프로젝트)",
        team: "개인 프로젝트",
        img: "images/p-persona.jpg",
        links: [
            { label: "GitHub 저장소", url: "#" },
            { label: "데모 영상", url: "#" }
        ],
        content: `
<h4>문제 상황</h4>
<p>정해진 대사만 반복하는 NPC 대신, 플레이어 입력에 반응하는 NPC를 만들어 보고 싶었습니다.
문제는 LLM 응답이 <strong>느리고, 길이도 형식도 매번 다르다</strong>는 점이었습니다. 게임 루프를 멈추지 않고 이를 처리해야 했습니다.</p>

<h4>내가 맡은 일</h4>
<ul>
  <li>비동기 요청 · 응답 파이프라인 설계</li>
  <li>캐릭터 성격을 정의하는 페르소나 데이터 구조 설계</li>
  <li>응답 감정 값을 애니메이션 블루프린트에 연결</li>
</ul>

<h4>해결 방법</h4>
<ul>
  <li>API 호출을 <strong>비동기 태스크</strong>로 분리해 게임 스레드 블로킹을 제거하고,
      대기 시간에는 “생각하는” 리액션 애니메이션을 재생해 지연을 연출로 덮었습니다.</li>
  <li>응답을 <strong>구조화된 형식(대사 + 감정 태그)</strong>으로 받도록 프롬프트를 고정해,
      파싱 실패 시 기본 대사로 안전하게 폴백하도록 처리했습니다.</li>
  <li>감정 태그를 AnimBP의 블렌드 스페이스에 연결해 표정과 제스처가 자동으로 따라오게 만들었습니다.</li>
</ul>

<h4>결과</h4>
<ul>
  <li>체감 응답 지연 <em class="ph">○.○</em>초 이내 유지, 대화 중 프레임 드랍 없음</li>
  <li>파싱 실패 폴백 처리로 <em class="ph">○○</em>회 테스트 중 크래시 0건</li>
  <li>페르소나 데이터만 교체해 <em class="ph">○</em>종의 서로 다른 성격 NPC 구현</li>
</ul>

<h4>배운 점</h4>
<p>외부 API처럼 <strong>결과를 통제할 수 없는 요소</strong>를 게임에 넣을 때는
실패를 전제로 한 설계가 먼저라는 것을 배웠습니다. 신기술 도입의 관건은 성능보다 안정성이라는 판단 기준이 생겼습니다.</p>
`
    },

    // ================= Side Projects =================
    light_shadow: {
        title: "Light & Shadow",
        tech: "Unreal Engine 5 · Niagara · Sequencer",
        role: "실시간 VFX · 라이팅 연출",
        period: "개인 학습 프로젝트",
        team: "개인",
        img: "images/p-light.png",
        links: [{ label: "영상 보기", url: "#" }],
        content: `
<p>빛과 그림자의 대비만으로 분위기를 만들 수 있는지 실험한 연출 습작입니다.</p>
<ul>
  <li>Lumen 설정을 조정하며 실시간 GI의 품질과 비용 사이 균형점을 확인</li>
  <li>Niagara GPU 파티클로 먼지·잔광 등 공기감을 표현</li>
  <li>Sequencer와 포스트 프로세스 볼륨을 이용한 컷 단위 연출</li>
</ul>
<p><strong>얻은 것 :</strong> 아트 직군이 요청하는 &ldquo;분위기&rdquo;가 엔진에서 어떤 파라미터로 환산되는지 감을 잡았습니다.</p>
`
    },

    othello: {
        title: "3D Othello & Chess",
        tech: "Blender · Unreal Engine 5 · Blueprint",
        role: "에셋 제작 · 게임 로직 구현",
        period: "개인 프로젝트",
        team: "개인",
        img: "images/p-othello.jpg",
        links: [{ label: "GitHub 저장소", url: "#" }],
        content: `
<p>모델링부터 게임 로직까지 혼자 처음부터 끝까지 완성해 본 프로젝트입니다.</p>
<ul>
  <li>Blender로 체스 기물을 모델링하고 게임용으로 폴리곤을 정리해 익스포트</li>
  <li>오셀로 규칙(8방향 탐색 · 뒤집기 판정)을 블루프린트로 구현</li>
  <li>착수 가능 위치 하이라이트 등 최소한의 UX 처리</li>
</ul>
<p><strong>얻은 것 :</strong> 아트 리소스가 엔진에 들어오기까지의 파이프라인을 직접 겪어 보며,
아트 직군과 대화할 때 필요한 어휘를 익혔습니다.</p>
`
    },

    laonzena: {
        title: "VR Laonzena",
        tech: "Unity · VR · C#",
        role: "VR 상호작용 개발",
        period: "팀 프로젝트",
        team: "팀 · ○명",
        img: "images/p-laonzena.png",
        links: [{ label: "시연 영상", url: "#" }],
        content: `
<p>Unity 기반 VR 공간 시각화 프로젝트에서 내부 인터랙션을 담당했습니다.</p>
<ul>
  <li>C#으로 시선 · 컨트롤러 기반 오브젝트 조작 구현</li>
  <li>공간 이동(텔레포트) 및 UI 인터랙션 처리</li>
  <li>드로우콜 정리를 통한 VR 프레임 안정화</li>
</ul>
<p><strong>얻은 것 :</strong> Unreal과 Unity 양쪽의 VR 구조를 비교하며,
엔진에 종속되지 않는 VR 설계 원칙을 정리할 수 있었습니다.</p>
`
    },

    nier: {
        title: "Nier Style Scene",
        tech: "Unreal Engine 5 · Lighting · Environment",
        role: "배경 · 라이팅 연출",
        period: "개인 학습 프로젝트",
        team: "개인",
        img: "images/p-nier.jpg",
        links: [{ label: "스크린샷 보기", url: "#" }],
        content: `
<p>특정 게임의 색감과 공기감을 분석해 언리얼 엔진으로 재현해 본 습작입니다.</p>
<ul>
  <li>레퍼런스의 색 대비 · 포그 밀도 · 광원 배치를 분석해 수치로 환산</li>
  <li>포스트 프로세스와 볼류메트릭 포그로 톤을 맞춤</li>
</ul>
<p><strong>얻은 것 :</strong> &ldquo;느낌&rdquo;을 구체적인 파라미터로 분해하는 훈련이 되었습니다.</p>
`
    },

    face_app: {
        title: "Face App",
        tech: "Python · OpenCV",
        role: "영상 처리 로직 개발",
        period: "개인 프로젝트",
        team: "개인",
        img: "images/p-face.png",
        links: [{ label: "GitHub 저장소", url: "#" }],
        content: `
<p>OpenCV를 이용해 실시간 안면 검출과 필터 합성을 구현한 프로젝트입니다.</p>
<ul>
  <li>얼굴 랜드마크 좌표를 기준으로 오버레이 이미지를 정렬</li>
  <li>프레임 처리량을 확보하기 위한 해상도 · 처리 주기 조정</li>
</ul>
<p><strong>얻은 것 :</strong> 매 프레임 안에 처리를 끝내야 하는 실시간 제약이
게임 루프와 본질적으로 같다는 점을 이해했습니다.</p>
`
    },

    web_photobook: {
        title: "Web Photobook",
        tech: "React · Firebase",
        role: "프론트엔드 개발",
        period: "개인 프로젝트",
        team: "개인",
        img: "images/p-web.png",
        links: [{ label: "GitHub 저장소", url: "#" }],
        content: `
<p>사진 기록을 위한 반응형 웹 포토북입니다.</p>
<ul>
  <li>Firebase Storage 업로드 및 Firestore 실시간 바인딩</li>
  <li>컴포넌트 단위 상태 관리와 반응형 그리드 레이아웃</li>
</ul>
<p><strong>얻은 것 :</strong> 클라이언트-서버 통신과 비동기 상태 처리에 대한 이해를 넓혔고,
이 경험이 이후 LLM 연동 작업의 기반이 되었습니다.</p>
`
    },

    Udemy: {
        title: "Niagara VFX Study",
        tech: "Unreal Engine 5 · Niagara · GPU Particle",
        role: "이펙트 연구",
        period: "지속 학습",
        team: "개인",
        img: "images/p-udemy.png",
        links: [{ label: "작업물 모음", url: "#" }],
        content: `
<p>Niagara의 동작 원리를 이해하기 위해 기능별로 나누어 진행한 학습 기록입니다.</p>
<ul>
  <li>벡터 필드와 커브를 이용한 파티클 거동 제어</li>
  <li>CPU / GPU 시뮬레이션의 비용 차이와 선택 기준 정리</li>
  <li>마법 · 자연 현상 등 유형별 이펙트 제작</li>
</ul>
<p><strong>얻은 것 :</strong> 이펙트를 &ldquo;따라 만드는&rdquo; 단계에서
&ldquo;원하는 결과를 역산해 설계하는&rdquo; 단계로 넘어갈 수 있었습니다.</p>
`
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
          const metaHTML = `
              <ul class="detail-meta">
                  <li><span>역할</span><strong>${data.role}</strong></li>
                  <li><span>기간</span><strong>${data.period || '-'}</strong></li>
                  <li><span>규모</span><strong>${data.team || '-'}</strong></li>
              </ul>`;

          let linkHTML = '';
          if (data.links && data.links.length) {
              linkHTML = '<div class="detail-links">' + data.links.map(function(l) {
                  const dead = (!l.url || l.url === '#');
                  return dead
                      ? `<span class="detail-link disabled" title="링크를 연결해 주세요">${l.label} (준비 중)</span>`
                      : `<a class="detail-link" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`;
              }).join('') + '</div>';
          }

          $('#project-detail-body').html(`
              <div class="detail-hero" style="background-image:url(${data.img});"></div>
              <span class="detail-tech">${data.tech}</span>
              <h2 class="detail-title">${data.title}</h2>
              ${metaHTML}
              ${linkHTML}
              <hr class="my-4">
              <div class="detail-body">${data.content}</div>
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

          // 5. 상세 뷰 상단으로 부드럽게 이동 (빈 공간이 보이지 않도록)
          const top = $expandView.offset().top - 90;
          if (Math.abs($(window).scrollTop() - top) > 40) {
              $('html, body').animate({ scrollTop: top }, 500);
          }
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

/* ======================================================================
   Learning — 읽은 책 · 수강한 강의
   ⚠️ 아래 데이터는 예시입니다. 실제로 읽은 책 / 수강한 강의로 교체하세요.
      교체 후 index.html 의 .sample-notice 안내 박스를 삭제하면 됩니다.

   항목 형식:
     title  : 제목
     author : 저자 (책) / 강사·플랫폼 (강의)
     year   : 읽은/수강한 시기
     status : 'done'(완료) | 'doing'(진행 중) | 'plan'(예정)
     tag    : 분류 라벨
     note   : 무엇을 얻었는지 한두 문장
     apply  : 어디에 써먹었는지 (면접관이 가장 좋아하는 항목)
   ====================================================================== */
(function ($) {
  "use strict";

  const learningData = {
    books: [
      {
        title: "게임 프로그래밍 패턴",
        author: "Robert Nystrom",
        year: "2024",
        status: "done",
        tag: "설계",
        note: "컴포넌트·상태·오브젝트 풀 등 게임에서 반복되는 구조를 패턴으로 정리한 책. 왜 그 구조를 쓰는지에 대한 근거를 얻었습니다.",
        apply: "Noob 어빌리티 시스템 모듈화"
      },
      {
        title: "Effective C++",
        author: "Scott Meyers",
        year: "2024",
        status: "done",
        tag: "C++",
        note: "복사·대입·리소스 관리에서 실수하기 쉬운 지점들을 항목별로 짚어 줍니다. 코드를 쓰기 전에 한 번 더 의심하는 습관이 생겼습니다.",
        apply: "C++ 클래스 설계 전반"
      },
      {
        title: "이득우의 언리얼 C++ 게임 개발의 정석",
        author: "이득우",
        year: "2024",
        status: "done",
        tag: "Unreal",
        note: "언리얼의 리플렉션·GC·오브젝트 생명주기를 엔진 관점에서 설명합니다. 블루프린트로 가려져 있던 부분을 이해하게 됐습니다.",
        apply: "Noob · Persona C++ 구조"
      },
      {
        title: "멀티플레이어 게임 프로그래밍",
        author: "Joshua Glazer, Sanjay Madhav",
        year: "2025",
        status: "doing",
        tag: "네트워크",
        note: "직렬화, 지연 보상, 서버 권위 구조를 다룹니다. 클라이언트 예측과 서버 판정을 나누는 기준을 여기서 잡았습니다.",
        apply: "Noob 리플리케이션 설계"
      },
      {
        title: "Game Engine Architecture",
        author: "Jason Gregory",
        year: "2025",
        status: "doing",
        tag: "엔진",
        note: "렌더링·애니메이션·메모리까지 엔진 전체 구조를 조망합니다. 엔진이 대신 해 주던 일들의 비용을 인지하게 됐습니다.",
        apply: "Capstone VR 최적화 판단"
      },
      {
        title: "Real-Time Rendering",
        author: "Akenine-Möller 외",
        year: "2025",
        status: "plan",
        tag: "그래픽스",
        note: "실시간 렌더링의 이론적 배경을 정리한 레퍼런스. VFX와 라이팅 작업의 근거를 더 단단히 하기 위해 읽을 예정입니다.",
        apply: "Light &amp; Shadow 후속 작업"
      }
    ],

    courses: [
      {
        title: "Unreal Engine 5 C++ Developer",
        author: "Udemy · GameDev.tv",
        year: "2024",
        status: "done",
        tag: "Unreal · C++",
        note: "언리얼 C++ 문법과 엔진 API를 프로젝트 단위로 익혔습니다. 블루프린트에 의존하던 습관을 벗어난 계기였습니다.",
        apply: "Noob 프로젝트 기반 지식"
      },
      {
        title: "Unreal Engine 5 Multiplayer & Steam",
        author: "Udemy",
        year: "2024",
        status: "done",
        tag: "네트워크",
        note: "Online Subsystem과 Steam SDK를 붙여 세션을 만들고 참가하는 전 과정을 실습했습니다.",
        apply: "Noob 세션 · 로비 구현"
      },
      {
        title: "Unreal Engine 5 Niagara VFX",
        author: "Udemy",
        year: "2025",
        status: "done",
        tag: "VFX",
        note: "GPU 파티클과 벡터 필드의 동작 원리를 이해하고, 원하는 결과를 역산해 설계하는 방법을 익혔습니다.",
        apply: "Light &amp; Shadow · Niagara Study"
      },
      {
        title: "이득우의 언리얼 프로그래밍",
        author: "인프런",
        year: "2025",
        status: "doing",
        tag: "Unreal",
        note: "언리얼의 객체 모델과 메모리 관리 규칙을 한국어로 정리해 주는 강의. 책과 함께 보며 개념을 굳히고 있습니다.",
        apply: "C++ 코드 리팩터링"
      },
      {
        title: "Blender Character Creator",
        author: "Udemy · GameDev.tv",
        year: "2024",
        status: "done",
        tag: "아트 파이프라인",
        note: "모델링부터 리깅, 게임 엔진 익스포트까지의 흐름을 직접 따라가며 아트 파이프라인을 이해했습니다.",
        apply: "3D Othello &amp; Chess"
      },
      {
        title: "OpenCV 컴퓨터 비전",
        author: "Udemy",
        year: "2023",
        status: "done",
        tag: "Python",
        note: "실시간 영상 처리에서 프레임 예산을 맞추는 감각을 익혔습니다. 게임 루프와 본질적으로 같은 제약이었습니다.",
        apply: "Face App"
      }
    ]
  };

  const STATUS_LABEL = { done: "완독", doing: "읽는 중", plan: "예정" };
  const STATUS_LABEL_COURSE = { done: "수료", doing: "수강 중", plan: "예정" };

  function cardHTML(item, isCourse) {
    const label = (isCourse ? STATUS_LABEL_COURSE : STATUS_LABEL)[item.status] || "";
    return `
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="learn-card">
          <div class="learn-top">
            <span class="learn-kind">${item.tag}</span>
            <span class="learn-status ${item.status}">${label}</span>
          </div>
          <h4>${item.title}</h4>
          <p class="learn-meta">${item.author}${item.year ? " · " + item.year : ""}</p>
          <p class="learn-note">${item.note}</p>
          <span class="learn-apply">${item.apply}</span>
        </div>
      </div>`;
  }

  function renderLearning() {
    const $tabs = $('#learn-tabs');
    if (!$tabs.length) return;

    const books = learningData.books || [];
    const courses = learningData.courses || [];

    $tabs.html(`
      <button class="learn-tab active" data-panel="learn-books">읽은 책<span class="count">${books.length}</span></button>
      <button class="learn-tab" data-panel="learn-courses">수강한 강의<span class="count">${courses.length}</span></button>
    `);

    $('#learn-books-list').html(books.map(function (b) { return cardHTML(b, false); }).join(''));
    $('#learn-courses-list').html(courses.map(function (c) { return cardHTML(c, true); }).join(''));

    $tabs.on('click', '.learn-tab', function () {
      const target = $(this).data('panel');
      $tabs.find('.learn-tab').removeClass('active');
      $(this).addClass('active');
      $('.learn-panel').removeClass('active');
      $('#' + target).addClass('active');
    });
  }

  $(function () { renderLearning(); });

})(jQuery);


/* ======================================================================
   뷰포트 상태 표시줄의 FPS / 프레임 시간 (에디터의 stat fps 흉내)
   실제 렌더링 프레임을 측정하며, 히어로가 화면 밖으로 나가면 멈춥니다.
   ====================================================================== */
(function () {
  "use strict";

  var fpsEl = document.getElementById('vp-fps');
  var msEl  = document.getElementById('vp-ms');
  var hero  = document.getElementById('home-section');
  if (!fpsEl || !msEl || !hero || !window.requestAnimationFrame) return;

  var frames = 0, last = performance.now(), raf = null, running = false;

  function loop(now) {
    frames++;
    var elapsed = now - last;
    if (elapsed >= 500) {
      var fps = frames * 1000 / elapsed;
      fpsEl.textContent = Math.round(fps);
      msEl.textContent  = (1000 / fps).toFixed(1);
      frames = 0;
      last = now;
    }
    raf = requestAnimationFrame(loop);
  }

  function start() {
    if (running) return;
    running = true;
    frames = 0;
    last = performance.now();
    raf = requestAnimationFrame(loop);
  }
  function stop() {
    running = false;
    if (raf) cancelAnimationFrame(raf);
  }

  // 히어로가 보일 때만 측정
  if (window.IntersectionObserver) {
    new IntersectionObserver(function (entries) {
      entries[0].isIntersecting ? start() : stop();
    }, { threshold: 0.05 }).observe(hero);
  } else {
    start();
  }

  document.addEventListener('visibilitychange', function () {
    document.hidden ? stop() : start();
  });
})();
