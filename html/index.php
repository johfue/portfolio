<?php include($_SERVER['DOCUMENT_ROOT']."/includes/config.php");?>
<!DOCTYPE HTML>
<html>
<head>
    <?php include($_SERVER['DOCUMENT_ROOT']."/includes/headTag.php");?>
    <meta name="description" content="Chicano creative. First-time thesaurus owner. Inquisitive and gumptious autodidact.">
</head>
<body>

    <main class="grid">
        <header class="header--home">
            <img src="images/logo.svg" class="logo" alt="Logo">
            <section class="header_items--home">
                <h1>Johnathon Fuerte</h1>
                <h2>Art Director</h2>
                <br>
                <nav>
                    <ul>
                        <li><a href="/about" class="nav__a">About Me</a></li>
                        <li><a href="/work/personal" class="nav__a">Fun</a></li>
                    </ul>
                </nav>
            </section>
        </header>
        <a href="work/sparknotes" class="thumbnail__wrap">
            <figure class="thumbnail">
                <h3 class="zigzag">SparkNotes</h3>
                <img src="images/sparkThumb.png" alt="" class="thumbnail__image">
            </figure>
        </a>
        <a href="work/citi" class="thumbnail__wrap">
            <figure class="thumbnail">
                <h3 class="zigzag">Citi</h3>
                <img src="images/citiThumb.png" alt="" class="thumbnail__image">
            </figure>
        </a>
        <a href="work/loteria" class="thumbnail__wrap">
            <figure class="thumbnail">
                <h3 class="zigzag">Play Lotería Online</h3>
                <img src="images/loteriaThumb.png" alt="" class="thumbnail__image">
            </figure>
        </a>
        <a href="work/jiffy" class="thumbnail__wrap">
            <figure class="thumbnail">
                <h3 class="zigzag">Jiffy Lube</h3>
                <img src="images/jiffyThumb.png" alt="" class="thumbnail__image">
            </figure>
        </a>
        <a href="work/finalstraw" class="thumbnail__wrap">
            <figure class="thumbnail">
                <h3 class="zigzag">Final Straw</h3>
                <img src="images/finalThumb.png" alt="" class="thumbnail__image">
            </figure>
        </a>
        <a href="work/laso" class="thumbnail__wrap">
            <figure class="thumbnail">
                <h3 class="zigzag">Latin American Student Organization</h3>
                <img src="images/lasoThumb.png" alt="" class="thumbnail__image">
            </figure>
        </a>
        <footer>
            <p>Copyright 2018-<?php echo date("Y"); ?></p>
        </footer>
        <b id="top"></b>
        <b id="bottom"></b>
    </main>
    <b class="overflow">
        <b class="spacer spacer-home"></b>
        <b class="spacer spacer-home"></b>
    </b>

</body>
</html>
