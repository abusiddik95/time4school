

$(document).ready(function() {
 
  $("#edu-slider").owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 1000,
      autoPlay: 5000,
      paginationSpeed : 1000,
      singleItem:true,
      mouseDrag: false,
      transitionStyle : "goDown"
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false 
  });
  
  
	$(document).ready(function(){
		$('#menu').slicknav();
	});
	
})
