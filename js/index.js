$(function() {
	//接通意向率数据
	var dataIntention = {
		name: '2017-02-22',
		data: [
			{ value: 335, name: '有意向' },
			{ value: 310, name: '无意向' }
		]
	};
	var dataResult = {
		name: '2017-02-22',
		data: [
			{ value: 335, name: '加微信' },
			{ value: 310, name: '打电话' },
			{ value: 310, name: '发短信' },
			{ value: 310, name: '发邮件' }
		]
	};

	var dataProgress = {
		name: '2017-02-22',
		data: [
			{ value: 335, name: '初步沟通' },
			{ value: 310, name: '确认需求' },
			{ value: 310, name: '报价' },
			{ value: 310, name: '面谈' },
			{ value: 310, name: '成单' }
		]
	};

	//初始化option
	var optionIntention = optionResult = optionProgress = {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		series: [{
			name: '',
			type: 'pie',
			radius: ['50%', '70%'],
			itemStyle: {
				normal: {
					label: {
						show: false
					},
					labelLine: {
						show: false
					}
				},
				emphasis: {
					label: {
						show: true,
						position: 'center',
						textStyle: {
							fontSize: '18',
							fontWeight: 'bold'
						}
					}
				}
			},
			data: []
		}]
	};

	var chartsIntention = echarts.init(document.getElementById("charts-intention"));
	chartsIntention.setTheme(theme);
	optionIntention.series[0].name = dataIntention.name;
	optionIntention.series[0].data = dataIntention.data;
	chartsIntention.setOption(optionIntention);

	var chartsResult = echarts.init(document.getElementById("charts-result"));
	chartsResult.setTheme(theme);
	optionResult.series[0].name = dataResult.name;
	optionResult.series[0].data = dataResult.data;
	chartsResult.setOption(optionResult);

	var chartsProgress = echarts.init(document.getElementById("charts-progress"));
	chartsProgress.setTheme(theme);
	optionProgress.series[0].name = dataProgress.name;
	optionProgress.series[0].data = dataProgress.data;
	chartsProgress.setOption(optionProgress);
});
//折线图

var dataLine = [
	{ name: "客户增长量", data: [6, 8, 6, 8, 6, 8, 4] },
	{ name: "任务增长量", data: [6, 9, 3, 8, 6, 2, 4] },
	{ name: "任务完成增长量", data: [3, 5, 6, 9, 2, 4, 2] }
];
var dataLineX = ["2017-02-15", "2017-02-16", "2017-02-17", "2017-02-18", "2017-02-19", "2017-02-20", "2017-02-21"];
var optionLine;
var chartsLine;
$(function() {
	optionLine = {
		tooltip: {
			trigger: "item",
			formatter: "{b} <br/>{a} : {c}"
		},
		xAxis: [{
			type: "category",
			splitLine: { show: true },
			data: []
		}],
		yAxis: [],
		series: [{
			name: "",
			type: "line",
			data: []
		}]
	};
	chartsLine = echarts.init(document.getElementById("charts-line"));
	chartsLine.setTheme(theme);
	optionLine.xAxis[0].data = dataLineX;
	optionLine.series[0].name = dataLine[0].name;
	optionLine.series[0].data = dataLine[0].data;
	chartsLine.setOption(optionLine);

});

function lineBtn(index) {
	var $obj = $("#lineChartBtn").find(".charts-btn:eq(" + index + ")");
	var $countObj = $("#count-list").find(".count-list:eq("+index+")");
	if($obj.hasClass("active")) {
		return false;
	} else {
		$("#lineChartBtn").find(".charts-btn").removeClass("active");
		$obj.addClass("active");
		$("#count-list").find(".count-list").removeClass("active");
		$countObj.addClass("active");
	}

	optionLine.xAxis[0].data = dataLineX;
	optionLine.series[0].name = dataLine[index].name;
	optionLine.series[0].data = dataLine[index].data;
	chartsLine.clear();
	chartsLine.setOption(optionLine);
}

