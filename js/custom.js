/*

Template: Damara - Portfolio Template
Author: ShmatThemes
Version: 1.0
Design and Developed by: ShmatThemes

*/

/*================================================
[  Table of contents  ]
================================================

:: Navigation Humburger Amination & Open Navigation
:: Progress bar
:: Preloader
:: Mask animation
:: Wow
:: Owl Carousel
:: Scroll
:: Modal Window

======================================
[ End table content ]
======================================*/

"use strict";

/*---------------------------------------------------------------------
            Navigation Humburger Amination & Open Navigation
-----------------------------------------------------------------------*/

$('#nav-icon3').click(function(){
    $(this).toggleClass('open');
    $('.menu-block').toggleClass('menu-block-active');
});

/*------------
Mobile sub menu
--------------*/
$('.sub .fa-chevron-down').click(function() {
    if( $(window).width() < 769 ) {

            var $this = $(this).parents('.sub');
            $this.find('.dropdown-content').toggleClass('show-sub');
            $this.find('.dropdown-content li a').toggleClass('sh-font-accent');
            $this.find('.fa-chevron-down').toggleClass('chevron-rotate');
    }
});

/*---------------------------------------------------------------------
                            Progress bar
-----------------------------------------------------------------------*/

function progress() {
    $('.sh-progress-bar .sh-progress').each(function() {
        var $this = $(this);
        var width = $(this).data('percent');
        $this.css({
            'transition': 'width 2s'
        });
        setTimeout(function() {
            $this.appear(function() {
                $this.css('width', width + '%');
            });
        }, 500);
    });
}

/*---------------------------------------------------------------------
                                Preloader
-----------------------------------------------------------------------*/
function preloader() {
    $("#load").fadeOut();
    $('#loading').delay().fadeOut('slow');

}

/*---------------------------------------------------------------------
                            Mask Animation
-----------------------------------------------------------------------*/
function mask() {
    $('.mask-b').addClass('mask');
    $('.intro-text').addClass('animated');
    $('.intro-text').addClass('fadeIn');
}

/*---------------------------------------------------------------------
                                WOW
-----------------------------------------------------------------------*/

function wow() {
    new WOW().init();

}

/*---------------------------------------------------------------------
                                Counter
----------------------------------------------------------------------- */

$('.timer').each(function() {
    var $this = $(this);
    setTimeout(function() {
        $this.appear(function() {
            $this.countTo();
        });
    }, 500);
});


/*---------------------------------------------------------------------
                            Owl Carousel
-----------------------------------------------------------------------*/

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      dotsClass: 'owl-dots d-flex justify-content-end sh-slider-dots',
      smartSpeed: 500,
  });
});

/*---------------------------------------------------------------------
                                Scroll
-----------------------------------------------------------------------*/

$(document).ready(function(){
    $('a[href*=top-trigger]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 800);
        e.preventDefault();
    });
    return false;
});



/*---------------------------------------------------------------------
                                Modal Window
-----------------------------------------------------------------------*/

$('.open-modal-block').click(function(){
        $(this).parent().find('.modal-team').addClass('modal-team-active');
});

$('.close-modal').click(function(){
    $('.modal-window').each(function(){
        $('.modal-window').removeClass('modal-team-active');
    });
});


$(document).ready(function() {
        preloader(),
        progress(),
        mask(),
        wow();
});