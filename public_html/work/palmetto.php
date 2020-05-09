<?php include($_SERVER['DOCUMENT_ROOT']."/includes/config.php");?>
<!DOCTYPE HTML>
<html>
<head>
    <?php include($_SERVER['DOCUMENT_ROOT']."/includes/headTag.php");?>
</head>
<body>
    <?php include($_SERVER['DOCUMENT_ROOT']."/includes/header.php");?>
    <main class="work">
    <header class="work <?php echo $CURRENT_PAGE;?>">
        <section>
            <h1><?php echo $PAGE_HEADER;?></h1>
            <p><?php echo $PAGE_DESC;?></p>
        </section>
    </header>
    <section>
        <?php echo $CONTENT;?>
    </scetion>
    </main>
</body>
</html>