//柱状图
var optionBar;
var chartsBar;
var chartBarX = ['2017-02-15', '2017-02-16', '2017-02-17', '2017-02-18', '2017-02-19', '2017-02-20', '2017-02-21', '2017-02-22'];
var dataBarValue = [{
	data: [2, 5, 10, 23, 15, 16, 20, 16]
}, {
	data: [3, 6, 9, 16, 18, 10, 15, 18]
}, {
	data: [2, 50, 14, 30, 75, 60, 90, 70]
}];
//var chartBarX = ['2017-02-15', '2017-02-16', '2017-02-17', '2017-02-18', '2017-02-19', '2017-02-20', '2017-02-21', '2017-02-22', '2017-02-16', '2017-02-17', '2017-02-18', '2017-02-19', '2017-02-20', '2017-02-21', '2017-02-22', '2017-02-16', '2017-02-17', '2017-02-18', '2017-02-19', '2017-02-20', '2017-02-21', '2017-02-22', '2017-02-16', '2017-02-17', '2017-02-18', '2017-02-19', '2017-02-20', '2017-02-21', '2017-02-22', '2017-02-16', '2017-02-17', '2017-02-18', '2017-02-19', '2017-02-20', '2017-02-21', '2017-02-22', '2017-02-16', '2017-02-17', '2017-02-18', '2017-02-19', '2017-02-20', '2017-02-21', '2017-02-22', '2017-02-16', '2017-02-17', '2017-02-18', '2017-02-19', '2017-02-20', '2017-02-21', '2017-02-22', '2017-02-16', '2017-02-17', '2017-02-18', '2017-02-19', '2017-02-20', '2017-02-21', '2017-02-22', '2017-02-16', '2017-02-17', '2017-02-18', '2017-02-19', '2017-02-20', '2017-02-21', '2017-02-22'];
//var dataBarValue = [{
//	data: [2, 5, 10, 23, 15, 16, 20, 16, 5, 10, 23, 15, 16, 20, 16, 5, 10, 23, 15, 16, 20, 16, 5, 10, 23, 15, 16, 20, 16, 5, 10, 23, 15, 16, 20, 16, 5, 10, 23, 15, 16, 20, 16, 5, 10, 23, 15, 16, 20, 16, 5, 10, 23, 15, 16, 20, 16, 5, 10, 23, 15, 16, 20, 16]
//}, {
//	data: [3, 6, 9, 16, 18, 10, 15, 18, 6, 9, 16, 18, 10, 15, 18, 6, 9, 16, 18, 10, 15, 18, 6, 9, 16, 18, 10, 15, 18, 6, 9, 16, 18, 10, 15, 18, 6, 9, 16, 18, 10, 15, 18, 6, 9, 16, 18, 10, 15, 18, 6, 9, 16, 18, 10, 15, 18, 6, 9, 16, 18, 10, 15, 18]
//}, {
//	data: [2, 50, 14, 30, 75, 60, 90, 70, 50, 14, 30, 75, 60, 90, 70, 50, 14, 30, 75, 60, 90, 70, 50, 14, 30, 75, 60, 90, 70, 50, 14, 30, 75, 60, 90, 70, 50, 14, 30, 75, 60, 90, 70, 50, 14, 30, 75, 60, 90, 70, 50, 14, 30, 75, 60, 90, 70, 50, 14, 30, 75, 60, 90, 70]
//}];
var dataBar = [{
	name: '坐席电话量',
	type: 'bar',
	yAxisIndex: 0,
	barMaxWidth: 40,
	itemStyle: {
		normal: { color: "#2ec7c9" }
	},
	data: dataBarValue[0].data
}, {
	name: '联系客户数',
	type: 'bar',
	yAxisIndex: 0,
	barMaxWidth: 40,
	itemStyle: {
		normal: { color: "#ffb980" }
	},
	data: dataBarValue[1].data
}, {
	name: '通话时长',
	type: 'bar',
	yAxisIndex: 1,
	barMaxWidth: 40,
	itemStyle: {
		normal: { color: "#d87a80" }
	},
	data: dataBarValue[2].data
}];
$(function() {
	optionBar = {
		tooltip: {
			trigger: 'axis'
		},
		toolbox: {
			show: true
		},
		legend: {
			show: false,
			data: []
		},
		xAxis: [{
			type: 'category',
			data: []
		}],
		yAxis: [{
			type: 'value',
			splitArea: {
				show: true,
				areaStyle: {
					color: [
						'rgba(250,250,250,0.3)',
						'rgba(200,200,200,0.3)'
					]
				}
			},
			axisLabel: {
				formatter: '{value}'
			}
		}, {
			type: 'value',
			splitArea: {
				show: true,
				areaStyle: {
					color: [
						'rgba(250,250,250,0.3)',
						'rgba(200,200,200,0.3)'
					]
				}
			},
			axisLabel: {
				formatter: '{value} s'
			}
		}],
		series: []
	};

	chartsBar = echarts.init(document.getElementById("charts-bar"));
	optionBar.xAxis[0].data = chartBarX;
	optionBar.series.push(dataBar[0]);
	chartsBar.setTheme(theme);
	chartsBar.setOption(optionBar);
});

var chartBarData;

function barBtn(index) {
	var $obj = $("#barChartBtn").find(".charts-btn:eq(" + index + ")");
	if($obj.hasClass("active")) {
		$obj.removeClass("active");
	} else {
		$obj.addClass("active");
	}
	var active = $("#barChartBtn").find(".active");
	chartBarData = [];
	if(active.length > 0) {
		for(var i = 0; i < active.length; i++) {
			chartBarData[i] = dataBar[active[i]['data-chart'] || active[i].dataset.chart];
		}
		optionBar.xAxis[0].data = chartBarX;
		optionBar.series = chartBarData;
		chartsBar.clear();
		chartsBar.setOption(optionBar);
	} else {
		chartsBar.clear();
	}
}

$(function() {
	window.onresize = function() {
		chartsLine.resize();
		chartsBar.resize();
	}
});

$(function() {
	$(".date-select").click(function(){
		if($(this).hasClass("selected")){
			return false;
		}
		
		$(".date-select").removeClass("selected");
		$(this).addClass("selected");
		$("#select-time").text($(this).text());
		$(".index-select").removeClass("active");
		$("#startTime").val("");
		$("#endTime").val("");
		$("#datetime").jqxCalendar('setRange', new Date(),new Date());
	});
	
	//日历
	$("#datetime").jqxCalendar({ width: 220, height: 220, selectionMode: 'range', culture: 'ch-CN' });
	$("#datetime").jqxCalendar({firstDayOfWeek:1});
	$('#datetime ').jqxCalendar('setMaxDate', new Date()); 
//	$("#datetime").jqxCalendar({enableWeekend: true});
	$("#datetime").on('change', function(event) {
		var selection = event.args.range;
		$("#startTime").val(selection.from.toLocaleDateString());
		$("#endTime").val(selection.to.toLocaleDateString());
	});
});

function dateShow() {
	console.log($("#startTime").val());
	console.log($("#endTime").val());
	
	$(".date-select").removeClass("selected");
	$("#select-time").text($("#startTime").val()+"-"+$("#endTime").val());
	$(".index-select").removeClass("active");
}

