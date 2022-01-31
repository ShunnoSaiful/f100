if(jQuery('#testimonials').length > 0) {
var a = 0;
jQuery(window).scroll(function() {
  var oTop = jQuery('#testimonials').offset().top - window.innerHeight;
  if (a == 0 && jQuery(window).scrollTop() > oTop) {
    jQuery('.count-number').each(function() {
      var $this = jQuery(this),
        countTo = $this.attr('data-count');
      jQuery({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 7000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });
    });
    a = 1;
  }
});
}
jQuery(window).scroll(function (event) {
    var y = jQuery(this).scrollTop();
    if ( jQuery(this).scrollTop() > 0 ) {
        jQuery('#main-nav').addClass('fixed');
    } 
    else {
        jQuery('#main-nav').removeClass('fixed');
    }

});
jQuery(window).load(function() {
    
    // jQuery('#secondary .menu-courses-container').hide().before('<a href="#" id="open-menu-courses-container" class="button">Open &darr;</a>');
    // jQuery('#secondary .menu-courses-container').append('<a href="#close-menu-courses-container" id="close-menu-courses-container" class="button">Close &uarr;</a>');
    
    // jQuery('a#open-menu-courses-container').click(function() {
    // 	jQuery('#secondary .menu-courses-container').slideDown(1000);
    // 	return false;
    // });
    
    // jQuery('a#close-menu-courses-container').click(function() {
    // 	jQuery('#secondary .menu-courses-container').slideUp(1000);
    // 	return false;
    // });
    
    
    // if(jQuery(window).width() <768){
    //     // var windowHeight = jQuery(window).height();
    //     // var windowHeight = 600
    //     if(jQuery(window).width() > 480){
    //         var windowHeight= 300;
    //     }else if(jQuery(window).width() > 380){
    //         windowHeight= 250;
    //     }else{
    //         windowHeight= 200;
    //     }
    // }
    
    // jQuery("#metaslider_container_291").css({'height': windowHeight+"px" });
    // jQuery("#metaslider_container_291 #metaslider_291").css({'height': windowHeight+"px" });
    // jQuery("#metaslider_container_291 #metaslider_291.slides").css({'height': windowHeight+"px" });
    // jQuery("#metaslider_container_291 #metaslider_291 .slides li").css({'height': windowHeight+"px" });
    // jQuery("#metaslider_container_291 #metaslider_291 .slides li img").css({'height': windowHeight+"px", 'width': '100%','object-fit': 'cover','align-items': 'center' });
    
    jQuery('.navbar-collapse').find('a').on('focus blur', function() {
        jQuery(this).parents().toggleClass('link-focus');
    });
    
    jQuery('#homePromo').owlCarousel({
        loop: true,
        margin: 10,
        lazyLoad: true,
        nav: true,
        navContainer: '#customNav',
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        slideBy: 2,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 2
            },
            480: {
                items: 2
            },
            767: {
                items: 3
            },
            1000: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });
    
    jQuery('#homeTestimonial').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        lazyLoad: true,
        // navContainer: '#customNav',
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            767: {
                items: 1
            },
            1000: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });
	
    jQuery(".owl_wrapper .arrowRight").click(function() {
        owl.trigger('owl.next');
    });
    jQuery(".owl_wrapper .arrowLeft").click(function() {
        owl.trigger('owl.prev');
    });
    
    // new WOW().init();

    // jQuery("a.popuplink").fancybox({
    //     fitToView: true,
    //     autoSize: true,
    //     closeBtn: true
    // });
    
    // jQuery('.table').stacktable();
    
    jQuery("a[rel^='prettyphoto']").prettyPhoto({
        deeplinking: false,
        showTitle: true,
        autoplay: true,
        theme: 'light_square',/* light_rounded / dark_rounded / light_square / dark_square / facebook */
        social_tools: ''
    });

    jQuery('a.scrolllink[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                jQuery('html, body').animate({
                    scrollTop: target.offset().top -100
                }, 1000);
                return false;
            }
        }
    });
    jQuery(".menu-toggle").on('click', function() {
        jQuery(this).toggleClass("on");
        jQuery('#float-menu').toggleClass("on");
        jQuery('#float-menu.on').css('min-height', jQuery('.metaslider').height());
        jQuery("nav ul").toggleClass('hidden');
    });
});
var callback_mobile_dropdown = function() {
    if (jQuery('.wr-megamenu-container').length <= 0 && jQuery('.mega-menu-wrap').length <= 0) {
        var navLi = jQuery('#site-navigation li');
        navLi.each(function() {
            if (jQuery(this).find('ul').length > 0 && !jQuery(this).hasClass('has_children')) {
                jQuery(this).addClass('has_children');
                jQuery(this).find('a').first().after('<p class="dropdownmenu"></p>');
            }
        });
        jQuery('.dropdownmenu').click(function() {
            if (jQuery(this).parent('li').hasClass('this-open')) {
                jQuery(this).parent('li').removeClass('this-open');
            } else {
                jQuery(this).parent('li').addClass('this-open');
            }
        });
        navLi.find('a').click(function() {
            jQuery('.navbar-toggle').addClass('collapsed');
            jQuery('#site-navigation .collapse').removeClass('in');
        });
    }
};
jQuery(document).ready(callback_mobile_dropdown);
jQuery(document).ready(function($) {
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cd-top');
    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });
    $back_to_top.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });
});
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'))
    document.querySelector('head').appendChild(msViewportStyle)
}

