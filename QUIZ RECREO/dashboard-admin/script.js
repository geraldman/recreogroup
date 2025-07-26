// Dashboard data
let dashboardData = {
    visitors: 15420,
    likes: 8930,
    pageviews: 45680,
    bounceRate: 24.5,
    chartData: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        visitors: [1200, 1900, 3000, 5000, 2000, 3000, 4000],
        likes: [400, 600, 800, 1200, 600, 900, 1100]
    }
};

// Quiz data - same as your existing quiz
let quizData = {
    1: {
        question: "Sampah sisa makanan seperti nasi dan sayuran disebut sampah…",
        answers: {
            A: "Anorganik (tidak bisa busuk)",
            B: "Organik (bisa busuk)",
            C: "Benda tajam",
            D: "Elektronik"
        },
        correct: "B"
    },
    2: {
        question: "Apa itu sampah anorganik?",
        answers: {
            A: "Kulit buah",
            B: "Sisa makanan",
            C: "Kaleng bekas",
            D: "Rumput"
        },
        correct: "C"
    },
    3: {
        question: "Apa arti \"daur ulang\" itu?",
        answers: {
            A: "Membuang sampah jauh-jauh",
            B: "Membakar sampah",
            C: "Mengubah sampah jadi barang baru",
            D: "Mengubur sampah"
        },
        correct: "C"
    },
    4: {
        question: "Apa singkatan dari 3R yang penting untuk mengelola sampah?",
        answers: {
            A: "Repeat, Rapi, Reply",
            B: "Reduce, Reuse, Recycle",
            C: "Rias, Resik, Raya",
            D: "Relax, Racoon, Room"
        },
        correct: "B"
    },
    5: {
        question: "\"Reuse\" artinya menggunakan kembali. Contohnya adalah…",
        answers: {
            A: "Membuang botol bekas ke tong sampah",
            B: "Memakai kembali tas belanja kain",
            C: "Mengurangi jumlah sampah yang kita hasilkan",
            D: "Menanam pohon"
        },
        correct: "B"
    },
    6: {
        question: "Botol plastik bekas bisa kita ubah menjadi…",
        answers: {
            A: "Tempat pensil",
            B: "Kompor",
            C: "Buku",
            D: "Televisi"
        },
        correct: "A"
    },
    7: {
        question: "Mengapa kita tidak boleh membakar sampah plastik?",
        answers: {
            A: "Karena berbahaya bagi udara dan kesehatan",
            B: "Karena berasap",
            C: "Karena polusi akan berkurang",
            D: "Karena jadi air"
        },
        correct: "A"
    },
    8: {
        question: "Bahan apa yang biasanya digunakan untuk merekatkan bagian-bagian kerajinan sampah?",
        answers: {
            A: "Air",
            B: "Lem",
            C: "Gunting",
            D: "Kertas"
        },
        correct: "B"
    },
    9: {
        question: "Kenapa kita harus memilah sampah di rumah?",
        answers: {
            A: "Agar cepat penuh tong sampahnya",
            B: "Agar sampah mudah didaur ulang",
            C: "Agar Lingkungan bersih",
            D: "Agar tumbuh pohon"
        },
        correct: "B"
    },
    10: {
        question: "Sumber daya alam apa yang bisa kita hemat jika mendaur ulang kertas?",
        answers: {
            A: "Minyak bumi",
            B: "Pohon",
            C: "Air laut",
            D: "Emas"
        },
        correct: "B"
    },
    11: {
        question: "Apa manfaat jika kita rajin mendaur ulang sampah?",
        answers: {
            A: "Bumi jadi kotor",
            B: "Tanah longsor",
            C: "Lingkungan jadi bersih dan sehat",
            D: "Tidak ada manfaatnya"
        },
        correct: "C"
    },
    12: {
        question: "Jika melihat teman membuang sampah sembarangan, apa yang sebaiknya kita lakukan?",
        answers: {
            A: "Ikut membuang sampah sembarangan",
            B: "Menyalahkan teman",
            C: "Memberi tahu untuk membuang di tempat sampah",
            D: "Tertawa"
        },
        correct: "C"
    },
    13: {
        question: "Siapa yang bisa jadi Pahlawan Sampah?",
        answers: {
            A: "Hanya orang dewasa",
            B: "Hanya guru",
            C: "Semua orang bisa jadi pahlawan sampah!",
            D: "Hanya petugas kebersihan"
        },
        correct: "C"
    },
    14: {
        question: "Di website kami, kalian bisa melihat apa saja?",
        answers: {
            A: "Film komedi",
            B: "Resep makanan",
            C: "Tutorial membuat karya dari sampah",
            D: "Berita politik terkini"
        },
        correct: "C"
    },
    15: {
        question: "Selain melihat tutorial, kalian juga bisa _____ hasil karya kalian di website kami.",
        answers: {
            A: "Menerbangkan",
            B: "Membuang",
            C: "Membagikan",
            D: "Menyimpan rahasia"
        },
        correct: "C"
    }
};

