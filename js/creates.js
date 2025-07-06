document.getElementById('hasil_foto').addEventListener('change', function(e) {
    if (e.target.files.length > 0) {
        const fileName = e.target.files[0].name;
        const uploadArea = e.target.parentElement;
        uploadArea.querySelector('.upload-text').textContent = `File dipilih: ${fileName}`;
    }
});

const uploadContainer = document.getElementById("upload-container");
const MAX_INSTRUCTIONS = 10;
const MIN_INSTRUCTIONS = 1;
const addStepBtn = document.getElementById("addStep");
const deleteStepBtn = document.getElementById("deleteStep");
const resetStepBtn = document.getElementById('resetBtn');
const mainUploadArea = document.getElementById("mainUploadArea");

function createInstructions(stepNumber){
    const instructionStep = document.createElement('div');
    instructionStep.className = 'upload-section-tutorial';

    const fileInputId = `tutorial_foto_${stepNumber}`;
    const textAreaId = `langkah_tutorial_${stepNumber}`;

    instructionStep.innerHTML = `
        <div class="upload-group">
            <h5 class="upload-title">Upload tutorial foto langkah ke-${stepNumber}</h5>
            <div class="upload-area">
                <i class="fas fa-cloud-upload-alt upload-icon"></i>
                <p class="upload-text">Unggah maksimal 10 file (format: png/jpeg/jpg)</p>
                <input type="file" id="${fileInputId}" name="${fileInputId}" accept="image/*"
                    multiple style="display: none;" required>
                </div>
            </div>
            <div class="content-group">
                <h5 class="content-title">Langkah ke-${stepNumber}:</h5>
                <div class="textarea-container">
                    <textarea id="${textAreaId}" name="${textAreaId}"
                        placeholder="Potong kardus sesuai ukuran yang diinginkan untuk bagian utama." required></textarea>
                </div>
            </div>
        </div>
    `;

    const uploadArea = instructionStep.querySelector('.upload-area');
    const fileInput = instructionStep.querySelector(`#${fileInputId}`);

    uploadArea.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (e) =>{
        if(e.target.files.length > 0){
            const fileName = e.target.files[0].name;
            uploadArea.querySelector('.upload-text').textContent = `File dipilih: ${fileName}`;
        }
        else{
            uploadArea.querySelector('.upload-text').textContent = `Unggah 1 foto (format: png/jpeg/jpg)`;
        }
    });

    return instructionStep;
}

function addInstructions(){
    const existingStep = document.querySelectorAll('.upload-section-tutorial').length;
    if(existingStep < MAX_INSTRUCTIONS){
        const newStep = createInstructions(existingStep + 1);
        uploadContainer.appendChild(newStep);
        newStep.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
    else{
        addStepBtn.disabled = true;
    }
    updateStepNumbers();
}

function deleteLastInstruction(){
    const existingStep = document.querySelectorAll('.upload-section-tutorial').length;
    if(existingStep > MIN_INSTRUCTIONS){
        uploadContainer.removeChild(uploadContainer.lastChild);
    }
    else{
        deleteStepBtn.disabled = true;
    }
    updateStepNumbers();
}

function resetForm() {
    if (confirm('Apakah Anda yakin ingin mengosongkan form?')) {
        while(uploadContainer.firstChild){
            uploadContainer.removeChild(uploadContainer.firstChild);
        }
        generateFirstInstructions();
        mainUploadArea.querySelectorAll('.upload-text').textContent = `Unggah 1 foto (format: png/jpeg/jpg)`;
        document.getElementById('tutorialForm').reset();
    }
    updateStepNumbers();
}

function updateStepNumbers(){
    const instructionStep = uploadContainer.querySelectorAll('.upload-section-tutorial');
    if(instructionStep.length < MAX_INSTRUCTIONS){
        addStepBtn.disabled = false;
    }
    else{
        addStepBtn.disabled = true;
    }

    if(instructionStep.length > MIN_INSTRUCTIONS){
        deleteStepBtn.disabled = false;
    }
    else{
        deleteStepBtn.disabled = true;
    }
}

addStepBtn.addEventListener('click', addInstructions);
deleteStepBtn.addEventListener('click', deleteLastInstruction);
resetStepBtn.addEventListener('click', resetForm);

function generateFirstInstructions(){
    for(let i = 0; i < MIN_INSTRUCTIONS; i++){
        const defaultStep = createInstructions(i + 1);
        uploadContainer.appendChild(defaultStep);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    generateFirstInstructions();
    updateStepNumbers();
}); 

