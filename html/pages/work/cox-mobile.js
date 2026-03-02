import Layout from '/components/layout'
import Media from '/components/media'

export function Title() {

  return (
    <>
        Cox Mobile
    </>
    )
}

const classTitle = "Cox-Mobile"


export function Desc() {

  return (
    <>
        <p><b>The Problem:</b> People don’t realize that Cox Mobile  works nationwide, what’s the best way to make it clear?</p>
        <p><b>The Big Idea:</b> Take their mascot on a road trip to tell a story that’s eye catching, memorable, and relatable.</p>

    </>
    )
}


export function Content() {

  return (
    <>

    <section class="work__section work__section--main light">
        <h2 class="work__h2 col-right">:30s Spot</h2>
        <Media type="video" src="/media/coxSidecar.mp4" poster="/images/coxSidecar_poster.jpg" class="col-2" unexpandable/>
    </section>

    <section class="work__section work__section--accent">
    <div class="work__decor" id="work__decor--coxMobile"></div>
        <h2 class="work__h2 col-right">Paid Social</h2>
        <Media type="video" src="/media/coxChecklist.mp4" poster="/images/coxChecklist_poster.jpg" class="phone--vertical col-mid" unexpandable/>
    </section>

    <section class="work__section work__section--main light">
        <span class="work__spacer col-2"></span>
        <h2 class="work__h2">Supporting Tactics</h2>
        <Media type="video" src="/media/coxSidecar_display.mp4" class="medium" autoplay="true" caption="Display" alt=""/>
        <Media type="image" src="/images/coxSidecar_OOH.jpg" class="col-2 col-mid" caption={<span>OOH<br></br>CW: Eric Hulting</span>} alt="The copy reads: Run on the network you can take anywhere. A dotted lines travels across a map of the US and into a phone."/>
        <Media type="image" src="/images/coxSidecar_Social.jpg" class="col-2 col-mid" caption="Social" alt="The copy reads: We run on the network with unbeatable 5G reliability. So you'll stay connected across 2 million square miles nationwide."/>
        
        <dl class="credits">
            <dt class="credits__title">ECD</dt>
            <dd class="credit__name">Amy Ditchman</dd>
            <dt class="credits__title">CD</dt>
            <dd class="credit__name">Jack Miller</dd>
            <dt class="credits__title">CD</dt>
            <dd class="credit__name">Adam Repp</dd>
            <dt class="credits__title">CW</dt>
            <dd class="credit__name">Kyle Petrie</dd>
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
