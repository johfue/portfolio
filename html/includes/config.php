<?php
$external = file_get_contents($_SERVER['DOCUMENT_ROOT']."/images/open-in-new.svg");
$closeIcon = file_get_contents($_SERVER['DOCUMENT_ROOT']."/images/close-circle-outline.svg");
$previousIcon = file_get_contents($_SERVER['DOCUMENT_ROOT']."/images/chevron-left.svg");
$nextIcon = file_get_contents($_SERVER['DOCUMENT_ROOT']."/images/chevron-right.svg");
$zoomIcon = file_get_contents($_SERVER['DOCUMENT_ROOT']."/images/magnify-plus-outline.svg");
$zigzag = file_get_contents($_SERVER['DOCUMENT_ROOT']."/images/zigzag.svg");

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
                        <figure class="tall">
                            <img src="/images/latinxcelencia.jpg" class="center" alt="Art deco poster of a woman standing on top of a mesoamerican pyramid promoting an event called &quot;Latinxcelencia&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>
                        <figure class="medium">
                            <img src="/images/latinxcelenciaMockUp.jpg" class="bottom right">
                            <button onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>
                        <figure class="wide">
                            <img src="/images/salsaNight.jpg" class="center" alt="Poster of a dancing woman in a red dress against a green background promoting an event called &quot;Salsa Night&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>
                        <h2>T-Shirt Design</h2>
                        <figure class="tall">
                            <img src="/images/lasoTshirt.jpg" class="center" alt="A red rooster standing behind organge flowers and in front of a green palm tree. Wrapped around the objects are the words &quot;Latin American Student Organization - University of South Carolina&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>
                        <figure>
                            <img src="/images/lasoTshirtMock.jpg" class="right">
                            <button onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>
                        <h2>Social Media Flyers</h2>
                        <div class="gridSocial wide">
                        <figure>
                            <img src="/images/lasoLast.jpg" class="full" alt="A red party popper on a yellow background promoting the Last LASO meeting of the semester">
                            <button onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>
                        <figure>
                            <img src="/images/fastFriends.jpg" class="full" alt="A red heart shaped ballon on a blue background with the text &quot;Fast Friends, Platonic Speed Dating&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>
                        <figure>
                            <img src="/images/healthPanel.jpg" class="full" alt="Someone in a crowd of people raising their hand during a panel. The text reads &quot;Mental, Physical, and Sexual Health Panel&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>
                        <figure>
                            <img src="/images/muertos.jpg" class="full" alt="A sugar skull and organge flowers against a red background with the text &quot;Celebrate Dia de los Muertos with LASO&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>
                        <figure>
                            <img src="/images/llorona.jpg" class="full" alt="A figure drowning in a lake under a moon. The text reads &quot;La Llorona, A Choose Your Own Adventure Story&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>
                        <figure>
                            <img src="/images/snackSoc.jpg" class="full" alt="A cookie against a yellow background with between red text reading &quot;Snack Social&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>
                        <figure>
                            <img src="/images/women.jpg" class="full" alt="Three woman poised stoica;ly with the text &quot;LASO Celebrates Women\'s History Month&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>
                        <figure>
                            <img src="/images/visionBoard.jpg" class="full" alt="A collage made of a student, flowers, and a bridge. The text reads &quot;Vision Board Party&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>
                        <figure>
                            <img src="/images/lasoSpring.jpg" class="full" alt="A pinata against a yellow background with the text &quot;First Meeting of the Semester&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>
                        <figure>
                            <img src="/images/hhmCalendar.jpg" class="full" alt="A calendar of events for Hispanic Heritage Month">
                            <button onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>
                        <figure>
                            <img src="/images/firstMeetingLASO.jpg" class="full" alt="A pinata against a light blue background with the words &quot;Tonight! First Meeting of the Semester&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>
                        <figure>
                            <img src="/images/comosedice.jpg" class="full" alt="Various speech bubbles with the center bubble containing the text &quot;Comoe Se Dice, an Arguement&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>
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
                        <figure>
                            <img src="/images/ldcFirst.jpg" class="full" alt="A screenshot of an Instragram post. The image is of two people dancing with the text &quot;First Class of Spring 2019&quot; and the caption reads &quot;Care to dance? We\'ll show you how or your money back guranteed&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon . '</button>
                        </figure>
                        <figure>
                            <img src="/images/ldcGetIt.jpg" class="full" alt="A screenshot of an Instragram post. The image is of red text reading &quot;Let\'s Get it&quot; and the caption reads &quot;It\'s the first day of class meaning we\'re officially one day closer to spring break. Let\'s make it our resolution to give it our all atleast untill then!&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon . '</button>
                        </figure>
                        <figure>
                            <img src="/images/ldcPartner.jpg" class="full" alt="A screenshot of an Instragram post. The image is of two people dancing with text reading &quot;Partner Work&quot; and the caption reads &quot;Does it really take two to tango? Discover the truth and more in tonight\'s class all about partner work.&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon . '</button>
                        </figure>
                        <figure>
                            <img src="/images/ldcElephant.jpg" class="full" alt="A screenshot of an Instragram post. The image is of an inflatable elephant floating in a pool. and the caption reads &quot;Mr. Elefante taught us some wholesome lessons by the pool yesterday. To be all ears. To always forgive but never forget. And to never let anyone ever make you feel irrelephant.&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon . '</button>
                        </figure>
                        <figure>
                            <img src="/images/ldcCumbia.jpg" class="full" alt="A screenshot of an Instragram post. The image is of two people dancing with text reading &quot;Cumbia&quot; and the caption reads &quot;Cumbia! Learn to make your uncles proud the next time you\'re at a quinceanera.&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon . '</button>
                        </figure>
                        <figure>
                            <img src="/images/ldcGamecock.jpg" class="full" alt="A screenshot of an Instragram post. The image is of a rooster painted on a street. and the caption reads &quot;We danced on that chicken. Not many other people can say that. And we believe we are better people for having done so. Thank you to our performers for performing. THank you to the Homecoming Committee for putting it all together. Thank you to the audience for being so kind. And thank you to everyone else for being yourself. That\'s the most important thing of all. #uofschomecoming&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon . '</button>
                        </figure>
                        </div>';
			break;
		case "/work/rei.php":
			$CURRENT_PAGE = "REI";
			$PAGE_TITLE = "REI";
			$PAGE_HEADER = "REI Co-Op";
			$PAGE_DESC = "<b>The Problem:</b> Due to the cost of entry and steep learning curve, outdoor recreational activities such as hiking are seen as an inaccessible hobby for many.<br><br><b>The Big Idea:</b> With its storied commitment to environmental stewardship and myriad of programs that make the outdoors more approachable, REI makes sure nothing stops you from enjoying mother nature.";
			$CONTENT = '
                    <h2>Print Campaign</h2>
                        <figure class="tall">
                            <img src="/images/reiLuggage.jpg" class="center" alt="A print magazine ad. Three people are going for a hike along a rocky pass. Two of them are looking back at the third person who\'s falling behind. He\'s carrying a wheeled suitcase. The copy reads &quot;Less is more. Hiking is life\'s simplest hobby. You don\'t need the newest climate-controlled, carbon fiber gizmos - just the essentials. At REI, we\'ll show you what to bring and how to pack it, for a lightweight bag. Don\'t let others complicate it for you. Learn more at rei.com/learn/expert-advice&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon . '</button>
                        </figure>
                        <b></b>
                        <figure class="tall">
                            <img src="/images/reiHose.jpg" class="center" alt="A print magazine ad. A man is climbing a cliff. However, one of his ropes is actually a gardening hose. The copy reads &quot;Too guilty to get new gear? An option nature and your waller will agree on. At REI you can rent everything you need for you next trip - no need to improvise. Or you can buy second-hand from our members only garage sale. Either way, less junk in our landfills and more green in your wallet.&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon . '</button>
                        </figure>
                    <h2 class="wide">Out-of-home</h2>
                        <figure class="wide">
                            <img src="/images/reiBroom.jpg" class="center" alt="A print billboard ad. A woman is canoing out on a lake. Instead of a paddle, she has a broom. The copy reads &quot;You shouldn\'t always recycle. Shop certified second-hand gear.&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon . '</button>
                        </figure>
                        <figure class="wide">
                            <img src="/images/reiPlunge.jpg" class="center" alt="A print billboard ad. A man is struggling to climb an icy cliff. Instead of a pickaxe, he has a toliet plunger. The copy reads &quot;You shouldn\'t always recycle. Gear up with rental equipment&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon . '</button>
                        </figure>';
			break;
        case "/work/proof.php":
            $CURRENT_PAGE = "PROOF";
			$PAGE_TITLE = "PROOF";
			$PAGE_HEADER = "PROOF Alcohol Ice Cream";
			$PAGE_DESC = "<b>The Problem:</b> Alcohol ice cream is a new product category struggling to find its identity.<br><br><b>The Big Idea:</b> While others treat their product with a nervous juvenile excitement, PROOF understands the allure of alcohol ice creams mature, almost illicit, appeal.";
			$CONTENT = '
                    <h2>Print Campaign</h2>
                        <figure class="tall">
                            <img src="/images/proofBerry.jpg" class="center" alt="A print magazine ad. The headline reads &quot;We won\'t judge what happens after the last the bite.&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon . '</button>
                        </figure>
                        <b></b>
                        <figure class="tall">
                            <img src="/images/proofSpoon.jpg" class="center" alt="A print magazine ad. The headline reads &quot;Your secrets are safe with the spoon.&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon . '</button>
                        </figure>
                        <b></b>
                        <figure class="tall">
                            <img src="/images/proofShaker.jpg" class="center" alt="A print magazine ad. The headline reads &quot;But what if you could have it all?&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon . '</button>
                        </figure>
                    <h2 class="wide">Plans Book</h2>
                    <iframe src="//www.slideshare.net/slideshow/embed_code/key/Ny3deS6cLLSlND" class="center" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>';
			break;
        case "/work/arlo.php":
			$CURRENT_PAGE = "Arlo";
			$PAGE_TITLE = "Arlo";
			$PAGE_HEADER = "Arlo";
			$PAGE_DESC = "<b>The Problem:</b> Safety is one of our most basic needs, yet many feel home security systems are unnecessary.<br><br><b>The Big Idea:</b> Living life without Arlo’s advanced surveillance features is living life on the edge.";
			$CONTENT = '
                        <h2>Print Campaign</h2>
                        <figure class="tall">
                            <img src="/images/arloMotion.jpg" class="center" alt="A print magazine ad. A dog stands duitful by while someone breaks into a home behind it. The copy reads &quot;Advanced motion tracking. The latest in home security. Arlo can recognize objects. It knows when your package has arrived and when it goes missing. Arlo knows bird from burglar and friend from foe. So it never loses sight of an intruder.&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon . '</button>
                        </figure>
                        <b></b>
                        <figure class="tall">
                            <img src="/images/arloColor.jpg" class="center" alt="A print magazine ad. A dog stares out the window. The copy reads &quot;Arlo sees in full color 4k HDR video offering you clarity when the worst comes. No grainy black and white gas station footage here. High resolution recordings let you zoom in on any bit of evidence. Arlo gives you closure when the unthinkable happens.&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon . '</button>
                        </figure>
                        <h2 class="wide">Out-of-home</h2>
                        <figure class="tall">
                            <img src="/images/arloDay.jpg" class="center" alt="A print bus stop ad. A dog naps on the floor while someone breaks into it\'s home behind it. The copy reads &quot;Arlo, on duty all night and day. With davanced night vision, six month battery life and weather proof body, you can count on Arlo to protect your home - no matter the occasion.&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon . '</button>
                        </figure>
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
                        <figure class="wide">
                            <img src="/images/padExplain.png" class="center" alt="A logo. It is of an airple with it\'s rotors stylizied to look like palm leaves. The company\'s name sits underneath. A diagram depicts the grid in which the logo is constructed. Beneath is a diagram showing the insipration for the logo. It combines a palmtree and airplane">
                            <button onclick="modalExpand(this)">' . $zoomIcon . '</button>
                        </figure>';
			break;
		case "/work/jiffy.php":
			$CURRENT_PAGE = "Jiffy Lube";
			$PAGE_TITLE = "Jiffy Lube";
			$PAGE_HEADER = "Jiffy Lube";
			$PAGE_DESC = "<b>The Problem:</b> With anxiety on the rise, trusting a mechanic with your precious baby can feel like a leap of faith.<br><br><b> The Big Idea:</b> With Jiffy's history of innovation you don't have to worry. Jiffy's got it.";
			$CONTENT = '
                        <h2>Mobile App</h2>
                        <iframe class="wide center" style="border: 1px solid rgba(0, 0, 0, 0.1); height: 1000px;" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FA7VH9X3Q6MjNb29iVD34TX%2FJiffy-Lube%3Fnode-id%3D1%253A6%26scaling%3Dmin-zoom&chrome=DOCUMENTATION" allowfullscreen></iframe>
                        <figure>
                            <img src="/images/jiffyService.png" class="center" alt=A screenshot the schedule page of the app. A grid of services are displayed with a make appointment button at the bottom.">
                            <figcaption>Before scheduling an appointment, users can review their service history and pick their mechanic based off user reviews.</figcaption>
                            <button onclick="modalExpand(this)">' . $zoomIcon . '</button>
                        </figure>
                        <figure>
                            <img src="/images/jiffyProfile.png" class="center" alt=A screenshot of a profile page of the app. The users information, prefered Jiffy location, and their registered vehicles are displayed">
                            <figcaption>Users can keep tabs on all their family\'s vehicles, their mileage, and keep track of when they\'ll next need a tune up</figcaption>
                            <button onclick="modalExpand(this)">' . $zoomIcon . '</button>
                        </figure>
                        <h2 class="wide">Spotify Playlist</h2>
                        <p>Jiggy with Jiffy provides music to soothe your mind while you drive, or while you wait.<br>The Spotify playlist can be accessed through the Jiffy Lube app via “Browse.”</p>
                        <figure class="tall">
                            <img src="/images/jiffyPlaylist.png" class="center" alt=A screenshot of a Spotify playlist.">
                            <button onclick="modalExpand(this)">' . $zoomIcon . '</button>
                        </figure>
                        <h2 class="wide">Full Deck</h2>
                        <iframe src="//www.slideshare.net/slideshow/embed_code/key/GoMWXY4mqs875c" class="center" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>
                        ';
			break;
		case "/work/citi.php":
			$CURRENT_PAGE = "Citi";
			$PAGE_TITLE = "Citi";
			$PAGE_HEADER = "Citi";
			$PAGE_DESC = "<b>The Problem:</b> Safety is one of our most basic needs, yet many feel home security systems are unnecessary.<br><br><b>The Big Idea:</b> Living life without Arlo’s advanced surveillance features is living life on the edge.";
			$CONTENT = '
                        <h2>Logo Design</h2>
                        <figure class="wide">
                            <img src="/images/padExplain.png" class="center" alt="A logo. It is of an airple with it\'s rotors stylizied to look like palm leaves. The company\'s name sits underneath. A diagram depicts the grid in which the logo is constructed. Beneath is a diagram showing the insipration for the logo. It combines a palmtree and airplane">
                            <button onclick="modalExpand(this)">' . $zoomIcon . '</button>
                        </figure>
                        <h2>Deck</h2>';
			break;
	   case "/work/sparknotes.php":
            $CURRENT_PAGE = "SparkNotes";
			$PAGE_TITLE = "SparkNotes";
			$PAGE_HEADER = "SparkNotes";
			$PAGE_DESC = "<b>The Problem:</b> People who use SparkNotes get a bad rap, when more often then not they're just not getting the support they need. People with dyslexia know this too well.<br><br><b>The Big Idea:</b> Use VR to educate students and teachers about the frustration and anxiety that push people with dyslexia to use SparkNotes.";
			$CONTENT = '
                    <h2>VR Experience</h2>
                        <figure class="wide">
                            <img src="/images/sparknotes1.png" class="center" alt="A print magazine ad. The headline reads &quot;We won\'t judge what happens after the last the bite.&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon . '</button>
                        </figure>
                        <figure class="wide">
                            <img src="/images/sparknotes2.png" class="center" alt="A print magazine ad. The headline reads &quot;We won\'t judge what happens after the last the bite.&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon . '</button>
                        </figure>
                       <figure class="wide">
                            <img src="/images/sparknotes3.png" class="center" alt="A print magazine ad. The headline reads &quot;We won\'t judge what happens after the last the bite.&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon . '</button>
                        </figure>
                    <h2>Out-of-home</h2>
                        <figure class="wide">
                            <img src="/images/sparknotes4.png" class="center" alt="A print magazine ad. The headline reads &quot;We won\'t judge what happens after the last the bite.&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon . '</button>
                        </figure>
                        <figure class="wide">
                            <img src="/images/sparknotes5.png" class="center" alt="A print magazine ad. The headline reads &quot;We won\'t judge what happens after the last the bite.&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon . '</button>
                        </figure>
                    <h2>Interactive</h2>
                        <figure class="wide">
                            <img src="/images/sparknotes6.png" class="center" alt="A print magazine ad. The headline reads &quot;We won\'t judge what happens after the last the bite.&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon . '</button>
                        </figure>';
			break;
		case "/work/loteria.php":
            $CURRENT_PAGE = "Play Loteria Online";
			$PAGE_TITLE = "Loteria";
			$PAGE_HEADER = "PlayLoteria.Online";
			$PAGE_DESC = "<b>The Problem:</b> During the pandemic, I realized there did not exist a good online version of the mexican board game Loteria. Google made a good attempt but too much of it was automated. The funnest part, drawing the cards, was done by a robot, and even worse, the game doesn't allow you to cheat.<br><br><b>The Big Idea:</b> So I created my own version, with as much of the authentic chaos as the real thing, playable at <a href='https://playloteria.online' target='_blank'> playloteria.onlilne" . $external . "</a>";
			$CONTENT = '
                    <h2>Browser Game</h2>
                        <figure class="wide">
                            <img src="/images/loteriaDesktop.jpg" class="center" alt="A print magazine ad. The headline reads &quot;We won\'t judge what happens after the last the bite.&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon . '</button>
                        </figure>
                        <figure class="wide">
                            <img src="/images/loteriaPhone.jpg" class="center" alt="A print magazine ad. The headline reads &quot;Your secrets are safe with the spoon.&quot;">
                            <button onclick="modalExpand(this)">' . $zoomIcon . '</button>
                        </figure>';
			break;
		 case "/work/finalstraw.php":
            $CURRENT_PAGE = "Final Straw";
			$PAGE_TITLE = "Final Straw";
			$PAGE_HEADER = "Final Straw";
			$PAGE_DESC = "<b>About:</b> Final Straw is a reusable metal straw that fits in a neat carrying case that clips on to your keychain. For this project we were able to play with far fancier equipment than I have ever touched before to produce a 30 second TV spot.";
			$CONTENT = '
                    <h2 class="wide">:30 Second TV Spot</h2>
                            <iframe class="center" width="560" height="315" src="https://www.youtube.com/embed/a3qqjigdUYk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h2 class="wide">Logo Animation</h2>
                        <figure class="wide">
                            <video autoplay loop muted playsinline>
                            <source src="/media/finalStrawLogo.mp4">
                            Alt texts
                            </video>
                            <button onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>';
			break;
		case "/work/personal.php":
			$CURRENT_PAGE = "Personal";
			$PAGE_TITLE = "Personal Work";
			$PAGE_HEADER = "Personal Work";
			$PAGE_DESC = "A collection of work I would print out and hang on my fridge if I could color printing.";
			$CONTENT = '
			            <b></b>
                        <figure class="wide">
                            <img src="/images/pulley.jpg" alt="Drawing of a wrench and pulley">
                            <figcaption>Pencil on paper</figcaption>
                            <button onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>
                        <figure class="wide">
                            <video autoplay loop muted playsinline>
                            <source src="/media/syrinj.mp4">
                            </video>
                            <figcaption>Parody Website <a href="http://www.syrinj.com" target="_blank">' . $external . '</a></figcaption>
                            <button onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>
                        <figure class="tall">
                            <img src="/images/doubleExposure.jpeg" alt="The relfection of a woman passing a mural projected onto a city at night">
                            <figcaption>Photograph</figcaption>
                            <button onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>
                        <figure class="tall">
                            <video autoplay loop muted playsinline>
                            <source src="/media/voltorb.mp4">
                            A trading card of the pokemon voltorb where the artwork has been replaced by a 3D model
                            </video>
                            <figcaption>AR Illustration</figcaption>
                            <button onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>
                        <figure class="wide">
                            <img src="/images/marbles.jpg" alt="Marbles in the desert">
                            <figcaption>Photograph</figcaption>
                            <button onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>
                        <figure class="wide">
                            <img src="/images/cactus.jpg" alt="A 3D model of a cartoon cactus gently floats around potted succulents">
                            <figcaption>3D Character</figcaption>
                            <button onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>
                        <figure class="tall">
                            <img src="/images/padExplain.png" alt="A logo. It is of an airplane with it\'s rotors stylizied to look like palm leaves. The company\'s name sits underneath. A diagram depicts the grid in which the logo is constructed. Beneath is a diagram showing the insipration for the logo. It combines a palmtree and airplane">
                            <figcaption>Logo Design</figcaption>
                            <button onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>
                        <figure>
                            <img src="/images/milkCartLogo.png" alt="A logo where the words milk and cart are stacked on top of each other. They are contained inside a rounded box. Inside the box milk sloshes to the side.">
                            <figcaption>Logo Design</figcaption>
                            <button onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>';
			break;
		default:
			$CURRENT_PAGE = "Index";
			$PAGE_TITLE = "Johnathon Fuerte";
	}

?>