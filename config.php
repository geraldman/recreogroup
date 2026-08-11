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
        if(!$this->conn) return false;
        $sql = "INSERT INTO tutorials(tutor_name, tutor_title, tutor_description, tools, time_added, tutor_email, otp_id)
        values (?, ?, ?, ?, ?, ?, ?)";
        $result = $this->conn->prepare($sql);
        $result->execute([$name, $title, $description, $tools, $time_added, $email, $otp]); 
        return 0;
    }

    public function readCategoryName(){
        if(!$this->conn) return [];
        $sql = "SELECT category_id, category_name FROM categories";
        $result = $this->conn->prepare($sql);
        $result->execute();
        return $result->fetchAll(PDO::FETCH_ASSOC);
    }

    public function tutorialCategoryUpload($tutor_id, $cat_id){
        if(!$this->conn) return false;
        $sql = "INSERT INTO tutorial_category(tutorial_id, category_id) values (?, ?)";
        $result = $this->conn->prepare($sql);
        $result->execute([$tutor_id, $cat_id]);
        return 0;
    }

    public function readCraftsTutorialId($name, $title, $time){
        if(!$this->conn) return false;
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
        if(!$this->conn) return false;
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
        if(!$this->conn) return false;
        $sql = "INSERT INTO tutorials_step(tutorial_id, tutorial_step_count, tutorial_image_url, tutorial_step_description)
        VALUES (?, ?, ?, ?)";
        $result = $this->conn->prepare($sql);
        $result->execute([$id, $step, $imageurl, $description]);
        error_log("Upload Successful");
        return 0;
    }

    public function checkValidityCraftsTutorial($id){
        return true;
    }
}
