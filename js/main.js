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