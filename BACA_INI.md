# 📁 RECREO GROUP - Panduan Penggunaan

## 🌐 Cara Menjalankan Website

### Cara Mudah (Double-click):
1. Buka folder `D:\recreogroup`
2. Double-click file **`JALANKAN_SERVER.bat`**
3. Buka browser, ketik: **`http://localhost:8080`**

### Cara Manual (PowerShell/CMD):
```
cd D:\recreogroup
php -S localhost:8080
```

---

## 📄 Halaman yang Tersedia

| Halaman | URL |
|--------|-----|
| 🏠 Home | http://localhost:8080/index.php |
| ℹ️ About | http://localhost:8080/about.php |
| 🎨 Crafts Tutorial | http://localhost:8080/crafts-tutorial.php |
| 🖼️ Creations | http://localhost:8080/creation.php |
| 🔐 Login/Register | http://localhost:8080/authenticate.php |
| ⬆️ Upload Tutorial | http://localhost:8080/crafts-tutorial-upload.php |

---

## 🗄️ Database (Opsional)

Untuk fitur lengkap (upload, kategori, dll) perlu MySQL:

1. Install **XAMPP** atau **MySQL**
2. Buat database `recreogroup`
3. Edit file `config.ini`:
   ```
   [database]
   DB_HOST = localhost
   DB_USER = root
   DB_PASS = (password MySQL kamu)
   DB_NAME = recreogroup
   ```

---

## 📂 Struktur Folder

```
D:\recreogroup\
├── index.php           ← Halaman utama
├── about.php           ← Halaman About
├── crafts-tutorial.php ← Tutorial
├── creation.php        ← Kreasi
├── authenticate.php    ← Login
├── config.php          ← Kelas database
├── config.ini          ← Konfigurasi DB
├── css/                ← File styling
├── js/                 ← File JavaScript
├── img/                ← Gambar
└── JALANKAN_SERVER.bat ← Shortcut server ⬅️ Double-click ini!
```
