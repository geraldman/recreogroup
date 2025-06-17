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
            <div class="accessory-background paperclip">
                <img src="{{asset('images/paperclip-background.png')}}" alt="" srcset="">
            </div>
            <p>Daur ulang bukan sekadar pilihan — ini gaya hidup baru. Jadilah kreator perubahan bersama Recreo.
            Setiap benda bekas punya cerita baru menunggu untuk kamu ciptakan.
            Lewat tutorial seru dan galeri karya sesama pengguna, kamu bisa belajar, berkreasi, dan menginspirasi.
            Satu karya dari barang bekas hari ini, satu langkah kecil untuk masa depan yang lebih hijau.
            </p>
            <div class="accessory-background pink-bear">
                <img src="{{asset('images/pink-bear-background.png')}}" alt="" srcset="">
            </div>
        </div>
        <div class="our-goals body-margin">
            <div class="h2-wrap">
                <div class="h2-inline-wrap">
                    <div class="accessory-background crown">
                        <img src="{{asset('images/crown-background.png')}}" alt="">
                    </div>
                    <h2 class="green">Our Goals</h2>
                </div>
            </div>
            <div class="wrap-our-goals">
                <div class="our-goals-block vertical">
                    <img src="{{asset('images/vertical-1-picture.png')}}" alt="">
                    <div class="text-wrap">
                        <p class="small bold">Recreo transforms waste into wonder one creation at a time</p>
                        <p class="small">What we throw away still holds magic. With a little creativity, 
                                every piece of waste can become something meaningful and beautiful for you and for the Earth.</p>
                    </div>
                </div>
                <div class="our-goals-block-horizontal-wrap">
                    <div class="our-goals-block horizontal one">
                        <div class="text-wrap">
                            <p class="small bold">Recreo is where old materials find new meaning</p>
                            <p class="small">Don't throw it out give it a second life. Here, forgotten things are reborn as art, tools, and ideas that inspire.</p>
                        </div>
                        <img src="{{asset('images/horizontal-1-picture.png')}}" alt="">
                    </div>
                    <div class="our-goals-block horizontal two">
                        <img src="{{asset('images/horizontal-2-picture.png')}}" alt="">
                        <div class="text-wrap">
                            <p class="small bold">Turning trash into creativity, and creativity into change</p>
                            <p class="small">Art has power.<br>
                            By reimagining waste, we're not only making something fun, we're creating a movement that protects our planet.</p>
                        </div>
                    </div>
                </div>
                <div class="our-goals-block vertical">
                    <img src="{{asset('images/vertical-2-picture.png')}}" alt="">
                    <div class="text-wrap">
                        <p class="small bold">Recreate the world, beautifully</p>
                        <p class="small">You don't need new things to make something amazing. 
                            With your hands and heart, you can reshape the world with beauty and care.</p>
                    </div>                    
                </div>
            </div>
        </div>
    </body>
</html>