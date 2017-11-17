"use strict";

//   物流企业


//   ready
$(document).ready(function(){
	//   物流企业hover
	$(".m-logistics .logistics-qy .one").hover(function(){
		if($(this).find('.one-title')[0].style.top == "100%" || $(this).find('.one-title')[0].style.top == ""){
			$(this).find('.one-title').animate({
				'top':'0%'
			});
		}
	},function(){
		$(this).find('.one-title').animate({
			'top':'100%'
		});
	});
	
});
