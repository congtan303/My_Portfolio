// menu
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("navbar__open"); // method toggle: ẩn hiện (thay đổi) class
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
    menu.classList.toggle("navbar__open"); 
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
})

// scroll to top
$(document).ready(function()  {
    $(window).scroll(function () {
        if($(this).scrollTop()) {
            $('#back__top').fadeIn();
        } else {
            $('#back__top').fadeOut();
        }
    });
})

$('#back__top').click(function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})