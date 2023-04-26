"use strict";

var isMobile = false, isTablet = false, isLaptop = false;
(function ($) {
  jQuery(document).ready(function () {
    
    $("#demo-side-nav a").click(function(){
      //console.log($(this).attr("href"));
      $("#demo-side-nav a").removeClass("demo-nav-active");
      $(this).addClass("demo-nav-active");
    });

    function detectDevice() {
      if (window.innerWidth <= 425) {
        isMobile = true;
        isTablet = false;
        isLaptop = false;
      } else if (window.innerWidth <= 768) {
        isMobile = false;
        isTablet = true;
        isLaptop = false;
      } else {
        isMobile = false;
        isTablet = false;
        isLaptop = true;
      }
    }
    detectDevice();

    // ======= Adjust height of the post cards =============
    function adjustPostCardsHeight() {
      if (!isMobile) { // no need to adjust height for mobile devices
        let postCardHolder = document.getElementById("post-card-holder");
        if (postCardHolder == null ){
          return
        }
        let el = postCardHolder.children;
        let maxHeight = 0;
        for (let i = 0; i < el.length; i++) {
          if (el[i].children[1].clientHeight > maxHeight) {
            maxHeight = el[i].children[1].clientHeight;
          }
        }
        for (let i = 0; i < el.length; i++) {
          el[i].children[1].setAttribute("style", "min-height: " + maxHeight + "px;")
        }
      }
    }
    adjustPostCardsHeight();
  });
})(jQuery);
