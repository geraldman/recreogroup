document.addEventListener('DOMContentLoaded', function() {
    let questionCount = 2;
    
    // Initialize subject tabs
    function initializeSubjectTabs() {
        const subjectTabs = document.querySelectorAll('.subject-tab');
        
        subjectTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                subjectTabs.forEach(t => t.classList.remove('active'));
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Update the form based on selected subject
                const selectedSubject = this.dataset.subject;
                updateFormForSubject(selectedSubject);
            });
        });
    }
    
    // Update form based on selected subject
    function updateFormForSubject(subject) {
        const articleLinkGroup = document.querySelector('.form-group:last-child');
        const articleInput = document.getElementById('articleLink');
        
        if (subject === 'recreo') {
            articleLinkGroup.style.display = 'block';
            articleInput.placeholder = 'Link Recreo artikel';
        } else {
            articleLinkGroup.style.display = 'none';
        }
    }
    
    // Initialize option checkboxes
    function initializeOptionCheckboxes() {
        const checkboxes = document.querySelectorAll('.option-checkbox');
        
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('click', function() {
                const questionContainer = this.closest('.question-container');
                const allCheckboxes = questionContainer.querySelectorAll('.option-checkbox');
                
                // Remove checked class from all checkboxes in this question
                allCheckboxes.forEach(cb => cb.classList.remove('checked'));
                
                // Add checked class to clicked checkbox
                this.classList.add('checked');
            });
        });
    }
    
    // Create new question
    function createQuestion(questionNumber) {
        const questionContainer = document.createElement('div');
        questionContainer.className = 'question-container';
        
        questionContainer.innerHTML = `
            <div class="question-header">
                <span class="question-title">Question ${questionNumber}</span>
                <div class="question-controls">
                    <button class="control-btn copy-btn">📋</button>
                    <button class="control-btn delete-btn">🗑️</button>
                </div>
            </div>
            <div class="question-content">
                <textarea class="question-input" placeholder="Masukkan pertanyaan kamu disini"></textarea>
                <div class="options-container">
                    <div class="option-row">
                        <div class="option-checkbox" data-option="1"></div>
                        <input type="text" class="option-input" placeholder="Pilihan 1">
                    </div>
                    <div class="option-row">
                        <div class="option-checkbox" data-option="2"></div>
                        <input type="text" class="option-input" placeholder="Pilihan 2">
                    </div>
                    <div class="option-row">
                        <div class="option-checkbox" data-option="3"></div>
                        <input type="text" class="option-input" placeholder="Pilihan 3">
                    </div>
                    <div class="option-row">
                        <div class="option-checkbox" data-option="4"></div>
                        <input type="text" class="option-input" placeholder="Pilihan 4">
                    </div>
                </div>
            </div>
        `;
        
        return questionContainer;
    }
    
    // Add question functionality
    function initializeAddQuestion() {
        const addQuestionBtn = document.querySelector('.btn-add');
        
        addQuestionBtn.addEventListener('click', function() {
            questionCount++;
            const newQuestion = createQuestion(questionCount);
            
            // Insert before the add button
            const addQuestionSection = document.querySelector('.add-question-btn');
            addQuestionSection.parentNode.insertBefore(newQuestion, addQuestionSection);
            
            // Initialize checkboxes for the new question
            initializeQuestionControls(newQuestion);
        });
    }
    
    // Initialize question controls (copy, delete, checkboxes)
    function initializeQuestionControls(container = document) {
        // Initialize checkboxes
        const checkboxes = container.querySelectorAll('.option-checkbox');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('click', function() {
                const questionContainer = this.closest('.question-container');
                const allCheckboxes = questionContainer.querySelectorAll('.option-checkbox');
                
                // Remove checked class from all checkboxes in this question
                allCheckboxes.forEach(cb => cb.classList.remove('checked'));
                
                // Add checked class to clicked checkbox
                this.classList.add('checked');
            });
        });
        
        // Initialize copy buttons
        const copyButtons = container.querySelectorAll('.copy-btn');
        copyButtons.forEach(button => {
            button.addEventListener('click', function() {
                const questionContainer = this.closest('.question-container');
                const questionInput = questionContainer.querySelector('.question-input');
                const optionInputs = questionContainer.querySelectorAll('.option-input');
                
                // Create a copy of the question
                questionCount++;
                const newQuestion = createQuestion(questionCount);
                
                // Copy the content
                const newQuestionInput = newQuestion.querySelector('.question-input');
                const newOptionInputs = newQuestion.querySelectorAll('.option-input');
                
                newQuestionInput.value = questionInput.value;
                optionInputs.forEach((input, index) => {
                    if (newOptionInputs[index]) {
                        newOptionInputs[index].value = input.value;
                    }
                });
                
                // Copy the correct answer
                const checkedOption = questionContainer.querySelector('.option-checkbox.checked');
                if (checkedOption) {
                    const optionIndex = checkedOption.dataset.option;
                    const newCheckedOption = newQuestion.querySelector(`[data-option="${optionIndex}"]`);
                    if (newCheckedOption) {
                        newCheckedOption.classList.add('checked');
                    }
                }
                
                // Insert after the current question
                questionContainer.parentNode.insertBefore(newQuestion, questionContainer.nextSibling);
                
                // Initialize controls for the new question
                initializeQuestionControls(newQuestion);
            });
        });
        
        // Initialize delete buttons
        const deleteButtons = container.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                const questionContainer = this.closest('.question-container');
                const allQuestions = document.querySelectorAll('.question-container');
                
                // Don't delete if it's the only question
                if (allQuestions.length > 1) {
                    questionContainer.remove();
                    updateQuestionNumbers();
                } else {
                    alert('Tidak dapat menghapus pertanyaan terakhir!');
                }
            });
        });
    }
    
    // Update question numbers after deletion
    function updateQuestionNumbers() {
        const questions = document.querySelectorAll('.question-container');
        questions.forEach((question, index) => {
            const questionTitle = question.querySelector('.question-title');
            questionTitle.textContent = `Question ${index + 1}`;
        });
        questionCount = questions.length;
    }
    
    // Initialize time selector
    function initializeTimeSelector() {
        const timeInputs = document.querySelectorAll('.time-input');
        const timeDropdown = document.querySelector('.time-dropdown');
        
        timeInputs.forEach(input => {
            input.addEventListener('click', function() {
                this.removeAttribute('readonly');
                this.focus();
                this.select();
            });
            
            input.addEventListener('blur', function() {
                this.setAttribute('readonly', 'readonly');
                
                // Validate input
                let value = parseInt(this.value);
                if (isNaN(value) || value < 0) {
                    this.value = '00';
                } else if (value > 59) {
                    this.value = '59';
                } else {
                    this.value = value.toString().padStart(2, '0');
                }
            });
            
            input.addEventListener('keypress', function(e) {
                // Only allow numbers
                if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'Tab' && e.key !== 'Enter') {
                    e.preventDefault();
                }
                
                if (e.key === 'Enter') {
                    this.blur();
                }
            });
        });
    }
    
    // Initialize upload section
    function initializeUploadSection() {
        const uploadSection = document.querySelector('.upload-section');
        
        uploadSection.addEventListener('click', function() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/png, image/jpeg, image/jpg';
            
            input.addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(event) {
                        uploadSection.innerHTML = `
                            <div class="upload-icon">📷</div>
                            <div class="upload-text">Thumbnail berhasil diupload</div>
                            <div class="upload-subtext">${file.name}</div>
                        `;
                        uploadSection.style.background = '#e8f5e8';
                        uploadSection.style.borderColor = '#2e7d32';
                    };
                    reader.readAsDataURL(file);
                }
            });
            
            input.click();
        });
    }
    
    // Initialize all components
    initializeSubjectTabs();
    initializeOptionCheckboxes();
    initializeAddQuestion();
    initializeQuestionControls();
    initializeTimeSelector();
    initializeUploadSection();
    
    // Set initial state
    updateFormForSubject('recreo');
    
    // Add some interactive feedback
    const inputs = document.querySelectorAll('input[type="text"], textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#2e7d32';
        });
        
        input.addEventListener('blur', function() {
            this.style.borderColor = '#e0e0e0';
        });
    });
});