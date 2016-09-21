$(function(){
	$('#slides-lg').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		speed:2000
	
	});

	$('#slides-sm').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		speed:2000
	});

	
})



createNavigation("#main-nav");
createNavigation("#portfolio-nav");
createNavigation("#footer-nav");

$(function() {
    $(".dial").knob({
    	thickness: 0.15,
    	width:204,
    	height:204,
        fgColor : '#963e23',
        bgColor: 'transparent',
        rotation: 'anticlockwise'
    });
});






function createNavigation(id)
{
	var nav = $(id);
	nav.find("ul").addClass("hidden-xs");
	$("<select class='nav-select visible-xs' />").appendTo(nav);
	var select = nav.find("select");

	// Populate dropdown with menu items
	nav.find("a").each(function() {
		var el = $(this);
			$("<option />", {
			"value"   : el.attr("href"),
			"text"    : el.text()
		}).appendTo(id + " select");
	});

	$(id + " select").change(function() {
		window.location = $(this).find("option:selected").val();
	});
}


var map;

function initMap() {
	var myLatLng = {lat: 38.909685, lng: -77.031055};
	var image = 'images/marker.png'; //картинка маркера

	map = new google.maps.Map(document.getElementById('map'), {
		center: myLatLng,
		zoom: 9,
		scrollwheel: false, 
		zoomControl: true 
	});
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'Hello World!',
		icon: image 
	  });
}


