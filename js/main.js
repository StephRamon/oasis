$(document).ready(function(){

	$('.sous_menu').hide();
	$('.sous_menu_groupe').hide();
	$('.sous_menu_filtre').hide();
	$('.headform').hide();
	$('.archives li ul').hide();
	$('.autres_articles').hide();
    
	// MENU HAMBURGER
	$('.menu_hamburger').click(function(){
		$('nav').toggleClass('menu_burger');	
	});


	// CHAMPS DE RECHERCHE
	$('.fa-search').click(function(){
		$('.headform').toggle();
	});

	// SOUS MENU ACTIVITES
	$('.onglet_activites').hover(function(){
		$('.sous_menu').slideToggle(1);
	});

	// $('.onglet_activites').focusout(function(){
	// 	$('.sous_menu').toggle(50);
	// });

	// SOUS MENU EN GROUPE
	$('.choix_groupe').hover(function(){
		$('.sous_menu_groupe').slideToggle(1);
	});

	// $('.choix_groupe').focusout(function(){
	// 	$('.sous_menu_groupe').toggle(1);
	// });

	// var $menuG = $('.sous_menu_groupe');
	// $menuG.find('span').on('click', function() {
	// 	var opened= !$menuG.data('opened');
	// 	if(opened) {
	// 		$('span i').removeClass('fa-angle-down').addClass('fa-angle-up');
	// 	} else {
	// 		$('span i').removeClass('fa-angle-up').addClass('fa-angle-down');
	// 	}
	// $menuG.data('opened', !opened);
	// });

	// FILTRE PAR DATES OU PAR TYPES
	$('.filtre').hover(function(){
		$('.sous_menu_filtre').slideToggle(1);
	});


	// SIDEBAR ACTIVITES ET NEWS
	$(window).scroll(function(){
	    $(".sidebar").css("top",Math.max(115,536-$(this).scrollTop()));
	    $(".blogsidebar").css("top",Math.max(115,150-$(this).scrollTop()));
	});


	var $onglet = $('.sidebar');
	var $articles = $('.liste_articles');
	var $text = $('.texte_article');
	var $ongletBlog = $('.blogsidebar');

	$onglet.find('span').on('click',function() {
	    var opened = !!$onglet.data('opened');


	    if (window.innerWidth>1200 || window.innerWidth<945) {
		    if(opened) {
		        $onglet.animate({ left: 0 });
		        $articles.animate({marginLeft: 245});
		        // $text.animate({maxWidth: 50%});
		        $('span i').removeClass("fa-angle-right").addClass("fa-angle-left");
		    } else {
		        $onglet.animate({ left: -221 });
		        $articles.animate({marginLeft: 95});
		        // $text.animate({maxWidth: 56%});
		        $('span i').removeClass("fa-angle-left").addClass("fa-angle-right");
	    	}
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