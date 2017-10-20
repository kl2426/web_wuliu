"use strict";

//   ready
$(document).ready(function(){
	//   nav 切换
	$("#info_banner_nav span").on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('#info_body > div').hide();
		$('#info_body > div').eq($(this).index()).fadeIn("fast");
	});
	
});
