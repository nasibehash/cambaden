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



    // ---------------- CATEGORIES TOGGLE -------------------

    $('#header__bottom__categories--title,body').on('click', (function(ev) {
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
    }));


    // ---------- MENU TOGGLE ---------------

    $('#canvas_open').on('click', (function(e) {

        e.preventDefault();

        var display = $("#offcanvas_menu").css('display');

        if (display == "none") {
            $("#offcanvas_menu").css('display', 'block');
            $("#canvas_open").css('display', 'block');

        } else {
            $("#offcanvas_menu").css('display', 'none');
            $("#canvas_open").css('display', 'block');


        }

    }));

    $('#canvas_close').on('click', (function(e) {

        e.preventDefault();

        var display = $("#offcanvas_menu").css('display');

        if (display == "block") {
            $("#offcanvas_menu").css('display', 'none')
        }

    }));



    // ---------- CART TOGGLE ------------------


    $('#cart-btn,body').on('click', (function(ev) {

        ev.stopPropagation()

        if (ev.target.id == "cart-icon") {
            if ($('#mini_cart').is(':visible')) {
                $('#mini_cart').fadeOut();
            } else {
                $('#mini_cart').fadeIn();
            }
        } else {
            $('#mini_cart').fadeOut();
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

        // $("#address-area").toggle(this.checked);
        $("#address-area").hide(this.checked);
    }));

    $('.new-address').on('click', (function() {

        // $("#address-area").toggle(this.checked);
        $("#address-area").show(this.checked);
    }));

});

// $("#radio_1").attr('checked', 'checked');