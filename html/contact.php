<?php include("includes/config.php");?>
<!DOCTYPE HTML>
<html>
<head>
    <?php include("includes/headTag.php");?>
    <script src="ajax.js"></script>
</head>
<body>
    <?php include("includes/header.php");?>
    <main class="double-main double-main-contact">
        <img src="/images/contact.png" class="double-img" alt="An archive photo of satelite dish out in a desert">
        <section>
        <h1 class="double-h1">Contact</h1>
        <p class="single-p"><a href="mailto:hello@johnathonfuerte.com" target="_blank">hello@johnathonfuerte.com</a></p>
        <form name="contact" id="contact" onsubmit="return false;">
            <div class="floatLabel">
                <input type="text" name="Name" id="name" class="contact-input" maxlength="6000" required placeholder="Name">
                <label for="name">Name</label>
                <img id="error2" src="/images/blank.png">
                <span id="errorText2"></span>
            </div>
            <div class="floatLabel">
                <input type="email" name="Email" id="email" class="contact-input" required placeholder="Email">
                <label for="email">Email</label>
                <img id="error1" src="/images/blank.png">
                <span id="errorText1"></span>
            </div>
            <div class="floatLabel">
                <textarea class="contact-textarea" name="Message" id="message" class="contact-input" maxlength="6000" required placeholder="Message"></textarea>
                <label for="message">Message</label>
                <img id="error3" src="/images/blank.png">
                <span id="errorText3"></span>
            </div>
            <button type="submit" name="submit" id="submit" class="contact-button" onclick="contacting()" required value="Send"><span id="submitText">Send</span><img id="submitIcon" class="inactive" src="/images/send.svg"></button>
            <span id="success"></span>
            </form>
        </section>
    </main>
</body>
</html>