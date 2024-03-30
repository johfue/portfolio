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
    <p><b>The Problem:</b> Two year since it’s last brand campaign, Terminix was looking to find it’s voice and a new AOR.</p>
    <p><b>The Big Idea:</b> Position Terminix as the pest control company that cares about getting your life back to normal as soon as possible. Because when you want pest out, you want them out fast.</p>
    </>
    )
}


export function Content() {

  return (
    <>

    <section class="work__section work__section--main ">
        <div class="work__div">
            <h2 class="work-h2">Mnemonic</h2>
            <p>I developed a flexible new mnemonic that echoes how Terminix works efficiently to restore peace of mind.</p>
        </div>
        <Media type="video" src="/media/terminixSpider.mp4" class="col-3 center" autoplay="true" controls/>
    </section>
    
    <section class="work__section work__section--accent light">
        <h2 class="work-h2 col-3 right">:15s Spots</h2>
        <Media type="video" src="/media/terminixHornetNest.mp4" class="col-2 col-right" controls/>
        <Media type="video" src="/media/terminixRoachArt.mp4" class="col-2 col-right" controls/>
        <Media type="video" src="/media/terminixUnmounted.mp4" class="col-2 col-right" controls/>
    </section>
    
    <section class="work__section work__section--main">
        <span></span>
        <span></span>
        <div class="work__div">
            <h2 class="work-h2">:06s Animations</h2>
            <p>Echo and reinforce the new branding elements.</p>
        </div>
        <Media type="video" src="/media/terminixSpider.mp4" controls/>
        <Media type="video" src="/media/terminixRoach.mp4" controls/>
        <Media type="video" src="/media/terminixTermite.mp4" controls/>
    </section>
    
    <section class="work__section work__section--accent light">
        <div class="work__div">
            <h2 class="work-h2">Social</h2>
            <p>Use the language of social platforms to make the most out of the :15s</p>
        </div>
        <Media type="video" src="/media/terminixFancam.mp4" controls/>
        <Media type="video" src="/media/terminixRoachesEverywhere.mp4" controls/>
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
