(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $("").owlCarousel({
            items: 3,
            nav: true,
            loop:true,
            autoplay: true,
            dots: false,
            margin: 0,
            navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            mouseDrag: false,
            touchDrag: false,
            responsive:{
                            0:{
                                items:1,
                                nav:true
                            },
                            600:{
                                items:3,
                                nav:false
                            },
                            1000:{
                                items:3,
                                nav:true,
                                loop:false
                            }
                        }
        });

        
    $(".navBar").click(function(){
        $(".mobileNav").addClass("show");
        $(".navClose").addClass("show");
        $(".navBar").addClass("hide");
    });  

    $(".navClose, .bannerArea").click(function(){
        $(".mobileNav").removeClass("show");
        $(".navClose").removeClass("show");
        $(".navBar").removeClass("hide");
    });


    });
    
    
    $("").waypoint(function(direction){
        if(direction == "down"){
                $("").addClass("sticky");
           } else{
                $("").removeClass("sticky");
           }
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	