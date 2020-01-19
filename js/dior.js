$("document").ready(function(){
	var $open_btn =$("header .btn-con"),
		$close_btn=$("nav .nav-btn")
		$nav =$("nav");

	$open_btn.click(function(){
		$nav.fadeIn(500);
	})//nav open
	$close_btn.click(function(){
		$nav.fadeOut(500);
	})

	var swiper = new Swiper(".swiper-container",{
		autoplay : {
			delay :2500
		},
		slidesPerView :1,
		spaceBetween : 0,
		loop :true,
		navigation:{
			nextEl : ".swiper-button-next",
			prevEl : ".swiper-button-prev"
		},
		pagination:{
			el:".swiper-pagination",
			clickable : true
		}

	})

	var $tab_btn =$(".f-wrap .tab-btn .btn"),
		$tab_list =$(".f-wrap .b-con .swiper-container"),
		$tab_txt =$(".f-wrap .b-con .txt-con");

	$tab_txt.eq(0).hide();
	$tab_list.eq(1).hide();
	$tab_btn.click(function(){
		 i = $tab_btn.index(this);
	$tab_btn.removeClass("click").eq(i).addClass("click")
		$tab_list.hide().eq(i).show();
		$tab_txt.hide().eq(i).show();
	})

	$('.slick-slider').slick({
 centerMode :true,
 autoplay:true,
infinite :true,
  centerPadding: '50px',
  slidesToShow:1,
dots : true,
  responsive: [
    {
      breakpoint: 360,
      settings: {
		 arrows:false,
        centerMode: true,
        centerPadding: '90px',
        slidesToShow: 1,
		  dots :true
      }
    }
  ]
});

var $w_tab = $(".w-wrap .tab-btn ul li"),
	$w_list =$(".w-wrap .slick-slider");

	$w_list.hide().eq(0).show();
	$w_tab.removeClass("active").eq(0).addClass("active");

	$w_tab.click(function(){
		a = $w_tab.index(this);
	$w_tab.removeClass("active").eq(a).addClass("active");
	 $w_list.hide().eq(a).show();
	})

	var $m_tab = $(".m-wrap .tab-btn ul li"),
	$m_list =$(".m-wrap .slick-slider");

	$m_list.hide().eq(0).show();
	$m_tab.removeClass("active").eq(0).addClass("active");

	$m_tab.click(function(){
		a = $m_tab.index(this);
	$m_tab.removeClass("active").eq(a).addClass("active");
	 $m_list.hide().eq(a).show();
	})

 var top_btn =$("footer .top-btn span");

	$(top_btn).click(function(){
		$("html, body").animate({scrollTop:0},500);
		return false;
	})



})//end
