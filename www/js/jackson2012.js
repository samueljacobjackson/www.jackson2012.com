(function($) {
  "use strict";

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              $('html, body').animate({
                  scrollTop: (target.offset().top - 48)
              }, 1000, "easeInOutExpo");
              return false;
          }
      }
  });

  $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
  });

  $('body').scrollspy({
      target: '#mainNav',
      offset: 54
  });

  var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
          $("#mainNav").addClass("navbar-shrink");
          $('.btn-top').css('display','block');
      } else {
          $("#mainNav").removeClass("navbar-shrink");
          $('.btn-top').css('display','none');
      }
  };
  navbarCollapse();
  $(window).scroll(navbarCollapse);

})(jQuery);

let modalId = $('#gallery');

$(document)
  .ready(function () {

    loadGallery(true, 'a.thumbnail');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current) {
      $('#previous-print, #next-print')
        .show();
      if (counter_max === counter_current) {
        $('#next-print')
          .hide();
      } else if (counter_current === 1) {
        $('#previous-print')
          .hide();
      }
    }

    function loadGallery(setIDs, setClickAttr) {
      let current_image,
        selector,
        counter = 0;

      $('#next-print, #previous-print')
        .click(function () {
          if ($(this)
            .attr('id') === 'previous-print') {
            current_image--;
          } else {
            current_image++;
          }

          selector = $('[data-image-id="' + current_image + '"]');
          updateGallery(selector);
        });

      function updateGallery(selector) {
        let $sel = selector;
        current_image = $sel.data('image-id');
        $('#gallery-title')
          .text($sel.data('title'));
        $('#gallery-image')
          .attr('src', $sel.data('image'));
        disableButtons(counter, $sel.data('image-id'));
      }

      if (setIDs == true) {
        $('[data-image-id]')
          .each(function () {
            counter++;
            $(this)
              .attr('data-image-id', counter);
          });
      }
      $(setClickAttr)
        .on('click', function () {
          updateGallery($(this));
        });
    }
  });

// build key actions
$(document)
  .keydown(function (e) {
    switch (e.which) {
      case 37: // left
        if ((modalId.data('bs.modal') || {})._isShown && $('#previous-print').is(":visible")) {
          $('#previous-print')
            .click();
        }
        break;

      case 39: // right
        if ((modalId.data('bs.modal') || {})._isShown && $('#next-print').is(":visible")) {
          $('#next-print')
            .click();
        }
        break;

      default:
        return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });