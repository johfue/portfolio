<?php include($_SERVER['DOCUMENT_ROOT']."/includes/config.php");?>
<!DOCTYPE HTML>
<html>
<head>
    <?php include($_SERVER['DOCUMENT_ROOT']."/includes/headTag.php");?>
</head>
<body>
    <?php include($_SERVER['DOCUMENT_ROOT']."/includes/header.php");?>
    <main class="work <?php echo $CURRENT_PAGE;?>">
    <header class="work <?php echo $CURRENT_PAGE;?>">
        <section>
            <h1><?php echo $PAGE_HEADER;?></h1>
            <p><?php echo $PAGE_DESC;?></p>
        </section>
    </header>
    <?php echo $CONTENT;?>
    </main>
    <aside style="display: none;" id="modal">
        <img id="modalImg" src="/images/blank.png">
        <video controls id="modalVideo"></video>
        <span id="modalCaption">Hidden text</span>
        <button class="modalBtn" id="close"><?php echo $closeIcon?></button>
        <button class="modalBtn" id="previous"><?php echo $previousIcon?></button>
        <button class="modalBtn" id="next"><?php echo $nextIcon?></button>
    </aside>
    <script async src="/gallery.js"></script>
</body>
</html>