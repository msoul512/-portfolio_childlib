/*TAB메뉴 SCRIPT*/
$(function(){
	// 탭 컨텐츠 숨기기
	$(".tab_content").hide();
	// 첫번째 탭콘텐츠 보이기
	$(".tab_container").each(function () {
		$(this).children(".tabs li:first").addClass("active"); //Activate first tab
		$(this).children(".tab_content").first().show();
	});
	//탭메뉴 클릭 이벤트+in 탭 추가
	$(".tabs li a").click(function () {
		$(this).parent().siblings("li").removeClass("active");
		$(this).parent().addClass("active"); $(this).parent().parent().parent().parent().find(".tab_content").hide();
		$(this).parent().addClass("active"); $(this).parent().parent().parent().parent().find(".tab_content_in").first().show();
		$(this).parent().addClass("active"); $(this).parent().parent().parent().parent().find(".tab_in2").first().show();
		var activeTab = $(this).attr("rel");
		$("#" + activeTab).fadeIn();
	});
	$(".tabs_in li a").click(function () {
		$(this).parent().siblings("li").removeClass("active");
		$(this).parent().addClass("active"); $(this).parent().parent().parent().parent().find(".tab_content_in").hide();
		var activeTab = $(this).attr("rel");
		$("#" + activeTab).fadeIn();
	});
});

/*슬라이드*4 SCRIPT*/
$(function(){
	//*신착도서 슬라이드*//
	var swiper = new Swiper(".booklist1", {
		pagination: {
			el: ".swiper-pagination1",
			clickable: true,
			renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
			},
		},
		slidesPerView: 'auto',
		spaceBetween: 48,
		loop: true,
		autoplay: {delay:3000,disableOnInteraction: false},
		delay: 3000,
		centeredSlides:false,
		observer: true,
	observeParents: true,
	});
	//*사서추천도서 슬라이드*//
	var swiper = new Swiper(".booklist2", {
		pagination: {
			el: ".swiper-pagination2",
			clickable: true,
			renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
			},
		},
		slidesPerView: 'auto',
		spaceBetween: 48,
		loop: true,
		autoplay: {delay:3000,disableOnInteraction: false},
		delay: 3000,
		centeredSlides:false,
		observer: true,
	observeParents: true,
	});
	//*대출베스트 슬라이드*//
	var swiper = new Swiper(".booklist3", {
		pagination: {
			el: ".swiper-pagination3",
			clickable: true,
			renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
			},
		},
		slidesPerView: 'auto',
		spaceBetween: 48,
		loop: true,
		autoplay: {delay:3000,disableOnInteraction: false},
		delay: 3000,
		centeredSlides:false,
		observer: true,
	observeParents: true,
	});
    //* 슬라이드*//
	var swiper = new Swiper(".eventlist", {
        pagination: {
			el: ".swiper-pagination4",
			type: "fraction",
        },
        navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
        },
		loop: true,
		autoplay: {delay:5000,disableOnInteraction: false},
		delay: 5000,
		centeredSlides:false,
		observer: true,
	observeParents: true,
	});
});

/*롤링 배너 SCRIPT*/
var moveType = 0; 
var moveSpeed = 3000; 
var moveWork = false;
var movePause = false; 
function imgMove(){ 
	if(moveWork==false){ 
	if(moveType==0){ 
		var aWidth = $(".RollDiv > div > a:first").width(); 
		$(".RollDiv > div").append("<a href=\""+$(".RollDiv > div > a:first").attr("href")+"\">" + $(".RollDiv > div > a:first").html()+ "</a>"); 
		$(".RollDiv > div > a:first").animate({marginLeft:-aWidth},{duration:moveSpeed,step:function(){ 
		if(movePause==true){ 
			$(this).stop(); 
		} 
		},complete:function(){  
		$(this).remove(); 
		imgMove(); 
	}}); 
	}else{ 
	var aWidth = $(".RollDiv > div > a:last").width(); 
	$("<a href=\"" + $(".RollDiv > div > a:last").attr("href")+ "\" style=\"margin-left:-" + aWidth + "px\">" + $(".RollDiv > div > a:last").html()+ "</a>").insertBefore(".RollDiv > div > a:first") 
	$(".RollDiv > div > a:first").animate({marginLeft:0},{duration:moveSpeed,step:function(){ 
	if(movePause==true){ 
		$(this).stop(); 
	} 
	},complete:function(){ 
	$(".RollDiv > div > a:last").remove(); 
	imgMove(); 
	}}); 
} 
} 
} 
function goMove(){ 
	movePause=false; 
	if(moveType==0){ 
	imgMove(); 
	}else{ 
	$(".RollDiv > div > a:first").animate({marginLeft:0},{duration:moveSpeed,step:function(){ 
	if(movePause==true){ 
		$(this).stop(); 
	} 
	},complete:function(){ 
	// $(".RollDiv > div > a:last").remove();
	imgMove(); 
}}); 
}
}
imgMove(); 

/*팝업 SCRIPT*/
//*쿠키*//
// function getCookie(cname) {
//     var name = cname + "=";
//     var ca = document.cookie.split(';');
//     for(var i=0; i<ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0)==' ') c = c.substring(1);
//         if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
//     }
//     return "";
// } 
// function setCookie(cname, cvalue, exdays) {
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     var expires = "expires="+d.toUTCString();
//     document.cookie = cname + "=" + cvalue + "; " + expires;
// } 
// //*팝업*//
// function couponClose(){
//     if($("input[name='chkbox']").is(":checked") ==true){
//         setCookie("close","Y",1);
//     }
//     $(".popup").hide(); 
//     $("#mask").hide();
// }
// $(document).ready(function(){
//     cookiedata = document.cookie;
//     if(cookiedata.indexOf("close=Y")<0){
//         $(".popup").show(); 
//     }else{
//         $(".popup").hide(); 
//         $("#mask").hide();
//     }
//     $("#close").click(function(){
//         couponClose();
//     });
// });