<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Recreo Group</title>
        <link rel="stylesheet" href="{{ asset('css/style.css')}}">
        <link rel="stylesheet" href="{{ asset('css/navbar.css')}}">
        <link rel="stylesheet" href="{{ asset('css/index.css')}}">
    </head>
    <body>
        <div class="navbar">
            <div class="body-margin navbar-wrap">
                <div class="navbar-image">
                    <img src="{{asset('images/recreo-logo-cropped.svg')}}" alt="" srcset="">
                </div>
                <div class="navbar-links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Crafts Tutorial</a>
                    <a href="#">Creation</a>
                    <a href="#">Feedback</a>
                </div>
                <div class="navbar-button">
                    <a href="#" class="button-green">Contact Us</a>
                </div>
            </div>
        </div>
        <div class="hero-wrap body-margin">
            <div class="hero-image-section">
                <img src="{{asset('images/landing-page-photo.jpg')}}" alt="">
            </div>
            <div class="hero-text-button-section">
                <div class="hero-text">
                    <h2>Temukan inspirasi, pelajari cara, dan bagikan hasil karyamu dari bahan bekas.</h2>
                </div>
                <div class="hero-button">
                    <a href="#" class="button-green">About Us</a>
                </div>
            </div>
        </div>
        <div class="quote-section body-margin">
            <p>Daur ulang bukan sekadar pilihan — ini gaya hidup baru. Jadilah kreator perubahan bersama Recreo.
            Setiap benda bekas punya cerita baru menunggu untuk kamu ciptakan.
            Lewat tutorial seru dan galeri karya sesama pengguna, kamu bisa belajar, berkreasi, dan menginspirasi.
            Satu karya dari barang bekas hari ini, satu langkah kecil untuk masa depan yang lebih hijau.
            </p>
        </div>  
    </body>
</html>