// Current section
let currentSection = 'dashboard';

// Initialize dashboard when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateDateTime();
    updateStats();
    drawChart();
    generateRecentActivity();
    setupEventListeners();
    loadQuestionsList();
    
    // Update time every minute
    setInterval(updateDateTime, 60000);
    
    // Auto-refresh data every 5 minutes
    setInterval(refreshData, 300000);
});

// Update current date and time
function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    document.getElementById('currentDateTime').textContent = now.toLocaleDateString('en-US', options);
}

// Update statistics on dashboard
function updateStats() {
    document.getElementById('totalVisitors').textContent = formatNumber(dashboardData.visitors);
    document.getElementById('totalLikes').textContent = formatNumber(dashboardData.likes);
    document.getElementById('totalPageviews').textContent = formatNumber(dashboardData.pageviews);
    
    // Update quiz count
    const totalQuestions = Object.keys(quizData).length;
    document.getElementById('totalQuestions').textContent = totalQuestions;
    document.getElementById('quizTotalQuestions').textContent = totalQuestions;
    
    // Animate numbers
    animateNumbers();
}

// Format numbers with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Animate numbers counting up
function animateNumbers() {
    const elements = ['totalVisitors', 'totalLikes', 'totalPageviews'];
    const values = [dashboardData.visitors, dashboardData.likes, dashboardData.pageviews];
    
    elements.forEach((elementId, index) => {
        const element = document.getElementById(elementId);
        const targetValue = values[index];
        let currentValue = 0;
        const increment = targetValue / 100;
        
        const counter = setInterval(() => {
            currentValue += increment;
            if (currentValue >= targetValue) {
                currentValue = targetValue;
                clearInterval(counter);
            }
            element.textContent = formatNumber(Math.floor(currentValue));
        }, 20);
    });
}

