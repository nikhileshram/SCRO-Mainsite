const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});
function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 $( ".mask" ).click(function() {
	$( ".icon-wrap" ).toggleClass('active');
    $('body, .bar').toggleClass('dark');
    // element.classList.toggle("dark-mode");
});