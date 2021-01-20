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
// function darkmode() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//  }
//  $( ".mask" ).click(function() {
// 	$( ".icon-wrap" ).toggleClass('active');
//     $('body, .bar').toggleClass('dark');
//     // element.classList.toggle("dark-mode");
// });
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark-mode');
});
function hideLoader() {
    $('#loading').hide();
}

$(window).ready(hideLoader);

// Strongly recommended: Hide loader after 20 seconds, even if the page hasn't finished loading
setTimeout(hideLoader, 20 * 1000);