// Draw simple chart using Canvas
function drawChart() {
    const canvas = document.getElementById('chartCanvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = 800;
    canvas.height = 300;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Chart settings
    const padding = 60;
    const chartWidth = canvas.width - (padding * 2);
    const chartHeight = canvas.height - (padding * 2);
    const maxValue = Math.max(...dashboardData.chartData.visitors);
    
    // Draw grid lines
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 1;
    
    // Vertical grid lines
    for (let i = 0; i <= 6; i++) {
        const x = padding + (i * chartWidth / 6);
        ctx.beginPath();
        ctx.moveTo(x, padding);
        ctx.lineTo(x, canvas.height - padding);
        ctx.stroke();
    }
    
    // Horizontal grid lines
    for (let i = 0; i <= 5; i++) {
        const y = padding + (i * chartHeight / 5);
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(canvas.width - padding, y);
        ctx.stroke();
    }
    
    // Draw visitors line
    ctx.strokeStyle = '#667eea';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    dashboardData.chartData.visitors.forEach((value, index) => {
        const x = padding + (index * chartWidth / 6);
        const y = canvas.height - padding - (value / maxValue * chartHeight);
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    
    ctx.stroke();
    
    // Draw data points
    ctx.fillStyle = '#667eea';
    dashboardData.chartData.visitors.forEach((value, index) => {
        const x = padding + (index * chartWidth / 6);
        const y = canvas.height - padding - (value / maxValue * chartHeight);
        
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();
    });
    
    // Draw labels
    ctx.fillStyle = '#666';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    
    dashboardData.chartData.labels.forEach((label, index) => {
        const x = padding + (index * chartWidth / 6);
        const y = canvas.height - padding + 20;
        ctx.fillText(label, x, y);
    });
    
    // Draw Y-axis labels
    ctx.textAlign = 'right';
    for (let i = 0; i <= 5; i++) {
        const value = Math.round((maxValue / 5) * (5 - i));
        const y = padding + (i * chartHeight / 5) + 4;
        ctx.fillText(formatNumber(value), padding - 10, y);
    }
}

// Generate recent activity items
function generateRecentActivity() {
    const activities = [
        { type: 'visitor', text: 'New visitor from Jakarta', time: '2 minutes ago' },
        { type: 'like', text: 'Post liked by user', time: '5 minutes ago' },
        { type: 'view', text: 'Page viewed 15 times', time: '10 minutes ago' },
        { type: 'visitor', text: 'New visitor from Surabaya', time: '15 minutes ago' },
        { type: 'like', text: 'Quiz completed successfully', time: '20 minutes ago' },
        { type: 'view', text: 'High traffic on quiz page', time: '25 minutes ago' }
    ];
    
    const activityList = document.getElementById('activityList');
    activityList.innerHTML = '';
    
    activities.forEach(activity => {
        const activityItem = document.createElement('div');
        activityItem.className = 'activity-item';
        
        activityItem.innerHTML = `
            <div class="activity-icon ${activity.type}">
                <i class="fas fa-${getActivityIcon(activity.type)}"></i>
            </div>
            <div class="activity-text">
                <p>${activity.text}</p>
                <span>${activity.time}</span>
            </div>
        `;
        
        activityList.appendChild(activityItem);
    });
}

// Get activity icon based on type
function getActivityIcon(type) {
    switch(type) {
        case 'visitor': return 'user';
        case 'like': return 'heart';
        case 'view': return 'eye';
        default: return 'circle';
    }
}

// Load questions list
function loadQuestionsList() {
    const questionsList = document.getElementById('questionsList');
    questionsList.innerHTML = '';
    
    Object.keys(quizData).forEach(questionNum => {
        const question = quizData[questionNum];
        const questionItem = document.createElement('div');
        questionItem.className = 'question-item';
        
        questionItem.innerHTML = `
            <span class="question-number">Q${questionNum}</span>
            <span class="question-text">${question.question}</span>
            <div class="question-actions">
                <button class="edit-btn" onclick="editQuestion(${questionNum})">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="delete-btn" onclick="deleteQuestion(${questionNum})">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        `;
        
        questionsList.appendChild(questionItem);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Navigation items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all items
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Show corresponding section
            const section = this.dataset.section;
            showSection(section);
        });
    });
    
    // Time range selector
    document.getElementById('timeRange').addEventListener('change', function() {
        updateChartData(this.value);
    });
    
    // Quick action buttons
    document.getElementById('refreshData').addEventListener('click', refreshData);
    document.getElementById('exportData').addEventListener('click', exportData);
    document.getElementById('addVisitor').addEventListener('click', addVisitor);
    document.getElementById('manageQuiz').addEventListener('click', () => showSection('quiz'));
    
    // Quiz management buttons
    document.getElementById('addQuestionBtn').addEventListener('click', openAddQuestionModal);
    document.getElementById('closeModal').addEventListener('click', closeAddQuestionModal);
    document.getElementById('cancelBtn').addEventListener('click', closeAddQuestionModal);
    document.getElementById('addQuestionForm').addEventListener('submit', handleAddQuestion);
    
    // Close modal when clicking outside
    document.getElementById('addQuestionModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeAddQuestionModal();
        }
    });
}

