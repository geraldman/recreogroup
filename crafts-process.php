<?php

    require('config.php');

    if($_SERVER["REQUEST_METHOD"] !== "POST"){
        exit("POST request method required");
    }
    
    $name = htmlspecialchars($_POST["nama_kamu"]);
    $category = htmlspecialchars($_POST["kategori_bahan"]);
    $title = htmlspecialchars($_POST["judul_kreasi"]);
    $description = htmlspecialchars($_POST["deskripsi_kreasi"]);

    // Connection to database and checking
    $conn = new DBConn();
    if($conn == 0){
        header("Location: crafts-tutorial-upload.php?upload=failed");
    }
    
    // Submitting general description
    $conn->uploadCraftsTutorial($name, $title, $description);

    print_r($_POST);
    print_r($_FILES);

?>