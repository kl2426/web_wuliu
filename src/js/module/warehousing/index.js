"use strict";
//    仓储首页

$(document).ready(function(){
	//   更多选项
	if($("#index_screen > .media").length > 9){$("#index_screen_mor").show();}
	$("#index_screen_mor").on("click",function(){
		var that = this;
		var mor_i = $(this).find("i");
		
		if(mor_i.hasClass('fa-long-arrow-up')){
			$("#index_screen > .media").slice(9).hide();
			mor_i.removeClass('fa-long-arrow-up').addClass('fa-long-arrow-down');
		}else{
			$("#index_screen > .media").slice(9).show();
			mor_i.removeClass('fa-long-arrow-down').addClass('fa-long-arrow-up');
		}
	});
	
	//   热门样式切换
	$("#screen_top li").on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	//   排序样式切换
	$("#screen_area, #screen_price").on('click',function(){
		var this_i = $(this).find('i');
		if(this_i.hasClass('fa-long-arrow-up')){
			this_i.removeClass('fa-long-arrow-up').addClass('fa-long-arrow-down');
		}else{
			this_i.removeClass('fa-long-arrow-down').addClass('fa-long-arrow-up');
		}
	});
	
	//   筛选
	$(document).on('click',"#index_screen .media-body input[type=button], #index_screen .media-body ul li",function(){
		//   点击条件
		if($(this)[0].localName == 'li'){
			$(this).addClass('active').siblings().removeClass('active');
		}
		//  ajax
		var data_input = $("#index_screen .media-body input[type=text]").val();
		var data_li = $("#index_screen .media-body li.active").text();
		alert(data_input + data_li);
	});
	
	//   条件筛选
	$("#screen_top li, #screen_area, #screen_price, .m-index-conscreen .body-sort input[type=button]").on('click',function(){
		setTimeout(function(){
			//   热门
			var data_top = $('#screen_top li.active').text();
			//   面积排序
			var data_area = $("#screen_area i").hasClass('fa-long-arrow-up') ? 'desc' : 'asc';
			//   价格排序
			var data_price = $("#screen_price i").hasClass('fa-long-arrow-up') ? 'desc' : 'asc';
			//   价格区间
			var data_money = $('.m-index-conscreen input[name=money_start]').val() + ',' + $('.m-index-conscreen input[name=money_end]').val();
			
			//   ajax
			alert(data_top + data_area + data_price + data_money);
			
		},50);
	});
	
});
