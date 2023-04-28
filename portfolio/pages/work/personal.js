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
        
        <Media type="image" personal class="tall" src="/images/latinxcelencia.jpg" alt="Art deco poster of a woman standing on top of a mesoamerican pyramid promoting an event called Latinxcelencia" caption="Illustration"/>
        
        <Media type="video" personal class="tall" src="/media/voltorbPan.mp4" autoplay="true" alt="A trading card of the pokemon Voltorb that has been recreated in 3D." caption="3D Illustration"/>
        
        <Media type="image" personal class="tall" src="/images/salsaNightInstagram.jpg" alt="Poster of a dancing woman in a red dress against a green background promoting an event called Salsa Night" caption="Illustration"/>
        
        <Media type="video" personal autoplay="true" class="tall personal" src="/media/voltorbPan.mp4" caption="3D Illustration" alt="A stylized 3D model of a young boy looking at a butterfly rotates 360 degrees."/>
        
        <Media type="image" personal class="wide" src="/images/lasoTshirt.jpg" caption="Illustration" alt="A red rooster standing behind organge flowers and in front of a green palm tree. Wrapped around the objects are the words Latin American Student Organization - University of South Carolina."/>
        
        <Media type="video" personal class="wide" src="/media/finalStraw.mp4" poster="/media/finalstraw_preview.gif" caption=":30s Spot" alt="A stylized 3D model of a young boy looking at a butterfly rotates 360 degrees."/>

        <Media type="video" personal autoplay="true" src="/media/finalStrawLogo.mp4" caption="Animated Logo" alt="A stylized 3D model of a young boy looking at a butterfly rotates 360 degrees."/>

        <Media type="video" personal autoplay="true" class="wide" src="/media/syrinj.mp4" caption="website" alt="A video scrolling through the landing page of a website."/>

        <Media type="video" personal autoplay="true" class="tall" src="/media/dotty.mp4" caption="Augmented Reality" alt="A trading card of the Animal Crossing Villager Dotty where the artwork has been replaced by a 3D model. Dotty cycles between greating the viewer and being astonished."/>
        
        <Media type="video" personal class="tall personal" src="/media/korok.mp4" poster="/media/korok_preview.gif" caption="Augmented Reality" alt="The camera pans left and right, showing three stones in three different garden beds. A fourth stone is tossed into a fourth garden bed and a korok from the Legend Zelda series appears."/>

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
