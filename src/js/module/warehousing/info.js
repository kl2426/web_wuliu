"use strict";


////   地图显示数据
//var data_map = {
//	//   标题
//	title:'百度地图',
//	//   百度地图 坐标
//	//   地理经度。
//	lng:116.307852,
//	//   地理纬度。
//	lat:40.057031,
//	//   显示内容  可删减
//	content:'<div style="margin:0;line-height:20px;padding:2px;">' +
//				'<img src="http://developer.baidu.com/map/jsdemo/img/baidu.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
//				'地址：北京市海淀区上地十街10号<br/>' +
//				'电话：(010)59928888<br/>' +
//				'简介：百度大厦位于北京市海淀区西二旗地铁站附近，为百度公司综合研发及办公总部。' +
//			'</div>'
//}

//   百度地图配置
var map = undefined;
var baidu_map = function() {
	// 百度地图API功能
	map = new BMap.Map("allmap");
	// 添加带有定位的导航控件
	var navigationControl = new BMap.NavigationControl({
		// 靠左上角位置
		anchor: BMAP_ANCHOR_TOP_LEFT,
		// LARGE类型
		type: BMAP_NAVIGATION_CONTROL_LARGE,
		// 启用显示定位
		enableGeolocation: true
	});
	map.addControl(navigationControl);
	// 添加定位控件
	var geolocationControl = new BMap.GeolocationControl();
	// 百度地图API功能
	var poi = new BMap.Point(data_map.lng, data_map.lat);
	map.centerAndZoom(poi, 16);
	map.enableScrollWheelZoom();

	

	//创建检索信息窗口对象
	var searchInfoWindow = null;
	searchInfoWindow = new BMapLib.SearchInfoWindow(map, data_map.content, {
		title: data_map.title, //标题
		width: 290, //宽度
		height: 105, //高度
		panel: "panel", //检索结果面板
		enableAutoPan: true, //自动平移
		searchTypes: [
			BMAPLIB_TAB_SEARCH, //周边检索
			BMAPLIB_TAB_TO_HERE, //到这里去
			BMAPLIB_TAB_FROM_HERE //从这里出发
		]
	});
	var marker = new BMap.Marker(poi); //创建marker对象
	//marker.enableDragging(); //marker可拖拽
	marker.addEventListener("click", function(e) {
		searchInfoWindow.open(marker);
	})
	//在地图中添加marker
	map.addOverlay(marker);
	//  显示 marker
	searchInfoWindow.open(marker);
	// run地图
	map.addControl(geolocationControl);
}


//   ready
$(document).ready(function(){
	//   nav 切换
	$("#info_banner_nav li").on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('#info_body > div').hide();
		$('#info_body > div').eq($(this).index()).fadeIn("fast",function(){
			//  百度
			if($(this).index() == 1 && !map){
				baidu_map();
			}
		});
	});
	
	
	//   预约看仓弹窗 点击OK
	$("#modal_reservation_ok").on('click',function(){
		//   ajax提交
		//
		window.open('../../../../personal-center/views/module/warehousing/individual/seek_send_list.html?menuid=14');
	});
	
	
	
});
