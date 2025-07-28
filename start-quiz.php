<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recreo Quiz</title>
    <link rel="stylesheet" href="css/start-quiz_styles.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header class="header">
        <?php include('navbar.html')?>
        </header>

        <main>
            <div class="content">
                <p class="subtitle">Tantangan Asyik Buat Kamu</p>
                
                <h2 class="main-title">Kuis Recreo seru yang siap kamu taklukkan!</h2>
                
                <div class="intro-section">
                    <h3>Introduction Quiz</h3>
                    <p clas"description">uji pengetahuanmu, dan lihat seberapa banyak kamu tahu.</p>
                </div>

                <div class="form-section">
                    <div class="input-container">
                        <img src="../img/elements/kucing.png" alt="Kucing" class="cat-image">
                        <input type="text" id="nameInput" placeholder="Masukkan nama kamu" class="name-input">
                    </div>
                    
                    <div class="buttons">
                        <button class="btn btn-primary" id="startQuiz">Mulai Quiz</button>
                    
                        <button class="btn btn-secondary" id="backBtn">Kembali</button>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <!-- Green rectangle at bottom -->
    <div class="green-rectangle"></div>

    <script src="js/start-quiz_script.js"></script>
</body>
</html>