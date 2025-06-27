// Image carousel functionality
let currentImageIndex = 0;
const totalImages = 3; // Assuming 3 tutorial images

// Function to go to next image
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    updateCarouselImage();
    
    // Add a subtle animation
    const imageElement = document.querySelector('.tutorial-image');
    imageElement.style.transform = 'scale(0.95)';
    setTimeout(() => {
        imageElement.style.transform = 'scale(1)';
    }, 150);
}

// Function to go to previous image
function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    updateCarouselImage();
    
    // Add a subtle animation
    const imageElement = document.querySelector('.tutorial-image');
    imageElement.style.transform = 'scale(0.95)';
    setTimeout(() => {
        imageElement.style.transform = 'scale(1)';
    }, 150);
}

// Function to update carousel image based on current index
function updateCarouselImage() {
    const imageElement = document.querySelector('.tutorial-image');
    
    // Different gradient colors for different steps
    const gradients = [
        'linear-gradient(135deg, #b3d9ff, #87ceeb)',
        'linear-gradient(135deg, #ffb3d9, #ff87ce)',
        'linear-gradient(135deg, #d9ffb3, #ceeb87)'
    ];
    
    imageElement.style.background = gradients[currentImageIndex];
    
    // Add a small indicator of which step we're on
    const stepIndicator = document.querySelector('.step-indicator');
    if (stepIndicator) {
        stepIndicator.textContent = `Langkah ${currentImageIndex + 1}`;
    }
}

// Function to go back (can be customized based on navigation needs)
function goBack() {
    // Simple alert for demonstration
    // In a real application, this would navigate to the previous page
    if (confirm('Apakah Anda yakin ingin kembali ke halaman sebelumnya?')) {
        // You can use history.back() or window.location.href = 'previous-page.html'
        window.history.back();
    }
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth transitions to all elements
    const style = document.createElement('style');
    style.textContent = `
        .tutorial-image {
            transition: transform 0.3s ease, background 0.5s ease;
        }
        
        .carousel-btn:active {
            transform: scale(0.95);
        }
        
        .back-btn:active {
            transform: scale(0.95);
        }
        
        .contact-btn:active {
            transform: scale(0.95);
        }
    `;
    document.head.appendChild(style);
    
    // Add hover effects to navigation items
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-1px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add click effects to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });
    
    // Initialize carousel
    updateCarouselImage();
    
    // Auto-advance carousel every 5 seconds (optional)
    // setInterval(nextImage, 5000);
});

// Add keyboard navigation for carousel
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        previousImage();
    } else if (event.key === 'ArrowRight') {
        nextImage();
    } else if (event.key === 'Escape') {
        goBack();
    }
});

// Add touch/swipe support for mobile devices
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(event) {
    touchStartX = event.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            // Swipe right - go to previous image
            previousImage();
        } else {
            // Swipe left - go to next image
            nextImage();
        }
    }
}

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});