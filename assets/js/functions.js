(function ($) {
	$(function() {
	    var initab = 0;
	    var initab2 = 0;
	    var lhash = window.location.hash;
	    if (lhash) {
	        lhash.match(/^#(\d+)-(\d+)/);
	        initab = RegExp.$1 - 1;
	        initab2 = RegExp.$2 - 1;
	    }
	    
	    // Sidebar box accordions
		$("#cfg-sidebar .cfg-accordion").tabs(".cfg-tabs", {initialIndex: 2,tabs: 'h3', event: 'click'});

	    // Initiating the various tabsets
	    $("#cfg-general-tabsnav").tabs("#cfg-general-panels > div",{initialIndex:initab});
	    $("#cfg-customize-tabsnav").tabs("#cfg-customize-panels > div",{initialIndex:initab});
	    $("#cfg-blocks-tabsnav").tabs("#cfg-blocks-panels > div",{initialIndex:initab});
	    $("#cfg-tools-tabsnav").tabs("#cfg-tools-panels > div",{initialIndex:initab});
	    $("#cfg-assets-tabsnav").tabs("#cfg-assets-panels > div",{initialIndex:initab});
	    
	    
	    // first lets ensure the correct cfg-pane is loaded
	    active = $('#cfg-sidebar h3.current').next().attr('id');
	    $('#cfg-main .cfg-panes').hide();
	    $('#cfg-main .cfg-panes[rel='+active+']').show();
	    
	    // now on click lets load the correct cfg-pane    
	    $('#cfg-sidebar h3').click(function() {
	    	id = $(this).next().attr('id');
	    	$('#cfg-main .cfg-panes').hide();
	    	$('#cfg-main .cfg-panes[rel='+id+']').fadeIn(1000);
	    	return false;
	    });
	    
	    // Initiating the inner tabsets
	    $("ul.cfg-inner-tabs").tabs(".cfg-inner-panes > div",{initialIndex:initab2});    
	    $('ul li a').click(function () {location.hash = $(this).attr('href');});
	    
	    // System info box
	    $("#cfg-system-info tfoot a").click(function(){
			$(this).parent().toggleClass('cfg-open');
			$("#cfg-system-info .cfg-hidden").toggleClass("cfg-hide");
			return false;
	    });
	    
	    // Non accordion sidebar blocks toggle
	    $("#cfg-sidebar .cfg-toggle h3").toggle(function(){
	    	$(this).addClass('current');
	    	$(this).next().toggleClass('cfg-hide');
	    },function(){
	    	$(this).removeClass('current');
	    	$(this).next().toggleClass('cfg-hide');
	    });
	    
	    // System info block toggle - needs to be revised
	    $("#cfg-system-info h3").toggle(function(){
	    	$(this).removeClass('current');
	    	$(this).next().css('display', 'none');
	    },function(){
	    	$(this).addClass('current');
	    	$(this).next().css('display', 'block');
	    });
	    
	    // Initiate the themelet scroller (not working)
	    $("#cfg-themelets").scrollable().mousewheel();
	    
	    $('#cfg-sidebar .cfg-tabs a').click(function(e) {
	        e.preventDefault();
	      });
	});
})(jQuery);