<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';  // Include the Composer autoloader

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = htmlspecialchars($_POST['firstName']);
    $lastName = htmlspecialchars($_POST['lastName']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'pranayapoudel109@gmail.com';  // Your Gmail address
        $mail->Password = 'visalagyooo';  // Your Gmail password (or App Password if 2FA enabled)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Recipients
        $mail->setFrom($email, "$firstName $lastName");
        $mail->addAddress('pranayapoudel109@gmail.com');  // Your email address

        // Content
        $mail->isHTML(false);
        $mail->Subject = "New Message from $firstName $lastName";
        $mail->Body    = "First Name: $firstName\nLast Name: $lastName\nEmail: $email\nMessage: \n$message";

        // Send email
        $mail->send();
        header("Location: thankYou.html");
        exit();
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
