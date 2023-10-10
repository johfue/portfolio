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
    <p><b>The Big Idea:</b> When you love someone who can’t keep themselves out of trouble, their accidents stop taking you by surprise</p>
    </>
    )
}


export function Content() {

  return (
    <>
        <section class="work__section work__section--main light">
            <h2 class="work-h2 col-3">Print</h2>
            <Media type="image" src="/neosporin_print_.jpg" alt=""/>
            <Media type="image" src="/neosporin_print_.jpg" alt=""/>
            <Media type="image" src="/neosporin_print_.jpg" alt=""/>
        </section>
        <section class="work__section work__section--main light">
            <h2 class="work-h2 col-3">Digital</h2>
            <Media type="image" src="/images/neosporin_banner_.jpg" alt=""/>
            <Media type="image" src="/images/neosporin_banner_.jpg" alt=""/>
            <Media type="image" src="/images/neosporin_banner_.jpg" alt=""/>
            <Media type="video" src="/images/neosporin_banner_.jpg" alt=""/>
            <Media type="image" src="/images/neosporin_banner_.jpg" alt=""/>
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
