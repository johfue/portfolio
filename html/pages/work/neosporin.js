import Layout from '/components/layout'
import Media from '/components/media'
import ExternalIcon from '/public/images/open-in-new.svg'

export function Title() {

  return (
    <>
        Neosporin
    </>
    )
}

const classTitle = "Neosporin"


export function Desc() {

  return (
    <>
    <p><b>The Problem:</b> Get people to proactively buy Neosporin before it’s needed.</p>
    <p><b>The Big Idea:</b> When you love someone who can’t keep themselves out of trouble, their accidents stop taking you by surprise.</p>
    </>
    )
}


export function Content() {

  return (
    <>
        <section class="work__section work__section--main light">
            <span></span>
            <h2 class="work__h2">Print</h2>
            <span></span>
            <Media type="image" src="/images/neosporin_print_1.jpg" alt="Love is learning which snakes are safe enough for them to pet."/>
            <Media type="image" src="/images/neosporin_print_2.jpg" alt="Love is buying a second box of dinsaur band-aids before the first runs out."/>
            <Media type="image" src="/images/neosporin_print_3.jpg" alt="Love is having a favorite x-ray technician."/>
        </section>
        <section class="work__section work__section--accent">
            <div class="work__decor" id="work__decor--neosporin"></div>
            <span></span>
            <h2 class="work__h2">:10s Spots</h2>
            <span></span>
            <Media type="image" class="col-mid"src="/images/neosporin_script_1.jpg" alt=""/>
            <Media type="image" class="col-right"src="/images/neosporin_script_2.jpg" alt=""/>
        </section>
        <section class="work__section work__section--main light">
            <span></span>
            <h2 class="work__h2">Digital</h2>
            <span></span>
            <Media type="video" autoplay="true" class="tall right" src="/media/neosporin_320x1200.mp4"/>
            <Media type="image" src="/images/neosporin_600x500.jpg" alt="Love is packing pb&j for their first skate park trip"/>
            <Media type="image" src="/images/neosporin_600x600.jpg" alt="Love is standing right where you knew they'd fall"/>
            <Media type="image" class="wide" src="/images/neosporin_970x250.jpg" alt=""/>
        </section>
    

    </>
  )
}

export default function page() {

  return (
    <>
        <Layout title={<Title/>} classTitle={classTitle} desc={<Desc/>} content={<Content/>}>
        </Layout>
    </>
    )
}
