---
layout: none
---

String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};


    //Tự động add class active cho menu khi ở các trang khác nhau
    var path_name = location.pathname;
    
    var page = path_name.split("/")[1];
    switch(page) {
        case 'join':
            $('#join').addClass('active');
            break;
        case 'contact':
            $('#contact').addClass('active');
            break;
        case 'news':
            $('#news').addClass('active');
            break;
        case 'press':
            $('#press').addClass('active');
            break;
        default:
            $('#home').addClass('active');
            break;
    }

// Carousel
$(document).ready(function (){
	$('.carousel').carousel({
    interval: 8000
    });
})

// navbar affix
$(document).ready(function (){
	$("#nav-wrapper").height($("#navbar").outerHeight(true))
	var pos = $('#navbar').offset().top + 20;
	$('#navbar').affix({
    	offset: pos
	});
});

// Facebook comment
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Registration form ul
$(document).ready(function() {
	$("ul.ss-choices").addClass("unstyled");
});