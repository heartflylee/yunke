$(function() {
	//头像点击显示下拉
	$("#head-photo").click(function(event) {
		dropdown($("#head-drop"),event);
	});
	$("#help").click(function(event) {
		dropdown($("#help-drop"),event);
	});

	$(".dropdown").click(function(event) {
		event.stopPropagation();
	});
	
});


//头部搜索
function Hsearch(){
	console.log("头部搜索");
	return false;
}


function dropdown(obj, event) {
	if(obj.hasClass("active")) {
		obj.removeClass("active");
	} else {
		obj.addClass("active");
	}
	$(document).one("click", function() {
		$(".dropdown").removeClass("active");
	});
	event.stopPropagation();
}

