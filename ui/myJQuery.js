/*$(document).ready(function () {
       				$('ul.nav > li').click(function (e) {
            			e.preventDefault();
            			$('ul.nav > li').removeClass('backgroudClass');
            			$(this).addClass('backgroudClass');                
        			});            
    			});*/


/*$(document).ready(function () {
		$('ul.size > li > a').click(function (e) {
   			e.preventDefault();
	   			$('ul.size > li > a').removeClass('backgroudClass');
      			$(this).addClass('backgroudClass');                
    		});            
    	// });*/


		/*	styling CSS with href. */

		$(document).ready(function(){
    		$(".insideBannerImg").click(function(){
        		/*$(".insideBannerRegister").slideToggle("slow");*/
        		/*$(".insideBannerRegister").hide("slide", {direction: "left" }, 1000);
				$(".insideBannerRegister").show("slide", { direction: "left" }, 1000);*/
				$( ".insideBannerRegister" ).toggle( "slide" );
    		});
		});

$(document).ready(function () {

				$(function() {
				     var pgurl = window.location.href.substr(window.location.href
				.lastIndexOf("/")+1);
				     $(".navbar-nav li a").each(function(){
				          if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
				          $(this).addClass("active");
				     })
				});
});