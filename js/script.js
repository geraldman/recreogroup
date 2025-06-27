// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const tutorialCards = document.querySelectorAll('.tutorial-card');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        tutorialCards.forEach(card => {
            const cardHeader = card.querySelector('.card-header');
            const cardText = cardHeader ? cardHeader.textContent.toLowerCase() : '';
            
            if (cardText.includes(searchTerm)) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.3s ease-in';
            } else {
                card.style.display = 'none';
            }
        });
    });
    
    // Category menu interactions
    const categoryItems = document.querySelectorAll('.category-item');
    
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            categoryItems.forEach(cat => cat.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Add some visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Here you could add filtering logic based on category
            console.log('Category selected:', this.querySelector('span').textContent);
        });
    });
    
    
    
    uploadBtn.addEventListener('click', function() {
        // Create a file input element
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.multiple = true;
        
        fileInput.addEventListener('change', function(e) {
            const files = e.target.files;
            if (files.length > 0) {
                console.log('Files selected:', files.length);
                // Here you would handle file upload
                alert(`${files.length} file(s) selected for upload!`);
            }
        });
        
        fileInput.click();
    });
    
    // Tutorial card interactions
    const detailBtns = document.querySelectorAll('.detail-btn');
    
    detailBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.tutorial-card');
            const cardHeader = card.querySelector('.card-header');
            const title = cardHeader ? cardHeader.textContent : 'Tutorial';
            
            // Add loading effect
            this.textContent = 'Loading...';
            this.disabled = true;
            
            setTimeout(() => {
                this.textContent = 'Selengkapnya';
                this.disabled = false;
                
                // Here you would navigate to tutorial detail page
                console.log('Opening tutorial:', title);
                alert(`Membuka tutorial: ${title}`);
            }, 1000);
        });
    });
    
    // Pagination functionality
    const pageNums = document.querySelectorAll('.page-num');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentPage = 3; // Current active page
    
    pageNums.forEach(pageNum => {
        pageNum.addEventListener('click', function() {
            if (!this.classList.contains('page-dots')) {
                // Remove active class from all page numbers
                pageNums.forEach(p => p.classList.remove('active'));
                
                // Add active class to clicked page
                this.classList.add('active');
                
                currentPage = parseInt(this.textContent);
                console.log('Page changed to:', currentPage);
                
                // Here you would load new page content
                loadPage(currentPage);
            }
        });
    });
    
    prevBtn.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            updateActivePage();
            loadPage(currentPage);
        }
    });
    
    nextBtn.addEventListener('click', function() {
        if (currentPage < 25) {
            currentPage++;
            updateActivePage();
            loadPage(currentPage);
        }
    });
    
    function updateActivePage() {
        pageNums.forEach(p => p.classList.remove('active'));
        const targetPage = document.querySelector(`.page-num:nth-child(${currentPage})`);
        if (targetPage) {
            targetPage.classList.add('active');
        }
    }
    
    function loadPage(pageNumber) {
        // Add loading animation to cards
        tutorialCards.forEach(card => {
            card.style.opacity = '0.5';
            card.style.transform = 'scale(0.95)';
        });
        
        setTimeout(() => {
            tutorialCards.forEach(card => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            });
            console.log(`Page ${pageNumber} loaded`);
        }, 500);
    }
    
    // Character interaction
    const character = document.querySelector('.character-image');
    
    character.addEventListener('click', function() {
        // Character animation
        this.style.animation = 'bounce 0.6s ease-in-out';
        
        setTimeout(() => {
            this.style.animation = '';
        }, 600);
        
        // Show helpful message
        const messages = [
            'Halo! Butuh bantuan mencari tutorial?',
            'Coba cari berdasarkan kategori di samping!',
            'Jangan lupa upload kreasi kamu!',
            'Semangat berkreasi!'
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        // Create tooltip
        const tooltip = document.createElement('div');
        tooltip.textContent = randomMessage;
        tooltip.style.cssText = `
            position: absolute;
            bottom: 130px;
            right: 0;
            background: white;
            padding: 10px 15px;
            border-radius: 20px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            font-size: 14px;
            white-space: nowrap;
            z-index: 1000;
            animation: fadeInUp 0.3s ease-out;
        `;
        
        this.parentElement.appendChild(tooltip);
        
        setTimeout(() => {
            tooltip.remove();
        }, 3000);
    });
    
    // Navigation menu interactions
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            console.log('Navigation:', this.textContent);
        });
    });
    
    // Contact button functionality
    const contactBtn = document.querySelector('.contact-btn');
    
    contactBtn.addEventListener('click', function() {
        // Simple contact modal simulation
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        `;
        
        const modalContent = document.createElement('div');
        modalContent.style.cssText = `
            background: white;
            padding: 30px;
            border-radius: 15px;
            text-align: center;
            max-width: 400px;
            margin: 20px;
        `;
        
        modalContent.innerHTML = `
            <h3 style="margin-bottom: 15px; color: #4ade80;">Hubungi Kami</h3>
            <p style="margin-bottom: 20px; color: #666;">Terima kasih atas minat Anda! Tim kami akan segera menghubungi Anda.</p>
            <button onclick="this.closest('.modal').remove()" style="
                background: #4ade80;
                color: white;
                border: none;
                padding: 10px 25px;
                border-radius: 25px;
                cursor: pointer;
                font-weight: 600;
            ">Tutup</button>
        `;
        
        modal.className = 'modal';
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        
        // Close modal when clicking outside
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.remove();
            }
        });
    });
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes bounce {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
    
    .category-item.active .category-icon {
        background: #fbbf24 !important;
        transform: scale(1.1);
    }
`;

document.head.appendChild(style);