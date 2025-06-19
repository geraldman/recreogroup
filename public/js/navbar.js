var prevScrollpos = window.pageYOffset;
window.onscroll = function (){
    var currentScrollPos = window.pageYOffset;
    const navbarElement = document.querySelector(".navbar");
    
    // Handling if dropdown accidentally opened when scrolling
    const dropdownContent = document.querySelector('.dropdown-content');
    const isMobile = () => window.innerWidth < 992;
    
    if(prevScrollpos > currentScrollPos){
        navbarElement.style.top = "0";
    }
    else{
        navbarElement.style.top = "-100px";
        if(isMobile()){
            dropdownContent.classList.add('hidden');
        }
    }
    prevScrollpos = currentScrollPos;
};
