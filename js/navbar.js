var prevScrollpos = window.pageYOffset;
window.onscroll = function (){
    var currentScrollPos = window.pageYOffset;
    const navbarElement = document.querySelector(".navbar");
    const sideNavbarElement = document.querySelector(".sidebar");
    // Handling if dropdown accidentally opened when scrolling
    const dropdownContent = document.querySelector('.dropdown-content');
    const isMobile = () => window.innerWidth < 992;
    
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
        if(isMobile()){
            dropdownContent.classList.add('hidden');
        }
    }
    prevScrollpos = currentScrollPos;
};
