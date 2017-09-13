

$(document).ready(function() {

	var navButtonAction = "open";

	$('#nav-button').click(function() {

		if(navButtonAction == "open") {
			$('#main-nav').css('-webkit-transform', 'translate(0,0)');
			$(".site-wrapper").css('-webkit-transform', 'translate(-20%, 0)');
			$(".line.three").css('opacity', '0');
			$(".line.one").css('-webkit-transform', 'rotate(45deg)');
			$(".line.two").css({
				'-webkit-transform': 'rotate(-45deg)',
				top: '30px'
			});
			navButtonAction = "close";
		} else {
			$('#main-nav').css('-webkit-transform', 'translate(100%, 0)');
			$(".site-wrapper").css('-webkit-transform', 'translate(0, 0)');
			$(".line.three").css('opacity', '1');
			$(".line.one").css('-webkit-transform', 'rotate(0)');
			$(".line.two").css({
				'-webkit-transform': 'rotate(0)',
				top: '38px'
			});

			navButtonAction = "open";
		}
	});
});
