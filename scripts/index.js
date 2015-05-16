$( ".scroll-to-top" ).click( function () {
	$( "html,body" ).animate( {
		scrollTop: 0
	}, 500 );
	return false;
} );

$( ".scroll-to-aboutme" ).click( function() {
	$( "html,body" ).animate( {
		scrollTop: $( "#aboutme" ).offset().top
	}, 300 );
	return false
} );

// Regex kanged from Skrollr
if ( !( /Android|iPhone|iPad|iPod|BlackBerry/i ).test( navigator.userAgent || navigator.vendor || window.opera ) ) {
	// use Skrollr on desktop only
	var s = skrollr.init();
} else {
	// mobile browser
	// TODO: implement a simple scrolling position detection mechanism
}
