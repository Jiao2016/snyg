$(function () {
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',//横向，纵向为vertical
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        autoplay : 3000,
        autoplayDisableOnInteraction : false,
        scrollbar:'.swiper-scrollbar'
    });
    $(window).scroll(function(){
        var st=$(window).scrollTop()
        if (st>600) {
            $(".totop").show(300)
        }else{
            $(".totop").hide(300)
        }
    })



















});