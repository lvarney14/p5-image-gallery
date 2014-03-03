// Make Foundation Go!
$(document).foundation();

// Your Awesome Scripts!
$(document).ready(function(){

	// Grid View
	$('#grid-view').on('click', function(){

		// Remove default class, 'large-6'
		$('.gallery div').removeClass('large-6');

		// Add 'large-3' class
		$('.gallery div').addClass('large-3');

		// Hide Paragraphs
		$('p').hide();

	});

	// List View
	$('#list-view').on('click', function(){

		// Remove existing class of 'large-3'
		$('.gallery div').removeClass('large-3');

		// Add 'large-6' class
		$('.gallery div').addClass('large-6');

		// Show paragraphs
		$('p').show();

	});

// gallery

$("#immersive_slider").immersive_slider({
  animation: "bounce", // As usual, you can change the animation to these: slide (default), bounce, fade, slideUp, and bounceUp
  slideSelector: ".slide", // This option will let you assign custom selector for each slides in case .slide is already taken
  container: ".main", // This option lets you define the container of which the background will appear. Make sure the slider is inside this container as well.
  cssBlur: false, // Experimental: In case you don't want to keep adding new data-blurred attributes, trigger this to true and it will generate the blur image on the fly (more info below).
  pagination: true, // Toggle this to false if you don't want a pagination
  loop: true, // Toggle to false if you don't want the slider to loop. Default is true.
  autoStart: 5000 // Define the number of milliseconds before it navigates automatically. Change this to 0 or false to disable autoStart. The default value is 5000.
});

$("#immersive_slider").moveNext();

 $("#immersive_slider").movePrev();