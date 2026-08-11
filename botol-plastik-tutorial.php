<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tutorial: Lampu Estetik Botol Kaca - Recreo Group</title>
    <link rel="stylesheet" href="css/style.css?v=2">
    <link rel="stylesheet" href="css/navbar.css?v=2">
    <link rel="stylesheet" href="css/footer.css?v=2">
    <script src="js/navbar.js" defer></script>
    <style>
        .tutorial-header {
            margin-top: 150px;
            text-align: center;
        }
        
        .tutorial-header h1 {
            font-family: 'Playfair Display', serif;
            color: var(--green-primary);
            margin-bottom: 1rem;
        }

        .tutorial-hero-img {
            width: 100%;
            max-width: 800px;
            height: 400px;
            object-fit: cover;
            border-radius: var(--border-radius-lg);
            margin: 2rem auto;
            display: block;
            box-shadow: var(--shadow-md);
        }

        .tutorial-content {
            max-width: 800px;
            margin: 0 auto 5rem auto;
            background: white;
            padding: 3rem;
            border-radius: var(--border-radius-md);
            box-shadow: var(--shadow-sm);
        }

        .tools-materials {
            background: var(--bg-cream);
            padding: 2rem;
            border-radius: var(--border-radius-sm);
            margin-bottom: 3rem;
            border-left: 4px solid var(--green-primary);
        }

        .tools-materials h3 {
            margin-bottom: 1rem;
            color: var(--green-dark);
        }

        .tools-materials ul {
            padding-left: 1.5rem;
            line-height: 1.8;
        }

        .step-block {
            margin-bottom: 2.5rem;
            display: flex;
            gap: 1.5rem;
        }

        .step-number {
            background: var(--green-primary);
            color: white;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            font-weight: bold;
            font-size: 1.2rem;
            flex-shrink: 0;
        }

        .step-text h4 {
            margin-bottom: 0.5rem;
            font-size: 1.2rem;
        }

        .step-text p {
            color: var(--text-muted);
        }
    </style>
</head>
<body>
    <?php include('navbar.html')?>

    <div class="body-margin">
        <div class="tutorial-header">
            <p class="waste-category" style="margin: 0 auto 1rem auto;">Kaca & Plastik</p>
            <h1>Lampu Estetik dari Botol Bekas</h1>
            <p>Ubah botol bekas di rumahmu menjadi lampu tidur elegan yang menghangatkan suasana kamar.</p>
        </div>

        <img src="https://images.unsplash.com/photo-1518331539958-30113c2c10b7?auto=format&fit=crop&q=80&w=1000" alt="Lampu Botol" class="tutorial-hero-img">

        <div class="tutorial-content">
            <div class="tools-materials">
                <h3>Alat & Bahan yang Dibutuhkan:</h3>
                <ul>
                    <li>1 buah botol kaca bekas (sirup atau kecap yang sudah dibersihkan)</li>
                    <li>Lampu LED string (kawat peri/fairy lights) menggunakan baterai</li>
                    <li>Selotip atau lem tembak</li>
                    <li>Cat akrilik atau spidol permanen (opsional untuk hiasan)</li>
                </ul>
            </div>

            <h3 style="margin-bottom: 2rem; color: var(--text-dark);">Langkah-langkah Pembuatan:</h3>

            <div class="step-block">
                <div class="step-number">1</div>
                <div class="step-text">
                    <h4>Bersihkan Botol</h4>
                    <p>Cuci bersih botol kaca dan lepaskan labelnya. Rendam botol dalam air hangat bersabun selama 10 menit agar label mudah terkelupas. Keringkan sepenuhnya.</p>
                </div>
            </div>

            <div class="step-block">
                <div class="step-number">2</div>
                <div class="step-text">
                    <h4>Hias Botol (Opsional)</h4>
                    <p>Jika kamu suka, kamu bisa menggambar pola, bunga, atau bintang di permukaan luar botol menggunakan cat akrilik atau spidol permanen. Biarkan hingga cat mengering.</p>
                </div>
            </div>

            <div class="step-block">
                <div class="step-number">3</div>
                <div class="step-text">
                    <h4>Masukkan Lampu String</h4>
                    <p>Masukkan ujung kawat lampu peri (fairy lights) perlahan ke dalam botol. Pastikan kawat tersebar rata di dalam botol. Sisakan bagian saklar dan baterai di luar mulut botol.</p>
                </div>
            </div>

            <div class="step-block">
                <div class="step-number">4</div>
                <div class="step-text">
                    <h4>Sembunyikan Baterai</h4>
                    <p>Rekatkan kotak baterai lampu LED di bagian belakang mulut botol menggunakan selotip atau lem tembak agar tidak terlalu terlihat dari depan.</p>
                </div>
            </div>

            <div class="step-block">
                <div class="step-number">5</div>
                <div class="step-text">
                    <h4>Selesai!</h4>
                    <p>Nyalakan lampu saat ruangan gelap dan nikmati suasana hangat dari lampu botol kreasimu sendiri!</p>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 4rem;">
                <a href="index.php" class="button-green" style="background: var(--bg-cream); color: var(--green-primary); border: 2px solid var(--green-primary);">Kembali ke Beranda</a>
            </div>
        </div>
    </div>

    <?php include('footer.html')?>
</body>
</html>
