// Sample quiz data
const quizData = {
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

// Current state
let currentQuestion = 1;
let selectedAnswer = null;
let timeLeft = 5;
let totalTime = 19;
let timer;
let userAnswers = {};

// DOM elements
const questionContent = document.getElementById('question-content');
const answerOptions = document.querySelectorAll('.answer-option');
const pageButtons = document.querySelectorAll('.page-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const submitBtn = document.querySelector('.submit-btn');
const timeLeftDisplay = document.querySelector('.time-left');
const totalTimeDisplay = document.querySelector('.total-time');
const questionNumber = document.querySelector('.question-number');

// Initialize quiz
function initQuiz() {
    loadQuestion(currentQuestion);
    startTimer();
    setupEventListeners();
}

// Load question
function loadQuestion(questionNum) {

    const question = quizData[questionNum];
    if (!question) return;

    questionContent.textContent = question.question;
    questionNumber.textContent = `Question ${questionNum}`;
    
    // Update answer options
    answerOptions.forEach((option, index) => {
        const letter = ['A', 'B', 'C', 'D'][index];
        option.querySelector('.option-text').textContent = question.answers[letter];
        option.classList.remove('selected');
        
        // Restore previous selection
        if (userAnswers[questionNum] === letter) {
            option.classList.add('selected');
            selectedAnswer = letter;
        }
    });
    
    // Update navigation
    updateNavigation();
}

// Setup event listeners
function setupEventListeners() {
    // Answer selection
    answerOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove previous selection
            answerOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add selection to clicked option
            option.classList.add('selected');
            selectedAnswer = option.dataset.option;
            
            // Save answer
            userAnswers[currentQuestion] = selectedAnswer;
        
        });
    });
    
    // Navigation buttons
    prevBtn.addEventListener('click', () => {
        if (currentQuestion > 1) {
            currentQuestion--;
            loadQuestion(currentQuestion);
            resetTimer();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentQuestion < Object.keys(quizData).length) {
            currentQuestion++;
            loadQuestion(currentQuestion);
            resetTimer();
        }
    });
    
    // Page buttons
    pageButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const pageNum = parseInt(btn.textContent);
            if (quizData[pageNum]) {
                currentQuestion = pageNum;
                loadQuestion(currentQuestion);
                resetTimer();
            }
        });
    });
    
    // Submit button
    submitBtn.addEventListener('click', () => {
        submitQuiz();
    });
}

// Timer functions
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            // Auto move to next question or submit
            if (currentQuestion < Object.keys(quizData).length) {
                currentQuestion++;
                loadQuestion(currentQuestion);
                resetTimer();
            } else {
                submitQuiz();
            }
        }
    }, 1000);

}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 5;
    timeLeftDisplay.textContent = timeLeft;
    startTimer();
}

// Update navigation
function updateNavigation() {
    pageButtons.forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.textContent) === currentQuestion) {
            btn.classList.add('active');
        }
    });
    
    // Update prev/next button states
    prevBtn.disabled = currentQuestion === 1;
    nextBtn.disabled = currentQuestion === Object.keys(quizData).length;
}

// Submit quiz
function submitQuiz() {
    clearInterval(timer);
    
    let score = 0;
    let totalQuestions = Object.keys(quizData).length;
    
    // Calculate score
    for (let questionNum in userAnswers) {
        if (userAnswers[questionNum] === quizData[questionNum].correct) {
            score++;
        }
    }
    
    // Show results
    alert(`Quiz selesai!\nSkor Anda: ${score}/${totalQuestions}\nPersentase: ${(score/totalQuestions*100).toFixed(1)}%`);
    
    // Reset quiz
    resetQuiz();
}

// Reset quiz
function resetQuiz() {
    currentQuestion = 1;
    selectedAnswer = null;
    userAnswers = {};
    timeLeft = 5;
    loadQuestion(currentQuestion);
    resetTimer();
}

// Add some visual feedback
function addClickEffect(element) {
    element.style.transform = 'scale(0.95)';
    setTimeout(() => {
        element.style.transform = '';
    }, 150);
}

// Add click effects to buttons
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => addClickEffect(btn));
});

// Initialize the quiz when page loads
document.addEventListener('DOMContentLoaded', initQuiz);

// Handle page visibility (pause timer when tab is not active)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        clearInterval(timer);
    } else {
        startTimer();
    }
});