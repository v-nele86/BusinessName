$(document).ready(function(){

    $('.hamburger__btn').click(function(){
        $('.main__menu').toggleClass('menu--opened');
        $('.hamburger__btn').toggleClass('hamburger--activated');
    });

    
    $('.bx-slider').bxSlider();
    

    if($('.bx-pager-link').hasClass('active')){
        this.parent('.bx-pager-item').addClass('active');
    } else {
        this.parent('.bx-pager-item').removeClass('active');
    }


    


    





});// ------------------------------------- END ------------------------------------- //