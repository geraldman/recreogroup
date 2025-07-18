<?php

    require('config.php');

    if($_SERVER["REQUEST_METHOD"] !== "POST"){
        exit("POST request method required");
    }

    if(!isset($_POST['POST']) || !isset($_POST['HEAD'])){
        session_end();
        exit("POST request method required");
    }
    
    $name = htmlspecialchars($_POST['POST']["nama_kamu"]);
    $category = htmlspecialchars($_POST['POST']["kategori_bahan"]);
    $title = htmlspecialchars($_POST['POST']["judul_kreasi"]);
    $description = htmlspecialchars($_POST['POST']["deskripsi_kreasi"]);

    // Connection to database and checking
    $conn = new DBConn();
    if($conn == 0){
        header("Location: crafts-tutorial-upload.php?upload=failed");
        exit;
    }
    
    // Submitting general description
    $conn->uploadCraftsTutorial($name, $title, $description);

    print_r($_POST);
    print_r($_FILES);

    header("Location : localhost:8000");


?>