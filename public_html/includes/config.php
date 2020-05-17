<?php
$external = file_get_contents($_SERVER['DOCUMENT_ROOT']."/images/open-in-new.svg");
switch ($_SERVER["SCRIPT_NAME"]) {
		case "/about.php":
			$CURRENT_PAGE = "About";
			$PAGE_TITLE = "About";
			$CONTENT = "";
			break;
		case "/contact.php":
			$CURRENT_PAGE = "Contact";
			$PAGE_TITLE = "Contact";
			$CONTENT = "";
			break;
		case "/work/laso.php":
			$CURRENT_PAGE = "LASO";
			$PAGE_TITLE = "LASO";
			$PAGE_HEADER = "Latin American Student Organization";
			$PAGE_DESC = "<b>About:</b> The Latin American Student Organization at USC strives to advance latin culture, foster a community and develop leaders. As creative director I was responsible for developing the organization's visual identity and creating all promotional materials.";
			$CONTENT =
			        '
                        <h2>Digital Signage</h2>
                        <img src="/images/latinxcelencia.jpg" class="centered tall" alt="Art deco poster of a woman standing on top of a mesoamerican pyramid promoting an event called &quot;Latinxcelencia&quot;">
                        <b></b>
                        <img src="/images/salsaNight.jpg" class="centered wide" alt="Poster of a dancing woman in a red dress against a green background promoting an event called &quot;Salsa Night&quot;">

                        <h2>T-Shirt Design</h2>
                        <img src="/images/lasoTshirt.jpg" class="centered tall" alt="A red rooster standing behind organge flowers and in front of a green palm tree. Wrapped around the objects are the words &quot;Latin American Student Organization - University of South Carolina&quot;">
                        <b class="medium"></b>
                        <h2>Social Media Flyers</h2>
                        <div class="gridSocial wide">
                        <img src="/images/lasoLast.jpg" class="full" alt="A red party popper on a yellow background promoting the Last LASO meeting of the semester">
                        <img src="/images/fastFriends.jpg" class="full" alt="A red heart shaped ballon on a blue background with the text &quot;Fast Friends, Platonic Speed Dating&quot;">
                        <img src="/images/healthPanel.jpg" class="full" alt="Someone in a crowd of people raising their hand during a panel. The text reads &quot;Mental, Physical, and Sexual Health Panel&quot;">
                        <img src="/images/muertos.jpg" class="full" alt="A sugar skull and organge flowers against a red background with the text &quot;Celebrate Dia de los Muertos with LASO&quot;">
                        <img src="/images/llorona.jpg" class="full" alt="A figure drowning in a lake under a moon. The text reads &quot;La Llorona, A Choose Your Own Adventure Story&quot;">
                        <img src="/images/snackSoc.jpg" class="full" alt="A cookie against a yellow background with between red text reading &quot;Snack Social&quot;">
                        <img src="/images/women.jpg" class="full" alt="Three woman poised stoica;ly with the text &quot;LASO Celebrates Women\'s History Month&quot;">
                        <img src="/images/visionBoard.jpg" class="full" alt="A collage made of a student, flowers, and a bridge. The text reads &quot;Vision Board Party&quot;">
                        <img src="/images/lasoSpring.jpg" class="full" alt="A pinata against a yellow background with the text &quot;First Meeting of the Semester&quot;">
                        <img src="/images/hhmCalendar.jpg" class="full" alt="A calendar of events for Hispanic Heritage Month">
                        <img src="/images/firstMeetingLASO.jpg" class="full" alt="A pinata against a light blue background with the words &quot;Tonight! First Meeting of the Semester&quot;">
                        <img src="/images/comosedice.jpg" class="full" alt="Various speech bubbles with the center bubble containing the text &quot;Comoe Se Dice, an Arguement&quot;">
                        </div>';
			break;
		case "/work/ldc.php":
			$CURRENT_PAGE = "LDC";
			$PAGE_TITLE = "Latin Dance Club";
			$PAGE_HEADER = "Latin Dance Club";
			$PAGE_DESC = "<b>About:</b> The Latin Dance Club at USC is a student run organization that teaches social dances like Bachata and Salsa in a stress free environment. As advertising chair I was responsible for all internal and external communications.";
			$CONTENT = '
                        <h2 class="wide">Social Media Posts</h2>
                        <div class="gridSocial wide">
                        <img src="/images/ldcFirst.jpg" class="full" alt="A screenshot of an Instragram post. The image is of two people dancing with the text &quot;First Class of Spring 2019&quot; and the caption reads &quot;Care to dance? We\'ll show you how or your money back guranteed&quot;">
                        <img src="/images/ldcGetIt.jpg" class="full" alt="A screenshot of an Instragram post. The image is of red text reading &quot;Let\'s Get it&quot; and the caption reads &quot;It\'s the first day of class meaning we\'re officially one day closer to spring break. Let\'s make it our resolution to give it our all atleast untill then!&quot;">
                        <img src="/images/ldcPartner.jpg" class="full" alt="A screenshot of an Instragram post. The image is of two people dancing with text reading &quot;Partner Work&quot; and the caption reads &quot;Does it really take two to tango? Discover the truth and more in tonight\'s class all about partner work.&quot;">
                        <img src="/images/ldcElephant.jpg" class="full" alt="A screenshot of an Instragram post. The image is of an inflatable elephant floating in a pool. and the caption reads &quot;Mr. Elefante taught us some wholesome lessons by the pool yesterday. To be all ears. To always forgive but never forget. And to never let anyone ever make you feel irrelephant.&quot;">
                        <img src="/images/ldcCumbia.jpg" class="full" alt="A screenshot of an Instragram post. The image is of two people dancing with text reading &quot;Cumbia&quot; and the caption reads &quot;Cumbia! Learn to make your uncles proud the next time you\'re at a quinceanera.&quot;">
                        <img src="/images/ldcGamecock.jpg" class="full" alt="A screenshot of an Instragram post. The image is of a rooster painted on a street. and the caption reads &quot;We danced on that chicken. Not many other people can say that. And we believe we are better people for having done so. Thank you to our performers for performing. THank you to the Homecoming Committee for putting it all together. Thank you to the audience for being so kind. And thank you to everyone else for being yourself. That\'s the most important thing of all. #uofschomecoming&quot;">
                        </div>';
			break;
		case "/work/rei.php":
			$CURRENT_PAGE = "REI";
			$PAGE_TITLE = "REI";
			$PAGE_HEADER = "REI Co-Op";
			$PAGE_DESC = "<b>The Problem:</b> Due to the cost of entry and steep learning curve, outdoor recreational activities such as hiking are seen as an inaccessible hobby for many.<br><br>The Big Idea: With its storied commitment to environmental stewardship and myriad of programs that make the outdoors more approachable, REI makes sure nothing stops you from enjoying mother nature.";
			$CONTENT = '
                    <h2>Print Campaign</h2>
                        <img src="/images/reiLuggage.jpg" class="centered tall" alt="A print magazine ad. Three people are going for a hike along a rocky pass. Two of them are looking back at the third person who\'s falling behind. He\'s carrying a wheeled suitcase. The copy reads &quot;Less is more. Hiking is life\'s simplest hobby. You don\'t need the newest climate-controlled, carbon fiber gizmos - just the essentials. At REI, we\'ll show you what to bring and how to pack it, for a lightweight bag. Don\'t let others complicate it for you. Learn more at rei.com/learn/expert-advice&quot;">
                        <b></b>
                        <img src="/images/reiHose.jpg" class="centered tall" alt="A print magazine ad. A man is climbing a cliff. However, one of his ropes is actually a gardening hose. The copy reads &quot;Too guilty to get new gear? An option nature and your waller will agree on. At REI you can rent everything you need for you next trip - no need to improvise. Or you can buy second-hand from our members only garage sale. Either way, less junk in our landfills and more green in your wallet.&quot;">
                    <h2 class="wide">Out-of-home</h2>
                        <img src="/images/reiBroom.jpg" class="centered wide" alt="A print billboard ad. A woman is canoing out on a lake. Instead of a paddle, she has a broom. The copy reads &quot;You shouldn\'t always recycle. Shop certified second-hand gear.&quot;">
                        <img src="/images/reiPlunge.jpg" class="centered wide" alt="A print billboard ad. A man is struggling to climb an icy cliff. Instead of a pickaxe, he has a toliet plunger. The copy reads &quot;You shouldn\'t always recycle. Gear up with rental equipment&quot;">';
			break;
        case "/work/proof.php":
            $CURRENT_PAGE = "PROOF";
			$PAGE_TITLE = "PROOF";
			$PAGE_HEADER = "PROOF Alcohol Ice Cream";
			$PAGE_DESC = "<b>The Problem:</b> Alcohol ice cream is a new product category struggling to find its identity.<br><br><b>The Big Idea:</b> While others treat their product with a nervous juvenile excitement, PROOF understands the allure of alcohol ice creams mature, almost illicit, appeal.";
			$CONTENT = '
                    <h2>Print Campaign</h2>
                        <img src="/images/proofBerry.jpg" class="centered tall" alt="A print magazine ad. The headline reads &quot;We won\'t judge what happens after the last the bite.&quot;">
                        <b></b>
                        <img src="/images/proofSpoon.jpg" class="centered tall" alt="A print magazine ad. The headline reads &quot;Your secrets are safe with the spoon.&quot;">
                        <b></b>
                        <img src="/images/proofShaker.jpg" class="centered tall" alt="A print magazine ad. The headline reads &quot;But what if you could have it all?&quot;">
                    <h2 class="wide">Radio Spot</h2>
                        <audio controls>
                            <source src="/media/proofSpot.mp3" type="audio/mpeg">
                        </audio>
                    <h2 class="wide">Plans Book</h2>
                    <iframe src="//www.slideshare.net/slideshow/embed_code/key/Ny3deS6cLLSlND" class="centered" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>';
			break;
        case "/work/arlo.php":
			$CURRENT_PAGE = "Arlo";
			$PAGE_TITLE = "Arlo";
			$PAGE_HEADER = "Arlo";
			$PAGE_DESC = "<b>The Problem:</b> Safety is one of our most basic needs, yet many feel home security systems are unnecessary.<br><br><b>The Big Idea:</b> Living life without Arlo’s advanced surveillance features is living life on the edge.";
			$CONTENT = '
                        <h2>Print Campaign</h2>
                        <img src="/images/arloMotion.jpg" class="centered tall" alt="A print magazine ad. A dog stands duitful by while someone breaks into a home behind it. The copy reads &quot;Advanced motion tracking. The latest in home security. Arlo can recognize objects. It knows when your package has arrived and when it goes missing. Arlo knows bird from burglar and friend from foe. So it never loses sight of an intruder.&quot;">
                        <b></b>
                        <img src="/images/arloColor.jpg" class="centered tall" alt="A print magazine ad. A dog stares out the window. The copy reads &quot;Arlo sees in full color 4k HDR video offering you clarity when the worst comes. No grainy black and white gas station footage here. High resolution recordings let you zoom in on any bit of evidence. Arlo gives you closure when the unthinkable happens.&quot;">
                        <h2 class="wide">Out-of-home</h2>
                        <img src="/images/arloDay.jpg" class="centered tall" alt="A print bus stop ad. A dog naps on the floor while someone breaks into it\'s home behind it. The copy reads &quot;Arlo, on duty all night and day. With davanced night vision, six month battery life and weather proof body, you can count on Arlo to protect your home - no matter the occasion.&quot;">
                        <h2 class="wide">Radio Spot</h2>
                        <audio controls>
                            <source src="/media/arloSpot.mp3" type="audio/mpeg">
                        </audio>';
			break;
		case "/work/palmetto.php":
			$CURRENT_PAGE = "Palmetto";
			$PAGE_TITLE = "Palmetto Airdrop";
			$PAGE_HEADER = "Palmetto Airdrop";
			$PAGE_DESC = "Palmetto Airdrop formed in the wake of Hurricane Florence and flies supplies into hurricane affected areas hours after landfall.";
			$CONTENT = '
                        <h2>Logo Design</h2>
                        <img src="/images/padExplain.png" class="wide centered" alt="A logo. It is of an airple with it\'s rotors stylizied to look like palm leaves. The company\'s name sits underneath. A diagram depicts the grid in which the logo is constructed. Beneath is a diagram showing the insipration for the logo. It combines a palmtree and airplane">';
			break;
		case "/work/personal.php":
			$CURRENT_PAGE = "Personal";
			$PAGE_TITLE = "Personal Work";
			$PAGE_HEADER = "Personal Work";
			$PAGE_DESC = "A collection of work I would print out and hang on my fridge if I could afford real magnets.";
			$CONTENT = '
                        <figure class="wide">
                            <img src="/images/pulley.jpg" alt="Drawing of a wrench and pulley">
                            <figcaption>Pencil on paper</figcaption>
                        </figure>
                        <figure class="wide">
                            <video autoplay loop muted playsinline>
                            <source src="/media/syrinj.mp4">
                            </video>
                            <figcaption>Parody Website <a href="http://www.syrinj.com" target="_blank">' . $external . '</a></figcaption>
                        </figure>
                        <figure class="tall">
                            <img src="/images/doubleExposure.jpeg" alt="The relfection of a woman passing a mural projected onto a city at night">
                            <figcaption>Photograph</figcaption>
                        </figure>
                        <figure class="tall">
                            <video autoplay loop muted playsinline>
                            <source src="/media/voltorb.mp4">
                            alt="A trading card of the pokemon voltorb where the artwork has been replaced by a 3D model"
                            </video>
                            <figcaption>AR Illustration</figcaption>
                        </figure>
                        <figure class="wide">
                            <img src="/images/marbles.jpg" alt="Marbles in the desert">
                            <figcaption>Photograph</figcaption>
                        </figure>
                        <figure class="tall">
                            <img src="/images/padExplain.png" alt="A logo. It is of an airple with it\'s rotors stylizied to look like palm leaves. The company\'s name sits underneath. A diagram depicts the grid in which the logo is constructed. Beneath is a diagram showing the insipration for the logo. It combines a palmtree and airplane">
                            <figcaption>Logo Design</figcaption>
                        </figure>';
			break;
		default:
			$CURRENT_PAGE = "Index";
			$PAGE_TITLE = "Johnathon Fuerte";
	}

?>