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
    <p><b>The Problem:</b> After two years since it’s last brand campaign, Terminix was ready to find a new voice and a new AOR.</p>
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
            <p>I developed a flexible new mnemonic that takes the core of the campaign and boils it down to two seconds.</p>
        </div>
        <Media type="video" src="/media/terminixEndTag.mp4" class="col-3 center" autoplay="true"/>
    </section>
    
    <section class="work__section work__section--accent light">
        <h2 class="work-h2 col-right">:15s Spots</h2>
        <Media type="video" src="/media/terminixHornetNest.mp4" class="col-2 col-right" unexpandable/>
        <Media type="video" src="/media/terminixRoachArt.mp4" class="col-2 col-right" unexpandable/>
        <Media type="video" src="/media/terminixUnmounted.mp4" class="col-2 col-right" unexpandable/>
    </section>
    
    <section class="work__section work__section--main">
        <span></span>
        <span></span>
        <div class="work__div">
            <h2 class="work-h2">:06s Animations</h2>
            <p>Fit for any short form space. Perfect for reinforcing our new brand elements.</p>
        </div>
        <Media type="video" src="/media/terminixSpider.mp4" unexpandable/>
        <Media type="video" src="/media/terminixRoach.mp4" unexpandable/>
        <Media type="video" src="/media/terminixTermite.mp4" unexpandable/>
    </section>
    
    <section class="work__section work__section--accent light">
        <div class="work__div">
            <h2 class="work-h2">Social</h2>
            <p>To help our cut downs feel a little more native, we took a cue from the what's hip with the youth these days.</p>
        </div>
        <Media type="video" src="/media/terminixFancam.mp4" unexpandable/>
        <Media type="video" src="/media/terminixRoachesEverywhere.mp4" unexpandable/>  
    </section>
    <section class="work__section work__section--main">
        <h2 class="work-h2 col-3 right">Out-of-Home</h2>
        <Media type="image" src="/images/jiffyOOH_1.jpg" class="col-2 col-right" alt="The copy reads: Welcome to Durham. Meters are free on the weekend. Happy driving. Jiffy Lube."/>
        <div class="work__div col-3">
            <p class="center">
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
