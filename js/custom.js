$(function () {
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        speed: 2000,
        cssEase: 'linear',
        arrows: true,
        prevArrow: '.left',
        nextArrow: '.right',
        dots: true,
    });
})