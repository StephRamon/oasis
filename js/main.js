$(document).ready(function(){

	$('.sous_menu').hide();
    
	// MENU HAMBURGER

	$('.menu_hamburger').click(function(){

		$('nav').toggleClass('menu_burger');
		// $('.menu_hamburger').css('background-image', 'url(/images/icons/cancel.svg)');
			
	})

	// CHAMPS DE RECHERCHE

	$('.fa-search').click(function(){
		$('.headform').css('display','block');
	})

	// SOUS MENU ACTIVITES

	$('.onglet_activites').mouseover(function(){
		$('.sous_menu').show(100);
	})

	$('.onglet_activites,.sous_menu').mouseout(function(){
		$('.sous_menu').hide(100);
	})

});
