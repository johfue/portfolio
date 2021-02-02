<?php include($_SERVER['DOCUMENT_ROOT']."/includes/config.php");?>
<!DOCTYPE HTML>
<html>
<head>
    <?php include($_SERVER['DOCUMENT_ROOT']."/includes/headTag.php");?>
    <meta name="description" content="Johnathon Fuerte is a Charleston-based visual designer, web developer and aspiring art director.">
</head>
<body>

    <main class="grid">
        <header class="home">
            <img src="images/logo.svg" class="logo" alt="Logo image">
            <section>
                <h1>Johnathon Fuerte</h1>
                <h2>Art Director</h2>
                <br>
                <nav>
                    <ul>
                        <li><a href="/about" class="zigzag">About Me</a></li>
                        <li><a href="/contact" class="zigzag">Contact</a></li>
                    </ul>
                </nav>
            </section>
        </header>
        <a href="work/sparknotes">
            <figure>
                <h3 class="zigzag">SparkNotes</h3>
                <img src="images/sparkThumb.png" alt="Sparknotes thumbnail">
            </figure>
        </a>
        <a href="work/jiffy">
            <figure>
                <h3 class="zigzag">Jiffy Lube</h3>
                <img src="images/jiffyThumb.png" alt="Jiffy Lube thumbnail">
            </figure>
        </a>
        <a href="work/loteria">
            <figure>
                <h3 class="zigzag">Play Loteria Online</h3>
                <img src="images/loteriaThumb.png" alt="Loteria thumbnail">
            </figure>
        </a>
        <a href="work/finalstraw">
            <figure>
                <h3 class="zigzag">Final Straw</h3>
                <img src="images/finalThumb.png" alt="Final Straw thumbnail">
            </figure>
        </a>
        <a href="work/laso">
            <figure>
                <h3 class="zigzag">Latin American Student Organization</h3>
                <img src="images/lasoThumb.png" alt="LASO thumbnail">
            </figure>
        </a>
        <a href="work/proof">
                <figure>
                <h3 class="zigzag">PROOF Alcohol Ice Cream</h3>
                <img src="images/proofThumb.png" alt="PROOF Alcohol Ice Cream thumbnail">
            </figure>
        </a>
        <a href="work/rei">
            <figure>
                <h3 class="zigzag">REI Co-Op</h3>
                <img src="images/reiThumb.png" alt="REI Co-Op thumbnail">
            </figure>
        </a>
        <a href="work/ldc">
            <figure>
                <h3 class="zigzag">Latin Dance Club</h3>
                <img src="images/ldcThumb.png" alt="Latin Dance Club thumbnail">
            </figure>
        </a>
        <a href="work/personal">
            <figure>
                <h3 class="zigzag">Personal Work</h3>
                <img src="images/personalThumb.png" alt="Peronsal Work thumbnail">
            </figure>
        </a>
        <footer>
            <p>Copyright 2018-<?php echo date("Y"); ?></p>
        </footer>
        <b id="top"></b>
        <b id="bottom"></b>
    </main>
    <b class="overflow">
        <b class="home"></b>
        <b class="home"></b>
    </b>

</body>
</html>
