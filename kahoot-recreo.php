<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Kahoot Style</title>
    <link rel="stylesheet" href="/css/style.css">
        <link rel="stylesheet" href="/css/kahoot-style.css">
            <link rel="stylesheet" href="/css/navbar.css">
            <script src="js/navbar.js"></script>
</head>
<body>
    <header class="header">
        <?php include('navbar.html')?>
    </header>
        <main>
            <h2 class="quiz-title">Soal dari artikel 1</h2>
            
            <div class="question-card">
                <div class="question-header">
                    <h3 class="question-number">Question 3</h3>
                    <div class="timer">
                        <span class="time-left">5</span>
                        <span class="separator">:</span>
                        <span class="total-time">19</span>
                    </div>
                </div>
                
                <div class="question-text">
                    <p id="question-content">Jika melihat teman membuang sampah sembarangan, apa yang sebaiknya kita lakukan?</p>
                </div>
                
                <div class="answers-grid">
                    <div class="answer-option yellow" data-option="A">
                        <div class="option-letter">A</div>
                        <div class="option-text">Ikut membuang sampah sembarangan</div>
                    </div>
                    
                    <div class="answer-option blue" data-option="B">
                        <div class="option-letter">B</div>
                        <div class="option-text">Menyalahkan teman</div>
                    </div>
                    
                    <div class="answer-option red" data-option="C">
                        <div class="option-letter">C</div>
                        <div class="option-text">Memberi tahu untuk membuang di tempat sampah</div>
                    </div>
                    
                    <div class="answer-option orange" data-option="D">
                        <div class="option-letter">D</div>
                        <div class="option-text">Tertawa</div>
                    </div>
                </div>
            </div>
            
            <div class="navigation">
                <button class="nav-btn prev-btn">&lt;</button>
                <div class="page-numbers">
                    <button class="page-btn active">1</button>
                    <button class="page-btn">2</button>
                    <button class="page-btn ">3</button>
                    <button class="page-btn">4</button>
                    <button class="page-btn">5</button>
                    <button class="page-btn">6</button>
                    <button class="page-btn">7</button>
                    <button class="page-btn">8</button>
                    <button class="page-btn">9</button>
                    <button class="page-btn">10</button>
                    <button class="page-btn">11</button>
                    <button class="page-btn active">12</button>
                    <button class="page-btn">13</button>
                    <button class="page-btn ">14</button>
                    <button class="page-btn">15</button>
                    <button class="page-btn">16</button>
                    <button class="page-btn">17</button>
                    <button class="page-btn">18</button>
                    <button class="page-btn">19</button>
                    <button class="page-btn">20</button>

                    

                </div>
                <button class="nav-btn next-btn">&gt;</button>
            </div>
            
            <button class="submit-btn">Selesai</button>
        </main>
    </div>

    <script src="js/kahoot-style.js"></script>
</body>
</html>