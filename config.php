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
            echo "Hello";
            return 1;
        }
        catch(PDOException $e){
            $this->connection_successful = false;
            return 0;
        }
    }

    public function __destruct(){
        $this->conn = null;
    }

    public function uploadCraftsTutorial($name, $title, $description, $email = "none", $otp = "none"){
        $sql = "INSERT INTO tutorials(tutor_name, tutor_title, tutor_description, tutor_email, otp_id)
        values (?, ?, ?, ?, ?)";
        $result = $this->conn->prepare($sql);
        $result->execute([$name, $title, $description, $email, $otp]);
        error_log("Upload Successful");   
        return 0;
    }

    public function readCraftsTutorialId($name, $title, $email){
        $sql = "SELECT tutorial_id FROM tutorials WHERE tutor_name = ? AND tutor_title = ? AND tutor_email = ?";
        $result = $this->conn->prepare($sql);
        $result->execute([$name, $title, $email]);
        $row = $result->fetch(PDO::FETCH_ASSOC);
        if($row){
            return $row;
        }
        return 0;
    }
    
    public function uploadTutorialSteps($id, $step, $imageurl, $description){
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
