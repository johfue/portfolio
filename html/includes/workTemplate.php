<?php include($_SERVER['DOCUMENT_ROOT']."/includes/config.php");?>
<!DOCTYPE HTML>
<html>
<head>
    <?php include($_SERVER['DOCUMENT_ROOT']."/includes/headTag.php");?>
</head>
<body>
    <?php include($_SERVER['DOCUMENT_ROOT']."/includes/header.php");?>
    <main class="work__main <?php echo $CURRENT_PAGE;?>">
    <header class="work__header">
        <div class="work__div--header">
            <h1 class="work__h1 col-2"><?php echo $PAGE_HEADER;?></h1>
            <p class="work__p---header"><?php echo $PAGE_DESC;?></p>
        </div>
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
    <svg width="0" height="0">
    <clipPath id="mask" clipPathUnits="objectBoundingBox" transform="scale(1 5.5)">
    <path d="M1 0H0.352533C0.242887 0 0.269146 0.136164 0.143962 0.0843089C0.0187776 0.0324541 0 0.14589 0 0.182512H0.301178H1V0Z" fill="#FDF7F9"/>
    </clipPath>
    </svg>
<script async src="/gallery.js"></script>
</body>
</html>