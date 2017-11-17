var kefu_html = '<div id="rightArrow" style="right: -5px; background-position: -50px 0px;"><a href="javascript:;" title="在线客户"></a></div>'+
		'<div id="floatDivBoxs" style="right: -175px;">'+
			'<div class="floatDtt">在线客服</div>'+
		    '<div class="floatShadow">'+
		        '<ul class="floatDqq">'+
		            '<li style="padding-left:0px;"><a target="_blank" href="tencent://message/?uin=1234567890&Site=sc.chinaz.com&Menu=yes"><img src="../../../js/lib/kefu/images/qq.png" align="absmiddle">&nbsp;&nbsp;在线客服1号</a></li>'+
		            '<li style="padding-left:0px;"><a target="_blank" href="tencent://message/?uin=1234567890&Site=sc.chinaz.com&Menu=yes"><img src="../../../js/lib/kefu/images/qq.png" align="absmiddle">&nbsp;&nbsp;在线客服2号</a></li>'+
		            '<li style="padding-left:0px;"><a target="_blank" href="tencent://message/?uin=1234567890&Site=sc.chinaz.com&Menu=yes"><img src="../../../js/lib/kefu/images/qq.png" align="absmiddle">&nbsp;&nbsp;在线客服3号</a></li>'+
		        '</ul>'+
		        '<div class="floatDtxt">热线电话</div>'+
		        '<div class="floatDtel"><img src="../../../js/lib/kefu/images/online_phone.jpg" width="155" height="45" alt=""></div>'+
		        '<div style="text-align:center;padding:10PX 0 5px 0;background:#EBEBEB;"><img style="max-width:100%;" src="../../../img/module/warehousing/code.jpg"><br>微信公众账号</div>'+
		    '</div>'+
		    '<div class="floatDbg"></div>'+
		'</div>';
	
	
$('head').append('<link href="../../../js/lib/kefu/css/style.css" rel="stylesheet" type="text/css" />');
$('body').append($(kefu_html));


var kf_flag=0;
$(document).on('click','#rightArrow',function(){
	if(kf_flag==1){
		$("#floatDivBoxs").animate({right: '-175px'},300);
		$(this).animate({right: '-5px'},300);
		$(this).css('background-position','-50px 0');
		kf_flag=0;
	}else{
		$("#floatDivBoxs").animate({right: '0'},300);
		$(this).animate({right: '170px'},300);
		$(this).css('background-position','0px 0');
		kf_flag=1;
	}
});