//creo oggetto tasto Hamburger
var hamburgerButton = $("#hamburgerButton");


//azione al click di hamburgerButton
hamburgerButton.click( function(){

	console.log('cliccato');

	//mostro menù hamburger
	$(".hamburger-menu").show();

	//nascondo menù lungo
	$(".header-right").hide();
});