$(function(){
  $(".menu a, .header__icon, .footer__logo").on('click',  function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

  $('.menu__btn, .menu a').on('click',function(){
    $('.menu__list').toggleClass('menu__list--active')
  });

  $('.slider').slick({
    arrows:false,
    dots:true,
  });

  $(window).on("scroll", function() {
    $('.header__top').toggleClass("header__top--active", $(this).scrollTop() > $(window).height());
  });

  var mixer = mixitup('.gallery__content');
}); 