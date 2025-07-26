// Quiz Results Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the page
    initializePage();
    
    // Add event listeners
    addEventListeners();
    
    // Add animations
    addAnimations();
});

function initializePage() {
    // Set up initial state
    console.log('Quiz Results Page Initialized');
    
    // Highlight current user in leaderboard
    highlightCurrentUser();
    
    // Update progress indicators
    updateProgressIndicators();
}

function addEventListeners() {
    // Pagination dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            switchPage(index);
        });
    });
    
    // Action buttons
    const retryBtn = document.querySelector('.btn-retry');
    const nextBtn = document.querySelector('.btn-next');
    
    if (retryBtn) {
        retryBtn.addEventListener('click', function() {
            handleRetry();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            handleNext();
        });
    }
    
    // Leaderboard item interactions
    const leaderboardItems = document.querySelectorAll('.leaderboard-item');
    leaderboardItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Question card interactions
    const questionCards = document.querySelectorAll('.question-card');
    questionCards.forEach(card => {
        card.addEventListener('click', function() {
            toggleQuestionDetails(this);
        });
    });
}

function addAnimations() {
    // Fade in animation for cards
    const cards = document.querySelectorAll('.user-result-card, .leaderboard, .question-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Animate score circle
    animateScoreCircle();
    
    // Animate rank number
    animateRankNumber();
}

function highlightCurrentUser() {
    const currentUserItem = document.querySelector('.leaderboard-item.current-user');
    if (currentUserItem) {
        currentUserItem.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.3)';
    }
}

function updateProgressIndicators() {
    // Update pagination dots based on current page
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === 0); // First page active by default
    });
}

function switchPage(pageIndex) {
    // Update active dot
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === pageIndex);
    });
    
    // Here you would implement page switching logic
    // For now, just show a message
    console.log(`Switching to page ${pageIndex + 1}`);
    
    // Add page transition effect
    const mainContent = document.querySelector('.main-content');
    mainContent.style.opacity = '0.7';
    
    setTimeout(() => {
        mainContent.style.opacity = '1';
    }, 200);
}

function handleRetry() {
    // Show confirmation dialog
    const confirmRetry = confirm('Apakah Anda yakin ingin mengulang quiz?');
    
    if (confirmRetry) {
        // Add loading animation
        const retryBtn = document.querySelector('.btn-retry');
        const originalText = retryBtn.textContent;
        
        retryBtn.textContent = 'Loading...';
        retryBtn.disabled = true;
        
        // Simulate loading
        setTimeout(() => {
            alert('Mengulang quiz...');
            retryBtn.textContent = originalText;
            retryBtn.disabled = false;
        }, 1000);
    }
}

function handleNext() {
    // Add loading animation
    const nextBtn = document.querySelector('.btn-next');
    const originalText = nextBtn.textContent;
    
    nextBtn.textContent = 'Loading...';
    nextBtn.disabled = true;
    
    // Simulate navigation
    setTimeout(() => {
        alert('Melanjutkan ke halaman berikutnya...');
        nextBtn.textContent = originalText;
        nextBtn.disabled = false;
    }, 1000);
}

function toggleQuestionDetails(card) {
    // Toggle expanded state
    const isExpanded = card.classList.contains('expanded');
    
    // Remove expanded class from all cards
    document.querySelectorAll('.question-card').forEach(c => {
        c.classList.remove('expanded');
    });
    
    // Add expanded class to clicked card if it wasn't expanded
    if (!isExpanded) {
        card.classList.add('expanded');
        card.style.transform = 'scale(1.02)';
        
        setTimeout(() => {
            card.style.transform = 'scale(1)';
        }, 200);
    }
}

function animateScoreCircle() {
    const scoreCircle = document.querySelector('.score-circle');
    const percentage = document.querySelector('.percentage');
    
    if (scoreCircle && percentage) {
        const targetPercentage = 73.3;
        let currentPercentage = 0;
        
        const increment = targetPercentage / 50; // 50 steps
        
        const interval = setInterval(() => {
            currentPercentage += increment;
            
            if (currentPercentage >= targetPercentage) {
                currentPercentage = targetPercentage;
                clearInterval(interval);
            }
            
            percentage.textContent = currentPercentage.toFixed(1) + '%';
            
            // Update circle border color based on percentage
            if (currentPercentage < 50) {
                scoreCircle.style.borderColor = '#d32f2f';
            } else if (currentPercentage < 75) {
                scoreCircle.style.borderColor = '#ffc107';
            } else {
                scoreCircle.style.borderColor = '#4a9d5f';
            }
        }, 20);
    }
}

function animateRankNumber() {
    const rankNumber = document.querySelector('.rank-number');
    
    if (rankNumber) {
        const targetRank = 4;
        let currentRank = 1;
        
        const interval = setInterval(() => {
            rankNumber.textContent = currentRank;
            
            if (currentRank >= targetRank) {
                clearInterval(interval);
            } else {
                currentRank++;
            }
        }, 200);
    }
}

// Utility functions
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: bold;
        z-index: 1000;
        transition: all 0.3s ease;
        transform: translateX(100%);
    `;
    
    // Set background color based on type
    switch (type) {
        case 'success':
            notification.style.backgroundColor = '#4a9d5f';
            break;
        case 'error':
            notification.style.backgroundColor = '#d32f2f';
            break;
        case 'warning':
            notification.style.backgroundColor = '#ffc107';
            notification.style.color = '#333';
            break;
        default:
            notification.style.backgroundColor = '#2196f3';
    }
    
    // Add to document
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Export functions for potential use in other scripts
window.QuizResults = {
    showNotification,
    switchPage,
    handleRetry,
    handleNext
};