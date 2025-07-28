<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Results - ReCreo</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/kahoot-style.css">
    <link rel="stylesheet" href="css/navbar.css">
</head>
<body>
    <div class="container">
        <header class="header">
        <?php include('navbar.html')?>
        <!-- Header -->
        <header class="header">
            <div class="logo">
                <span class="logo-text">ReCreo</span>
            </div>
        </header>

        <!-- Main Content -->
        <main class="main-content">
            <!-- User Result Card -->
            <div class="user-result-card">
                <div class="result-header">
                    <div class="user-info">
                        <span class="username">aLn</span>
                        <span class="time">07:24 s</span>
                    </div>
                </div>
                <div class="result-body">
                    <div class="rank-info">
                        <span class="rank-label">RANK</span>
                        <span class="rank-number">4</span>
                    </div>
                    <div class="score-info">
                        <span class="score">11/15</span>
                        <div class="score-circle">
                            <span class="percentage">73.3%</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Leaderboard -->
            <div class="leaderboard">
                <div class="leaderboard-header">
                    <span class="time-label">Time</span>
                    <span class="answer-label">Correct Answer</span>
                </div>
                <div class="leaderboard-list">
                    <div class="leaderboard-item">
                        <span class="position">1.</span>
                        <span class="name">Anjelin</span>
                        <span class="time">03:27</span>
                        <span class="score">20</span>
                    </div>
                    <div class="leaderboard-item">
                        <span class="position">2.</span>
                        <span class="name">XXX</span>
                        <span class="time">05:09</span>
                        <span class="score">20</span>
                    </div>
                    <div class="leaderboard-item">
                        <span class="position">3.</span>
                        <span class="name">Jhon</span>
                        <span class="time">05:43</span>
                        <span class="score">19</span>
                    </div>
                    <div class="leaderboard-item current-user">
                        <span class="position">4.</span>
                        <span class="name">aLn</span>
                        <span class="time">06:18</span>
                        <span class="score">18</span>
                    </div>
                </div>
            </div>

            <!-- Review Questions -->
            <div class="review-section">
                <h2 class="review-title">Review Question</h2>
                
                <div class="question-card correct">
                    <div class="question-number">1.</div>
                    <div class="question-content">
                        <p class="question-text">Sampah sisa makanan seperti nasi dan sayuran disebut sampah…</p>
                        <div class="options">
                            <div class="option">A. Anorganik (tidak bisa busuk)</div>
                            <div class="option">B. Organik (bisa busuk)</div>
                            <div class="option">C. Benda tajam</div>
                            <div class="option">D. Elektronik</div>
                        </div>
                        <div class="answer">
                            <strong>Jawaban benar:</strong> B. Organik (bisa busuk)
                        </div>
                    </div>
                </div>

                <div class="question-card wrong">
                    <div class="question-number">2.</div>
                    <div class="question-content">
                        <p class="question-text">Apa itu sampah anorganik?</p>
                        <div class="options">
                            <div class="option">A. Kulit buah</div>
                            <div class="option">B. Sisa makanan</div>
                            <div class="option">C. Kaleng bekas</div>
                            <div class="option">D. Rumput</div>
                        </div>
                        <div class="answer">
                            <strong>Jawaban benar:</strong> C. Kaleng bekas
                        </div>
                    </div>
                </div>

                <div class="question-card correct">
                    <div class="question-number">3.</div>
                    <div class="question-content">
                        <p class="question-text">Apa arti "daur ulang" itu?</p>
                        <div class="options">
                            <div class="option">A. Membuang sampah jauh-jauh</div>
                            <div class="option">B. Membakar sampah</div>
                            <div class="option">C. Mengubah sampah jadi barang baru</div>
                            <div class="option">D. Mengubur sampah</div>
                        </div>
                        <div class="answer">
                            <strong>Jawaban benar:</strong> C. Mengubah sampah jadi barang baru
                        </div>
                    </div>
                </div>

                <div class="question-card correct">
                    <div class="question-number">4.</div>
                    <div class="question-content">
                        <p class="question-text">Apa singkatan dari 3R yang penting untuk mengelola sampah?</p>
                        <div class="options">
                            <div class="option">A. Repeat, Rapi, Reply</div>
                            <div class="option">B. Reduce, Reuse, Recycle</div>
                            <div class="option">C. Rias, Resik, Raya</div>
                            <div class="option">D. Relax, Racoon, Room</div>
                        </div>
                        <div class="answer">
                            <strong>Jawaban benar:</strong> B. Reduce, Reuse, Recycle
                        </div>
                    </div>
                </div>

                <div class="question-card correct">
                    <div class="question-number">5.</div>
                    <div class="question-content">
                        <p class="question-text">"Reuse" artinya menggunakan kembali. Contohnya adalah…</p>
                        <div class="options">
                            <div class="option">A. Membuang botol bekas ke tong sampah</div>
                            <div class="option">B. Memakai kembali tas belanja kain</div>
                            <div class="option">C. Mengurangi jumlah sampah yang kita hasilkan</div>
                            <div class="option">D. Menanam pohon</div>
                        </div>
                        <div class="answer">
                            <strong>Jawaban benar:</strong> B. Memakai kembali tas belanja kain
                        </div>
                    </div>
                </div>

                <div class="question-card wrong">
                    <div class="question-number">6.</div>
                    <div class="question-content">
                        <p class="question-text">Botol plastik bekas bisa kita ubah menjadi…</p>
                        <div class="options">
                            <div class="option">A. Tempat pensil</div>
                            <div class="option">B. Kompor</div>
                            <div class="option">C. Buku</div>
                            <div class="option">D. Televisi</div>
                        </div>
                        <div class="answer">
                            <strong>Jawaban benar:</strong> A. Tempat pensil
                        </div>
                    </div>
                </div>

                <div class="question-card correct">
                    <div class="question-number">7.</div>
                    <div class="question-content">
                        <p class="question-text">Mengapa kita tidak boleh membakar sampah plastik?</p>
                        <div class="options">
                            <div class="option">A. Karena berbahaya bagi udara dan kesehatan</div>
                            <div class="option">B. Karena berasap</div>
                            <div class="option">C. Karena polusi akan berkurang</div>
                            <div class="option">D. Karena jadi air</div>
                        </div>
                        <div class="answer">
                            <strong>Jawaban benar:</strong> A. Karena berbahaya bagi udara dan kesehatan
                        </div>
                    </div>
                </div>

                <div class="question-card correct">
                    <div class="question-number">8.</div>
                    <div class="question-content">
                        <p class="question-text">Bahan apa yang biasanya digunakan untuk merekatkan bagian-bagian kerajinan sampah?</p>
                        <div class="options">
                            <div class="option">A. Air</div>
                            <div class="option">B. Lem</div>
                            <div class="option">C. Gunting</div>
                            <div class="option">D. Kertas</div>
                        </div>
                        <div class="answer">
                            <strong>Jawaban benar:</strong> B. Lem
                        </div>
                    </div>
                </div>

                <div class="question-card wrong">
                    <div class="question-number">9.</div>
                    <div class="question-content">
                        <p class="question-text">Kenapa kita harus memilah sampah di rumah?</p>
                        <div class="options">
                            <div class="option">A. Agar cepat penuh tong sampahnya</div>
                            <div class="option">B. Agar sampah mudah didaur ulang</div>
                            <div class="option">C. Agar lingkungan bersih</div>
                            <div class="option">D. Agar tumbuh pohon</div>
                        </div>
                        <div class="answer">
                            <strong>Jawaban benar:</strong> B. Agar sampah mudah didaur ulang
                        </div>
                    </div>
                </div>

                <div class="question-card correct">
                    <div class="question-number">10.</div>
                    <div class="question-content">
                        <p class="question-text">Sumber daya alam apa yang bisa kita hemat jika mendaur ulang kertas?</p>
                        <div class="options">
                            <div class="option">A. Minyak bumi</div>
                            <div class="option">B. Pohon</div>
                            <div class="option">C. Air laut</div>
                            <div class="option">D. Emas</div>
                        </div>
                        <div class="answer">
                            <strong>Jawaban benar:</strong> B. Pohon
                        </div>
                    </div>
                </div>

                <div class="question-card correct">
                    <div class="question-number">11.</div>
                    <div class="question-content">
                        <p class="question-text">Apa manfaat jika kita rajin mendaur ulang sampah?</p>
                        <div class="options">
                            <div class="option">A. Bumi jadi kotor</div>
                            <div class="option">B. Tanah longsor</div>
                            <div class="option">C. Lingkungan jadi bersih dan sehat</div>
                            <div class="option">D. Tidak ada manfaatnya</div>
                        </div>
                        <div class="answer">
                            <strong>Jawaban benar:</strong> C. Lingkungan jadi bersih dan sehat
                        </div>
                    </div>
                </div>

                <div class="question-card correct">
                    <div class="question-number">12.</div>
                    <div class="question-content">
                        <p class="question-text">Jika melihat teman membuang sampah sembarangan, apa yang sebaiknya kita lakukan?</p>
                        <div class="options">
                            <div class="option">A. Ikut membuang sampah sembarangan</div>
                            <div class="option">B. Menyalahkan teman</div>
                            <div class="option">C. Memberi tahu untuk membuang di tempat sampah</div>
                            <div class="option">D. Tertawa</div>
                        </div>
                        <div class="answer">
                            <strong>Jawaban benar:</strong> C. Memberi tahu untuk membuang di tempat sampah
                        </div>
                    </div>
                </div>

                <div class="question-card correct">
                    <div class="question-number">13.</div>
                    <div class="question-content">
                        <p class="question-text">Siapa yang bisa jadi Pahlawan Sampah?</p>
                        <div class="options">
                            <div class="option">A. Hanya orang dewasa</div>
                            <div class="option">B. Hanya guru</div>
                            <div class="option">C. Semua orang bisa jadi pahlawan sampah!</div>
                            <div class="option">D. Hanya petugas kebersihan</div>
                        </div>
                        <div class="answer">
                            <strong>Jawaban benar:</strong> C. Semua orang bisa jadi pahlawan sampah!
                        </div>
                    </div>
                </div>

                <div class="question-card wrong">
                    <div class="question-number">14.</div>
                    <div class="question-content">
                        <p class="question-text">Di website kami, kalian bisa melihat apa saja?</p>
                        <div class="options">
                            <div class="option">A. Film komedi</div>
                            <div class="option">B. Resep makanan</div>
                            <div class="option">C. Tutorial membuat karya dari sampah</div>
                            <div class="option">D. Berita politik terkini</div>
                        </div>
                        <div class="answer">
                            <strong>Jawaban benar:</strong> C. Tutorial membuat karya dari sampah
                        </div>
                    </div>
                </div>

                <div class="question-card correct">
                    <div class="question-number">15.</div>
                    <div class="question-content">
                        <p class="question-text">Selain melihat tutorial, kalian juga bisa _ hasil karya kalian di website kami.</p>
                        <div class="options">
                            <div class="option">A. Menerbangkan</div>
                            <div class="option">B. Membuang</div>
                            <div class="option">C. Membagikan</div>
                            <div class="option">D. Menyimpan rahasia</div>
                        </div>
                        <div class="answer">
                            <strong>Jawaban benar:</strong> C. Membagikan
                        </div>
                    </div>
                </div>
            </div>

            <!-- Pagination -->
            <div class="pagination">
                <div class="dot active"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>

            <!-- Action Buttons -->
            <div class="action-buttons">
                <button class="btn btn-retry">Coba lagi</button>
                <button class="btn btn-next">Selanjutnya</button>
            </div>
        </main>
    </div>

    <script src="script.js"></script>
</body>
</html> 