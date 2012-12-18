$(document).ready(function (){
	$("#nav-wrapper").height($("#navbar").outerHeight(true))
	var pos = $('#navbar').offset().top + 20;
	$('#navbar').affix({
    	offset: pos
	});
});
