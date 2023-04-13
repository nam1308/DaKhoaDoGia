(function($) {
    window.onload = function() {
        $(document).ready(function() {
            menuMobile();
            openformdk();
            mochitiet();
            mohoidap();
            kichthuoc();
            $('.specialist_detail_video_btn').fancybox();
            $('.detail_video_btn_ct_a').fancybox();
        });
    };
})(jQuery);

function menuMobile(){
    $(".header__bars svg").click(function(){
        $(".overlay").addClass("overlay-active");
        $(".menu_header").addClass("menu_header-active");
    });

    $(".overlay").click(function() {
        $(".overlay").removeClass("overlay-active");
        $(".menu_header").removeClass("menu_header-active");
        $('.search__mobile').removeClass('active');
    });

    $(".menu_header-close").click(function() {
        $(".overlay").removeClass("overlay-active");
        $(".menu_header").removeClass("menu_header-active");
    });

    $('.menu_header').show();
    $(".menu_header .header_nav li.menu-item-has-children>ul").before(`<span class="li-plus"></span>`);
    if ($(".li-plus").length) {
        $(".li-plus").click(function(e) {
            if ($(this).hasClass("clicked")) {
                $(this).removeClass('clicked').siblings('ul').slideUp();
            } else {
                $(this).parent().siblings('li').find('.li-plus').removeClass('clicked').find("ul").slideUp();
                $(this).parent().siblings().find("ul").slideUp();
                $(this).addClass('clicked').siblings('ul').slideDown();
            }
        });
    }
}

// Làm slick slider trang giới thiệu
$('.sec_history_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.sec_history_nav'
});
$('.sec_history_nav').slick({
    // slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.sec_history_main',
    dots: true,
    centerMode: true,
    focusOnSelect: true
});

// Hàm mở form đăng ký
function openformdk(){
    const modal_quote = document.querySelector(".modal_quote");
    const openModalQuotehBtn = document.querySelectorAll(".open-modal-quote");
    const iconCloseModalQuote = document.querySelector(".modal_quote__header");
    
    function toggleModal() {
        modal_quote.classList.toggle("hide");
    }
    
    openModalQuotehBtn.forEach(function(curent,index,array) {
        openModalQuotehBtn[index].addEventListener("click",toggleModal);
    });

    iconCloseModalQuote.addEventListener("click", toggleModal);
    
    modal_quote.addEventListener("click", (e) => {
        if (e.target == e.currentTarget) toggleModal();
    });
}

// Backtoptop
(function($) { "use strict";

$(document).ready(function(){"use strict";
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';    
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress); 
    var offset = 50;
    var duration = 550;
    jQuery(window).on('scroll', function() {
        if (jQuery(this).scrollTop() > offset) {
        jQuery('.progress-wrap').addClass('active-progress');
        } else {
        jQuery('.progress-wrap').removeClass('active-progress');
        }
    });       
    jQuery('.progress-wrap').on('click', function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});

})(jQuery); 

function mochitiet(){
    // Làm hàm mở popup trang giới thiệu
    if(document.querySelectorAll('.doctor_infor_btn') && document.querySelectorAll('.doctors_popup_item') && document.querySelectorAll('.doctors_popup_close_icon')){
        document.querySelectorAll('.doctor_infor_btn').forEach(function(currentValue, index, arr){
            currentValue.addEventListener("click",function(){
                document.querySelectorAll('.doctors_popup_item')[index].classList.add('active');
            });
            document.querySelectorAll('.doctors_popup_close_icon')[index].addEventListener("click",function(){
                document.querySelectorAll('.doctors_popup_item')[index].classList.remove('active');
            });
        })
    }
}


function mohoidap(){
    function removeClass(){
        var active = document.querySelector('.active');
        if(active){
            active.classList.remove('active');
        }
    }
    
    // Làm trang hỏi đáp chi tiết
    if(document.querySelectorAll('.customer_questions_item') && document.querySelectorAll('.customer_questions_icon_ct .open') && document.querySelectorAll('.customer_questions_item_txt .close')){
        document.querySelectorAll('.customer_questions_icon_ct .open').forEach(function(currentValue, index, arr){
            currentValue.addEventListener("click",function(){
                removeClass();
                document.querySelectorAll('.customer_questions_item')[index].classList.add('active');
            });
            document.querySelectorAll('.customer_questions_item_txt .close')[index].addEventListener("click",function(){
                document.querySelectorAll('.customer_questions_item')[index].classList.remove('active');
            });
        })
    }
    
}

//hàm thay đổi chuỗi
function str_replace(haystack, needle, replacement) {
    var temp = haystack.split(needle);
    return temp.join(replacement);
}

// hàm tăng kích thước chữ
function kichthuoc(){

    var min=12; // kích thước font chữ tối thiểu
    var max=20; //kích thước font chữ tối đa
    var elm = $('.specialist_detail_txt, .service_detail_txt, .price_list_detail_txt, .news_detail_txt, .customer_reviews_txt, .album_detail_txt, .video_detail_txt, .video_detail_txt'); //những phần tử sẽ thực hiện khi chức năng được gọi
    
    // lấy font chữ mực định
    var reset = $('.album_detail_txt').css('fontSize');

    // ấn định kích thước font chữ mặc định và xóa bỏ px từ giá trị
    var size = str_replace(reset, 'px', '');

    //Tăng kích thước font chữ
    $('.fontsize li:nth-child(3) button').click(function() {
        // Nếu kích thước font chữ nhở hơn hoặc bằng với giá trị tối đa thì
        if (size<=max) {
            size++;
            elm.css({'fontSize' : size});
        }
        return false;
    });

    // Giảm kích thước font
    $('.fontsize li:nth-child(2) button').click(function() {
        if (size>=min) {
            size--;
            elm.css({'fontSize' : size});
        }
        return false;
    });

    // khôi phục lại kích thước mặc định
    $('.fontsize li:nth-child(1)').click(function () {
        // ấn định kích thước font chữ mặc định
         elm.css({'fontSize' : reset});
    });

}




