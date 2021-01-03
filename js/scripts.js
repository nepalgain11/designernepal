jQuery(window).ready(function(){
	jQuery(".bars-click").on("click",function(){
		jQuery(".offcanvus-manu-bar").slideToggle(1000);
	});
	
	var screenWidth=jQuery(window).width();
	jQuery(window).resize(function(){
		jQuery(".offcanvus-manu-bar").removeAttr("style");
	});
	
	jQuery('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		responsiveClass:true,
		responsive:{
        0:{
            items:1,
            nav:true
        },
        768:{
            items:3,
            nav:true,
        },
		480:{
            items:2,
            nav:true,
        },
        1000:{
            items:3,
            nav:true,
            loop:true
			}
		}
	})

	jQuery(".scroll-bottom-top").click(function(){
				jQuery("html").animate({"scrollTop":"0"},1000);
			
		});
	
	
	jQuery(window).scroll(function(){
		var screenSize = jQuery(window).scrollTop();
		if(screenSize>200){
			jQuery(".nav-bar").addClass("fixed");
		}
		else{
			jQuery(".nav-bar").removeClass("fixed");
			
		}
		if(screenSize>435){
				jQuery(".scroll-bottom-top").show();
				
			}
		else{
			jQuery(".scroll-bottom-top").hide();
				
		}
		
		
		
		
		
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// file end
});