$(document).ready(function(){

	$('.sous_menu').hide();
	$('.headform').hide();
	$('.archives li ul').hide();
	$('.autres_articles').hide();
    
	// MENU HAMBURGER

	$('.menu_hamburger').click(function(){

		$('nav').toggleClass('menu_burger');
		// $('.menu_hamburger').css('background-image', 'url(/images/icons/cancel.svg)');	
	});


	// CHAMPS DE RECHERCHE

	$('.fa-search').click(function(){
		$('.headform').toggle();
	});

	// SOUS MENU ACTIVITES

	$('.onglet_activites').click(function(){
		$('.sous_menu').slideToggle(50);
	});

	$('.onglet_activites').focusout(function(){
		$('.sous_menu').slideToggle(100);
	});

	// SIDEBAR ACTIVITES ET NEWS

	$(window).scroll(function(){

	    $(".sidebar").css("top",Math.max(0,536-$(this).scrollTop()));
	    $(".blogsidebar").css("top",Math.max(0,135-$(this).scrollTop()));
	});


	var $onglet = $('.sidebar');
	var $ongletBlog = $('.blogsidebar');

	$onglet.find('span').on('click',function() {
	    var opened = !!$onglet.data('opened');
	    if(opened) {
	        $onglet.animate({ left: 0 });
	        $('span i').removeClass("fa-angle-right").addClass("fa-angle-left");
	    } else {
	        $onglet.animate({ left: -221 });
	        $('span i').removeClass("fa-angle-left").addClass("fa-angle-right");
    	}
    $onglet.data('opened', !opened);
	});

	// SIDEBAR AUTRES ARTICLES

	$('.titre_alim a').click(function(){
		$('.alim').slideToggle(250);
	});
	$('.titre_eco a').click(function(){
		$('.ecocitoyen').slideToggle(250);
	});
	$('.titre_renov a').click(function(){
		$('.renov').slideToggle(250);
	});
	$('.titre_art a').click(function(){
		$('.artist').slideToggle(250);
	});
	

	// SIDEBAR ARCHIVES MOIS

	$('.arch_2016 a').click(function(){
		$('.autres_articles').slideUp(250);
		$('.arch_2016 ul').slideToggle(250);
	});
	$('.arch_2015 a').click(function(){
		$('.autres_articles').slideUp(250);
		$('.arch_2015 ul').slideToggle(250);
	});
	$('.arch_2014 a').click(function(){
		$('.autres_articles').slideUp(250);
		$('.arch_2014 ul').slideToggle(250);
	});
	$('.arch_2013 a').click(function(){
		$('.autres_articles').slideUp(250);
		$('.arch_2013 ul').slideToggle(250);
	});

	// FORMULAIRE

	$('#envoyer').click(function(){
		valid = true;
		if($('#name').val() == ''){
			$('#name').val('Veuillez entrer votre nom')
			$('#name').css('border','2px solid red');
			valid = false;
		} else {
			$('#name').css('border','0px');
		};
		if($('#firstname').val() == ''){
			$('#firstname').val('Veuillez entrer votre prénom')
			$('#firstname').css('border','2px solid red');
			valid = false;
		} else {
			$('#firstname').css('border','0px');
		};
		if($('#date').val() == ''){
			$('#date').val('Veuillez entrer une date')
			$('#date').css('border','2px solid red');
			valid = false;
		} else {
			$('#date').css('border','0px');
		};
		if($('#mail').val() == ''){
			$('#mail').val('Veuillez entrer votre adresse email')
			$('#mail').css('border','2px solid red');
			valid = false;
		} 
		else {
			$('#mail').css('border','0px');
		};
		return valid;
	});


});