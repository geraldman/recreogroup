<?php
    // if(isset($_GET['category'])){

    // }
?>

<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ReCreo - Crafts Tutorial</title>
    <link rel="stylesheet" href="../css/crafts-tutorial.css">
    <link rel="stylesheet" href="../css/footer.css">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/navbar.css">
    <link rel="stylesheet" href="../css/index.css">
    <link rel="stylesheet" href="../css/about.css">
    <script src="js/navbar.js"></script>
    <script src="js/index.js"></script>
    <script src="js/crafts-tutorial.js"></script>
</head>

<body>
    <div class="overlay">
        <div class="overlay-container">
            <div class="overlay-menubar">
                <button>X</button>
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
                            <p class="username small">Lampu meja minimalis ini menghadirkan nuansa hangat dan modern ke ruang kerja atau kamar tidur. Dengan desain elegan dan sentuhan kayu alami, lampu ini cocok untuk suasana produktif maupun relaksasi. Dilengkapi fitur pencahayaan LED hemat energi dan leher fleksibel untuk pencahayaan maksimal.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad tempora eius explicabo, officiis rerum perferendis similique id optio suscipit, eveniet magni iusto at necessitatibus! Fugit, nesciunt. Culpa quod quaerat sed.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="overlay-instruction">
                    <div class="instruction-carousel" id="instruction-carousel">
                        <img class="instruction active" src="img/craft-picture-1.png" alt="">
                        <img class="instruction" src="img/craft-picture-2.png" alt="">
                        <img class="instruction" src="img/vertical-1-picture.png" alt="">
                    </div>
                    <div class="instruction-description">
                        <p class="username big" id="instruction-step">Step 1</p>
                        <p class="username small" id="instruction-description">Lampu meja minimalis ini menghadirkan nuansa hangat dan modern ke ruang kerja atau kamar tidur. Dengan desain elegan dan sentuhan kayu alami, lampu ini cocok untuk suasana produktif maupun relaksasi. Dilengkapi fitur pencahayaan LED hemat energi dan leher fleksibel untuk pencahayaan maksimal.</p>
                    </div>
                </div>
                <div class="overlay-action-buttons">
                    <button id="previousStep" onclick=changeStep(-1)>Previous</button>
                    <button id="nextStep" onclick=changeStep(1)>Next</button>
                </div>  
            </div>
        </div>
    </div>
    <?php include 'navbar.html'?>

    <div class="content">
        <div class="sidebar">
            <div class="categories">
                <div class="upload-category">
                    <p class="textcategory white">Upload</p>
                    <button class="category uploadBtn" onclick=creates()>
                        +
                    </button>
                </div>
                <button class="category" onclick=categoryRedirect(1)>
                    <img src="img/elements/plastic.png" alt="Plastik">
                    <p class="textcategory">Plastik</p>
                </button>
                <button class="category" onclick=categoryRedirect(2)>
                    <img src="img/elements/fabric.png" alt="Kain">
                    <p class="textcategory">Kain</p>
                </button>
                <button class="category" onclick=categoryRedirect(3)>
                    <img src="img/elements/paper.png" alt="Kertas">
                    <p class="textcategory">Kertas</p>
                </button>
                <button class="category" onclick=categoryRedirect(4)>
                    <img src="img/elements/wood.png" alt="Kayu">
                    <p class="textcategory">Kayu</p>
                </button>
                <button class="category" onclick=categoryRedirect(5)>
                    <img src="img/elements/others.png" alt="Lainnya">
                    <p class="textcategory">Lainnya</p>
                </button>
            </div>
        </div>


        <main class="content-area">
            <h2 class="green">Crafts Tutorial</h2>
            <p style="letter-spacing: 1.5px">Temukan apa yang ingin kamu buat!</p>

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
                <button class="category" onclick=categoryRedirect(1)>
                    <img src="img/elements/plastic.png" alt="Plastik">
                    <p class="textcategory">Plastik</p>
                </button>
                <button class="category" onclick=categoryRedirect(2)>
                    <img src="img/elements/fabric.png" alt="Kain">
                    <p class="textcategory">Kain</p>
                </button>
                <button class="category" onclick=categoryRedirect(3)>
                    <img src="img/elements/paper.png" alt="Kertas">
                    <p class="textcategory">Kertas</p>
                </button>
                <button class="category" onclick=categoryRedirect(4)>
                    <img src="img/elements/wood.png" alt="Kayu">
                    <p class="textcategory">Kayu</p>
                </button>
                <button class="category" onclick=categoryRedirect(5)>
                    <img src="img/elements/others.png" alt="Lainnya">
                    <p class="textcategory">Lainnya</p>
                </button>
        </div>
            <?php include 'tutorial-grid-crafts.php'?>
        </main>
        <!-- <script src="../js/script.js"></script> -->
        <script>
            function creates(){
                location.replace("crafts-tutorial-upload.php");
            }
            function categoryRedirect(id){
                location.replace("crafts-tutorial.php?category=" + arguments[0]);
            }
        </script>
</body>
</html>
