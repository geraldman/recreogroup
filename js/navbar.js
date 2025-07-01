var prevScrollpos = window.pageYOffset;
window.onscroll = function (){
    var currentScrollPos = window.pageYOffset;
    const navbarElement = document.querySelector(".navbar");
    const sideNavbarElement = document.querySelector(".sidebar");
    const dropdownMenu = document.querySelector(".dropdown-content");
    // Handling if dropdown accidentally opened when scrolling
    
    if(prevScrollpos > currentScrollPos){
        navbarElement.style.top = "0";
        if(sideNavbarElement != null){
            sideNavbarElement.classList.remove("scrolled");
        }
    }
    else{
        navbarElement.style.top = "-100px";
        if(sideNavbarElement != null){
            sideNavbarElement.classList.add("scrolled");
        }
        if (dropdownMenu && dropdownMenu.classList.contains('active')) {
            dropdownMenu.classList.remove('active');
        }
    }
    prevScrollpos = currentScrollPos;
};

document.addEventListener('DOMContentLoaded', function(){
    const hamburgerButton = document.querySelector(".mobile-navbar img");
    const dropdownMenu = document.querySelector(".dropdown-content");

    if(hamburgerButton && dropdownMenu){
        hamburgerButton.addEventListener('click', function(){
            dropdownMenu.classList.toggle('active');
        });
    }
});