jQuery(document).ready(function() {
    jQuery('#site-navigation a[href*="#"]:not([href="#"]), header.header a[href*="#"]:not([href="#"])').bind('click', function() {
        var headerHeight;
        var hash = this.hash;
        var idName = hash.substring(1);
        var alink = this;
        if (jQuery('section [id*=' + idName + ']').length > 0 && jQuery(window).width() >= 751) {
            jQuery('#site-navigation .current').removeClass('current');
            jQuery(alink).parent('li').addClass('current');
        } else {
            jQuery('#site-navigation .current').removeClass('current');
        }
        if (jQuery(window).width() >= 751) {
            headerHeight = jQuery('#menu-wrapper').height();
        } else {
            headerHeight = 300;
        }
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                jQuery('html,body').animate({
                    scrollTop: target.offset().top - headerHeight
                }, 800, function() {
                    // window.location.hash = hash;
                });
                return false;
            }
        }
    });
});
jQuery(document).ready(function() {
    var headerHeight;
    jQuery('#site-navigation .current').removeClass('current');
    jQuery('#site-navigation a[href$="' + window.location.hash + '"]').parent('li').addClass('current');
    if (jQuery(window).width() >= 751) {
        headerHeight = jQuery('#menu-wrapper').height();
    } else {
        headerHeight = 0;
    }
    if (location.pathname.replace(/^\//, '') == window.location.pathname.replace(/^\//, '') && location.hostname == window.location.hostname) {
        var target = jQuery(window.location.hash);
        if (target.length) {
            jQuery('html,body').animate({
                scrollTop: target.offset().top
            }, 1200);
            return false;
        }
    }
});

function zerif_lite_scrolled() {
    if (jQuery(window).width() >= 751) {
        var zerif_scrollTop = jQuery(window).scrollTop();
        var headerHeight = jQuery('#menu-wrapper').outerHeight();
        var isInOneSection = 'no';
        jQuery("section, header").each(function() {
            var thisID = '#' + jQuery(this).attr('id');
            var zerif_offset = jQuery(this).offset().top;
            var thisHeight = jQuery(this).outerHeight();
            var thisBegin = zerif_offset - headerHeight;
            var thisEnd = zerif_offset + thisHeight - headerHeight;
            if (zerif_scrollTop >= thisBegin && zerif_scrollTop <= thisEnd) {
                isInOneSection = 'yes';
                jQuery('#site-navigation .current').removeClass('current');
                jQuery('#site-navigation a[href$="' + thisID + '"]').parent('li').addClass('current');
                return false;
            }
            if (isInOneSection == 'no') {
                jQuery('#site-navigation .current').removeClass('current');
            }
        });
    }
}
jQuery(window).on('scroll', zerif_lite_scrolled);
jQuery('.navbar-toggle').on('click', function() {
    jQuery(this).toggleClass('active');
});
jQuery(window).load(function() {
    setminHeightHeader();
});
jQuery(window).resize(function() {
    setminHeightHeader();
});

function setminHeightHeader() {
    var minHeight = parseInt(jQuery('#menu-wrapper').height());
    jQuery('#menu-wrapper').css('min-height', 'auto');
}
jQuery(window).load(fixFooterBottom);
jQuery(window).resize(fixFooterBottom);

function fixFooterBottom() {
    var header = jQuery('header.header');
    var footer = jQuery('footer#footer');
    var content = jQuery('.site-content > .container');
    content.css('min-height', '1px');
    var headerHeight = header.outerHeight();
    var footerHeight = footer.outerHeight();
    var contentHeight = content.outerHeight();
    var windowHeight = jQuery(window).height();
    var totalHeight = headerHeight + footerHeight + contentHeight;
    if (totalHeight < windowHeight) {
        content.css('min-height', windowHeight - headerHeight - footerHeight);
    } else {
        content.css('min-height', '1px');
    }
}
var callback_menu_align = function() {
    var headerWrap = jQuery('.header');
    var navWrap = jQuery('#site-navigation');
    var logoWrap = jQuery('.responsive-logo');
    var containerWrap = jQuery('.container');
    var classToAdd = 'menu-align-center';
    if (headerWrap.hasClass(classToAdd)) {
        headerWrap.removeClass(classToAdd);
    }
    var logoWidth = logoWrap.outerWidth();
    var menuWidth = navWrap.outerWidth();
    var containerWidth = containerWrap.width();
    if (menuWidth + logoWidth > containerWidth) {
        headerWrap.addClass(classToAdd);
    } else {
        if (headerWrap.hasClass(classToAdd)) {
            headerWrap.removeClass(classToAdd);
        }
    }
}
jQuery(window).load(callback_menu_align);
jQuery(window).resize(callback_menu_align);
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

var initHeight = 0,
    initWidth = 0;
var initViewMode, onlyInit = true;
jQuery(document).ready(function() {
    initViewMode = type_view();
    mobile_bg_fix();
});
jQuery(window).resize(mobile_bg_fix);

function mobile_bg_fix() {
    if (isMobile.any() && jQuery('body.custom-background')) {
        var viewMode = type_view();
        if (initViewMode != viewMode || onlyInit == true) {
            jQuery('.mobile-bg-fix-img').css({
                'width': window.innerWidth,
                'height': window.innerHeight + 100
            });
            initViewMode = viewMode;
            if (onlyInit == true) {
                onlyInit = false;
                bodyClass = jQuery('body.custom-background');
                imgURL = bodyClass.css('background-image');
                imgSize = bodyClass.css('background-size');
                imgPosition = bodyClass.css('background-position');
                imgRepeat = bodyClass.css('background-repeat');
                jQuery('#mobilebgfix').addClass('mobile-bg-fix-wrap').find('.mobile-bg-fix-img').css({
                    'background-size': imgSize,
                    'background-position': imgPosition,
                    'background-repeat': imgRepeat,
                    'background-image': imgURL
                });
            }
        }
    }
}

function type_view() {
    var initHeight = window.innerHeight;
    var initWidth = window.innerWidth;
    if (initWidth <= initHeight) {
        return 'portrait';
    }
    return 'landscape';
}
jQuery(document).ready(function() {
    jQuery('#site-navigation').zerifsubmenuorientation();
});;
(function($, window) {
    var defaults = {
        allItems: false,
    };

    function ZerifSubmenuOrientation(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this.defaults = defaults;
        this.init();
    }
    ZerifSubmenuOrientation.prototype.init = function() {
        var self = this,
            $container = $(this.element),
            $select_options = $(this.element).children();
        var resize_finish;
        if (self.options.allItems !== true) {
            $(window).resize(function() {
                clearTimeout(resize_finish);
                resize_finish = setTimeout(function() {
                    self.make_magic($container, $select_options);
                }, 11);
            });
        }
        self.make_magic($container, $select_options);
        if (self.options.allItems !== true) {
            setTimeout(function() {
                $(window).resize();
            }, 500);
        }
    };
    ZerifSubmenuOrientation.prototype.make_magic = function(container, select_options) {
        var self = this,
            $container = $(container),
            $select_options = $(select_options);
        var itemWrap;
        if ($container[0].tagName == 'UL') {
            itemWrap = $container[0];
        } else {
            itemWrap = $container.find('ul')[0];
        }
        var windowsWidth = window.innerWidth;
        if (typeof itemWrap != 'undefined') {
            var itemId = '#' + itemWrap.id;
            $(itemId).children('li').each(function() {
                if (this.id == '') {
                    return;
                }
                var max_deep = self.max_deep('#' + this.id);
                var offsetLeft = $("#" + this.id).offset().left;
                var submenuWidthItem = $("#" + this.id).find('ul').width();
                var submenuTotalWidth = max_deep * submenuWidthItem;
                if (submenuTotalWidth > 0 && windowsWidth < offsetLeft + submenuTotalWidth) {
                    if (self.options.allItems === true) {
                        $('#' + itemWrap.id).addClass('menu-item-open-left-all');
                        return false;
                    }
                    $('#' + this.id).addClass('menu-item-open-left');
                } else if ($('#' + this.id).hasClass('menu-item-open-left')) {
                    $('#' + this.id).removeClass('menu-item-open-left');
                }
            });
        }
    };
    ZerifSubmenuOrientation.prototype.max_deep = function(item) {
        var maxDepth = -1,
            currentDepth = -1;
        $(item + " li:not(:has(ul))").each(function() {
            currentDepth = $(this).parents("ul").length;
            if (currentDepth > maxDepth) {
                maxDepth = currentDepth;
            }
        });
        return maxDepth - 1;
    }
    $.fn.zerifsubmenuorientation = function(options) {
        return this.each(function() {
            var value = '';
            if (!$.data(this, value)) {
                $.data(this, value, new ZerifSubmenuOrientation(this, options));
            }
        });
    }
})(jQuery, window);