;
// Начинать писать отсюда!!!!

$(document).ready(function(){
	$(document).on("click", ".js-main-nav", function(){
		$(".main-nav__list").toggleClass("show");
		});

  function showEL(clickEl, showEl){

      $(document).on("click", clickEl, function(){
    if($(showEl).is(":visible")){
      $(showEl).slideUp();
    }
    else{
      $(showEl).slideDown();
    }
  })
};

  showEL(".js-tyre-selection__form", ".tyre-selection__popup");
  showEL(".js-filter__type", ".hide-filter__type");
  showEL(".js-filter__size", ".hide-filter__size");



/*
	$(document).on("click", ".js-tyre-selection__form", function(){
		if($(".tyre-selection__popup").is(":visible")){
			$(".tyre-selection__popup").slideUp();
		}
		else{
			$(".tyre-selection__popup").slideDown();
		}

		});

*/
//для сертификата
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.popup-form__link').magnificPopup({
		type: 'inline',
	});

	//плавное перемещение по странице
$('.scroll')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

//кнопка наверх
$(document).on("click", ".scroll__top", function(){
	$("html, body").animate({
		scrollTop: 0
	}, 1000);

});

});