// Show section
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionName + '-section').classList.add('active');
    
    // Update header title
    const titles = {
        dashboard: 'Dashboard Overview',
        visitors: 'Visitors Management',
        likes: 'Likes Management', 
        quiz: 'Quiz Management',
        reports: 'Reports',
        settings: 'Settings'
    };
    
    document.getElementById('section-title').textContent = titles[sectionName];
    currentSection = sectionName;
}

// Modal functions
function openAddQuestionModal() {
    document.getElementById('addQuestionModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeAddQuestionModal() {
    document.getElementById('addQuestionModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    document.getElementById('addQuestionForm').reset();
}

// Handle add question form submission
function handleAddQuestion(e) {
    e.preventDefault();
    
    const questionText = document.getElementById('questionText').value;
    const answerA = document.getElementById('answerA').value;
    const answerB = document.getElementById('answerB').value;
    const answerC = document.getElementById('answerC').value;
    const answerD = document.getElementById('answerD').value;
    const correctAnswer = document.getElementById('correctAnswer').value;
    
    // Get next question number
    const questionNumbers = Object.keys(quizData).map(num => parseInt(num));
    const nextQuestionNum = Math.max(...questionNumbers) + 1;
    
    // Add new question to quiz data
    quizData[nextQuestionNum] = {
        question: questionText,
        answers: {
            A: answerA,
            B: answerB,
            C: answerC,
            D: answerD
        },
        correct: correctAnswer
    };
    
    // Update UI
    updateStats();
    loadQuestionsList();
    closeAddQuestionModal();
    
    // Update quiz file (in real implementation, this would be sent to server)
    updateQuizFile();
    
    showNotification('Soal berhasil ditambahkan!', 'success');
}

// Edit question function
function editQuestion(questionNum) {
    const question = quizData[questionNum];
    
    // Populate form with existing data
    document.getElementById('questionText').value = question.question;
    document.getElementById('answerA').value = question.answers.A;
    document.getElementById('answerB').value = question.answers.B;
    document.getElementById('answerC').value = question.answers.C;
    document.getElementById('answerD').value = question.answers.D;
    document.getElementById('correctAnswer').value = question.correct;
    
    // Change form to edit mode
    const form = document.getElementById('addQuestionForm');
    form.dataset.editMode = questionNum;
    
    // Change submit button text
    form.querySelector('.submit-btn').textContent = 'Update Soal';
    
    // Change modal title
    document.querySelector('.modal-header h2').textContent = 'Edit Soal';
    
    openAddQuestionModal();
    
    // Update form submission handler
    form.onsubmit = function(e) {
        e.preventDefault();
        
        // Update existing question
        quizData[questionNum] = {
            question: document.getElementById('questionText').value,
            answers: {
                A: document.getElementById('answerA').value,
                B: document.getElementById('answerB').value,
                C: document.getElementById('answerC').value,
                D: document.getElementById('answerD').value
            },
            correct: document.getElementById('correctAnswer').value
        };
        
        // Reset form
        delete form.dataset.editMode;
        form.querySelector('.submit-btn').textContent = 'Tambah Soal';
        document.querySelector('.modal-header h2').textContent = 'Tambah Soal Baru';
        form.onsubmit = handleAddQuestion;
        
        // Update UI
        loadQuestionsList();
        closeAddQuestionModal();
        updateQuizFile();
        
        showNotification('Soal berhasil diupdate!', 'success');
    };
}

// Delete question function
function deleteQuestion(questionNum) {
    if (confirm('Apakah Anda yakin ingin menghapus soal ini?')) {
        delete quizData[questionNum];
        
        // Reorder question numbers
        const questions = Object.keys(quizData).map(num => ({
            num: parseInt(num),
            data: quizData[num]
        })).sort((a, b) => a.num - b.num);
        
        quizData = {};
        questions.forEach((q, index) => {
            quizData[index + 1] = q.data;
        });
        
        // Update UI
        updateStats();
        loadQuestionsList();
        updateQuizFile();
        
        showNotification('Soal berhasil dihapus!', 'success');
    }
}

// Update quiz file (simulate updating the quiz JavaScript file)
function updateQuizFile() {
    // In a real implementation, this would send the updated quiz data to the server
    // to update the quiz JavaScript file
    
    const updatedQuizScript = `
// Updated quiz data - Generated by Admin Dashboard
const quizData = ${JSON.stringify(quizData, null, 4)};

// Export for use in quiz application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = quizData;
}
    `.trim();
    
    // For demonstration, we'll create a downloadable file
    console.log('Quiz data updated:', quizData);
    console.log('Generated script:', updatedQuizScript);
    
    // In real implementation, you would:
    // 1. Send this data to your backend API
    // 2. Backend would update the quiz JavaScript file
    // 3. Quiz application would load the updated questions
}

// Update chart data based on time range
function updateChartData(days) {
    // Simulate different data for different time ranges
    if (days === '7') {
        dashboardData.chartData.visitors = [1200, 1900, 3000, 5000, 2000, 3000, 4000];
    } else if (days === '30') {
        dashboardData.chartData.visitors = [2400, 3800, 6000, 10000, 4000, 6000, 8000];
    } else if (days === '90') {
        dashboardData.chartData.visitors = [4800, 7600, 12000, 20000, 8000, 12000, 16000];
    }
    
    drawChart();
}

// Refresh dashboard data
function refreshData() {
    const button = document.getElementById('refreshData');
    const originalText = button.innerHTML;
    
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Refreshing...';
    button.disabled = true;
    
    // Simulate data refresh
    setTimeout(() => {
        // Update data with random variations
        dashboardData.visitors += Math.floor(Math.random() * 100) - 50;
        dashboardData.likes += Math.floor(Math.random() * 50) - 25;
        dashboardData.pageviews += Math.floor(Math.random() * 200) - 100;
        dashboardData.bounceRate += (Math.random() * 2) - 1;
        
        // Ensure positive values
        dashboardData.visitors = Math.max(0, dashboardData.visitors);
        dashboardData.likes = Math.max(0, dashboardData.likes);
        dashboardData.pageviews = Math.max(0, dashboardData.pageviews);
        dashboardData.bounceRate = Math.max(0, Math.min(100, dashboardData.bounceRate));
        
        updateStats();
        drawChart();
        generateRecentActivity();
        
        button.innerHTML = originalText;
        button.disabled = false;
        
            
        showNotification('Data refreshed successfully!', 'success');
    }, 2000);
}


function exportData() {
    let csvData;
    
    if (currentSection === 'quiz') {
      
        csvData = [
            ['Question Number', 'Question', 'Answer A', 'Answer B', 'Answer C', 'Answer D', 'Correct Answer']
        ];
        
        Object.keys(quizData).forEach(questionNum => {
            const q = quizData[questionNum];
            csvData.push([
                questionNum,
                q.question,
                q.answers.A,
                q.answers.B,
                q.answers.C,
                q.answers.D,
                q.correct
            ]);
        });
    } else {
      
        csvData = [
            ['Metric', 'Value'],
            ['Total Visitors', dashboardData.visitors],
            ['Total Likes', dashboardData.likes],
            ['Total Pageviews', dashboardData.pageviews],
            ['Bounce Rate', dashboardData.bounceRate + '%'],
            ['Total Quiz Questions', Object.keys(quizData).length]
        ];
    }
    
    const csvContent = csvData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = currentSection === 'quiz' ? 'quiz_questions.csv' : 'analytics_report.csv';
    a.click();
    
    window.URL.revokeObjectURL(url);
    showNotification('Report exported successfully!', 'success');
}


function addVisitor() {
    dashboardData.visitors++;
    dashboardData.pageviews += Math.floor(Math.random() * 3) + 1;
    
    updateStats();
    showNotification('Visitor added to analytics!', 'success');
}

// Show notification
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        z-index: 1001;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;
    
    switch(type) {
        case 'success':
            notification.style.backgroundColor = '#28a745';
            break;
        case 'error':
            notification.style.backgroundColor = '#dc3545';
            break;
        case 'info':
            notification.style.backgroundColor = '#17a2b8';
            break;
        default:
            notification.style.backgroundColor = '#6c757d';
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}


const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);