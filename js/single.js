"use strict";

var isMobile = false, isTablet = false, isLaptop = false, isXl = false;
(function ($) {
  jQuery(document).ready(function () {
    let screenSize = window.innerWidth;
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

    // update child video card classes
    if (screenSize <= 767){
      $("#child-videos>div").removeAttr("class");
      $("#child-videos>div").attr("class", "col-12");
    }
    if (screenSize >= 768 && screenSize <= 1899){
      $("#child-videos>div").removeAttr("class");
      $("#child-videos>div").attr("class", "col-sm-6");
    }
    if (screenSize >= 1900){
      $("#child-videos>div").removeAttr("class");
      $("#child-videos>div").attr("class", "col-xl-4");
    }

    // =========== Add anchor to the headers ================
    function addAnchor(element) {
      element.innerHTML = `<a href="#${element.id}" class="header-anchor">${element.innerHTML}<sup><i class="fas fa-link"></i></sup></a>`;
    }

    var postContent = document.getElementById("post-content");
    if (postContent != null) {
      var headerTypes = ["h1", "h2", "h3", "h4", "h5", "h6"];
      for (var i = 0; i < headerTypes.length; i++) {
        var headers = postContent.querySelectorAll(headerTypes[i]);
        if (headers) {
          headers.forEach(addAnchor);
        }
      }
    }

    // =============== Make TOC Compatible wit Bootstrap Scroll Spy ========
    // add "navbar" class to the "nav" element
    
    let toc = document.getElementById("TableOfContents");
    
    if (typeof(toc) != 'undefined' && toc != null) {
      console.log("TableOfContents Exists");
      toc.classList.add("navbar");
      // add "nav-pills" class to the "ul" elements
      let elems = toc.getElementsByTagName("ul");
      for (let i = 0; i < elems.length; i++) {
        elems[i].classList.add("nav-pills");
      }

      // add "nav-item" class to the "li" elements
      elems = toc.getElementsByTagName("li");
      for (let i = 0; i < elems.length; i++) {
        elems[i].classList.add("nav-item");
        if (isMobile) {
          elems[i].setAttribute("onclick", "toggleTOC()");
        }
      }
      // add "nav-link" class to the "a" elements
      elems = toc.getElementsByTagName("a");
      for (let i = 0; i < elems.length; i++) {
        elems[i].classList.add("nav-link");
      }
    }
    else{
      console.log("TableOfContents Do Not Exists");
    }

  });
})(jQuery);
