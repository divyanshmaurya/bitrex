$(document).ready(function (e) {
	
	$(document).ready(function() {
    
   $('input[name="optionsRadios"]').on('change', function() {
  // this, in the anonymous function, refers to the changed-<input>:
  // select the element(s) you want to show/hide:
  $('#tshirt-div')
      // pass a Boolean to the method, if the numeric-value of the changed-<input>
      // is exactly equal to 2 and that <input> is checked, the .business-fields
      // will be shown:
      .toggle(+this.value === 1 && this.checked);
// trigger the change event, to show/hide the .business-fields element(s) on
// page-load:
}).change();

 $('#tshirt-div').show();
});
	
	$('a.smooth-scroll').on('click', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1000, 'easeInOutExpo');
		event.preventDefault();
	});

	$('[data-spy="scroll"]').each(function () {
		var $spy = $(this).scrollspy('refresh');
	});

	//jQuery to collapse the navbar on scroll
	$(window).scroll(function () {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});
});

$('#register').hide();
