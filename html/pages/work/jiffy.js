import Layout from '/components/layout'
import Media from '/components/media'

export function Title() {

  return (
    <>
        Jiffy Lube
    </>
    )
}

const classTitle = "Jiffy"

export function Desc() {

  return (
    <>
    <p><b>The Problem:</b> Car ownership is important but car care is complicated and trustworthy mechanics are hard to come by.</p>
    <p><b>The Big Idea:</b> When people move to a new city they lose whoever they did trust to service their car. Show them Jiffy mechanics go the extra mile for their drivers</p>
    </>
    )
}


export function Content() {

  return (
    <>

    <section class="work__section work__section--accent">
        <div class="work__div col-right">
            <h2 class="work__h2">Direct Mail</h2>
            <div>
                <p>New residents moving to the fastest growing cities will receive a welcome package. Included is a living guide with info about local restaurants, fun destinations, and where to find essential services. As well as information on parking, street cleanings, traffic patterns, and how to update their drivers license. Along with the guide, the box will include items to help them through an anxious time:</p>
                <ul class="work__ul">
                    <li>Essential oil aromatic air freshener</li>
                    <li>QR code with relaxing driving Spotify playlist</li>
                    <li>Fidget toy keychain</li><li>Set of postcards to send to their friends back home</li>
                </ul>
            </div>
        </div>
        <Media type="image" src="/images/jiffyBox.jpg" class="col-2" />
    </section>
    
    <section class="work__section work__section--main light">
        <div class="work__div col-right">
            <h2 class="work__h2">Mobile App</h2>
            <div>
                <p>Along with a visual refresh, the Jiffy Lube app will get a few new updates.</p>
                <ul class="work__ul">
                    <li>Since cars need maintenance for years, users can get to know who will be handling their service trip ahead of time to build long-term trust.</li>
                    <li>If something urgent pop-ups up users can chat in real-time with a Jiffy Lube technician to diagnose their problem.</li>
                    <li>The app will keep track of every service visit so users can track how often they need maintenance and who all has worked on their car.</li>
                </ul>
            </div>
        </div>
        <figure class="work__figure col-2">
            <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)', width: '38vw', 'min-width': '100%', height: '600px'}} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FPHEdQBLSEGZ56w7yj0qANK%2FJiffy-Lube-2021%3Fnode-id%3D1%253A6%26scaling%3Dscale-down%26page-id%3D0%253A1" allowfullscreen></iframe>

            <figcaption>Interactive Demo</figcaption>
        </figure>
        <Media type="image" src="/images/jiffyMobile.jpg" class="col-3 text-center" caption="The updated appointment confirmation process."/>
    </section>
    
    <section class="work__section work__section--accent">
    <div class="work__decor" id="work__decor--jiffy"></div>
        <div class="work__div col-right">
            <h2 class="work__h2">Out-of-home</h2>
            <p>In target cities Jiffy Lube will give pointers to newcomers through billboards. The goal is to associate Jiffy Lube with solid automotive advice. So whenever someone uses what they’ve learned from a billboard they'll remember they learned it from Jiffy Lube.</p>
        </div>
        <Media type="image" src="/images/jiffyOOH_1.jpg" class="col-2 col-left" alt="The copy reads: Welcome to Durham. Meters are free on the weekend. Happy driving. Jiffy Lube."/>
        <Media type="image" src="/images/jiffyOOH_2.jpg" class="col-2 col-left" alt="The copy reads: Welcome to Pittsburg. Avoid driving through North Shore on Game Days. Happy driving. Jiffy Lube."/>
        <Media type="image" src="/images/jiffyOOH_3.jpg" class="col-2 col-left" alt="The copy reads: Welcome to Denver. The tallest dunes in North America are an afternoon away. Happy driving. Jiffy Lube."/>
    </section>
    
    <section class="work__section work__section--main light">
        <div class="work__div col-right">
            <h2 class="work__h2">Bumble BFF</h2>
            <p>In target cities, personas based on local Jiffy Lube technicians will recommend their matches on Bumble BFF places to visit and help them get settled into their new city. Like any good mechanic, they wouldn’t recommend something they wouldn’t do themself.</p>
        </div>
        <Media type="image" src="/images/jiffyBumble.jpg" class="col-2" alt="A screenshot of a mock Bumble profile. The profiles name is Avery."/>
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
