$(document).ready(function() {


    /* sticky navigation */
    $('.js--sticky__header').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky_header');
        } else {
            $('nav').removeClass('sticky_header');
        }
    }, {
        offset: '10px;'
    });


});
// Fade Animations
function myFadeIn(elem) {
    var elemOpacity = Number(getComputedStyle(elem).opacity).toPrecision(2);
    elem.style.opacity = elemOpacity;
    if (elemOpacity >= 1) {
        return;
    }
    elem.style.opacity = Number(elemOpacity) + 0.01;
    setTimeout(function() {
        myFadeIn(elem)
    }, 10)
}

function myFadeOut(elem) {
    var elemOpacity = Number(getComputedStyle(elem).opacity).toPrecision(2);
    elem.style.opacity = elemOpacity;
    if (elemOpacity <= 0) {
        return;
    }
    elem.style.opacity = Number(elemOpacity) - 0.01;
    setTimeout(function() {
        myFadeOut(elem)
    }, 10)
}
Element.prototype.fadeIn = function() {
    myFadeIn(this);
}
Element.prototype.fadeOut = function() {
    myFadeOut(this);
}


// smoothScroll
function smoothScrollTo(yPos) {
    var step = 20;
    if (yPos < scrollY) {
        step *= -1;
    }
    if (Math.abs(yPos - scrollY) <= step) { // stop Condition
        return;
    }
    window.scrollBy(0, step);
    setTimeout(function() {
        smoothScrollTo(yPos)
    }, 3);
}


(function scrollTop() {
    var goUpBtn = document.createElement('i');
    // goUpBtn.src = "img/icon/top_arrow.png ";
    goUpBtn.className = "fas fa-angle-double-up";
    goUpBtn.id = "goUp";
    document.body.appendChild(goUpBtn);

    function setGoUpBtnVisibility() {
        if (window.scrollY <= 100) {
            goUpBtn.fadeOut();
        } else {
            goUpBtn.fadeIn();
        }
    }

    window.addEventListener('scroll', setGoUpBtnVisibility)
    goUpBtn.addEventListener('click', function() {
        smoothScrollTo(0)
    })
}());


$(document).ready(function() {

    $(document).on('click', 'body, #header__bottom__categories--title', function(ev) {
        ev.stopPropagation()
        if (ev.target.id == "header__bottom__categories--title") {
            if ($('#header__bottom__categories--toggle').is(':visible')) {
                $('#header__bottom__categories--toggle').fadeOut();
            } else {
                $('#header__bottom__categories--toggle').fadeIn();
            }
        } else {
            $('#header__bottom__categories--toggle').fadeOut();
        }
    });
    // ----------menu toggle
    $('#canvas_open').on('click', (function(e) {

        e.preventDefault();

        var x = document.getElementById("offcanvas_menu");

        var display = $("#offcanvas_menu").css('display');



        if (display == "none") {
            $("#offcanvas_menu").css('display', 'block');


        } else {
            $("#offcanvas_menu").css('display', 'none');

        }

    }));

    $('#canvas_close').on('click', (function(e) {

        e.preventDefault();

        var x = document.getElementById("offcanvas_menu");

        var display = $("#offcanvas_menu").css('display');



        if (display == "none") {
            $("#offcanvas_menu").css('display', 'block')
        } else {
            $("#offcanvas_menu").css('display', 'none')
        }

    }));



    // ---------- end -------------------


    // $('div').each(function(){

    //     if ( $(this).css('display') == 'none')
    //     {
    //        //do something
    //     }
    // });

    $('#cart-btn').on('click', (function(e) {

        e.preventDefault();

        var x = document.getElementById("mini_cart");

        var display = $("#mini_cart").css('display');



        if (display == "none") {
            $("#mini_cart").css('display', 'block')
        } else {
            $("#mini_cart").css('display', 'none')
        }

    }));
    // -------- cart menu responsive
    $('#cart-btn1').on('click', (function(e) {

        e.preventDefault();

        var x = document.getElementById("mini_cart1");

        var display = $("#mini_cart1").css('display');



        if (display == "none") {
            $("#mini_cart1").css('display', 'block')
        } else {
            $("#mini_cart1").css('display', 'none')
        }

    }));
       // ---------- RESPONSIVE HEADER NAV -------------
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }
	
	 // --------------- ADDRESS BUTTON ------------------
    $('.address').on('click', (function() {

        $("#address-area").hide(this.checked);
    }));

    $('.new-address').on('click', (function() {

        $("#address-area").show(this.checked);
    }));

    // ------------- OWL CAROUSEL --------------------

    $('.owl-one').owlCarousel({
        loop: true,
        margin: 10,
        rtl: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: true
            },
            600: {
                items: 2,
                nav: true,
                loop: true
            },
            1000: {
                items: 4,
                nav: true,
                loop: true
            }
        }
    });

    $('.owl-two').owlCarousel({
        loop: true,
        margin: 10,
        rtl: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: true
            },
            600: {
                items: 2,
                nav: true,
                loop: true
            },
            1000: {
                items: 3,
                nav: true,
                loop: true
            }
        }
    });

    $('.owl-three').owlCarousel({
        loop: true,
        margin: 10,
        rtl: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true
            },
            600: {
                items: 2,
                nav: true,
                loop: true
            },
            1000: {
                items: 2,
                nav: true,
                loop: true
            }
        }
    });
 // ----------------- SPLIDE SLIDER ------------------
    new Splide('.splide').mount();

    // Create and mount the thumbnails slider.
    var secondarySlider = new Splide('#secondary-slider', {
        rewind: true,
        fixedWidth: 120,
        fixedHeight: 90,
        isNavigation: true,
        gap: 10,
        focus: 'center',
        pagination: false,
        cover: true,
        loop: true,
        // direction: rtl,
        breakpoints: {
            '500': {
                // fixedWidth: 66,
                // fixedHeight: 40,
                fixedWidth: 80,
                fixedHeight: 60,
            },
            '800': {
                // fixedWidth: 66,
                // fixedHeight: 40,
                fixedWidth: 160,
                fixedHeight: 120,
            }

        }
    }).mount();

    // Create the main slider.
    var primarySlider = new Splide('#primary-slider', {
        type: 'fade',
        heightRatio: 0.1,
        pagination: false,
        arrows: false,
        Width: 100,
        fixedHeight: 500,
        cover: true,


    });

    // Set the thumbnails slider as a sync target and then call mount.
    primarySlider.sync(secondarySlider).mount();

    // ----------------------- RATEYO -------------------

    $(function() {

        $("#rateYo").rateYo({
            rating: 3.6,
            starWidth: "16px",
            ratedFill: "#e9755c"
        });

    });
    $(function() {

        $("#rateYo_idea").rateYo({
            rating: 3.6,
            starWidth: "16px",
            ratedFill: "#e9755c"
        });

    });
});

// ------------------------- hide all  open menu -----------------------