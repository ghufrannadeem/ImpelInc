$(function(){


// jQuery('#nav-icon4, .header.header .mainMenu ul li a').click(function(){
jQuery('#nav-icon4, header.header ul#mainMenu li a').click(function(){
  jQuery('#nav-icon4').toggleClass('open');
  jQuery('.mainMenu').toggleClass('activeMenu');
  jQuery('body').toggleClass('fixed');
});


$(".arrowIcon").append("<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 476.213 476.213' style='enable-background:new 0 0 476.213 476.213;' xml:space='preserve'><polygon points='345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 '/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>");


	jQuery('.smoothClick, .smoothLink > a').click(function() {
	var dis = jQuery(this);
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = jQuery(this.hash);
	  target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
		$('html, body').animate({
		  scrollTop: target.offset().top-100
		}, 1000);
		return false;
	  }
	}
  });


$(window).scroll(function() {   
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
       // $(".backToTop").addClass("show");
        $("header.header").addClass("fixed");
    } else {
      //  $(".backToTop").removeClass("show");
        $("header.header").removeClass("fixed");
    }
});




$('.defaultBtn').on('touchend', function() {
    $(this).click();
});



}); //---Main Function Close