<?php

require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

header('Content-Type: application/json');

header("Access-Control-Allow-Origin: *"); //Change whether the domain is set
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$response = ['success' => false, 'message' => 'An unknown error occured'];

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    
    if(empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)){
        $response['message'] = 'Invalid email address provided';
        echo json_encode($response);
        exit;
    }

    $otp = str_pad(rand(0, 999999), 6, '0', STR_PAD_LEFT);

    $mail = new PHPMailer(true);

    try{
        $config_file_path = realpath(__DIR__ . "/config.ini");
        $config = parse_ini_file($config_file_path, true);
        
        $mail->SMTPDebug = SMTP::DEBUG_OFF; // make it SMTP::DEBUG_SERVER when hosting (use this for debugging)
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = $config['email']['EMAIL_NAME'];
        $mail->Password = $config['email']['EMAIL_PASSWORD'];
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465;

        $mail->setFrom($config['email']['EMAIL_NAME'], 'RecReo Group');
        $mail->addAddress($email);

        $mail->isHTML(false);
        $mail->Subject = 'Your One-Time Password (OTP) for ReCreo Group';
        $mail->Body    = "Hello,\n\nYour One-Time Password (OTP) for ReCreo Crafts is: " . $otp . "\n\nThis code is valid for 5 minutes. Do not share it with anyone.\n\nThank you,\nReCreo Crafts Team";
        $mail->send();
        
        $response['success'] = true;
        $response['message'] = 'OTP sent successfully to ' . htmlspecialchars($email) . '. Please check your inbox.';
    }

    catch(Exception $e){
        $response['message'] = "Failed to send OTP. Mailer Error: {$mail->ErrorInfo}";
        // Log the full error for debugging on your server, but don't expose it to the user
        error_log("PHPMailer error for $email: " . $e->getMessage());
    }
}
else{
    $response['message'] = 'Invalid Request Method';
}

echo json_encode($response);

?>