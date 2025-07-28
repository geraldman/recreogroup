// DOM elements
const nameInput = document.getElementById('nameInput');
const startQuizBtn = document.getElementById('startQuiz');
const backBtn = document.getElementById('backBtn');

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Focus on name input when page loads
    nameInput.focus();
    
    // Add event listeners
    startQuizBtn.addEventListener('click', handleStartQuiz);
    backBtn.addEventListener('click', handleBack);
    
    // Handle Enter key press in name input
    nameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleStartQuiz();
        }
    });
    
    // Real-time validation
    nameInput.addEventListener('input', validateInput);
});

// Functions
function validateInput() {
    const name = nameInput.value.trim();
    
    if (name.length > 0) {
        startQuizBtn.disabled = false;
        startQuizBtn.style.opacity = '1';
    } else {
        startQuizBtn.disabled = true;
        startQuizBtn.style.opacity = '0.6';
    }
}

function handleStartQuiz() {
    const name = nameInput.value.trim();
    
    if (name === '') {
        alert('Silakan masukkan nama Anda terlebih dahulu!');
        nameInput.focus();
        return;
    }
    
    // Validate name length
    if (name.length < 2) {
        alert('Nama harus minimal 2 karakter!');
        nameInput.focus();
        return;
    }
    
    // Store name in localStorage (if needed for quiz)
    localStorage.setItem('userName', name);
    
    // Show confirmation
    const confirmStart = confirm(`Halo ${name}! Apakah Anda siap memulai quiz?`);
    
    if (confirmStart) {
        // Add loading animation
        startQuizBtn.innerHTML = 'Memulai Quiz...';
        startQuizBtn.disabled = true;
        
        // Simulate loading
        setTimeout(() => {
            // Redirect to kahoot-recreo page
            window.location.href = 'kahoot-recreo.php';
        }, 1500);
    }
}

function handleBack() {
    const confirmBack = confirm('Apakah Anda yakin ingin kembali?');
    
    if (confirmBack) {
        // Clear the input
        nameInput.value = '';
        validateInput();
        
        // In a real application, you might redirect:
        // window.history.back();
        alert('Kembali ke halaman sebelumnya...');
    }
}

// Initialize validation state
validateInput();

// Add some interactive effects
function addButtonEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            if (!this.disabled) {
                this.style.transform = 'translateY(0)';
            }
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px)';
        });
    });
}

// Call the function to add effects
addButtonEffects();

// Add smooth scrolling effect
function smoothScroll() {
    document.documentElement.style.scrollBehavior = 'smooth';
}

smoothScroll();