<?php

    $name  = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $web   = $_POST["web"];
    $mess  = $_POST["mess"];

    if (!empty($email) && !empty($mess)) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $receiver = "hoangdiepltt@gmail.com";
            $subject  = "From: $name < $email >";
            $body     = "
                Name    = $name, \n
                Email   = $email, \n
                Phone   = $phone, \n
                Website = $web, \n
                Message = $mess.
            ";
            $sender   = "From: $email";

            if (mail($receiver, $subject, $body, $sender)) {
                echo "Your message has been sent";
            } else {
                echo "Sorry, failed to send your message.";
            }
        } else {
            echo "Enter a valid email address.";
        }
    } else {
        echo "Email & Message field is required!";
    }
?>