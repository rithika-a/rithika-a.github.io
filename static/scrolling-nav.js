// https://bootstrapious.com/p/transparent-navbar

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });

})(jQuery); // End of use strict


