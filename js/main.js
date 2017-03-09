$(function(){
// 轮播图
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });

// 热门留学院校导航
    $(".body-main main .main-hot .nav li:eq(0)").addClass("hover");
    $(".body-main main .main-hot .hot-content .content:gt(0)").hide();
    $(".body-main main .main-hot .nav").find("li").each(function(index){
    	$(this).hover(function(){
            $(this).addClass("hover").stop(true,true).siblings().removeClass("hover");
            $(".body-main main .main-hot .hot-content .content").hide().eq(index).show();
            $(".body-main main .main-hot .content .content-hidden").hide();
            $("main .main-hot .content .loadMore span").html("点击加载更多");
        });
    });

//新闻头条字幕滚动
	function titleScroll(){
		$(".body-main main .main-headline .main-headline-title ul").find("li:first").animate({
		"margin-top":"-0.35rem"
		},800,function(){
			$(this).css("margin-top","0rem").appendTo($(".body-main main .main-headline .main-headline-title ul"));
		});
	}
	setInterval(titleScroll,800);

// 点击加载更多
    $("main .main-hot .content .loadMore span").on("click",function(){
        if($(this).html()=="点击加载更多"){
            $("main .main-hot .content .content-hidden").css("display","block");
            $(this).html("点击收起更多");
        }else{
            $("main .main-hot .content .content-hidden").css("display","none");
            $(this).html("点击加载更多");
        }    
    });

// 优选留学方案
    var count=1;//控制下拉图标
    $(".body-main main .main-program .content").hide();
    $(".body-main main .main-program .header .header-content .icon-list").on("click",function(){           
        if(count%2==0){
            this.src="images/xiala_icon1.png";
            $(".body-main main .main-program .content").hide();
        }else{
            this.src="images/xiala_icon2.png";
            $(".body-main main .main-program .content").show();
        }
        // $(this).addClass("transform");//旋转180度
        count++;
    });

// 主页页脚
    $(".body-main footer div ul").find("li").each(function(index){
        $(this).click(function(){
            $(this).addClass("on").siblings().removeClass("on");
        });
    });

// 弹窗效果
    $(".prompt-main").hide();
    $(".body-main header .title .title-content .icon1").on("click",function(){
        $(".prompt-main").show("500");             
    });   
    $(".prompt-main .prompt img").on("click",function(){
        $(".prompt-main").hide("500");
    });
    $("#phone-icon1").on("click",function(){
    		$(".prompt-main").show("500");
    });

// 侧边栏
    var turn=0;
    $(".body-main header .title .title-content .icon2").on("click",function(){
        
        if(turn==0){
            $(this).addClass("change");
            $(".side-main").animate({
                right:"0rem"          
            },500);
            $(".body-main").animate({
                right:"2.54rem"
            },500);
            turn=1;
        }else{
            $(this).removeClass("change");
            $(".side-main").animate({
                right:"-2.54rem"
            },500);
            $(".body-main").animate({
                right:"0rem"
            },500);
            turn=0;
        }
    });

//指纹弹出图标
	$("#fingerprint-img2").hide();
	$("#fingerprint-img1").on("click",function(){
		$("#fingerprint-img1").hide();
		$("#fingerprint-img2").show();
		$("#fingerprint-icon1").animate({
			left:"0.9rem"
		},100);
		$("#fingerprint-icon2").animate({
				left:"1.8rem"
		},200);
		$("#fingerprint-icon3").animate({
				left:"2.7rem"
		},300);
		$("#fingerprint-icon4").animate({
				left:"3.6rem"
		},400);
		$("#fingerprint-icon5").animate({
				left:"4.5rem"
		},500);
	})
	$("#fingerprint-img2").on("click",function(){
		$("#fingerprint-icon1").animate({
			left:"0rem"
		},100);
		$("#fingerprint-icon2").animate({
				left:"0rem"
		},200);
		$("#fingerprint-icon3").animate({
				left:"0rem"
		},300);
		$("#fingerprint-icon4").animate({
				left:"0rem"
		},400);
		$("#fingerprint-icon5").animate({
				left:"0rem"
		},500);
		setTimeout(timeDelay,500);
	});
	function timeDelay(){
		$("#fingerprint-img2").hide();
		$("#fingerprint-img1").show();
	}
//置顶	
	$("#fingerprint-icon5").on("click",function(){
		$("body").animate({"scrollTop":"0"},500);	
	})
});
