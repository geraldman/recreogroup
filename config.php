<?php

class DBConn{

    private $conn;
    private $connection_successful = false;
    private $config;

    public function __construct(){
        
        $config_file_path = realpath(__DIR__ . "/config.ini");
        
        if(!file_exists($config_file_path) || !is_readable($config_file_path)){
            error_log("Error, config.ini not found or not readable at " . $config_file_path);
            return;
        }

        $this->config = parse_ini_file($config_file_path, true);
        $hostname = $this->config["database"]["DB_HOST"];
        $username = $this->config["database"]["DB_USER"];
        $password = $this->config["database"]["DB_PASS"];
        $dbname = $this->config["database"]["DB_NAME"];

        try{
            $this->conn = new PDO("mysql:host=$hostname;dbname=$dbname", $username, $password);
            error_log("Connection to database is successful");
            $this->connection_successful = true;
            return $this->connection_successful;
        }
        catch(PDOException $e){
            error_log("Connection Failed " . $e->getMessage());
            $this->connection_successful = false;
            return $this->connection_successful;
        }
    }

    public function __destruct(){
        $this->conn = null;
    }

    public function uploadCraftsTutorial($name, $title, $description, $tools, $time_added, $email = "none", $otp = "999"){
        $sql = "INSERT INTO tutorials(tutor_name, tutor_title, tutor_description, tools, time_added, tutor_email, otp_id)
        values (?, ?, ?, ?, ?, ?, ?)";
        $result = $this->conn->prepare($sql);
        $result->execute([$name, $title, $description, $tools, $time_added, $email, $otp]); 
        return true;
    }

    public function updateCraftsTutorialImageDir($id, $baseimg_url){
        $sql = "UPDATE tutorials SET baseimg_url = ? WHERE tutorial_id = ?";
        $result = $this->conn->prepare($sql);
        $result->execute([$baseimg_url, $id]);
        return true;
    }

    public function readCategoryName(){
        $sql = "SELECT category_id, category_name FROM categories";
        $result = $this->conn->prepare($sql);
        $result->execute();
        return $result->fetchAll(PDO::FETCH_ASSOC);
    }

    public function tutorialCategoryUpload($tutor_id, $cat_id){
        $sql = "INSERT INTO tutorial_category(tutorial_id, category_id) values (?, ?)";
        $result = $this->conn->prepare($sql);
        $result->execute([$tutor_id, $cat_id]);
        return 0;
    }

    public function readCraftsTutorialId($name, $title, $time){
        $sql = "SELECT tutorial_id FROM tutorials WHERE tutor_name = ? AND tutor_title = ? AND time_added = ?";
        $result = $this->conn->prepare($sql);
        $result->execute([$name, $title, $time]);
        $row = $result->fetch(PDO::FETCH_ASSOC);
        if($row){
            return $row["tutorial_id"];
        }
        return false;
    }

    // checking if the name's already in the table (boolean)
    public function checkTitleValidity($title){
        $sql = "SELECT tutor_title FROM tutorials WHERE tutor_title = ?";
        $result = $this->conn->prepare($sql);
        $result->execute($title);
        $row = $result->fetch(PDO::FETCH_ASSOC);
        if($row){
            return true;
        }
        return false;
    }
    
    public function uploadTutorialSteps($id, $step, $imageurl, $description){
        $sql = "INSERT INTO tutorials_step(tutorial_id, tutorial_step_count, tutorial_image_url, tutorial_step_description)
        VALUES (?, ?, ?, ?)";
        $result = $this->conn->prepare($sql);
        $result->execute([$id, $step, $imageurl, $description]);
        error_log("Upload Successful");
        return true;
    }

    public function checkValidityCraftsTutorial($id){
        return true;
    }

    public function uploadCreations($name, $cat_id, $title, $description, $time_added, $email = "none", $otp = "999"){
        $sql = "INSERT INTO creations(creation_name, creation_category_id, creation_title, creation_description, creation_email, otp_id, time_added)
        VALUES (?, ?, ?, ?, ?, ?, ?)";
        $result = $this->conn->prepare($sql);
        $result->execute([$name, $cat_id, $title, $description, $email, $otp, $time_added]);
        return true;
    }

    public function readCreationsId($name, $title, $time){
        $sql = "SELECT creation_id FROM creations WHERE creation_name = ? AND creation_title = ? AND time_added = ?";
        $result = $this->conn->prepare($sql);
        $result->execute([$name, $title, $time]);
        $row = $result->fetch(PDO::FETCH_ASSOC);
        if($row){
            return $row["creation_id"];
        }
        return false;
    }

    public function readAllCreations(){
        $sql = "SELECT * FROM creations";
        $result = $this->conn->prepare($sql);
        $result->execute();
        return $result->fetchAll(PDO::FETCH_ASSOC);
    }

    public function readCreationsById($id){
        $sql = "SELECT * FROM creations WHERE creation_id = ?";
        $result = $this->conn->prepare($sql);
        $result->execute([$id]);
        return $result->fetch(PDO::FETCH_ASSOC);
    }

    public function updateCreationsImageDir($id, $baseimg_dir){
        $sql = "UPDATE creations SET baseimg_url = ? WHERE creation_id = ?";
        $result = $this->conn->prepare($sql);
        $result->execute([$baseimg_dir, $id]);
        return true;
    }

    public function readAllCraftsTutorial(){
        $sql = "SELECT * FROM tutorials";
        $result = $this->conn->prepare($sql);
        $result->execute();
        return $result->fetchAll(PDO::FETCH_ASSOC);
    }

    public function readCraftsTutorialById($id){
        $sql = "SELECT * FROM tutorials WHERE tutorial_id = ?";
        $result = $this->conn->prepare($sql);
        $result->execute([$id]);
        return $result->fetch(PDO::FETCH_ASSOC);
    }

    public function readCraftsTutorialStepById($id){
        $sql = "SELECT * FROM tutorials_step WHERE tutorial_id = ?";
        $result = $this->conn->prepare($sql);
        $result->execute([$id]);
        return $result->fetchAll(PDO::FETCH_ASSOC);
    }
}
