/** @file index.js
 */

$(document).ready(function(){
	//
	// Open in a new window.
	$('a[class=link-new-window]').attr('target', '_blank');
	$('a[class=link-new-window]').prepend('<span class="glyphicon glyphicon-new-window"></span> ');
	//
	// Handle tabs.
	if(window.location.hash){
		$('a[href="#'+window.location.hash.substr(1).split('?')[0]+'"]').tab('show');
	}else{
		$('a[href="#home"]').tab('show');
	}
	$('a[data-toggle="tab"]').click(function (e){
		$('#navbar-menu li').removeClass('active');
		var href = $(this).attr('href');
		window.location.hash = href;
	});
});

