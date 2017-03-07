$(function() {
	//一级菜单的点击事件
	$(".nav-info").click(function() {
		if($(this).hasClass("active")) {
			$(this).removeClass("active");
		} else {
			$(".nav-info").removeClass("active");
			$(this).addClass("active");
		}
	});
	//二级菜单的点击事件
	$(".m-second").click(function() {
		if($(this).hasClass("active")) {
			$(this).removeClass("active");
			if($("body").hasClass("narrow")) {
				$(this).parents(".m-nav").removeClass("active");
			}

		} else {
			$(".m-second").removeClass("active");
			$(this).addClass("active");
			if($("body").hasClass("narrow")) {
				$(this).parents(".m-nav").addClass("active");
			}
		}
	});
	$(".menu-btn-box").click(function() {
		var bSide = $("body");
		if(bSide.hasClass("narrow")) {
			bSide.removeClass("narrow");
		} else {
			bSide.addClass("narrow");
		}
	});
})