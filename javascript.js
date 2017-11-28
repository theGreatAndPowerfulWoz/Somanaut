$(document).ready(function(){
	$("#white").show();
	$("#color").hide();

	$("#white").mouseover(function(){
		$("#color").show();
		$("#white").hide();
	});
	$("#white").mouseover(function(){
		$("#color").hide();
		$("#white").show();
	});
});