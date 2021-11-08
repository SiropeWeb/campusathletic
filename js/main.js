//strict mode enabled
"use strict";


$(window).on("load",function(){

	//Filtering with isotope
	var $grid = $('.grid').isotope({
		// options
		itemSelector: '.grid-item',
		layoutMode: 'masonry',
		percentPosition: true
	});

	// filter items on button click
	$('.filter-button-group').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});    
});


$(document).on("ready",function(){


	//Smooth scrolling
	smoothScroll.init({
		selector: '[data-scroll]',
		selectorHeader: null, 
		speed: 1000,
		easing: 'easeInQuint', 
		offset: 20, 
		callback: function ( anchor, toggle ){}
	});


	//stellar paralax effect
	$(window).stellar({
		horizontalScrolling: false,
		verticalScrolling: true,
		horizontalOffset: 0,
		verticalOffset: 0,
		responsive: true,
		scrollProperty: 'scroll',
		positionProperty: 'transform',
		parallaxBackgrounds: true,
		parallaxElements: true,
		hideDistantElements: true,

		hideElement: function($elem) { $elem.hide(); },
		showElement: function($elem) { $elem.show(); }
	});


	//animated nav button
	$(".custom_butt").on('click',function(){
		$(this).toggleClass("change");
	});


	//animation on scroll
	new WOW().init();


	//magnific popup
	$('.grid').each(function() { 
		$(this).magnificPopup({
			delegate: 'a', 
			type: 'image',
			gallery: {
				enabled:true
			}
		});
	});


	/* --counter up
	-------------------------------------*/
	$('.counter').counterUp({
		delay: 10,
		time: 1500
	});
	

	//tooltip
	$('[data-toggle="tooltip"]').tooltip();


	//owl carousel
	$("#comment_slider").owlCarousel({
		navigation : false,
		slideSpeed : 500,
		paginationSpeed : 500,
		items: 3,
		singleItem: true,
		autoPlay: true,
		autoHeight: false

		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false
	});

	$("#blog .owl-carousel").owlCarousel({
		navigation : false,
		slideSpeed : 500,
		paginationSpeed : 500,
		items: 3,
		singleItem: false,
		autoPlay: true,
		autoHeight: false,
		itemsDesktop : [1600, 3],
		itemsDesktopSmall : [1200, 3],
		itemsTablet: [1000, 2],
		itemsMobile : [600, 1]
	});



	/*--google maps
	-------------------------------------*/
	google.maps.event.addDomListener(window, 'load', init);
	function init() {
		var mapOptions = {
			zoom: 12,
			scrollwheel: false,
			center: new google.maps.LatLng(43.2772, -2.8399)
			
		};
		var mapElement = document.getElementById('map');
		
		var map = new google.maps.Map(mapElement, mapOptions);
		/*UN SOLO MARCADOR
		marker = new google.maps.Marker({
			map: map,
			draggable: false,
			animation: google.maps.Animation.BOUNCE,
			position: new google.maps.LatLng(43.2510, -2.9178)
		});
		marker.setAnimation(google.maps.Animation.BOUNCE);*/
		
		/* VARIOS MARCADORES */
		var markers = [];
		var neighborhoods = [
		  {lat: 43.2772, lng: -2.8399},//MARCADOR LEZAMA
		  //{lat: 43.3162, lng: -3.0200}//MARCADOR
		];
		for (var i = 0; i < neighborhoods.length; i++) {
			addMarkerWithTimeout(neighborhoods[i], i * 200);
	  	}
	 	function addMarkerWithTimeout(position, timeout) {
		  window.setTimeout(function() {
			markers.push(new google.maps.Marker({
			  position: position,
			  map: map,
			  animation: google.maps.Animation.DROP
			}));
		  }, timeout);
		}
		/* VARIOS MARCADORES */
		
	}


	/*-- fullscreen youtube video bg
	--------------------------------- --*/
 	//$(".player").mb_YTPlayer();

	
});