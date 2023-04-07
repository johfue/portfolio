import Layout from '/components/layout'
import Media from '/components/media'

const title = "Personal Work"

export function Desc() {

  return (
    <>
    <p>A collection of work I would print out and hang on my fridge if I could afford color printing.</p>
    </>
    )
}


export function Content() {

  return (
    <>

    <section class="work__section work__section--main Personal">
        <Media class="tall" src="/images/latinxcelencia.jpg" alt="Art deco poster of a woman standing on top of a mesoamerican pyramid promoting an event called Latinxcelencia" caption="Illustration"/>
        <Media class="tall" src="/images/voltorbPan.mp4" autoplay="true" alt="A trading card of the pokemon Voltorb that has been recreated in 3D." caption="3D Illustration"/>
        <Media class="tall" src="/images/salsaNightInstagram.jpg" alt="Poster of a dancing woman in a red dress against a green background promoting an event called Salsa Night" caption="Illustration"/>

        <figure class="work__figure tall">
                            <video autoplay loop muted playsinline class="expandableContent expandableContent-personal">
                            <source src="/media/bugcatcher.mp4">
                            A stylized 3D model of a young boy looking at a butterfly rotates 360 degrees.
                            </video>
                            <figcaption>3D Illustration</figcaption>
                            <button class="expandBtn expandBtn-caption" onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>
        <figure class="work__figure wide">
                            <img src="/images/lasoTshirt.jpg" class="expandableContent expandableContent-personal" alt="A red rooster standing behind organge flowers and in front of a green palm tree. Wrapped around the objects are the words Latin American Student Organization - University of South Carolina.">
                            <figcaption>Illustration</figcaption>
                            <button class="expandBtn expandBtn-caption" onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>
        <figure class="work__figure wide">
                            <video loop muted playsinline poster="/media/finalstraw_preview.gif" class="expandableContent expandableContent-personal">
                            <source src="/media/finalStraw.mp4">
                            The camera pans left and right, showing three stones in three different garden beds. A fourth stone is tossed into a fourth garden bed and a korok from the Legend Zelda series appears.
                            </video>
                            <figcaption>:30s Spot</figcaption>
                            <button class="expandBtn" onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>
        <figure class="work__figure">
                            <video autoplay loop muted playsinline class="expandableContent">
                            <source src="/media/finalStrawLogo.mp4">
                            Alt texts
                            </video>
                            <button class="expandBtn" onclick="modalExpand(this)">' . $zoomIcon .'</button>
                            <figcaption>Animated Logo</figcaption>
                            </figure>
        <figure class="work__figure wide">
                            <video autoplay loop muted playsinline class="expandableContent expandableContent-personal">
                            <source src="/media/syrinj.mp4">
                            A video scrolling through the landing page of a website.
                            </video>
                            <figcaption><a href="http://syrinj.com" target="_blank">Parody Website' . $external . '</a></figcaption>
                            <button class="expandBtn expandBtn-caption" onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>
        <figure class="work__figure tall">
                            <video autoplay loop muted playsinline class="expandableContent expandableContent-personal">
                            <source src="/media/dotty.mp4">
                            A trading card of the Animal Crossing Villager Dotty where the artwork has been replaced by a 3D model. Dotty cycles between greating the viewer and being astonished.
                            </video>
                            <figcaption>Augmented Reality</figcaption>
                            <button class="expandBtn expandBtn-caption" onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>
        <figure class="work__figure tall">
                            <video loop muted playsinline poster="/media/korok_preview.gif" class="expandableContent expandableContent-personal">
                            <source src="/media/korok.mp4">
                            The camera pans left and right, showing three stones in three different garden beds. A fourth stone is tossed into a fourth garden bed and a korok from the Legend Zelda series appears.
                            </video>
                            <figcaption>VFX</figcaption>
                            <button class="expandBtn expandBtn-caption" onclick="modalExpand(this)">' . $zoomIcon .'</button>
                        </figure>
                    </section>

    </>
  )
}

export default function page() {

  return (
    <>
        <Layout title={title} desc={<Desc/>} content={<Content/>}>
        </Layout>
    </>
    )
}
