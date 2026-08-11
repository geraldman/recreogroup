<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ReCreo - Crafts Tutorial</title>
    <link rel="stylesheet" href="css/crafts-tutorial.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/about.css">
    <script src="js/navbar.js"></script>
    <script src="js/index.js"></script>
    <script src="js/sidebar.js"></script>
</head>

<body>
    <?php
        if(isset($_GET["id"])){
        print '<div class="overlay">
        <div class="overlay-container">
            <div class="overlay-menubar">
                <button id="overlay-exit" onclick=locationHeader()>X</button>
            </div>
            <div class="overlay-content">
                <div class="upper-overlay-content">
                    <div class="left-overlay">
                        <img src="img/craft-picture-1.png" alt="">
                        <p class="waste-category plastik">plastik</p>
                    </div>
                    <div class="right-overlay">
                        <div class="overlay-menubar-right">
                            <div class="menubar-left-side">
                                <img src="img/elements/iconamoon_profile-circle-fill.png">
                                <p class="username big">Anjelin</p>
                            </div>
                            <p class="username small">2 weeks ago</p>
                        </div>
                        <div class="content-left-side">
                            <p class="username big">Cara membuat lampu dari botol bekas anti ribet</p>
                            <p class="username small">Lampu meja minimalis ini menghadirkan nuansa hangat dan modern ke
                                ruang kerja atau kamar tidur. Dengan desain elegan dan sentuhan kayu alami, lampu ini
                                cocok untuk suasana produktif maupun relaksasi. Dilengkapi fitur pencahayaan LED hemat
                                energi dan leher fleksibel untuk pencahayaan maksimal.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad tempora eius explicabo,
                                officiis rerum perferendis similique id optio suscipit, eveniet magni iusto at
                                necessitatibus! Fugit, nesciunt. Culpa quod quaerat sed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>';}
    ?>

    <?php include 'navbar.html'; ?>

    <div class="content">

        <div class="sidebar">
            <div class="categories">
                <div class="upload-category">
                    <p class="textcategory white">Upload</p>
                    <button class="category uploadBtn" onclick=creates()>
                        +
                    </button>
                </div>
                <button class="category">
                    <img src="img/elements/plastic.png" alt="Plastik">
                    <p class="textcategory">Plastik</p>
                </button>
                <button class="category">
                    <img src="img/elements/fabric.png" alt="Kain">
                    <p class="textcategory">Kain</p>
                </button>
                <button class="category">
                    <img src="img/elements/paper.png" alt="Kertas">
                    <p class="textcategory">Kertas</p>
                </button>
                <button class="category">
                    <img src="img/elements/wood.png" alt="Kayu">
                    <p class="textcategory">Kayu</p>
                </button>
                <button class="category">
                    <img src="img/elements/others.png" alt="Lainnya">
                    <p class="textcategory">Lainnya</p>
                </button>
            </div>
        </div>


        <main class="content-area">
            <h2 class="green">Creations</h2>
            <p style="letter-spacing: 1.5px">Lorem ipsum </p>

            <div class="search-container">
                <div class="search-box">
                    <span class="search-icon">🔍</span>
                    <input type="text" placeholder="Cari" class="search-input">
                </div>
            </div>

            <div class="sidebar mobile">
                <button class="category uploadBtn" onclick=creates()>
                    +
                </button>
                <button class="category">
                    <img src="img/elements/plastic.png" alt="Plastik">
                    <p class="textcategory">Plastik</p>
                </button>
                <button class="category">
                    <img src="img/elements/fabric.png" alt="Kain">
                    <p class="textcategory">Kain</p>
                </button>
                <button class="category">
                    <img src="img/elements/paper.png" alt="Kertas">
                    <p class="textcategory">Kertas</p>
                </button>
                <button class="category">
                    <img src="img/elements/wood.png" alt="Kayu">
                    <p class="textcategory">Kayu</p>
                </button>
                <button class="category">
                    <img src="img/elements/others.png" alt="Lainnya">
                    <p class="textcategory">Lainnya</p>
                </button>
            </div>

            <div class="tutorial-grid">
                
                <div class="box-frame one" onclick=craftsTutorialRedirect(1)>
                    <div class="box-image-frame">
                        <img src="img/craft-picture-1.png" alt="">
                        <div class="action-buttons">
                            <div class="likes-section">
                                <span class="like-icon">&#x2764;</span> <span class="like-count">187 Likes</span>
                            </div>
                            <div class="options-dropdown">
                                <span class="dots-icon">&#x2022;&#x2022;&#x2022;</span>
                            </div>
                        </div>
                    </div>
                    <div class="box-text-frame">
                        <h3>Cara membuat lampu dari botol bekas anti ribet</h3>
                        <p class="small black light">Plastik mungkin praktis, tapi bahayanya besar untuk bumi.
                            Pelajari dampaknya dan mulai aksi kecilmu hari ini!</p>
                    </div>
                </div>

                <div class="box-frame one" onclick=craftsTutorialRedirect(1)>
                    <div class="box-image-frame">
                        <img src="img/craft-picture-1.png" alt="">
                        <div class="action-buttons">
                            <div class="likes-section">
                                <span class="like-icon">&#x2764;</span> <span class="like-count">187 Likes</span>
                            </div>
                            <div class="options-dropdown">
                                <span class="dots-icon">&#x2022;&#x2022;&#x2022;</span>
                            </div>
                        </div>
                    </div>
                    <div class="box-text-frame">
                        <h3>Cara membuat lampu dari botol bekas anti ribet</h3>
                        <p class="small black light">Plastik mungkin praktis, tapi bahayanya besar untuk bumi.
                            Pelajari dampaknya dan mulai aksi kecilmu hari ini!</p>
                    </div>
                </div>

                <div class="box-frame one">
                    <div class="box-image-frame">
                        <img src="img/craft-picture-1.png" alt="">
                        <div class="action-buttons">
                            <div class="likes-section">
                                <span class="like-icon">&#x2764;</span> <span class="like-count">187 Likes</span>
                            </div>
                            <div class="options-dropdown">
                                <span class="dots-icon">&#x2022;&#x2022;&#x2022;</span>
                            </div>
                        </div>
                    </div>
                    <div class="box-text-frame">
                        <h3>Cara membuat lampu dari botol bekas anti ribet</h3>
                        <p class="small black light">Plastik mungkin praktis, tapi bahayanya besar untuk bumi.
                            Pelajari dampaknya dan mulai aksi kecilmu hari ini!</p>
                    </div>
                </div>

                <div class="box-frame one">
                    <div class="box-image-frame">
                        <img src="img/craft-picture-1.png" alt="">
                        <div class="action-buttons">
                            <div class="likes-section">
                                <span class="like-icon">&#x2764;</span> <span class="like-count">187 Likes</span>
                            </div>
                            <div class="options-dropdown">
                                <span class="dots-icon">&#x2022;&#x2022;&#x2022;</span>
                            </div>
                        </div>
                    </div>
                    <div class="box-text-frame">
                        <h3>Cara membuat lampu dari botol bekas anti ribet</h3>
                        <p class="small black light">Plastik mungkin praktis, tapi bahayanya besar untuk bumi.
                            Pelajari dampaknya dan mulai aksi kecilmu hari ini!</p>
                    </div>
                </div>

                <div class="box-frame one">
                    <div class="box-image-frame">
                        <img src="img/craft-picture-1.png" alt="">
                        <div class="action-buttons">
                            <div class="likes-section">
                                <span class="like-icon">&#x2764;</span> <span class="like-count">187 Likes</span>
                            </div>
                            <div class="options-dropdown">
                                <span class="dots-icon">&#x2022;&#x2022;&#x2022;</span>
                            </div>
                        </div>
                    </div>
                    <div class="box-text-frame">
                        <h3>Cara membuat lampu dari botol bekas anti ribet</h3>
                        <p class="small black light">Plastik mungkin praktis, tapi bahayanya besar untuk bumi.
                            Pelajari dampaknya dan mulai aksi kecilmu hari ini!</p>
                    </div>
                </div>

                <div class="box-frame one">
                    <div class="box-image-frame">
                        <img src="img/craft-picture-1.png" alt="">
                        <div class="action-buttons">
                            <div class="likes-section">
                                <span class="like-icon">&#x2764;</span> <span class="like-count">187 Likes</span>
                            </div>
                            <div class="options-dropdown">
                                <span class="dots-icon">&#x2022;&#x2022;&#x2022;</span>
                            </div>
                        </div>
                    </div>
                    <div class="box-text-frame">
                        <h3>Cara membuat lampu dari botol bekas anti ribet</h3>
                        <p class="small black light">Plastik mungkin praktis, tapi bahayanya besar untuk bumi.
                            Pelajari dampaknya dan mulai aksi kecilmu hari ini!</p>
                    </div>
                </div>

                <!-- Pagination -->
                <!-- <div class="pagination">
                    <button class="prev-btn">◀ Prev</button>
                    <span class="page-numbers">
                        <span class="page-num">1</span>
                        <span class="page-num">2</span>
                        <span class="page-num active">3</span>
                        <span class="page-dots">...</span>
                        <span class="page-num">25</span>
                    </span>
                    <button class="next-btn">Next ▶</button>
                </div> -->

        </main>
        <script src="../js/script.js"></script>
        <script>
            function creates() {
                location.replace("creations-upload.php");
            }

            function locationHeader(){
                location.replace("creation.php");
            }

            function craftsTutorialRedirect(id){
                location.replace("creation.php?id=" + arguments[0]);
            }
        </script>
</body>

</html>
