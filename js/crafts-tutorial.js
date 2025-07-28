const nextBtn = document.getElementById('nextStep');
const prevBtn = document.getElementById('previousStep');
const imageCarousel = document.getElementById('instruction-carousel');
const instructionImages = document.querySelectorAll('.instruction'); // Renamed for clarity
const instructionStepMessage = document.getElementById('instruction-step');
const instructionDescriptionMessage = document.getElementById('instruction-description');

let numberIndex = 0; // Start with 0 for array indexing

const imageCount = instructionImages.length;

// Initial setup when the page loads
document.addEventListener('DOMContentLoaded', () => {
    updateCarousel();
});

function updateCarousel() {
    // Hide all images first
    instructionImages.forEach((img, index) => {
        if(index === numberIndex) {
            img.classList.add('active'); // Show current image
        } 
        else{
            img.classList.remove('active'); // Hide others
        }
    });

    // Update step number and description
    instructionStepMessage.textContent = `Step ${numberIndex + 1}`; // +1 because index is 0-based
    instructionDescriptionMessage.textContent = descriptions[numberIndex];

    // Check and update button states
    checkButton(numberIndex);
}

function checkButton(index) {
    if (index === 0) { // First image (index 0)
        nextBtn.disabled = false;
        prevBtn.disabled = true;
        return;
    } else if (index === (imageCount - 1)) { // Last image (index = count - 1)
        nextBtn.disabled = true;
        prevBtn.disabled = false;
        return;
    } else { // Middle images
        nextBtn.disabled = false;
        prevBtn.disabled = false;
        return;
    }
}

function changeStep(direction) {
    const newIndex = numberIndex + direction;
    
    // Only update if the new index is within valid bounds
    if (newIndex >= 0 && newIndex < imageCount) {
        numberIndex = newIndex;
    }
    updateCarousel();
}

// Attach event listeners to buttons
nextBtn.addEventListener('click', () => changeStep(1));
prevBtn.addEventListener('click', () => changeStep(-1));