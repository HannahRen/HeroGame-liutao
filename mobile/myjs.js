$(document).ready(function(){
	//audio play
	$(".play").click(function(){
		var music=document.querySelector(".play audio");
		if(music.paused) {
			music.play();
			$(".play").find("img").attr("src","images/notplay.png");
		} else {
			music.pause();
			$(".play").find("img").attr("src","images/play.png");
		}
	});


	//click image and count the clicked images, if the number is greater than 4, alert
	$(".images").find("img").click(function(){
		if ($(this).hasClass("active")){
			$(this).removeClass("active");
		} 
		else {
			if($(".active").length >= 4) {
			    alert("只能选择4种哦！");
			    return;
			} else {
			    $(this).addClass("active");
			}
		}
	});

	//open or close wechat qrcode
	$(".guanzhuweixin").click(function(){
		$(".cover").css("display","block");
		$(".QRcode").css("display","block");
		mySwiper.lockSwipes();
	});
	$(".QRclose").click(function(){
		$(".cover").css("display","none");
		$(".QRcode").css("display","none");
		mySwiper.unlockSwipes();
	});
	//open or close share window
	$(".fenxiangdao").click(function(){
		$(".cover").css("display","block");
		$(".fenxiang").css("display","block");
		mySwiper.lockSwipes();
	});
	$(".fenxiangclose").click(function(){
		$(".cover").css("display","none");
		$(".fenxiang").css("display","none");
		mySwiper.unlockSwipes();
	});
});
 
function qidai(){
	alert("敬请期待！");
}

var shareData = {
    title: '《胡莱三国2》即将公测，原班人马精心打造，沙盘策略推演手游，更有刘涛倾情代言。快来再战沙场，一决雌雄！',
    desc: '公测预约有礼活动正式开启，代言人刘涛精心为你们准备了很多专属礼品，老玩家还会有特殊福利，快来预约，向女神刘涛发起挑战吧！',
    link: location.href.split('#')[0],
    imgUrl: 'http://hlsg2.hulai.com/liutaozhuanti/img/IOCN4000.jpg?v=0.0.4'
};
function shareWeibo() {
    var sharesinastring = 'http://v.t.sina.com.cn/share/share.php?title=' + shareData.title + '&url=' + 
    shareData.desc + '&content=utf-8&sourceUrl=' + shareData.link + '&pic=' + shareData.imgUrl;
    window.open(sharesinastring, 'newwindow', 'height=400,width=400,top=100,left=100');
}
function sharetoqq(content, url, picurl) {
    var shareqqstring = 'http://connect.qq.com/widget/shareqq/index.html?title=《胡莱三国2》即将公测，原班人马精心打造，沙盘策略推演手游，更有刘涛倾情代言。快来再战沙场，一决雌雄!&pics=http://hlsg2.hulai.com/m/img/IOCN400.png' + shareData.title + '&url=' + shareData.link + '&pic=' + shareData.imgUrl;
    window.open(shareqqstring, 'newwindow', 'height=400,width=400,top=100,left=100');
}


















