<?php
require_once 'config.php';
$conn = new DBConn();
?>

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

    <?php include 'navbar.html'; ?>

    <div class="main-container">
        <div class="header">
            <i class="fas fa-upload"></i>
            <h2 class="green medium inverted">Upload Hasil Karya Kamu</h2>
        </div>

        <div class="form-content">
            <form id="uploadForm" enctype="multipart/form-data" action="crafts-process.php" method="post">
                <input type="hidden" name="header" value="creations">
                <!-- Row 1: Nama and Kategori -->
                <div class="form-row">
                    <div class="form-group">
                        <label for="nama_kamu">Nama mu</label>
                        <input type="text" id="nama_kamu" name="nama_kamu" placeholder="Nama kamu" required>
                    </div>
                    <div class="form-group">
                        <label for="kategori_bahan">Kategori berdasarkan bahan</label>
                        <select id="kategori_bahan" name="kategori_bahan" required>
                            <option value="">Pilih kategori bahan</option>
                            <?php
                            $categories = $conn->readCategoryName();
                            foreach($categories as $cat){
                                ?>
                            <option value="<?= $cat['category_id'] ?>"><?= $cat['category_name'] ?></option>
                            <?php
                            }
                            ?>
                        </select>
                        <div class="error"></div>
                    </div>
                </div>

                <!-- Row 2: Judul Kreasi -->
                <div class="form-group full-width">
                    <label for="judul_kreasi">Judul kreasi</label>
                    <input type="text" id="judul_kreasi" name="judul_kreasi" placeholder="Kasi judul karya kamu"
                        required>
                    <div class="error"></div>
                </div>

                <!-- Row 3: Upload and Description -->
                <div class="upload-container">
                    <div class="upload-section">
                        <div class="upload-group">
                            <h5 class="upload-title">Upload hasil kreasi kamu</h5>
                            <div class="upload-area" id="initialUploadArea">
                                <i class="fas fa-cloud-upload-alt upload-icon"></i>
                                <p class="upload-text">Unggah 1 foto (format: png/jpeg/jpg)</p>
                                <input type="file" id="hasil_foto" name="hasil_foto" accept="image/*"
                                    style="display: none;" required>
                            </div>
                        </div>
                        <div class="content-group">
                            <h5 class="content-title">Deskripsikan apa yang kamu buat</h5>
                            <div class="textarea-container">
                                <textarea id="deskripsi_kreasi" name="deskripsi_kreasi"
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
                    <button type="submit" name="submit" class="btn-submit">
                        Bagikan sekarang
                    </button>
                </div>
            </form>
        </div>
    </div>

    <script src="../js/crea-upload.js"></script>
</body>

</html>
