//判断PC端/移动端
var sUserAgent = navigator.userAgent.toLowerCase();
var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
var bIsMidp = sUserAgent.match(/midp/i) == "midp";
var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
var bIsAndroid = sUserAgent.match(/android/i) == "android";
var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

var isMobile = bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM;

$(function () {
	var navHeight = $("#indexNav").outerHeight(),
		bannerHeight = $("#banner").outerHeight(),
		bannerTop = $("#banner").offset().top,
		// traitTop = $("#trait").offset().top,

	//	var lineDiv=$(".lineDIv").offset().top;
	//	//console.log($(".lineDIv").offset().top)
	// console.log(videoTop, photoTop,  contactTop)
	$(window).scroll(function () {

		var s = $(window).scrollTop();
		console.log(s)
		if ($(".index_nav_wrap").attr('isScroll')) {
			//console.log(s , (bannerHeight - navHeight))
			if (s > (bannerHeight - navHeight) / 2) {
				console.log('大于了')
				$(".index_nav_wrap").addClass("active1");
			} else {
				$(".index_nav_wrap").removeClass("active1");
			}

		}

		// 滚动到对应位置 导航也变
		
	
		if (s > bannerTop - navHeight) {
			$('#indexNav ul li').eq(3).addClass('active').siblings("li").removeClass("active");
		}

		if (s > bannerTop) {
			$('.back_top').fadeIn(200)
		} else {
			$('.back_top').fadeOut(200)
		}


	});
	//刷新页面，如果滚动条高度大于banner高度时，给导航加上背景
	if ($(document).scrollTop() > bannerHeight) {
		$(".index_nav_wrap").addClass("active1");
	}

	// 返回顶部
	$('.back_top').click(function () {
		$("html,body").stop().animate({
			scrollTop: 0
		})
	})

	/*
	var isSlide = false
	$("#indexNav ul li>a").click(function () {
		var index = $(this).index();
		$(this).parent('li').addClass("active").siblings("li").removeClass("active");
		if (isMobile) {
			if ($(this).attr('href')) {
				$("#indexNav ul").stop().slideUp(200)
			} else {
				// $("#indexNav ul li .child").stop().slideToggle(200);
				if (isSlide) {
					//console.log(123)
					$("#indexNav ul li .child").stop().slideUp(200);
					isSlide = false
				} else {
					//console.log(456)
					$("#indexNav ul li .child").stop().slideDown(200);
					isSlide = true
				}
			}
		}

	})
	$("#indexNav ul li .child a").click(function () {
		var index = $(this).index();
		//console.log(index)
		$("#indexNav ul li .child").stop().slideUp(200)
		// $("#indexNav ul").stop().slideUp(200)

		if (isMobile) {
			// if($(this).attr('href')){
			// 	//console.log(12312312)
			// }
			$("#indexNav ul").stop().slideUp(200)
			$("#indexNav ul li .child").stop().slideUp(200)
			isSlide = false
		}

	})


	//导航划过
	$("#indexNav ul li").hover(function () {
		if (!isMobile) {
			// $(this).find(".child").stop().slideToggle(200)

			if (isSlide) {
				$(this).find(".child").stop().slideUp(200)
				isSlide = false
			} else {
				$(this).find(".child").stop().slideDown(200)
				isSlide = true
			}
		}
	});



	*/
	//移动端点击显示菜单
	var isSide = false;
	$(".media_menu").click(function () {
		if (!isSide) {
			$(this).siblings("ul").addClass('active')
			$('.nav_mask').fadeIn(200);
		} else {
			$(this).siblings("ul").removeClass('active')
			$('.nav_mask').fadeOut(200);
		}
		isSide = !isSide
	})
	$('.nav_mask').click(function () {
		$("#indexNav ul").removeClass('active')
		$('.nav_mask').fadeOut(200);
		isSide = false
	})

	console.log(isMobile)
	// 导航点击跳转到对应的位置
	$("#indexNav ul li a").click(function () {
		var position = $(this).attr('position')
		if (position) {
			var scrollTop = $("#" + position + "").offset().top;
			console.log(scrollTop)
			$("body,html").stop().animate({
				scrollTop: scrollTop - $("#indexNav").outerHeight() + 5
			}, 300);
		}

		if (isMobile) {
			$("#indexNav ul").removeClass('active')
			$('.nav_mask').fadeOut(200);
			isSide = false
		}
	})


	// 图片放大
	// $('.photo_wrap .item>img').click(function (event) {
	// 	event.stopPropagation();
	// 	$(this).next('.img_wrap').addClass('active')
	// 	$(this).next('.img_wrap').find('img').removeClass('zoomOut').addClass('zoomIn')
	// })
	// $('.photo_wrap .item .img_wrap').click(function (event) {
	// 	event.stopPropagation();
	// 	var that = $(this)
	// 	$(this).find('img').removeClass('zoomIn').addClass('zoomOut')
	// 	setTimeout(function () {
	// 		that.removeClass('active')
	// 	}, 300)
	// })

	// $('.photo_wrap .item .img_wrap.active img').click(function (event) {
	// 	event.stopPropagation();
	// })




})


//获取地址栏信息
function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}

