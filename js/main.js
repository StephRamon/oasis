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




	// SIDEBAR ACTIVITES ET NEWS

	

	$(window).scroll(function(){
	    $(".sidebar").css("top",Math.max(0,536-$(this).scrollTop()));
	});


	var $onglet = $('.sidebar');
	$onglet.find('span').click(function () {
	    var opened = !!$onglet.data('opened');
	    if(opened) {
	        $onglet.animate({ left: -221 });
	    } else {
	        $onglet.animate({ left: 0 });
    	}
    $onglet.data('opened', !opened);
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



	// FORMULAIRE

	$('#envoyer').click(function(){
		valid = true;
		if($('#name').val() == ''){
			$('#name').val('Veuillez entrer votre nom')
			$('#name').css('border','2px solid red');
			valid = false;
		} else {
			$('#name').css('border','0px');
		}
		if($('#firstname').val() == ''){
			$('#firstname').val('Veuillez entrer votre prénom')
			$('#firstname').css('border','2px solid red');
			valid = false;
		} else {
			$('#firstname').css('border','0px');
		}
		if($('#mail').val() == ''){
			$('#mail').val('Veuillez entrer votre adresse email')
			$('#mail').css('border','2px solid red');
			valid = false;
		} 
		else {
			$('#mail').css('border','0px');
		}
		return valid;
	});


});

