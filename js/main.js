$(function() {
    $(".page-scroll").bind("click", function(a) {
        var b = $(this);
        var hh = $("#header").outerHeight();
        if($(".nav-menu").hasClass("toggled")) {
        	hh = hh - $(".nav-menu").outerHeight();
        }
        $("html, body").stop().animate({
            scrollTop: $(b.attr("href")).offset().top - hh
        }, 1200, "easeInOutExpo"),
        a.preventDefault();
        $(".nav-menu").removeClass("toggled");
    });

    $(".menu-toggle").bind("click", function(a) {
    	$(".nav-menu").toggleClass("toggled");
    });    
   
	// modals
	$('a[data-modal-id]').click(function(e) {
	    e.preventDefault();
	    var modalBox = $(this).attr('data-modal-id');
	    $('#'+modalBox).fadeIn();
	});    
  
	$(".js-modal-close").click(function() {		
		
		$(".modal-box").fadeOut();
		var div = $(this).parent();
		var url = div.find("iframe").attr('src');
		div.find("iframe").attr('src', '');
		div.find("iframe").attr('src', url);
	}); 
	//modals end
	
	$(".blog-item").click(function() {		
		fdata = this.getAttribute('fdata');
		$('#blog-window').fadeIn();
		$('#blog-frame').find("iframe").attr('src', '');
		$('#blog-frame').find("iframe").attr('src', fdata);
	}); 
 
});