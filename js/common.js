//设置弹框高度
function layerHeight() {
//	var layerH = $(window).innerHeight() - $(".layer-head").innerHeight() - $(".layer-footer").innerHeight() - 5;
	var layerH = $(window).innerHeight() - 145;
	$(".layer-info").css("max-height", layerH);
}

//弹出框显示
function layerShow(id){
	$(id).addClass("active");
}
//关闭弹出框
function layerClose(id){
	$(id).removeClass("active");
}


//改变窗口大小
$(window).resize(function() {
	layerHeight();
});
$(function() {
	layerHeight();

	//多选框初始化
	$('.checkbox').on('ifCreated ifClicked ifChanged ifChecked ifUnchecked ifDisabled ifEnabled ifDestroyed', function(event) {}).iCheck({
		checkboxClass: 'icheckbox-warp',
		radioClass: 'iradio-warp',
		increaseArea: '20%'
	});
	
	
	//下拉
	$(".select-show").click(function(event) {
		var selectBox = $(this).parent(".index-select");
		if(selectBox.hasClass("active")) {
			selectBox.removeClass("active");
		} else {
			selectBox.addClass("active");
			$(document).one("click", function() {
				selectBox.removeClass("active");
			});
			event.stopPropagation();
		}
	});
	$(".index-select").click(function(event){
		event.stopPropagation();
	});
	
	
});