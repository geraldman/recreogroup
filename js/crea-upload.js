// DOM Elements
const uploadArea = document.getElementById('uploadArea');
const photoFile = document.getElementById('photoFile');
const uploadForm = document.getElementById('uploadForm');
const backButton = document.querySelector('.btn-back');
const description = document.getElementById('description');

// File Upload Functionality
uploadArea.addEventListener('click', () => {
    photoFile.click();
});

// Drag and Drop Functionality
uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('dragover');
});

uploadArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        const file = files[0];
        if (isValidImageFile(file)) {
            handleFileSelection(file);
        } else {
            showAlert('Format file tidak didukung. Gunakan format PNG, JPEG, atau JPG.');
        }
    }
});

// File Input Change Handler
photoFile.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        const file = e.target.files[0];
        if (isValidImageFile(file)) {
            handleFileSelection(file);
        } else {
            showAlert('Format file tidak didukung. Gunakan format PNG, JPEG, atau JPG.');
            e.target.value = '';
        }
    }
});

// File Validation
function isValidImageFile(file) {
    const validTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    return validTypes.includes(file.type);
}

// Handle File Selection
function handleFileSelection(file) {
    const fileName = file.name;
    const fileSize = (file.size / 1024 / 1024).toFixed(2); // Convert to MB
    
    // Update UI
    uploadArea.classList.add('has-file');
    uploadArea.querySelector('.upload-text').innerHTML = `
        <strong>${fileName}</strong><br>
        <small>Ukuran: ${fileSize} MB</small>
    `;
    
    // Create preview (optional)
    createImagePreview(file);
}

// Create Image Preview
function createImagePreview(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        // You can add image preview functionality here if needed
        console.log('Image loaded:', e.target.result);
    };
    reader.readAsDataURL(file);
}

// Character Counter for Description
description.addEventListener('input', (e) => {
    const text = e.target.value;
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    const charCount = document.querySelector('.char-count');
    
    if (words > 50) {
        charCount.style.color = '#ff6b6b';
        charCount.textContent = `${words}/50 kata (melebihi batas)`;
    } else {
        charCount.style.color = '#999';
        charCount.textContent = `${words}/50 kata`;
    }
});

// Form Submission
uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData();
    const nama = document.getElementById('nama').value;
    const kategori = document.getElementById('kategori').value;
    const judul = document.getElementById('judul').value;
    const deskripsi = description.value;
    const file = photoFile.files[0];
    
    // Validation
    if (!nama || !kategori || !judul) {
        showAlert('Mohon lengkapi semua field yang wajib diisi.');
        return;
    }
    
    if (!file) {
        showAlert('Mohon upload foto hasil kreasi Anda.');
        return;
    }
    
    // Check description word count
    const words = deskripsi.trim() === '' ? 0 : deskripsi.trim().split(/\s+/).length;
    if (words > 50) {
        showAlert('Deskripsi tidak boleh melebihi 50 kata.');
        return;
    }
    
    // Add data to FormData
    formData.append('nama', nama);
    formData.append('kategori', kategori);
    formData.append('judul', judul);
    formData.append('deskripsi', deskripsi);
    formData.append('foto', file);
    
    // Submit form (replace with actual submission logic)
    submitForm(formData);
});

// Form Submission Handler
function submitForm(formData) {
    // Show loading state
    const submitBtn = document.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Mengunggah...';
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        showAlert('Kreasi berhasil dibagikan!', 'success');
        
        // Reset form
        resetForm();
        
        // Reset button
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }, 2000);
}

// Back Button Handler
backButton.addEventListener('click', () => {
    if (isFormDirty()) {
        if (confirm('Apakah Anda yakin ingin kembali? Data yang sudah diisi akan hilang.')) {
            resetForm();
        }
    } else {
        // Navigate back or reset form
        resetForm();
    }
});

// Check if form has been modified
function isFormDirty() {
    const nama = document.getElementById('nama').value;
    const kategori = document.getElementById('kategori').value;
    const judul = document.getElementById('judul').value;
    const deskripsi = description.value;
    const file = photoFile.files[0];
    
    return nama || kategori || judul || deskripsi || file;
}

// Reset Form
function resetForm() {
    uploadForm.reset();
    
    // Reset upload area
    uploadArea.classList.remove('has-file');
    uploadArea.querySelector('.upload-text').textContent = 'Unggah 1 foto (format: png/jpeg/jpg)';
    
    // Reset character counter
    const charCount = document.querySelector('.char-count');
    charCount.style.color = '#999';
    charCount.textContent = 'maksimal 50 kata';
    
    // Clear file input
    photoFile.value = '';
}

// Alert Function
function showAlert(message, type = 'error') {
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 1000;
        animation: slideIn 0.3s ease;
        min-width: 300px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    `;
    
    // Set background color based on type
    if (type === 'success') {
        alert.style.backgroundColor = '#295832';
    } else {
        alert.style.backgroundColor = '#ff6b6b';
    }
    
    alert.textContent = message;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // Add to DOM
    document.body.appendChild(alert);
    
    // Remove after 3 seconds
    setTimeout(() => {
        alert.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (alert.parentNode) {
                alert.parentNode.removeChild(alert);
            }
        }, 300);
    }, 3000);
}

// Input Animations and Enhancements
document.querySelectorAll('input, select, textarea').forEach(input => {
    // Add focus animations
    input.addEventListener('focus', () => {
        input.style.transform = 'translateY(-2px)';
    });
    
    input.addEventListener('blur', () => {
        input.style.transform = 'translateY(0)';
    });
});

// Smooth scrolling for form navigation
function scrollToElement(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}

// Initialize form on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization code here
    console.log('ReCreo Upload Form initialized');
    
    // Focus on first input
    document.getElementById('nama').focus();
});