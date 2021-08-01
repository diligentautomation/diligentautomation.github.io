var DECENTTHEMES = DECENTTHEMES || {};

(function($) {

  /*!----------------------------------------------
  # This beautiful code written with heart
  # by Aminul Islam <aminul@decentthemes.com>
  # In Nawabganj, BD at the Decent Themes workstation.
  ---------------------------------------------*/

  // USE STRICT
  "use strict";

  DECENTTHEMES.initialize = {

    init: function() {
      DECENTTHEMES.initialize.general();
      DECENTTHEMES.initialize.revSlider();
      DECENTTHEMES.initialize.backgroundParallax();
      DECENTTHEMES.initialize.sectionBackground();
      DECENTTHEMES.initialize.sectionSwitch();
      DECENTTHEMES.initialize.magneficPopup();
      DECENTTHEMES.initialize.countup();
      DECENTTHEMES.initialize.portfolio();
      DECENTTHEMES.initialize.skills();
      DECENTTHEMES.initialize.tabs();
      DECENTTHEMES.initialize.swiperSlider();
    },

    /*=======================================================*/
    /*=           Collection of snippet and tweaks          =*/
    /*=======================================================*/

    general: function() {


      $('.panel-collapse').on('show.bs.collapse', function() {
        $(this).siblings('.panel-heading').addClass('active');
      });

      $('.panel-collapse').on('hide.bs.collapse', function() {
        $(this).siblings('.panel-heading').removeClass('active');
      });

      //Animated Icons

      var options = {
        duration: 250,
        type: 'oneByOne',
        animTimingFunction: Vivus.EASE
      };

      $('.ser-icon').each(function() {
        var svg = $(this).find('svg').attr('id');

        new Vivus(svg, options, onComplete);
      });

      function onComplete() {}
    },

    /*========================================*/
    /*=           Revolution Slider          =*/
    /*========================================*/
    revSlider: function() {
      $('#agency-slider').show().revolution({
        sliderType: "standard",
        sliderLayout: "fullscreen",
        dottedOverlay: "none",
        delay: 9000,
        navigation: {
          keyboardNavigation: "off",
          keyboard_direction: "horizontal",
          mouseScrollNavigation: "off",
          mouseScrollReverse: "default",
          onHoverStop: "off",
          touch: {
            touchenabled: "on",
            touchOnDesktop: "off",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false
          },
          arrows: {
            style: "uranus",
            enable: true,
            hide_onmobile: true,
            hide_under: 778,
            hide_onleave: false,
            tmp: '',
            left: {
              h_align: "left",
              v_align: "center",
              h_offset: 15,
              v_offset: 0
            },
            right: {
              h_align: "right",
              v_align: "center",
              h_offset: 15,
              v_offset: 0
            }
          },
          bullets: {
            enable: true,
            hide_onmobile: false,
            style: "bullet-bar",
            hide_onleave: false,
            direction: "horizontal",
            h_align: "center",
            v_align: "bottom",
            h_offset: 0,
            v_offset: 30,
            space: 5,
            tmp: ''
          }
        },
        responsiveLevels: [1240, 1024, 778, 480],
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: [1240, 1024, 778, 480],
        gridheight: [868, 768, 960, 720],
        lazyType: "none",
        parallax: {
          type: "scroll",
          origo: "slidercenter",
          speed: 2000,
          levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
        },
        shadow: 0,
        spinner: "off",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        fullScreenAutoWidth: "off",
        fullScreenAlignForce: "off",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "0px",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
          simplifyAll: "off",
          nextSlideOnWindowFocus: "off",
          disableFocusListener: false,
        }
      });
    },

    /*==========================================*/
    /*=           Backgroung Parallax          =*/
    /*==========================================*/

    backgroundParallax: function() {
      $('[data-parallax="image"]').each(function() {

        var actualHeight = $(this).position().top;
        var speed = $(this).data('parallax-speed');
        var reSize = actualHeight - $(window).scrollTop();
        var makeParallax = -(reSize / 2);
        var posValue = makeParallax + "px";

        $(this).css({
          backgroundPosition: '50% ' + posValue,
        });
      });
    },


    /*===============================*/
    /*=           Bg Image          =*/
    /*===============================*/

    sectionBackground: function() {

      $('[data-bg-image]').each(function() {
        var img = $(this).data('bg-image');
        $(this).css({
          backgroundImage: 'url(' + img + ')',
        });
      });
    },

    /*=====================================*/
    /*=           Section Switch          =*/
    /*=====================================*/

    sectionSwitch: function() {
      $('[data-type="section-switch"], .navbar-nav li a, .side-menu li a').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          if (target.length > 0) {

            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    },

    /*=====================================*/
    /*=           Magnefic Popup          =*/
    /*=====================================*/
    magneficPopup: function() {
      $('.expander').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true
        }
      });
      $('.video-play-icon').magnificPopup({
        type: 'iframe'
      });
      $.extend(true, $.magnificPopup.defaults, {
        iframe: {
          patterns: {
            youtube: {
              index: 'youtube.com/',
              id: 'v=',
              src: 'http://www.youtube.com/embed/%id%?autoplay=1'
            }
          }
        }
      });
    },

    /*================================*/
    /*=           Portfolio          =*/
    /*================================*/
    portfolio: function() {

      var container = $('#projects-grid');


      // function getNumbColumns() {
      //   var winWidth = $(window).width(),
      //     columnNumb = 1;


      //   if (winWidth > 1500) {
      //     columnNumb = 4;
      //   } else if (winWidth > 1200) {
      //     columnNumb = 3;
      //   } else if (winWidth > 900) {
      //     columnNumb = 2;
      //   } else if (winWidth > 600) {
      //     columnNumb = 2;
      //   } else if (winWidth > 300) {
      //     columnNumb = 1;
      //   }

      //   return columnNumb;
      // }


      function setColumnWidth() {
        var winWidth = $(window).width(),
          columnNumb = getNumbColumns(),
          postWidth = Math.floor(winWidth / columnNumb);

      }

      $('#portfolio-filter #filter a').click(function() {
        var selector = $(this).attr('data-filter');

        $(this).parent().parent().find('a').removeClass('current');
        $(this).addClass('current');

        container.isotope({
          filter: selector
        });

        setTimeout(function() {
          reArrangeProjects();
        }, 300);


        return false;
      });

      function reArrangeProjects() {
        setColumnWidth();
        container.isotope('reLayout');
      }


      container.imagesLoaded(function() {
        setColumnWidth();


        container.isotope({
          itemSelector: '.portfolio-item',
          layoutMode: 'masonry',
          resizable: false
        });
      });





      $(window).on('debouncedresize', function() {
        reArrangeProjects();

      });
    },

    /*==============================*/
    /*=           Countup          =*/
    /*==============================*/
    countup: function() {
      var options = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
      };

      var counteEl = $('[data-counter]');

      if (counteEl) {
        counteEl.each(function() {
          var val = $(this).data('counter');

          var countup = new CountUp(this, 0, val, 0, 2.5, options);
          $(this).appear(function() {
            countup.start();
          }, {
            accX: 0,
            accY: 0
          })
        });
      }
    },

    /*=============================*/
    /*=           Skills          =*/
    /*=============================*/
    skills: function() {
      $('.skill-bar li').each(function() {

        $(this).appear(function() {
          $(this).css({
            opacity: 1,
            left: "0px"
          });
          var b = $(this).find(".progress-bar").attr("data-width");
          $(this).find(".progress-bar").css({
            width: b + "%"
          });
        });

      });
    },

    /*===========================*/
    /*=           Tabs          =*/
    /*===========================*/
    tabs: function() {

      $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

      $('.tab ul.tabs li a').click(function(g) {
        var tab = $(this).closest('.tab'),
          index = $(this).closest('li').index();

        tab.find('ul.tabs > li').removeClass('current');
        $(this).closest('li').addClass('current');

        tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
        tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

        g.preventDefault();
      });
    },


    /*====================================*/
    /*=           Swiper Slider          =*/
    /*====================================*/
    swiperSlider: function() {
      $('[data-carousel="swiper"]').each(function() {

        var $this = $(this),
          $container = $this.find('[data-swiper="container"]'),
          $asControl = $this.find('[data-swiper="ascontrol"]');

        // Configuration
        var conf = function(element) {
          var obj = {
            slidesPerView: element.data('items'),
            centeredSlides: element.data('center'),
            loop: element.data('loop'),
            speed: element.data('speed'),
            initialSlide: element.data('initial'),
            effect: element.data('effect'),
            spaceBetween: element.data('space'),
            autoplay: element.data('autoplay'),
            autoHeight: element.data('auto-height'),
            direction: element.data('direction'),
            paginationClickable: true,
            breakpoints: element.data('breakpoints'),
            slideToClickedSlide: element.data('click-to-slide'),
            loopedSlides: element.data('looped'),
            fade: {
              crossFade: element.data('crossfade')
            },
            paginationBulletRender: function(index, className) {
              return '<li class="' + className + '"><span class="count">0' + (index + 1) + '</span></li>';
            }
          };
          return obj;
        }

        // Primary Configuration
        var $primaryConf = conf($container);
        // Pagination and Nav Settings
        $primaryConf.prevButton = $this.find('[data-swiper="prev"]');
        $primaryConf.nextButton = $this.find('[data-swiper="next"]');
        $primaryConf.pagination = $this.find('[data-swiper="pagination"]');

        // As Control Configuration\
        var $ctrlConf = conf($asControl);

        // Animate Function
        function animateSwiper(selector, slider) {
          var makeAnimated = function animated() {
            selector.find('.swiper-slide-active [data-animate]').each(function() {
              var anim = $(this).data('animate'),
                delay = $(this).data('delay'),
                duration = $(this).data('duration');

              $(this).addClass(anim + ' animated')
                .css({
                  webkitAnimationDelay: delay,
                  animationDelay: delay,
                  webkitAnimationDuration: duration,
                  animationDuration: duration
                })
                .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                  $(this).removeClass(anim + ' animated');
                });
            });
          };
          makeAnimated();
          // Make animated when slide change
          slider.on('SlideChangeStart', function() {
            selector.find('[data-animate]').each(function() {
              var anim = $(this).data('animate');
              $(this).removeClass(anim + ' animated');
            });
          });
          slider.on('SlideChangeEnd', makeAnimated);
        };

        if ($container.length) {
          // Run Swiper
          var $swiper = new Swiper($container, $primaryConf);
          // Make Animated Layer
          animateSwiper($this, $swiper);

          if ($asControl.length) {
            var $control = new Swiper($asControl, $ctrlConf);
            $swiper.params.control = $control;
            $control.params.control = $swiper;
          }

        } else {
          console.log('Swiper container is not defined!');
        };

      });
    }
  };

  DECENTTHEMES.documentOnReady = {
    init: function() {
      DECENTTHEMES.initialize.init();

    },

  };

  DECENTTHEMES.documentOnLoad = {
    init: function() {
      /* Loader Init */
      $("#loader").delay(1e3).addClass("loaded");

    },

  };

  DECENTTHEMES.documentOnResize = {
    init: function() {

    },

  };

  DECENTTHEMES.documentOnScroll = {
    init: function() {
      // DECENTTHEMES.initialize.init();
      DECENTTHEMES.initialize.backgroundParallax();

      /* Sticky Menu */
      if ($(this).scrollTop() > 0) {
        $('#header').addClass("navbar-small")
      } else {
        $('#header').removeClass("navbar-small")
      }


      if ($(window).scrollTop() > 300) {
        $('.return-to-top').addClass('back-top');
      } else {
        $('.return-to-top').removeClass('back-top');
      }

    },

  };

  // Initialize Functions
  $(document).ready(DECENTTHEMES.documentOnReady.init);
  $(window).on('load', DECENTTHEMES.documentOnLoad.init);
  $(window).on('resize', DECENTTHEMES.documentOnResize.init);
  $(window).on('scroll', DECENTTHEMES.documentOnScroll.init);

})(jQuery);