import Layout from '/components/layout'
import Media from '/components/media'

export function Title() {

  return (
    <>
        Terminix
    </>
    )
}

const classTitle = "Terminix"

export function Desc() {

  return (
    <>
    <p><b>The Problem:</b> After two years without any work on the air, Terminix was ready to find a new voice and a new AOR.</p>
    <p><b>The Big Idea:</b>  Use fast hitting tactics to position Terminix as the brand that understands: when you want pests out, you want them out fast.</p>
    </>
    )
}


export function Content() {

  return (
    <>

    <section class="work__section work__section--main ">
        <div class="work__div col-right">
            <h2 class="work__h2">Mnemonic</h2>
            <p class="work__p">To sell in the platform, I worked on a flexible new mnemonic.</p>
        </div>
        <Media type="video" src="/media/terminixEndTag.mp4" class="col-2" autoplay="true"/>
    </section>
    
    <section class="work__section work__section--accent light">
        <div class="work__decor" id="work__decor--terminix"></div>
        <h2 class="work__h2 col-right">:15s Spots</h2>
        <Media type="video" src="/media/terminixHornetNest.mp4" class="col-2" unexpandable/>
        <Media type="video" src="/media/terminixRoachArt.mp4" class="col-2" poster="/images/terminixRoachArt_poster.jpg" unexpandable/>
        <Media type="video" src="/media/terminixUnmounted.mp4" class="col-2" poster="/images/terminixUnmounted_poster.jpg" unexpandable/>
    </section>
    
    <section class="work__section work__section--main">
        <span class="work__spacer col-2"></span>
        <div class="work__div">
            <h2 class="work__h2">:06s Animations</h2>
            <p class="work__p">Fit for any short form space. Perfect for reinforcing the new branding.</p>
        </div>
        <Media type="video" src="/media/terminixSpider.mp4" poster="/images/terminixSpider_poster.jpg" unexpandable/>
        <Media type="video" src="/media/terminixRoach.mp4" poster="/images/terminixRoach_poster.jpg" unexpandable/>
        <Media type="video" src="/media/terminixTermite.mp4" poster="/images/terminixTermite_poster.jpg" unexpandable/>
    </section>
    
    <section class="work__section work__section--accent light">
        <div class="work__div col-right">
            <h2 class="work__h2">Social</h2>
            <p class="work__p">To help our cut downs feel a little more native, we took a cue from what's hip with the youth these days.</p>
        </div>
        <div class="pillarBox col-mid">
            <Media type="video" src="/media/terminixFancam.mp4" poster="/images/terminixFancam_poster.jpg" unexpandable short />
        </div>
        <div class="pillarBox">
            <Media type="video" src="/media/terminixRoachesEverywhere.mp4" poster="/images/terminixRoachesEverywhere_poster.jpg" unexpandable short/>
        </div> 
    </section>
    <section class="work__section work__section--main">
        <h2 class="work__h2 col-right">Out-of-Home</h2>
        <Media type="image" src="/images/terminix_OOH_NY.jpg" class="col-2" alt="The copy reads: Remove roaches in a New York Minute. A line of roaches is being stomped out by the logo."/>
        <dl class="credits">
            <dt class="credits__title">ECD</dt>
            <dd class="credit__name">Amy Ditchman</dd>
            <dt class="credits__title">CD</dt>
            <dd class="credit__name">Adam Repp</dd>
            <dt class="credits__title">ACD</dt>
            <dd class="credit__name">Deidre Nieto</dd>
            <dt class="credits__title">CD</dt>
            <dd class="credit__name">Cassie Mayfield</dd>
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
