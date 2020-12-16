
$(document).ready(function(){
    $(".owl-carousel.blog-yourbrand").owlCarousel({
        loop:true,
        autoplay:true,
        items:5,
        slideSpeed : 300,
        autoplayTimeout: 1000,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            800:{
                items:4
            },
            1000:{
                items:5
            }
        }
    });
});
var owl = $('.slider');
owl.owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});

var owl = $('.banner');
owl.owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});


jQuery(document).ready(function($) { 

    $("#owl-1").owlCarousel({
        items:4,
        nav: true,
        navText: ["<i class='fa fa-chevron-left icon_preview'></i>","<i class='fa fa-chevron-right icon_preview'></i>"],
        margin: 31,
        responsive: {
            0 : {
                items: 1
            },
            540: {
                items: 1
            },
            992: {
                items: 4
            }
        }
    });
    
});
$(".owl-carousel.feature-img").owlCarousel({
    loop: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    items: 4,
    nav: true,
    slideSpeed: 300,
    paginationSpeed: 200,
    margin:30,
navText : ['<i class="glyphicon glyphicon-chevron-left glyphicon glyphicon-chevron-left2" aria-hidden="true"></i>','<i class="glyphicon glyphicon-chevron-right glyphicon glyphicon-chevron-right2" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1,

        },
        600:{
            items:2,
            
        },
        1200:{
            items:4,
        }
    }
}); 
$(".owl-carousel.new-img").owlCarousel({
    loop: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    items: 5,
    nav: true,
    slideSpeed: 300,
    paginationSpeed: 200,
    margin:30,
navText : ['<i class="glyphicon glyphicon-chevron-left glyphicon glyphicon-chevron-left2" aria-hidden="true"></i>','<i class="glyphicon glyphicon-chevron-right glyphicon glyphicon-chevron-right2" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1,

        },
        600:{
            items:2,
            
        },
        1000:{
            items:4,
        },
        1200:{
            items:5,
        }
    }
}); 
$(".owl-carousel.owl-blog").owlCarousel({
    loop: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    items: 2,
    nav: true,
    slideSpeed: 300,
    paginationSpeed: 200,
    margin:30,
        navText: ["<i class='fa fa-chevron-left icon_preview'></i>","<i class='fa fa-chevron-right icon_preview'></i>"],
    responsive:{
        0:{
            items:1,
            
        },
        1200:{
            items:2,
            
        },

    }
}); 


$(document).ready(function(){

            //Check to see if the window is top if not then display button
            $(window).scroll(function(){
                if ($(this).scrollTop() > 50) {
                    $('#myBtn').fadeIn();
                } else {
                    $('#myBtn').fadeOut();
                }
            });

            //Click event to scroll to top
            $('#myBtn').click(function(){
                $('html, body').animate({scrollTop : 0},800);
                return false;
            });

        });