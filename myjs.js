$(document).ready(function(){
	//share to Weixin
	$(".shareWeixin").click(function(){
		$(".weixin_share").css("display","block");
	});
	$(".weixinshare_close").click(function(){
		$(".weixin_share").css("display","none");
	});

	//click download to show QR code 
	$(".pc_download").click(function(){
		$(".pcQR").css("display","inline-block");
		$(".pc_close").css("display","inline-block");
	});
	$(".pc_close").click(function(){
		$(".pcQR").css("display","none");
		$(".pc_close").css("display","none");
	});

	// show different choices
	$(".song").click(function(){
		$(".one").css("display","block");
		$(".two").css("display","none");
		$(".three").css("display","none");
		$(".four").css("display","none");
	});
	$(".live").click(function(){
		$(".one").css("display","none");
		$(".two").css("display","block");
		$(".three").css("display","none");
		$(".four").css("display","none");
	});
	$(".onsite").click(function(){
		$(".one").css("display","none");
		$(".two").css("display","none");
		$(".three").css("display","block");
		$(".four").css("display","none");
	});
	$(".test").click(function(){
		$(".one").css("display","none");
		$(".two").css("display","none");
		$(".three").css("display","none");
		$(".four").css("display","block");
	});

	// show or hide side bar
	$(".sidebar_left").click(function(){
		var right=$(".sidebar").css("right");
		var width=$(".sidebar_main").width();
		if(right=="0px"){
			$(".sidebar").animate({
				"right":-width
			});
			$(".sidebar_left img").attr("src","images/sidebar_open.png");
		} else {
			$(".sidebar").animate({
				"right":"0px"
			});
			$(".sidebar_left img").attr("src","images/sidebar_hide.png");
		}
	});

});

function qidai(){
	alert("敬请期待！")
}

var shareData = {
        title: '《胡莱三国2》即将公测，原班人马精心打造，沙盘策略推演手游，更有刘涛倾情代言。快来再战沙场，一决雌雄！',
        desc: '公测预约有礼活动正式开启，代言人刘涛精心为你们准备了很多专属礼品，老玩家还会有特殊福利，快来预约，向女神刘涛发起挑战吧！',
        link: location.href.split('#')[0],
        imgUrl: 'images/IOCN4000.jpg'
      };

 function sharetoWeibo(){
 	var sharestring = 'http://v.t.sina.com.cn/share/share.php?title=' + shareData.title + 
 	'&url=' + shareData.desc + '&content=utf-8&sourceUrl=' + shareData.link + '&pic=' + shareData.imgUrl;
    window.open(sharestring, 'newwindow', 'height=400,width=400,top=100,left=100');
 }




















