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

// (function scrollTop() {
//     var goUpBtn = document.createElement('img');
//     goUpBtn.src = "img/icon/top_arrow.png ";
//     goUpBtn.id = "goUp";
//     document.body.appendChild(goUpBtn);

//     function setGoUpBtnVisibility() {
//         if (window.scrollY <= 100) {
//             goUpBtn.fadeOut();
//         } else {
//             goUpBtn.fadeIn();
//         }
//     }

//     window.addEventListener('scroll', setGoUpBtnVisibility)
//     goUpBtn.addEventListener('click', function() {
//         smoothScrollTo(0)
//     })
// }())

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

        console.log('heklo');
        // var display = $("#offcanvas_menu").css('display');

        // if (display == "none") {
        //     $("#offcanvas_menu").css('display', 'block');
        //     $("#canvas_open").css('display', 'block');

        // } else {
        //     $("#offcanvas_menu").css('display', 'none');
        //     $("#canvas_open").css('display', 'block');


        // }

    }));

    $('#canvas_close').on('click', (function(e) {

        e.preventDefault();

        var display = $("#offcanvas_menu").css('display');

        if (display == "block") {
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

        var display = $("#mini_cart1").css('display');

        if (display == "none") {
            $("#mini_cart1").css('display', 'block')
        } else {
            $("#mini_cart1").css('display', 'none')
        }

    }));
    // $(document).on('click', 'body, #cart-btn1', function(ev) {
    //     ev.stopPropagation()
    //     if (ev.target.id == "cart-btn1") {
    //         if ($('#mini_cart1').is(':visible')) {
    //             $('#mini_cart1').fadeOut();
    //         } else {
    //             $('#mini_cart1').fadeIn();
    //         }
    //     } else {
    //         $('#mini_cart1').fadeOut();
    //     }
    // });
});

// ------------------------- hide all  open menu -----------------------