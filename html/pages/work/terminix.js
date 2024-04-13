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
    <p><b>The Big Idea:</b> Use fast hitting tactics to position Terminix as the brand that works quickly to put your mind at ease. Because when you want pests out, you want them out fast.</p>
    </>
    )
}


export function Content() {

  return (
    <>

    <section class="work__section work__section--main ">
        <div class="work__div col-mid">
            <h2 class="work-h2">Mnemonic</h2>
            <p class="work__p">I designed a flexible new mnemonic that tells the story of the brand in two seconds.</p>
        </div>
        <Media type="video" src="/media/terminixEndTag.mp4" class="col-3" autoplay="true"/>
    </section>
    
    <section class="work__section work__section--accent light">
        <div class="work__decor" id="work__decor--terminix"></div>
        <h2 class="work-h2">:15s Spots</h2>
        <Media type="video" src="/media/terminixHornetNest.mp4" class="col-2 col-mid" unexpandable/>
        <Media type="video" src="/media/terminixRoachArt.mp4" class="col-2 col-mid" unexpandable/>
        <Media type="video" src="/media/terminixUnmounted.mp4" class="col-2 col-mid" unexpandable/>
    </section>
    
    <section class="work__section work__section--main">
        <span></span>
        <div class="work__div">
            <h2 class="work-h2">:06s Animations</h2>
            <p class="work__p">Fit for any short form space. Perfect for reinforcing the new branding.</p>
        </div>
        <span></span>
        <Media type="video" src="/media/terminixSpider.mp4" unexpandable/>
        <Media type="video" src="/media/terminixRoach.mp4" unexpandable/>
        <Media type="video" src="/media/terminixTermite.mp4" unexpandable/>
    </section>
    
    <section class="work__section work__section--accent light">
        <div class="work__div col-right bottom">
        <h2 class="work-h2">Social</h2>
        <p class="work__p">To help our cut downs feel a little more native, we took a cue from what's hip with the youth these days.</p>
        </div>
        <div class="pillarBox col-mid">
        <Media type="video" src="/media/terminixFancam.mp4" unexpandable short />
        </div>
        <div class="pillarBox">
        <Media type="video" src="/media/terminixRoachesEverywhere.mp4"unexpandable short/>
        </div> 
    </section>
    <section class="work__section work__section--main">
        <span></span>
        <h2 class="work-h2">Out-of-Home</h2>
        <Media type="image" src="/images/terminix_OOH_CHI.jpg" class="col-2 col-mid" alt="The copy reads: Welcome to Durham. Meters are free on the weekend. Happy driving. Jiffy Lube."/>
        <div class="work__div col-3 right">
            <p class="text-right">
                ECD - Amy Ditchman<br></br>
                CD - Adam Repp<br></br>
                ACD - Deidre Nieto<br></br>
                AD - Cassie Mayfield<br></br>
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
