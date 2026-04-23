$(function(){
    /* Include - Header.html */
    $('.header-include').load('/include/header.html', function() {
        /*  Header Login Modal - 로그인버튼시, 팝업창 띄움 */
        $('.btn-login, .login-member a').click(function() {
            $('.modal.modal-login').fadeIn();
            $('body').addClass('active');
        });

         /* Header - Mega Navi */
        $(window).resize(function() {
            var winWidth = $(window).innerWidth(); //창넓이측정(변수)
            /* 1. 중복 클릭 폭탄 방지 (지우개) */
            $('.trigger, section, .btn-mega-navi-close, .mega-navi-item b').off('click');

            /* 💻 디바이스 너비가 767 이상 일때 (태블릿, PC) */
            if(winWidth > 767) {
                /* 환승역 청소 1: 전체 메뉴판 초기화 */
                $('.mega-navi').css({'left': '', 'display': ''});
                /* 🌟 환승역 청소 2: 모바일에서 열어뒀던 아코디언 메뉴 닫아주고, 활성화 색상 빼기! */
                $('.mega-navi-item-wrap').css('display', ''); 
                $('.mega-navi-item b').removeClass('active');

                /* .trigger 클릭했을때 - 메뉴 아래로 슬라이드 */
                $('.trigger').click(function() {
                    $('.mega-navi').stop().slideToggle();
                    $(this).toggleClass('active');
                });
                /* section 클릭했을때 - 메뉴 위로 슬라이드 */
                $('section').click(function() {
                    $('.mega-navi').stop().slideUp();
                });
            }
            /* 📱 디바이스 너비가 767 '이하'일때 (모바일) */
            else if(winWidth < 767) {
                /* 🌟 환승역 청소 2: PC에서 쓰던 display 꼬리표를 떼고, 화면 밖(-300px)으로 밀어둡니다! */
                $('.mega-navi').css({'display': '', 'left': '-300px'});

                /* .trigger 클릭했을때 - 메뉴 왼쪽에서 스르륵 */
                $('.trigger').click(function() {
                    $('.mega-navi').animate({'left': 0}, 300);
                });
                /* section 클릭했을때 - 메뉴 왼쪽으로 스르륵 */
                $('section, .btn-mega-navi-close').click(function() {
                    $('.mega-navi').animate({'left': -300}, 300);
                });

                /* Mobile - Mega Navi 1차메뉴 (슬라이드 메뉴 효과) */
                $('.mega-navi-item b').click(function() {
                    $(this).next().stop().slideToggle(200);
                    //내 짝꿍(서브메뉴)이 닫혀있으면 열고, 열려있으면 닫아라! (스위치)
                    
                    $(this).toggleClass('active');
                    //나한테 'active' 옷이 없으면 입고, 입고 있으면 벗어라! (스위치)
                    $(this).parent().siblings().find('.mega-navi-item-wrap').stop().slideUp(200);
                    //내 가족들(다른 메뉴들)의 서브메뉴는 묻지도 따지지도 말고 무조건 닫아!
                    $(this).parent().siblings().find('b').removeClass('active');
                    //내 가족들(다른 메뉴들)의 제목은 무조건 'active' 옷을 벗어!
                });
            }
        }).resize();

        /* After Login Header UI */
        $('.btn-member-primary').click(function() {
            $('.modal.modal-login').fadeOut();
            $('.login-join-buttons').hide();
            $('.user-alarm').show();
        });
    });

    /*  Login Modal, Class Share Modal - (X버튼,팝업 배경) 클릭시, 팝업창 없앰 */
    $(document).on('click', '.btn-modal-close, .member-login-overlay, .class-share-overlay', function() {
        $('.modal.modal-login, .modal.modal-class-share').fadeOut(200);
        $('body').removeClass('active');
    });

    /* Include - Footer.html */
    $('.footer-include').load('/include/footer.html', function() {
        /* Footer LNB */
        $('.link-item-title').click(function() {
            $(this).next().stop().slideToggle();
            $(this).toggleClass('active');
            $(this).parent().siblings().find('.link-item-title').removeClass('active');
            $(this).parent().siblings().find('.link-item-content').stop().slideUp();
        });
        /* Company Info Trigger */
        $('.company-info-trigger').click(function() {
            $(this).next().toggle();
            $(this).toggleClass('active');
        });
        /* Go to Top Action */
        $('.gototop').click(function() {
            $('html, body').animate({scrollTop: 0}, 500);
        });
        /* Scroll show  Go to Top */
        $(window).scroll(function() {
            if($(this).scrollTop() > 600) {
                $('.gototop').addClass('active');
            }
            else {
                $('.gototop').removeClass('active');
            }
        });
    });

    /* Header.html - Scroll GNB Fixed */
    $(window).scroll(function() {
        if($(this).scrollTop() > 200) {
            $('header').addClass('active');
        }
        else {
            $('header').removeClass('active');
        }
    });

    /* Index.html - The Final Countdown */
    $("#early-bird-countdown")
    .countdown("2026/06/10", function(event) {
        $(this).html(
        event.strftime('<b>종료까지</b> %D일 <em>%H</em>:<em>%M</em>:<em>%S</em> 남음')
        );
    });

    /* Index.html - Focus Class : like */
    $(document).ready(function() {
        $('.focus-class-item .like').on('click', function(e) {
            // 이벤트 버블링 방지
            e.stopPropagation(); 
            // 좋아요 상태 토글
            $(this).toggleClass('active'); 
        });
    });

    /* Category-main.html - Category Detail Buttons */
    $('.btn-shortcut').click(function() {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    /* Category-main.html - Paging */
    $('.btn-paging').click(function() {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    /* Take-Course.html - Cart Check All Function */
    /* 
    // 삭제 버튼
    $('.cart-item .btn-clear').click(function() {
        $(this).parents('.cart-item').hide();   // .fadeOut()
    });
    // 전체삭제 버튼
    $('.cart-wrap .btn-all-clear').click(function() {
        $('.cart-item').hide();
    });
    // Check box All 
    $('.cart-chk-all').click(function() {
        $('.check-status .cart-chk').prop('checked', this.checked);
    });
    */
    // 삭제 버튼
    $('.cart-item .btn-clear').click(function() {
        $(this).parents('.cart-item').remove();
        if($('.cart-item').length == 0) {
            $('.cart-item-empty').show();
            $('.cart-header').hide();
        }
    });
    // 전체삭제 버튼
    $('.cart-wrap .btn-all-clear').click(function() {
        $('.cart-item').remove();
        if($('.cart-item').length == 0) {
            $('.cart-item-empty').show();
            $('.cart-header').hide();
        }
    });
    // Cart Item Empty

    // Check box All
    $('.cart-chk-all').click(function() {
        $('.check-status .cart-chk').prop('checked', this.checked);
    });

    /* Member-register.html - inputbox[type=password]  */
    $(document).on('click', '.toggle-pw', function() {
        // Toggle Icon Shape (비번 아이콘 변경)
        $(this).toggleClass('bi-eye');
        // Toggle input Type (type=pw -> text로 변경)
        var inputType = $(this).parent().children('input').attr('type');
        if(inputType == 'password') {
            $(this).parent().children('input').attr('type', 'text');
        }
        else {
            $(this).parent().children('input').attr('type', 'password');
        }
    });

    /* Class-detail.html - 공유하기 버튼 팝업창 띄움 */
    $('.btn-sidebar-badge.share').click(function() {
        $('.modal.modal-class-share').fadeIn();
        $('body').addClass('active');
    });

    /* Clsdd-frysil.html - like 활성화 */
    $('.btn-sidebar-badge.like').click(function() {
        $(this).children('.bi').toggleClass('active');
    });

    /* Class-detail.html - 링크복사 눌렀을때 복사체크됨 */
    $('.share-choice-item.share-link').click(function() {
        $('.copied-link').show();
    });

    /* Class-detail.html - Class Navi */
    $('.class-detail-navi a').click(function(e) {
        /* Active Style Change */
        $(this).addClass('active').siblings().removeClass('active');
        /* Smooth Scrolling : 주소에 #가 찍히지 않음 */
        var linkLocation = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(linkLocation).offset().top
        }, 500); 
        e.preventDefault();
    });

    /* Class-detail.html - Class Curriculum : Accordion Menu */
    $('.chapter-title').click(function() {
        $(this).next().slideToggle(200); //아코디언 형태
        $(this).toggleClass('active'); //Chapter 앞 아이콘 변경
    });

    /* Class-detail.html - Class Curriculm : All Show/Hide */
    // 버튼 : 모두 접기
    $('.btn-curriculum-fold').click(function() {
        $('.chapter-content').stop().slideUp();
        $('.chapter-title').addClass('active');
        $(this).addClass('selected');
        $('.btn-curriculum-expand').removeClass('selected');
    });
    // 버튼 : 모두 펼치기
    $('.btn-curriculum-expand').click(function() {
        $('.chapter-content').stop().slideDown();
        $('.chapter-title').removeClass('active');
        $(this).addClass('selected');
        $('.btn-curriculum-fold').removeClass('selected');
    });

    /* Class-detail.html - FAQ */
    $('.faq-title').click(function() {
        $(this).next().stop().slideToggle(); //답변이 슬라이드로 내려옴
        $(this).toggleClass('active'); //질문이 활성화됨 (색변경)
        $(this).siblings('.faq-title').removeClass('active') //클릭한 질문 제외한 다른 질문은 활성화 꺼짐
        $(this).siblings('.faq-content').not($(this).next()).stop().slideUp(); //클릭한 질문 제외한 나머지는 슬라이드 업
    });

    /* Class-detail.html - Popup : 장바구니 Cart */
    $('.btn-primary.btn-cart').click(function() {
        $('.cart-confirm').show();
        setTimeout(function() {
            $('.cart-confirm').hide();
        }, 3000)
    });
    // 닫기버튼 클릭시
    $('.cart-confirm.btn-close').click(function() {
        $(this).hide();
    });

    /* Index.html - Front Envent Banner */
    // '닫기' 버튼(.close-popup) 클릭 시
    $('.close-popup').click(function() {
        $('.front-event-banner').fadeOut(200);
    });
    /* Button : 오늘 그만 보기 */ 
    // 1. 페이지가 열릴 때: 쿠키를 확인해서 팝업을 띄울지 결정
    // 쿠키 이름은 겹치지 않게 'hideFrontBanner'로 지정했습니다.
    if (getCookie("hideFrontBanner") === "Y") {
        $(".front-event-banner").hide(); // 쿠키가 있으면 아예 안 보이게 처리
    }
    // 2. '오늘 그만 보기' 버튼(.stop-today) 클릭 시
    $(".stop-today").click(function() {
        // 'hideFrontBanner' 쿠키를 "Y" 값으로 1일(하루) 동안 굽습니다.
        setCookie("hideFrontBanner", "Y", 1); 
        // 팝업을 부드럽게 닫습니다.
        $(".front-event-banner").fadeOut(200); 
    });
    /* ========================================================
   [필수] 쿠키 생성 및 읽기 함수 (파일 하단에 한 번만 넣어두면 됩니다)
   ======================================================== */
    function setCookie(name, value, expiredays) {
        var date = new Date();
        date.setDate(date.getDate() + expiredays); 
        document.cookie = name + "=" + escape(value) + "; path=/; expires=" + date.toUTCString();
    }

    function getCookie(name) {
        var cookie = document.cookie;
        if (document.cookie != "") {
            var cookieArray = cookie.split("; ");
            for (var index in cookieArray) {
                var cookieName = cookieArray[index].split("=");
                if (cookieName[0] == name) {
                    return unescape(cookieName[1]);
                }
            }
        }
        return "";
    }

    /* Index.html - Front Slider */
    $('.front-slider-items').slick({
        dots: false, // 동그라미 도트 버튼
        arrows: false, // 다음 이전 버튼
        infinite: false, // 마지막 슬라이드 다음에 처음으로 돌아가기
        autoplay: true, // 자동재생
        autoplaySpeed: 3000, // 슬라이드가 머무는 시간
        speed: 300, // 슬라이드 교차하는 시간
        fade: false, // 크로스페이드로 할지 여부
        pauseOnHover: true // 마우스 올라갔을때 잠시 멈춤
    });

    /* Index.html - Focus Class Slider */
    $('.focus-class-items').slick({
        /* PC 화면 */
        slidesToShow: 4, // 최초로 보이는 개수
        slidesToScroll: 4, // 슬라이드 할때 몇개씩 슬라이드할지 갯수
        arrows: true, // 다음 이전 버튼
        dots: false, // 동그라미 도트 버튼
        responsive: [
            /* 태블릿 화면 */
            {
                breakpoint: 1024, //너비
                settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
                arrows: false,
                }
            },
            /* 모바일 화면 */
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                arrows: false, 
                dots: false, 
                }
            }
        ]
    });
});