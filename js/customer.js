//显示客户详情
function customerShow() {
	$(".layer-detail-warp").addClass("active");
}
$(function() {
	$(".layer-detail-warp").click(function(event) {
		$(this).removeClass("active");
	});
	$(".layer-detail").click(function(event) {
		event.stopPropagation();
	})
});

//自定义表头
function CustomHead() {
	console.log("自定义表头");
	layerShow("#customHead");
}

//自定义表头
$(function() {
	var leftsource = [

	];
	var rightsource = [
		{ label: '客户姓名', value: 'name' },
		{ label: '手机号码', name: 'phone' },
		{ label: '职位', value: 'major' },
		{ label: '销售进度', value: 'progress' },
		{ label: '创建时间', value: 'creatTime' },
		{ label: '联系时间', value: 'contactTime' },
		{ label: '跟进人', value: 'follow' },
		{ label: '公司名称', value: 'company' },
		{ label: '公司地址', value: 'address' }
	];
	$("#list-left").jqxListBox({ width: 200, height: 335, source: leftsource });
	$("#list-right").jqxListBox({ width: 200, height: 335, source: rightsource });
});

//自定义表头的位置和显示
function listMove(directionIndex) {
	var box = "left";
	var obox = "right";
	var opposing = ["left", "right"];
	var direction = ["right", "left"];
	if(directionIndex >= 2) {
		box = obox = "right";
	} else {
		box = direction[directionIndex];
		obox = opposing[directionIndex];
	}
	var item = $("#list-" + box).jqxListBox('getSelectedItems');
	var Addindex;
	if(item.length > 0) {
		var removeIndex = $("#list-" + box).jqxListBox('getSelectedIndex');
		if(directionIndex == 2) {
			Addindex = removeIndex - 1;
		} else if(directionIndex == 3) {
			Addindex = removeIndex + 1;
		} else {
			Addindex = $("#list-" + obox).jqxListBox('getSelectedIndex');
		}
		$("#list-" + box).jqxListBox('removeAt', removeIndex);
		$("#list-" + obox).jqxListBox('insertAt', { label: item[0].label, value: item[0].value }, Addindex);
		$("#list-" + obox).jqxListBox('selectItem', item[0].value);
	}
}

//自定义表头保存
function customSubmit() {
	var itemShow = $("#list-right").jqxListBox('getItems');
	var itemHide = $("#list-left").jqxListBox('getItems');
	$("#jqxtable").jqxGrid('beginupdate');
	for(var i = 0; i < itemShow.length; i++) {
		$("#jqxtable").jqxGrid('showcolumn', itemShow[i].value);
	}
	for(var i = 0; i < itemHide.length; i++) {
		$("#jqxtable").jqxGrid('hidecolumn', itemHide[i].value);
	}
	$("#jqxtable").jqxGrid('endupdate');
	layerClose("#customHead");
}
//客户详情切换
function tags(obj) {
	var $obj = $(obj);
	var objli = $obj.parent(".tags-li");
	if(objli.hasClass("active")) {
		return false;
	}
	var index = objli.index(".tags-li");
	var tags = objli.parents(".tags");
	var tagsMain = tags.next();
	var tagsShow = $(".tags-con-li:eq(" + index + ")");
	tags.find(".tags-li").removeClass("active");
	objli.addClass("active");
	tagsMain.find(".tags-con-li").removeClass("active");
	tagsShow.addClass("active");
}
//详情内相关的显示隐藏
function detail(obj) {
	var dMain = $(obj).parents(".list-title").next(".list-main");
	if($(obj).hasClass("active")) {
		dMain.show();
		$(obj).removeClass("active")
	} else {
		dMain.hide();
		$(obj).addClass("active");
	}
}