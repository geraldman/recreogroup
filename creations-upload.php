<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ReCreo - Upload Hasil Kreasi</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/creates.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/navbar.css">
    <script src="js/navbar.js"></script>
</head>
<body>
    
    <?php include "navbar.html"?>

    <div class="main-container">
        <div class="header">
            <i class="fas fa-upload"></i>
            <h2 class="green medium inverted">Upload Hasil Karya Kamu</h2>
        </div>

        <div class="form-content">
            <form id="uploadForm">
                <!-- Row 1: Nama and Kategori -->
                <div class="form-row">
                    <div class="form-group">
                        <label for="nama_kamu">Nama mu</label>
                        <input type="text" id="nama" name="nama" placeholder="Nama kamu" required>
                    </div>
                    <div class="form-group">
                        <label for="kategori">Kategori berdasarkan bahan</label>
                        <select id="kategori" name="kategori" required>
                            <option value="">Pilih kategori bahan</option>
                            <option value="plastik">Plastik</option>
                            <option value="kain">Kain</option>
                            <option value="kertas">Kertas</option>
                            <option value="kayu">Kayu</option>
                            <option value="lainnya">Lainnya</option>
                        </select>
                    </div>
                </div>

                <!-- Row 2: Judul Kreasi -->
                <div class="form-group full-width">
                    <label for="judul">Judul kreasi</label>
                    <input type="text" id="judul" name="judul" placeholder="Kasi judul karya kamu" required>
                   
                </div>

                <!-- Row 3: Upload and Description -->
                <div class="upload-container">
                    <div class="upload-section">
                        <div class="upload-group">
                            <h5 class="upload-title">Upload hasil kreasi kamu</h5>
                            <div class="upload-area" id="mainUploadArea">
                                <i class="fas fa-cloud-upload-alt upload-icon"></i>
                                <p class="upload-text">Unggah 1 foto (format: png/jpeg/jpg)</p>
                                <input type="file" id="hasil_foto" name="hasil_foto" accept="image/*"
                                    style="display: none;" required>
                            </div>
                        </div>
                        <div class="content-group">
                            <h5 class="content-title">Bahan dan alat yang dibutuhkan :</h5>
                            <div class="textarea-container">
                                <textarea id="bahan_alat" name="bahan_alat"
                                    placeholder="Lampu meja minimalis ini menghadirkan nuansa hangat dan modern ke ruang kerja atau kamar tidur. Dengan desain elegan dan sentuhan kayu alami, lampu ini cocok untuk suasana produktif maupun relaksasi. Dilengkapi fitur pencahayaan LED hemat energi dan leher fleksibel untuk pencahayaan maksimal."
                                    required>
                                </textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Form Actions -->
                <div class="form-actions">
                    <button id="resetBtn">
                        Reset
                    </button>
                    <button type="submit" class="btn-submit">
                        Bagikan sekarang
                    </button>
                </div>
            </form>
        </div>
    </div>

    <script src="../js/crea-upload.js"></script>
</body>
</html>