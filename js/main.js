$(document).ready(function(){

	$('.sous_menu').hide();
	$('.headform').hide();
    
	// MENU HAMBURGER

	$('.menu_hamburger').click(function(){

		$('nav').toggleClass('menu_burger');
		// $('.menu_hamburger').css('background-image', 'url(/images/icons/cancel.svg)');

			
	})

	// CHAMPS DE RECHERCHE

	$('.fa-search').click(function(){
		$('.headform').toggle(50);
	})

	// SOUS MENU ACTIVITES

	$('.onglet_activites').click(function(){
		$('.sous_menu').slideToggle(50);
	})

	$('.onglet_activites').focusout(function(){
		$('.sous_menu').slideToggle(100);
	});


	// MENU FIXE

	// var nav = $('.menu');

	// $(window).scroll(function(){
	// 	if($(this).scrollTop() >140) {
	// 		nav.addClass("f-nav");
	// 	}
	// 	else {
	// 		nav.removeClass("f-nav");
	// 	}
	// });

});
