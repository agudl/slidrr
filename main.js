$(document).ready(function() {
    $('.slide').css({right: slideWidth/1.35});
});

var carousel = $('.carousel')
var slider = $('.slider');
var slide = $('.slide');
var slideWidth = $('.slide').find('img').width();
var slideLength = slide.length;
var windowWidth = $(window).width();
var oneSlide = $('.slide');
slider.css('width',windowWidth);
var check = slideWidth*(slideLength/2);

$('.left').css('width', slideWidth - (slideWidth/1.35));
$('.left').css('height', slider.height());
$('.right').css('width', slideWidth - (slideWidth/1.35));
$('.right').css('height', slider.height());

$('.slide').hover(
    function() {
    $(this).find('.sliderHover').css('display','flex');
    $(this).find('img').animate({ 'zoom': 1 }, "fast");
    $(this).css("z-index","1000");
    $(this).find('img:first-child').css('box-shadow','0px 0px 60px 20px #3B3B3B');
    $(this).find('img:first-child').css('opacity','0.85');
    $(this).find('img:first-child').css('z-index','999');
    $(this).find('.saveforlater').slideDown(100);
}, function() {
        $(this).find('img').css('box-shadow','none');
        $(this).find('img').animate({ 'zoom': 1 });
        $( this ).find('div').fadeIn().css('display','flex');
        $(this).find('img').css('opacity','1');
        $('.sliderHover').slideUp(400);
        $(this).css("z-index","1");
        $(this).find('.saveforlater').css('display','none');
    }
);

$('.saveforlater').hover(
    function() {
        $(this).attr("src","img/hearthover.png");
    }, function() {
        $(this).attr("src","img/heart.png");
    }
);

$('.saveforlater').click(function() {
    $(this).attr("src","img/hearthover.png");
})

var animateRight = slideWidth;

$('.right').click(function() {
    if (animateRight) {
        $('.slide').animate({right : animateRight});
        animateRight = animateRight + slideWidth;
    } else {
        return;
    }
});

var animateLeft = -300;

$('.left').click(function() {
    if (animateLeft) {
        $('.slide').animate({left : animateLeft}, 800);
        animateLeft = animateLeft - 300;
    } else {
        return;
    }
});

// $(document).ready(function() {
//     $('.slide').animate({right: slideWidth/1.5});
// });
// $( document ).ready(function() {
//     $(".carousel").animate(left);
// });
