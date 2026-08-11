<?php
    session_start();
    require('config.php');

    if(!isset($_SESSION['POST']) || !isset($_SESSION['HEAD'])){
        exit("POST request method required");
    }

    print_r($_SESSION['POST']);
    print_r($_SESSION['FILE_POST']);

    $dateTime = new DateTime();

    // Format it for SQL Server (YYYY-MM-DD HH:MM:SS)
    $formattedDateTime = $dateTime->format('Y-m-d H:i:s');

    $name = htmlspecialchars($_SESSION['POST']["nama_kamu"]);
    $category = htmlspecialchars($_SESSION['POST']["kategori_bahan"]);
    $title = htmlspecialchars($_SESSION['POST']["judul_kreasi"]);
    $description = htmlspecialchars($_SESSION['POST']["deskripsi_kreasi"]);
    $tools = htmlspecialchars($_SESSION['POST']['bahan_alat']);

    $conn = new DBConn();
    if($conn == false){
        header("Location: crafts-tutorial-upload.php?upload=failed");
        exit;
    }

    $conn->uploadCraftsTutorial($name, $title, $description, $tools, $formattedDateTime);
    $id = $conn->readCraftsTutorialId($name, $title, $formattedDateTime);
    $conn -> tutorialCategoryUpload($id, $category);

    $tutorial_step = 1;
    $uploadDirectory = "uploads/crafts-tutorial/" . $name . "_" . $id;

    if (!is_dir($uploadDirectory)) {
        // Create the directory recursively if it doesn't exist.
        // The 0777 permissions are common but can be adjusted for your server's security policy.
        mkdir($uploadDirectory, 0777, true);
    }

    while(true){
        $tutorial_step_desc = "langkah_tutorial_" . $tutorial_step;
        $tutorial_step_image = "tutorial_foto_" . $tutorial_step;

        // cek klo ada file di multipart/form-data
        if(!isset($_SESSION['POST'][$tutorial_step_desc]) || !isset($_SESSION['FILE_POST'][$tutorial_step_image])){
            break;
        }

        $tutorial_step_desc_VALUE = htmlspecialchars($_SESSION['POST']["langkah_tutorial_" . $tutorial_step]);

        // dir yang dituju
        $specificUploadDir = $uploadDirectory . "/" . $_SESSION['FILE_POST'][$tutorial_step_image]['name'];

        $conn->uploadTutorialSteps($id, $tutorial_step, $specificUploadDir, $tutorial_step_desc_VALUE);

        // work in progress
        move_uploaded_file($_SESSION['FILE_POST'][$tutorial_step_image]['tmp_name'], $specificUploadDir);
        print($tutorial_step);
        $tutorial_step++;

    }

?>
