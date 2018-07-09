$(function() {
	/*------index-------*/
	//初始加载
	navFun();
	//窗口大小变化时
	$(window).resize(function() {
		navFun();
	});
	//pc下 二级菜单
	function navFun() {
		/*$('.slideBox,.slideBox .bd img').width($('.content').width());*/
		var _width = $(window).width();
		$('.slideBox,.slideBox .bd img').width(_width);
		if(_width > 980) {
			$('.nav-main ul li').mouseenter(function() {
				$(this).find('dl').stop(false).slideDown(500);
			})
			$('.nav-main ul li').mouseleave(function() {
				$('.main').removeClass('on');
				$(this).find('dl').stop(false).slideUp(300);
			})
		} else {
			$('.nav-main ul li').unbind("mouseenter mouseleave");
		}
		if(_width < 640) {
			$('body').niceScroll({
				autohidemode: 'hidden'
			});
		} else {

			$('body').niceScroll({
				cursorcolor: "#14609e",
				cursoropacitymax: 1,
				touchbehavior: false,
				cursorwidth: "5px",
				background: '#eee',
				cursorborder: "0",
				cursorborderradius: "0",
				autohidemode: false,
				horizrailenabled: false
			});
		}

	};
	//移动端菜单展开
	$('.main-mask').click(function() {
		$('.main').removeClass('on');
		$('.nav-main ul').animate({
			'right': '-200px'
		}, 550, function() {
			$(this).hide();
		});
		$('.main-mask').fadeOut(500);
		$('html,body').removeClass('h100');
		$('.nav-main li dl').hide();
		$('.add-style').removeClass('on');
	});
	//移动端菜单收起
	$('.nav-icon').click(function() {
		$('.main').addClass('on');
		$('.nav-main ul').show().animate({
			'right': '-20px'
		}, 400);
		$('.main-mask').fadeIn(500);
		$('html,body').addClass('h100');
	});
	//移动端二级菜单
	$('.add-style').click(function() {
		$(this).toggleClass('on');
		$(this).parent().find('dl').slideToggle(300);
	})
	//滚动条美化
	$('body').niceScroll({
		cursorcolor: "#14609e",
		cursoropacitymax: 1,
		touchbehavior: false,
		cursorwidth: "5px",
		background: '#eee',
		cursorborder: "0",
		cursorborderradius: "0",
		autohidemode: false,
		horizrailenabled: false
	});
	$(".slideBox").slide({
		mainCell: ".bd ul",
		effect: "leftLoop",
		autoPlay: true,
		trigger: "click"
	});
	//校园风光无缝滚动
	$(".picMarquee-left").slide({
		mainCell: ".bd ul",
		autoPlay: true,
		effect: "leftMarquee",
		vis: 3,
		interTime: 50,
		trigger: "click"
	});
	/*----details  introduction  list----*/
	//菜单切换
	$('.list-nav ul li').click(function() {
		$(this).addClass('on').siblings().removeClass('on');
	})
})