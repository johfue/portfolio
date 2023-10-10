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
            <h2 class="work-h2 col-3 right">Print</h2>
            <Media type="image" src="/images/neosporin_print_1.jpg" alt=""/>
            <Media type="image" src="/images/neosporin_print_2.jpg" alt=""/>
            <Media type="image" src="/images/neosporin_print_3.jpg" alt=""/>
        </section>
        <section class="work__section work__section--accent">
            <h2 class="work-h2 col-3 right">Digital</h2>
            <Media type="video" autoplay="true" class="tall right" src="/media/neosporin_320x1200.mp4" alt=""/>
            <Media type="image" src="/images/neosporin_600x500.jpg" alt=""/>
            <Media type="image" src="/images/neosporin_600x600.jpg" alt=""/>
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
