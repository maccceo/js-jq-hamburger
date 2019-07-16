//creo oggetto tasto Hamburger e tasto chiusura menù hamburger
var hamburgerBtn 		= $("#hamburgerBtn");
var hamburgerBtn__close = $("#hamburgerBtn__close");
 

//azione al click di hamburgerButton
hamburgerBtn.click(function() {
	//nascondo menù lungo, mostro menù hamburger
	$(".header-right").hide();
	$(".hamburger-menu").show("slow");
});

//azione al click del tasto per chiudere il menù hamburger
hamburgerBtn__close.click(function() {
	//nascondo menù hamburger, mostro menù lungo
	$(".hamburger-menu").hide("slow");
	$(".header-right").show();
});