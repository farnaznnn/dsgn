$(document).ready(function() {
	$('#products-slider').owlCarousel({
		loop: true,
		slideSpeed: 300,
		navSpeed: 1000,
		singleItem: true,
		items: 4,
		margin: 20,
		stagePadding: 30,
		nav: true,
		navText: [ "<img src='./assets/images/right-arrow.png'>", "<img src='./assets/images/left-arrow.png'>" ],
		rewindSpeed: 500,
		dots: true,
		responsive: {
			0: {
				items: 4
			},
			600: {
				items: 4
			},
			1000: {
				items: 4
			}
		}
	});

	$('#newsSlider').owlCarousel({
		loop: true,
		autoplay: true,
		slideSpeed: 300,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		navSpeed: 1000,
		singleItem: true,
		items: 1,
		margin: 10,
		stagePadding: 0,
		nav: false,
		rewindSpeed: 500,
		dots: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});

	$('.move').on('click', function(e) {
		if (this.hash !== '') {
			e.preventDefault();
			var hash = this.hash;
			$('html, body').animate(
				{
					scrollTop: $(hash).offset().top - 150
				},
				900,
				function() {
					// windows.location.hash = hash;
				}
			);
		}
	});
	$('#itemSlider').lightSlider({
		loop:true,
		gallery:false,
		item:4,
		vertical:true,
		// verticalHeight:100,
		slideMargin:0,
		nextHtml: "<img src='./assets/images/arrowup.png'>" ,
		prevHtml: "<img src='./assets/images/arrowdown.png'>",
	  });  

	
	$('.custom-select').each(function() {
		$(this).wrap("<span class='select-wrapper'></span>");
		$(this).after("<span class='holder'></span>");
	});
	$('.custom-select')
		.change(function() {
			var selectedOption = $(this).find(':selected').text();
			$(this).next('.holder').text(selectedOption);
		})
		.trigger('change');

	// $(this).next('.holder').text($(this).find(':selected').text());
	// $('.custom-select').val(0);

	document.addEventListener('DOMContentLoaded', function() {
		var stickymenu = document.getElementById('fixedmenu');
		var stickymenuoffset = stickymenu.offsetTop;

		window.addEventListener('scroll', function(e) {
			requestAnimationFrame(function() {
				if (window.pageYOffset > stickymenuoffset) {
					stickymenu.classList.add('sticky');
				} else {
					stickymenu.classList.remove('sticky');
				}
			});
		});
	});
});
