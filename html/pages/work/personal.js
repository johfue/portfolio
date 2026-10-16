import Layout from '/components/layout'
import Media from '/components/media'
import ExternalIcon from '/public/images/open-in-new.svg'

const title = "Fun"

const classTitle = "Fun"

const headerColor = "main"

const headerType = "dark"

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
      <div class="work__columnWrap col-3">
        <div class="work__column">
        <Media type="image" src="/images/room-day.jpg" alt="A desk covered in various peices of tech and decorated with plants in the background" caption="3D"/>

        <Media type="image" src="/images/salsaNightInstagram.jpg" alt="Poster of a dancing woman in a red dress against a green background promoting an event called Salsa Night" caption="Illustration"/>
        
        <Media type="video" src="/media/pebble.mp4" autoplay="true" alt="A rock with googly eyes flies through space." caption="3D"/>
        </div>

        <div class="work__column">
        <Media type="video" src="/media/korok.mp4" poster="/media/korok_preview.gif" caption="VFX" unexpandable alt="The camera pans left and right, showing three stones in three different garden beds. A fourth stone is tossed into a fourth garden bed and a korok from the Legend Zelda series appears."/>

        <Media type="video" src="/media/hitmon.mp4" autoplay="true" alt="The camera flys through the artwork of pokemon trading card, recreated in 3D." caption="3D"/>
        
        <Media type="video" src="/media/goldenapple.mp4" autoplay="true" alt="A golden apple floats in the sky and rotates back and forth." caption="3D"/>
        </div>

        <div class="work__column">
        <Media type="video" autoplay="true" src="/media/finalStrawLogo.mp4" caption="Logo Animation" alt="A straw enters in and sucks up liquid. When the liquid drains, it reveals the name Final Straw, the period at the end of logo gets burped out."/>

        <Media type="image" src="/images/laso-tshirt-tall.jpg" caption="Illustration" alt="A red rooster standing behind organge flowers and in front of a green palm tree. Wrapped around the objects are the words Latin American Student Organization - University of South Carolina."/>
          
        <Media type="image" src="/images/fridge_calendar.jpg" caption="UI Design" alt="Screencaps of a ui design project. It's a calendar app that lets you organize events with your whole family. It is styled after notes you might see on a refrigerator."/>
        
        </div>
        </div>
        </section>

    </>
  )
}

export default function page() {

  return (
    <>   
        <Layout title={title} classTitle={classTitle} desc={<Desc/>}  headerColor={headerColor} headerType={headerType} content={<Content/>}>
        </Layout>
    </>
    )
}
