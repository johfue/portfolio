<?php include($_SERVER['DOCUMENT_ROOT']."/includes/config.php");?>
<!DOCTYPE HTML>
<html>
<head>
    <?php include($_SERVER['DOCUMENT_ROOT']."/includes/headTag.php");?>
    <script src="/gallery.js"></script>
</head>
<body>
    <?php include($_SERVER['DOCUMENT_ROOT']."/includes/header.php");?>
    <main class="work personal">
    <header class="work <?php echo $CURRENT_PAGE;?>">
        <section>
            <h1><?php echo $PAGE_HEADER;?></h1>
            <p><?php echo $PAGE_DESC;?></p>
        </section>
    </header>
    <b></b>
    <?php echo $CONTENT;?>
    </main>
    <aside id="modal">
        <img>
        <video></video>
        <caption></caption>
        <button id="close" onclick="close()"></button>
        <button id="previous" onclick="previous()"></button>
        <button id="next" onclick="next()"></button>
    </aside>
</body>
</html>