/*global jQuery*/
jQuery(document).ready(function ($) {
    'use strict';


    $('.slider-area').owlCarousel({
        loop: true,
        items: 1,
                autoplay: true,
                    animateOut: 'slideOutDown',
                    animateIn: 'flipInX',
                    smartSpeed: 450
    });


    $('.logo-carusal-area').owlCarousel({
        loop: true,
        items: 5,
        margin: 30
        //        autoplay: true,
        //        animateOut: 'slideOutDown',
        //        animateIn: 'flipInX',
        //        smartSpeed: 450
    });



});
