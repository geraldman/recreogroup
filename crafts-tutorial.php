<?php 
include 'config.php';
$conn = new DBConn();
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
</head>

<body>
    <?php
        if(isset($_GET["id"])){
        $information = $conn->readCraftsTutorialById(htmlspecialchars($_GET["id"]));
        // print_r($information);
        ?>
        <div class="overlay">
            <div class="overlay-container">
                <div class="overlay-menubar">
                    <button id="overlay-exit" onclick=locationHeader()>X</button>
                </div>
                <div class="overlay-content">
                    <div class="upper-overlay-content">
                        <div class="left-overlay">
                            <img src="<?=$information["baseimg_url"]?>" alt="">
                            <p class="waste-category plastik">plastik</p>
                        </div>
                        <div class="right-overlay">
                            <div class="overlay-menubar-right">
                                <div class="menubar-left-side">
                                    <img src="img/elements/iconamoon_profile-circle-fill.png">
                                    <p class="username big"><?=$information["tutor_name"]?></p>
                                </div>
                                <p class="username small">2 weeks ago</p>
                            </div>
                            <div class="content-left-side">
                                <p class="username big"><?=$information["tutor_title"]?></p>
                                <p class="username small"><?=$information["tutor_description"]?>
                                </p>
                            </div>
                            <div class="content-left-side">
                                <p class="username big">Tools</p>
                                <p class="username small">
                                <?=$information["tools"]?>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="overlay-instruction">
                        <div class="instruction-carousel" id="instruction-carousel">
                            <?php
                                $steps = $conn->readCraftsTutorialStepById(htmlspecialchars($_GET["id"]));
                                // print_r($steps);
                                foreach($steps as $step){?>
                                    <img class="instruction" src="<?=$step["tutorial_image_url"]?>" alt="">
                                <?php
                                }
                            ?>
                        </div>
                        <div class="instruction-description">
                            <p class="username big" id="instruction-step"></p>
                            <p class="username small" id="instruction-description"></p>
                        </div>
                    </div>
                    <div class="overlay-action-buttons">
                        <button id="previousStep">Previous</button>
                        <button id="nextStep">Next</button>
                    </div>
                </div>
            </div>
            <script src="js/crafts-tutorial.js"></script>
        </div>
        <?php
        $stepDescriptions = array_column($steps, 'tutorial_step_description');?>
        <script>const descriptions = <?= json_encode($stepDescriptions); ?>;</script>
        <?php
        }
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
            <?php include 'tutorial-grid-crafts.php'; ?>
        </main>
        <!-- <script src="../js/script.js"></script> -->
        <script>
            function creates() {
                location.replace("crafts-tutorial-upload.php");
            }

            function categoryRedirect(id) {
                location.replace("crafts-tutorial.php?category=" + arguments[0]);
            }

            function locationHeader(){
                location.replace("crafts-tutorial.php");
            }

            function craftsTutorialRedirect(id){
                location.replace("crafts-tutorial.php?id=" + arguments[0]);
            }

        </script>
</body>

</html>
