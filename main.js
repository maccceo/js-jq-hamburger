//creo oggetto tasto Hamburger e tasto chiusura menù hamburger
var hamburgerBtn 		= $("#hamburgerBtn");
var hamburgerBtn__close = $("#hamburgerBtn__close");
 
// aspetta che la pagina sia stata caricata completamente
$( document ).ready(function() {
    console.log("documento pronto");
    //azione al click di hamburgerButton
    	hamburgerBtn.click(function() {
    		//nascondo menù lungo, mostro menù hamburger
    		$(".header-right").hide();
    		$(".hamburger-menu").show("fast");
    	});

    	//azione al click del tasto per chiudere il menù hamburger
    	hamburgerBtn__close.click(function() {
    		//nascondo menù hamburger, mostro menù lungo
    		$(".hamburger-menu").hide("fast");
    		$(".header-right").show();
    	});
});
