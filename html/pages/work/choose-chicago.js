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
        <p><b>The Problem:</b> Typical tourism ads are built around using pretty pictures, how can we get Chicagoans to explore new neighborhoods in a way that stands out. </p>
        <p><b>The Big Idea:</b> Skip the photos and use words alone to capture how unexpected Chicagos neighborhoods can be.</p>
    </>
    )
}


export function Content() {

  return (
    <>

        <section class="work__section work__section--main light">
            <span></span>
            <h2 class="work-h2 col-mid col-2">Out-of-home</h2>
            <Media type="image" src="/images/choose_BusStop.jpg" alt="The copy reads: Birria tacos, Offbeat boutiques, Miles of murals. Pilsen."/>
            <Media type="image" class="col-2" src="/images/choose_Billboard.jpg" alt="The copy reads: Frozen negronis, Indie films, Pinball wizards. Logan Square."/>
        </section>
        <section class="work__section work__section--accent light">
            <span></span>
            <h2 class="work-h2 col-mid col-2">Digital</h2>
            <span></span>
            <Media type="video" src="/media/chooseDigital.mp4" autoplay="true" alt=""/>
            <Media type="image" src="/images/chooseDigital.jpg" alt="Chinese BBQ, Frozen custard, Line dancing."/>
            <div class="work__div col-3 right">
            <p class="text-right">
                CD - Jack Miller<br></br>
                ACD - Adam Repp<br></br>
                AD - Regina Galan<br></br>
                CW - Eric Hulting
            </p>
        </div> 
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
