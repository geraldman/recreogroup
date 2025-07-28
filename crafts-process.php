<?php
    session_start();
    require('config.php');
    
    if($_SERVER["REQUEST_METHOD"] !== 'POST' || !isset($_POST["submit"])){
        exit("POST request method required");
    }
    
    $header = htmlspecialchars($_POST["header"]);
    $name = htmlspecialchars($_POST["nama_kamu"]);
    $category = htmlspecialchars($_POST["kategori_bahan"]);
    $title = htmlspecialchars($_POST["judul_kreasi"]);
    $description = htmlspecialchars($_POST["deskripsi_kreasi"]);
    $baseimg_temp = $_FILES["hasil_foto"]["tmp_name"]; 
    $baseimg_name = basename($_FILES["hasil_foto"]['name']);

    $dateTime = new DateTime();
    // Format it for SQL Server (YYYY-MM-DD HH:MM:SS)
    $formattedDateTime = $dateTime->format('Y-m-d H:i:s');


    if($header == "crafts-tutorial"){
        // base declaration
        $tools = htmlspecialchars($_POST['bahan_alat']);
        
        // base image file declaration

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

        $baseimg_dir = $uploadDirectory . "/" . $baseimg_name;
        if(move_uploaded_file($baseimg_temp, $baseimg_dir)){
            $conn -> updateCraftsTutorialImageDir($id, $baseimg_dir);
        }
        else{
            exit("Error moving the file for base image - crafts tutorial");
        }

        while(true){
            $tutorial_step_desc = "langkah_tutorial_" . $tutorial_step;
            $tutorial_step_image = "tutorial_foto_" . $tutorial_step;

            // cek klo ada file di multipart/form-data
            if(!isset($_POST[$tutorial_step_desc]) || !isset($_FILES[$tutorial_step_image])){
                break;
            }

            $tutorial_step_desc_VALUE = htmlspecialchars($_POST["langkah_tutorial_" . $tutorial_step]);
            // dir yang dituju
            $specificUploadDir = $uploadDirectory . "/" . basename($_FILES[$tutorial_step_image]['name']);
            $temp_name = $_FILES[$tutorial_step_image]['tmp_name'];

            print($specificUploadDir);
            print($temp_name);

            // work in progress
            if(move_uploaded_file($temp_name, $specificUploadDir)){
                $conn->uploadTutorialSteps($id, $tutorial_step, $specificUploadDir, $tutorial_step_desc_VALUE);
            }
            else{
                print("Error moving the file for step " . $tutorial_step . ".");
                break;
            }
            print($tutorial_step);
            $tutorial_step++;
        }
        header("Location: crafts-tutorial.php?upload=success");
    }
    if($header == "creations"){
        $conn = new DBConn();
        if($conn == false){
            header("Location: creation.php?upload=failed");
            exit;
        }

        $conn->uploadCreations($name, $category, $title, $description, $formattedDateTime);
        $id = $conn->readCreationsId($name, $title, $formattedDateTime);

        $uploadDirectory = "uploads/creations/" . $name . "_" . $id;

        if (!is_dir($uploadDirectory)) {
            // Create the directory recursively if it doesn't exist.
            // The 0777 permissions are common but can be adjusted for your server's security policy.
            mkdir($uploadDirectory, 0777, true);
        }

        $baseimg_dir = $uploadDirectory . "/" . $baseimg_name;
        error_log($baseimg_dir);
        if(move_uploaded_file($baseimg_temp, $baseimg_dir)){
            $conn->updateCreationsImageDir($id, $baseimg_dir);
        }
        else{
            exit("Error moving the file for base image - creations");
        }
        header("Location: creation.php?upload=success");
    }
?>