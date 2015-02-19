$(window).scroll(function () {
	modifyNavbarSize();
	determineSection();
});

function modifyNavbarSize(event) {
	var distanceFromTop = $(window).scrollTop();
	if(distanceFromTop === 0) {
		$('.navbar').addClass('large_nav_bar');
	} else {
		$('.navbar').removeClass('large_nav_bar');
	}
}

var currentSelectedLink = $('#homeLink');

function determineSection() {
	var currPosition = $(window).scrollTop();
	var homePosition = $('#HomeSection').offset().top;
	var portfolioPosition = $('#PortfolioSection').offset().top - 50;
	var aboutPosition = $('#AboutSection').offset().top - 50;
	var contactPosition = $('#ContactSection').offset().top - 50;
	currentSelectedLink.removeClass('selected');

	if(currPosition >= 0 && currPosition < portfolioPosition) {
		$('#homeLink').addClass('selected');
		currentSelectedLink = $('#homeLink');
	}

	if(currPosition >= portfolioPosition && currPosition < aboutPosition){
		$('#portfolioLink').addClass('selected');
		currentSelectedLink = $('#portfolioLink');
		//console.log("currentSelectedLink: ");
		//console.log(currentSelectedLink);
	}

	if(currPosition >= aboutPosition && currPosition < contactPosition) {
		$('#aboutLink').addClass('selected');
		currentSelectedLink = $('#aboutLink');
	}

	if(currPosition >= contactPosition) {
		$('#contactLink').addClass('selected');
		currentSelectedLink = $('#contactLink');
	}

}

$('#contactLink').click(function () {
	$('html,body').animate({scrollTop: (($('#ContactSection').offset().top) - 50)}, 1000);
	$('#contactLink').addClass('.selected');
});

$('#aboutLink').click(function () {
	$('html,body').animate({scrollTop: (($('#AboutSection').offset().top) - 50)}, 1000);
});

$('#portfolioLink').click(function () {
	$('html,body').animate({scrollTop: (($('#PortfolioSection').offset().top) - 50)}, 1000);
});

$('#homeLink').click(function () {
	$('html,body').animate({scrollTop: $('#HomeSection').offset().top}, 1000);
});

var images = ["https://farm4.staticflickr.com/3146/3091005457_e12be31c1c_z.jpg", 
			  "https://farm4.staticflickr.com/3122/3091840402_d116010b65_z.jpg", 
			  "https://farm4.staticflickr.com/3132/3091831864_8371eb7c90_z.jpg", 
			  "https://farm4.staticflickr.com/3244/3140249892_2b4399b9bf_z.jpg"];

var currImageIndex = 0;

$('#leftButton').click(function() {
	var imageTag = $('#carousel > img');
	imageTag.fadeToggle(700, function() {
		if(currImageIndex === 0) {
			//go to last image
			imageTag.attr('src', images[images.length -1]);
			currImageIndex = images.length -1;
		} else {
			//change img source to currImageIndex-1
			imageTag.attr('src', images[currImageIndex - 1]);
			currImageIndex -= 1;
		}
	});
	imageTag.fadeToggle(700);
});

$('#rightButton').click(function () {
	var imageTag = $('#carousel > img');
	imageTag.fadeToggle(700, function() {
		if(currImageIndex === images.length -1){
			//change to first image
			imageTag.attr('src', images[0]);
			currImageIndex = 0;
		} else {
			//else change img source to currImageIndex+1
			imageTag.attr('src', images[currImageIndex+1]);
			currImageIndex += 1;
		}
	});
	imageTag.fadeToggle(700);
});

$('.modal_button').click(function() {
	$('.modal').css("display", "block");
	$('.navbar').css("opacity", "0.5");
	$('.section').css("opacity", "0.5");
	$('.footer').css("opacity", "0.5");
});

$('.modal-exit-button').click(function () {
	$('.modal').css("display", "none");
	$('.navbar').css("opacity", "1");
	$('.section').css("opacity", "1");
	$('.footer').css("opacity", "1");
});