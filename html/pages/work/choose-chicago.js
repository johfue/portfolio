import Layout from '/components/layout'
import Media from '/components/media'

export function Title() {

  return (
    <>
        Choose Chicago
    </>
    )
}

const classTitle = "Choose-Chicago"


export function Desc() {

  return (
    <>
        <p><b>The Problem:</b> Typical tourism ads are built around using pretty pictures, how can we get Chicagoans to explore new neighborhoods in a way that stands out? </p>
        <p><b>The Big Idea:</b> Skip the photos and use words alone to capture how unexpected Chicagos neighborhoods can be.</p>
    </>
    )
}


export function Content() {

  return (
    <>

        <section class="work__section work__section--main light">
            <span class="work__spacer col-2"></span>
            <h2 class="work__h2 col-right">Out-of-home</h2>
            <Media type="image" class="col-2" src="/images/choose_Billboard.jpg" alt="The copy reads: Frozen negronis, Indie films, Pinball wizards. Logan Square."/>
            <Media type="image" src="/images/choose_BusStop.jpg" alt="The copy reads: Birria tacos, Offbeat boutiques, Miles of murals. Pilsen."/>
        </section>
        <section class="work__section work__section--accent light">
            <span class="work__spacer col-2"></span>
            <div class="work__decor" id="work__decor--choose"></div>
            <h2 class="work__h2 col-right col-2">Digital</h2>
            <span class="work__spacer"></span>
            <Media type="video" src="/media/chooseDigital.mp4" autoplay="true" alt=""/>
            <Media type="image" class="left" src="/images/chooseDigital.jpg" alt="Chinese BBQ, Frozen custard, Line dancing."/>
        <dl class="credits">
            <dt class="credits__title">CD</dt>
            <dd class="credit__name">Jack Miller</dd>
            <dt class="credits__title">ACD</dt>
            <dd class="credit__name">Adam Repp</dd>
            <dt class="credits__title">AD</dt>
            <dd class="credit__name">Regina Galan</dd>
            <dt class="credits__title">CW</dt>
            <dd class="credit__name">Eric Hulting</dd>
        </dl>
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
