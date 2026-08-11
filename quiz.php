<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recreo Group - Eco Quiz</title>
    <link rel="stylesheet" href="css/style.css?v=2">
    <link rel="stylesheet" href="css/navbar.css?v=2">
    <link rel="stylesheet" href="css/footer.css?v=2">
    <script src="js/navbar.js" defer></script>
    <style>
        .quiz-container {
            max-width: 800px;
            margin: 150px auto 100px auto;
            background: white;
            padding: 3rem;
            border-radius: var(--border-radius-lg);
            box-shadow: var(--shadow-md);
            text-align: center;
        }
        
        .quiz-header h1 {
            color: var(--green-primary);
            margin-bottom: 1rem;
            font-family: 'Playfair Display', serif;
        }
        
        .quiz-header p {
            color: var(--text-muted);
            margin-bottom: 2rem;
        }
        
        .question-card {
            background: var(--bg-cream);
            padding: 2rem;
            border-radius: var(--border-radius-md);
            margin-bottom: 2rem;
            display: none;
        }
        
        .question-card.active {
            display: block;
            animation: fadeIn 0.5s;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .question-text {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
            color: var(--text-dark);
        }
        
        .options {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
        }
        
        .option-btn {
            background: white;
            border: 2px solid rgba(46, 130, 100, 0.2);
            padding: 1rem;
            border-radius: var(--border-radius-sm);
            font-size: 1rem;
            cursor: pointer;
            transition: var(--transition);
            font-family: 'Plus Jakarta Sans', sans-serif;
            color: var(--text-body);
        }
        
        .option-btn:hover {
            border-color: var(--green-primary);
            background: var(--green-light);
        }
        
        .option-btn.selected {
            background: var(--green-primary);
            color: white;
            border-color: var(--green-primary);
        }
        
        .quiz-controls {
            display: flex;
            justify-content: space-between;
            margin-top: 2rem;
        }
        
        .result-card {
            display: none;
            padding: 3rem;
        }
        
        .result-card.active {
            display: block;
        }
        
        .result-card h2 {
            font-size: 2.5rem;
            color: var(--green-primary);
            margin-bottom: 1rem;
        }
        
        .score-circle {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background: var(--green-light);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 2rem auto;
            font-size: 3rem;
            font-weight: 800;
            color: var(--green-primary);
            border: 4px solid var(--green-primary);
        }
    </style>
</head>
<body>
    <?php include('navbar.html')?>
    
    <div class="body-margin">
        <div class="quiz-container">
            <div class="quiz-header" id="quizHeader">
                <h1>Eco-Warrior Quiz 🌱</h1>
                <p>Seberapa jauh kamu tahu tentang daur ulang dan kelestarian lingkungan? Yuk, tes pengetahuanmu!</p>
                <button class="button-green" id="startBtn">Mulai Kuis</button>
            </div>
            
            <div id="quizArea" style="display: none;">
                <!-- Questions will be injected here via JS -->
            </div>
            
            <div class="result-card" id="resultArea">
                <h2>Kuis Selesai! 🎉</h2>
                <div class="score-circle" id="scoreDisplay">0</div>
                <p id="scoreMessage" style="font-size: 1.2rem; margin-bottom: 2rem;">...</p>
                <a href="index.php" class="button-green">Kembali ke Beranda</a>
                <button class="button-green" style="background: var(--accent-yellow); color: var(--text-dark);" onclick="location.reload()">Ulangi Kuis</button>
            </div>
        </div>
    </div>

    <?php include('footer.html')?>

    <script>
        const questions = [
            {
                q: "Berapa lama waktu yang dibutuhkan botol plastik untuk terurai secara alami di tanah?",
                options: ["10-50 Tahun", "100-200 Tahun", "450-1000 Tahun", "Tidak akan pernah terurai"],
                answer: 2
            },
            {
                q: "Apa simbol daur ulang internasional (Mobius Loop)?",
                options: ["Tiga panah membentuk segitiga", "Lingkaran hijau", "Daun berwarna hijau", "Tanda silang merah"],
                answer: 0
            },
            {
                q: "Manakah dari berikut ini yang BUKAN merupakan prinsip 3R?",
                options: ["Reduce (Mengurangi)", "Reuse (Menggunakan Kembali)", "Recycle (Mendaur Ulang)", "Replace (Mengganti)"],
                answer: 3
            },
            {
                q: "Bahan apa yang paling mudah dan efisien untuk didaur ulang berkali-kali tanpa mengurangi kualitasnya?",
                options: ["Plastik", "Kertas", "Kaca & Aluminium", "Kain/Tekstil"],
                answer: 2
            }
        ];

        let currentQuestion = 0;
        let score = 0;
        
        const startBtn = document.getElementById('startBtn');
        const quizHeader = document.getElementById('quizHeader');
        const quizArea = document.getElementById('quizArea');
        const resultArea = document.getElementById('resultArea');

        startBtn.addEventListener('click', () => {
            quizHeader.style.display = 'none';
            quizArea.style.display = 'block';
            renderQuestion();
        });

        function renderQuestion() {
            if (currentQuestion >= questions.length) {
                showResults();
                return;
            }
            
            const q = questions[currentQuestion];
            let optionsHtml = '';
            q.options.forEach((opt, index) => {
                optionsHtml += `<button class="option-btn" onclick="selectAnswer(${index})">${opt}</button>`;
            });

            quizArea.innerHTML = `
                <div class="question-card active">
                    <p class="smaller" style="text-align: left; margin-bottom: 1rem;">Pertanyaan ${currentQuestion + 1} dari ${questions.length}</p>
                    <div class="question-text">${q.q}</div>
                    <div class="options">
                        ${optionsHtml}
                    </div>
                </div>
            `;
        }

        window.selectAnswer = function(index) {
            if (index === questions[currentQuestion].answer) {
                score++;
            }
            currentQuestion++;
            setTimeout(renderQuestion, 300); // Slight delay for smooth transition
        };

        function showResults() {
            quizArea.style.display = 'none';
            resultArea.classList.add('active');
            
            const percentage = Math.round((score / questions.length) * 100);
            document.getElementById('scoreDisplay').innerText = percentage + '%';
            
            let message = "";
            if (percentage === 100) message = "Luar biasa! Kamu adalah seorang Eco-Warrior Sejati! 🌍💚";
            else if (percentage >= 50) message = "Bagus sekali! Pengetahuanmu tentang lingkungan sudah cukup baik. 🌱";
            else message = "Jangan menyerah! Mari terus belajar menjaga bumi kita bersama Recreo. ♻️";
            
            document.getElementById('scoreMessage').innerText = message;
        }
    </script>
</body>
</html>
