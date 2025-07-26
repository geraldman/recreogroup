// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize event listeners
    setupCardInteractions();
    setupButtonInteractions();
    setupHeaderInteractions();
    
    // Add loading animations
    addLoadingAnimations();
}

// Card Interactions
function setupCardInteractions() {
    const cards = document.querySelectorAll('.content-card');
    
    cards.forEach(card => {
        // Add click event
        card.addEventListener('click', function() {
            handleCardClick(this);
        });
        
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Button Interactions
function setupButtonInteractions() {
    // Join button
    const joinBtn = document.querySelector('.join-btn');
    joinBtn.addEventListener('click', function() {
        handleJoinClick();
    });
    
    // Start buttons
    const startBtns = document.querySelectorAll('.start-btn');
    startBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent card click
            handleStartClick(this);
        });
    });
}

// Header Interactions
function setupHeaderInteractions() {
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', function() {
        handleLogoClick();
    });
}

// Event Handlers
function handleCardClick(card) {
    // Add click animation
    card.style.transform = 'scale(0.95)';
    setTimeout(() => {
        card.style.transform = 'translateY(-5px)';
    }, 150);
    
    // Get card info
    const cardTitle = card.querySelector('h3')?.textContent || 'Content';
    console.log(`Card clicked: ${cardTitle}`);
    
    // You can add navigation logic here
    showNotification(`Opening ${cardTitle}...`);
}

function handleStartClick(button) {
    // Add button animation
    button.style.transform = 'scale(0.9)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 150);
    
    // Get parent card info
    const card = button.closest('.content-card');
    const cardTitle = card.querySelector('h3')?.textContent || 'Content';
    
    console.log(`Start button clicked for: ${cardTitle}`);
    showNotification(`Starting ${cardTitle}...`);
}

function handleJoinClick() {
    showNotification('Redirecting to registration...');
    console.log('Join button clicked');
}

function handleLogoClick() {
    showNotification('Welcome to EduLearn!');
    console.log('Logo clicked');
}

// Utility Functions
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Style notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        backgroundColor: '#4caf50',
        color: 'white',
        padding: '12px 20px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        zIndex: '1000',
        opacity: '0',
        transition: 'opacity 0.3s ease'
    });
    
    // Add to document
    document.body.appendChild(notification);
    
    // Show animation
    setTimeout(() => {
        notification.style.opacity = '1';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function addLoadingAnimations() {
    // Add fade-in animation to cards
    const cards = document.querySelectorAll('.content-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Dynamic Content Functions
function addNewCard(sectionTitle, cardData) {
    const section = Array.from(document.querySelectorAll('.section-title'))
        .find(title => title.textContent === sectionTitle)
        ?.parentElement;
    
    if (!section) return;
    
    const grid = section.querySelector('.content-grid');
    const newCard = createCard(cardData);
    grid.appendChild(newCard);
    
    // Re-initialize interactions for new card
    setupCardInteractions();
}

function createCard(cardData) {
    const card = document.createElement('div');
    card.className = 'content-card';
    
    card.innerHTML = `
        <div class="card-image ${cardData.backgroundClass || ''}"></div>
        <div class="card-content">
            ${cardData.title ? `<h3>${cardData.title}</h3>` : ''}
            <button class="start-btn">Start</button>
        </div>
    `;
    
    return card;
}

// Search functionality (if needed)
function searchContent(query) {
    const cards = document.querySelectorAll('.content-card');
    const searchTerm = query.toLowerCase();
    
    cards.forEach(card => {
        const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
        const isVisible = title.includes(searchTerm);
        
        card.style.display = isVisible ? 'block' : 'none';
    });
}

// Export functions for potential use
window.EduLearnApp = {
    addNewCard,
    searchContent,
    showNotification
};