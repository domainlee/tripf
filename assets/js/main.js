;(function () {
    'use strict';

    var isMobile = function () {
        let isMobile = false;
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
            isMobile = true;
        }
        return isMobile;
    }

    var loading = function () {
        $(window).on("load", function () {
            $('.loading').delay(666).fadeOut('slow');
            $('body').delay(666);
            animation();
        });
    }

    var masonry = function () {
        var $ = require('jquery');
        var jQueryBridget = require('jquery-bridget');
        var Isotope = require('isotope-layout');
        jQueryBridget( 'isotope', Isotope, $ );

        var $grid = $('.grid');
        $grid.isotope({
            itemSelector: '.gallery__item',
            layoutMode: 'masonry'
        });

        $('.filter-button-group').on( 'click', 'button', function() {
            var button = $('.filter-button-group button');
            button.removeClass('active');
            $(this).addClass('active');

            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        var testimonials__list = $('.testimonials__list');
        testimonials__list.isotope({
            itemSelector: '.testimonials__item',
            layoutMode: 'masonry'
        });
    }

    var loadingMobile = function () {
        $('.loading').css('display', 'none');
        animation();
    }

    var slider = function () {
        var item_image = $('.hero__images figure');
        if(item_image.length){
            var images = item_image.attr('data-images').split(",");
            var index = 0;
            var time = 5000;
            var updateImage = function() {
                if (index >= images.length) {
                    index = 0;
                }
                item_image.attr('style', 'background-image: url('+images[index]+')');
                index++;
            }
            updateImage();
            setInterval(updateImage, time);
        }
    }

    var nav = function () {
        var button_nav = $('.header__button-menu');
        button_nav.click(function (e) {
            $('body').toggleClass('nav-open-js');
            $(this).toggleClass('active')
        });

        $('.header__button--close').click(function () {
            $('body').removeClass('nav-open-js');
        });

        $(window).scroll(function() {
            var scrollTop = $('html').scrollTop();
            if(scrollTop >= 70) {
                $('body').addClass('head__fix');
            } else {
                $('body').removeClass('head__fix');
            }
            if(scrollTop >= 600) {
                $('body').addClass('head__show');
            } else {
                $('body').removeClass('head__show');
            }
        });

        $('.header__nav--mobile > ul > li a').each(function(){
            var t = $(this);
            var checkElement = t.next();
            if(checkElement.is('ul')) {
                t.after('<span class="more">+</span>');
                t.next().click(function(e){
                    e.preventDefault();
                    if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
                        checkElement.slideUp('normal');
                    }
                    if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
                        checkElement.slideDown('normal');
                    }
                    $(this).toggleClass('active');
                });
            }

        });

    }

    var lazy = function () {
        if($('.scroll').length) {
            $('.lazy').Lazy({
                effect: "fadeIn",
                effectTime: 500,
                appendScroll: $('.scroll')
            });
        } else {
            $('.lazy').Lazy({
                effect: "fadeIn",
                effectTime: 500,
            });
        }
    };

    var owlCarousel = function() {
        var client_slider = $('.resort-surprises__js');
        var client_slider_thumbnail = $('.resort-surprises__js--thumb');
        var syncedSecondary = true;
        var slidesPerPage = 4;

        client_slider.owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            nav: false,
            lazyLoad: true,
            autoplay: true,
            items: 1,
            animateOut: 'fadeOut',
            navText : ["<i class='icofont-caret-left'></i>","<i class='icofont-caret-right'></i>"],
            responsive: {
                0: {
                    nav: false,
                },
                480: {
                    nav: false,
                },
                768: {
                    nav: false,
                }
            }
        }).on('changed.owl.carousel', syncPosition);

        client_slider_thumbnail.on('initialized.owl.carousel', function() {
            client_slider_thumbnail.find(".owl-item").eq(0).addClass("current");
        }).owlCarousel({
            items: slidesPerPage,
            dots: true,
            nav: false,
            lazyLoad: true,
            smartSpeed: 200,
            slideSpeed: 500,
            autoWidth: true,
            slideBy: slidesPerPage,
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

        function syncPosition(el) {
            var count = el.item.count - 1;
            var current = Math.round(el.item.index - (el.item.count / 2) - .5);
            if (current < 0) {
                current = count;
            }
            if (current > count) {
                current = 0;
            }
            client_slider_thumbnail.find(".owl-item").removeClass("current").eq(current).addClass("current");
            var onscreen = client_slider_thumbnail.find('.owl-item.active').length - 1;
            var start = client_slider_thumbnail.find('.owl-item.active').first().index();
            var end = client_slider_thumbnail.find('.owl-item.active').last().index();
            if (current > end) {
                client_slider_thumbnail.data('owl.carousel').to(current, 100, true);
            }
            if (current < start) {
                client_slider_thumbnail.data('owl.carousel').to(current - onscreen, 100, true);
            }
        }

        function syncPosition2(el) {
            if (syncedSecondary) {
                var number = el.item.index;
                client_slider.data('owl.carousel').to(number, 100, true);
            }
        }

        client_slider_thumbnail.on("click", ".owl-item", function(e) {
            e.preventDefault();
            var number = $(this).index();
            client_slider.data('owl.carousel').to(number, 300, true);
        });

        $('.top-destinations__js').owlCarousel({
            loop: true,
            margin: 20,
            dots: false,
            nav: false,
            lazyLoad: true,
            autoplay: true,
            items: 1,
            navText : ["<i class='icofont-rounded-left'></i>","<i class='icofont-rounded-right'></i>"],
            responsive: {
                480: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                992: {
                    items: 4,
                    margin: 30,
                    nav: true,
                }
            }
        });

        $('.top-destinations-five__js').owlCarousel({
            loop: true,
            margin: 20,
            dots: false,
            nav: false,
            lazyLoad: true,
            autoplay: true,
            items: 1,
            navText : ["<i class='icofont-rounded-left'></i>","<i class='icofont-rounded-right'></i>"],
            responsive: {
                480: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                992: {
                    items: 4,
                    margin: 30,
                    nav: true,
                }
            }
        });

        $('.guides__js').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            lazyLoad: true,
            autoplay: true,
            items: 1,
            navText : ["<i class='icofont-rounded-left'></i>","<i class='icofont-rounded-right'></i>"],
            responsive: {
                0: {
                    nav: false,
                },
                480: {
                    nav: false,
                    items: 2,
                },
                768: {
                    nav: true,
                    items: 3,
                },
                992: {
                    items: 4,
                    margin: 30,
                    nav: true,
                }
            }
        });

        $('.tour-gallery__js').owlCarousel({
            loop: true,
            autoWidth: true,
            margin: 5,
            dots: false,
            nav: true,
            lazyLoad: true,
            autoplay: true,
            items: 4,
            navText : ["<i class='icofont-rounded-left'></i>","<i class='icofont-rounded-right'></i>"],
            responsive: {
                0: {
                    nav: false,
                },
                480: {
                    nav: false,
                },
                768: {
                    nav: true,
                }
            }
        });

    };

    var animation = function () {
        let viewPorts = $('*[data-viewport]');
        viewPorts.each(function() {
            let that = $(this);
            if(that.attr('data-viewport') != '') {
                that.addClass(that.attr('data-viewport'));
                if(isInViewport(that)) {
                    var time = 200;
                    if(isMobile() || that.attr('data-delay-mobile')){
                        time = that.attr('data-delay-mobile');
                    } else if(that.attr('data-delay')) {
                        time = that.attr('data-delay');
                    }
                    setInterval(function(){
                        that.addClass('is-on');
                    }, time);
                }
            }
        });
    }

    var isInViewport = function (e) {
        let elementTop = e.offset().top + 50;
        let elementBottom = elementTop + e.outerHeight();
        let viewportTop = $(window).scrollTop();
        let viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    }

    var scrollTo = function () {
        if($('.home').length) {
            return new bootstrap.ScrollSpy(document.body,{
                target: ".header__menu",
                offset: 150
            });
        }
        if($('.home-brc').length) {
            return new bootstrap.ScrollSpy($('.scroll'),{
                target: ".header__menu",
                offset: 150
            });
        }
    }

    var popup = function() {
        $('.button-image').magnificPopup({
            type: 'image',
            gallery: {
                enabled:true
            }
        });
        $('.button-iframe').magnificPopup({
            type: 'iframe',
        });
    }

    var form = function () {
        $('.contact__form').validate({
            submitHandler: function (form) {
                $.ajax({
                    url: "assets/php/contact.php",
                    type: "POST",
                    data: $(form).serialize(),
                    cache: false,
                    processData: false,
                    success: function(data) {
                        const result = JSON.parse(data);
                        if(result.code == 1) {
                            alert('We have received your message, thank you for your message.');
                            location.reload();
                        } else if(result.code == 0) {
                            alert('Form submit data invalid')
                        }
                    }
                });
                return false;
            },
            rules: {
                title: "required",
                name: "required",
                email: {required : true, email: true},
                message: "required",
            },
            messages: {
                title: "Please specify title",
                name: "Please specify your name",
                email: "Please specify your email",
                message: "Please enter message",
            }
        });
    }

    var form_search = function () {
        var button = $('.button-form-extra');
        button.each(function () {
            var b = $(this);
            var c = b.closest('.destinations__form--item, .tour-detail__right--item');
            b.click(function () {
                c.toggleClass('active');
            });
            $("html").click(function(e) {
                if ($(e.target).closest('.form-extra').length == 0 && $(e.target).closest('.button-form-extra').length == 0) {
                    c.removeClass('active');
                }
            });
        });

        var passenger = $('.form-extra__passenger--item');
        passenger.each(function () {
            var t = $(this);
            var number = t.find('.form-extra__passenger--number');
            var add = t.find('.add');
            var minus = t.find('.minus');
            var n = 0;
            add.click(function () {
                number.val(++n);
            });
            minus.click(function () {
                if (n >= 1) {
                    number.val(--n);
                }
            });
        });
    }

    var accordion = function () {
        if ($('.accordion--js').length) {
            var accordions = $('.accordion--js');
            accordions.each(function () {
                var accordion_item = $(this).data('grp-name');
                var t = $(this);
                var accordion = t.find('.accrodion');
                t.addClass(accordion_item);
                t.find('.accrodion .accrodion-content').hide();
                t.find('.accrodion.active').find('.accrodion-content').show();
                accordion.each(function() {
                    $(this).find('.accrodion-title').on('click', function () {
                        if ($(this).parent().hasClass('active') === false ) {
                            $('.accordion--js.'+accordion_item).find('.accrodion').removeClass('active');
                            $('.accordion--js.'+accordion_item).find('.accrodion').find('.accrodion-content').slideUp();
                            $(this).parent().addClass('active');
                            $(this).parent().find('.accrodion-content').slideDown();
                        };
                    });
                });
            });

        };
    }

    var back_to_top = function () {
        $(document).on('click', '.back-to-top', function() {
            $("html,body").animate({
                scrollTop: 0
            }, 700);
        });
    }

    var sidebarScroll = function() {
        $('.sidebar-fixed').theiaStickySidebar({
            additionalMarginTop: 75
        });
    }

    $(document).ready(function() {
        window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
        if(!isMobile()) {
            loading();
        } else {
            loadingMobile();
        }

        masonry();
        slider();
        nav();
        lazy();
        owlCarousel();
        scrollTo();
        popup();
        form();
        form_search();
        accordion();
        sidebarScroll();
        back_to_top();

        $(document).on( 'scroll', function(){
            animation();
            var scroll_top = $('.back-to-top');
            if ($(window).scrollTop() > 200) {
                scroll_top.fadeIn(10);
            } else {
                scroll_top.fadeOut(10);
            }
        });

    });
}());