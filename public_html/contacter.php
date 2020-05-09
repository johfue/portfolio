<?php

    if(isset($_POST['name'])) {
        $email = test_input($_POST['email']);
        $name = substr(test_input($_POST['name']), 0, 5999);
        $message = substr(test_input($_POST['message']), 0, 5999);
        $error = "";
        
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $error = "|"."email. ";
        }
        else {
            $error = $error."|";
        }
        
        if ($name == "") {
            $error = $error."|"."name. ";
        }
        else {
            $error = $error."|";
        }
        
        if ($message == "") {
            $error = $error."|"."message.";
        }
        else {
            $error = $error."|";
        }
        
        if ($error != "|||") {
            echo $error;
                exit();
        }
        
        else {
            $mailTo = "info@johnathonfuerte.com";
            $subject = "Message from ".$name;
            $headers = "From: ".$email;
            $text = "Message from ".$name.":\n\n".$message;
            
            // if (true) {
            if (mail($mailTo, $subject, $text, $headers)) {
                echo "Message sent";
                    exit();
            }
            
            else {
                echo "There was a problem sending your message, please try again";
                    exit();
            }
        }

    }
    
    else {
        echo "Something went wrong, please try again";
            exit();
    }
    
    function test_input($data) {
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        if (ctype_space($data)) {
            $data = "";
        };

        return $data;
    }
?>