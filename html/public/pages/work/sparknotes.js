import Layout from '/components/layout'
import Media from '/components/media'

export function Title() {

  return (
    <>
        SparkNotes
    </>
    )
}

const classTitle = "SparkNotes"


export function Desc() {

  return (
    <>
        <p><b>The Problem:</b> Students who use online book summaries like SparkNotes get a bad rap, when more often than not they're just not getting the support they need. People with dyslexia know this too well.</p>
        <p><b>The Big Idea:</b> Use the world of Alice in Wonderland to educate students and teachers about the frustration and anxiety that push people with dyslexia to use SparkNotes.</p>
    </>
    )
}


export function Content() {

  return (
    <>

    <section class="work__section work__section--main light">
        <div class="work__div">
            <h2 class="work-h2">VR Experience</h2>
            <p>Players will be put into the world of Alice in Wonderland where they help investigate who stole the queen’s tarts.<br></br>As part of the queen’s royal guard, players must decode ransom notes sent by the thief.<br></br>To be as accessible as possible the game will be playable on phones and desktops through their web browser, both with and without headsets.</p>
        </div>
        <Media type="video" class="col-2" src="/media/sparknotesPan.mp4" autoplay="true" alt="A POV shot where the player sitting in front of desk and panning around to see the room. The room looks like a a cross-hatched illustration."/>
        <p>Since dyslexia manifests differently in everyone, some tasks will be easier with a headset and some without. The goal of the game is to mirror the emotional effects dyslexia has on students when they don’t have the right accommodations to succeed. Players will have to develop their own coping strategies, like taking their headset on and off, to be successful.</p>
        <Media type="video" src="/media/sparknotesNotes.mp4" autoplay="true" alt="" caption="In VR refering players can easily refer back to their notes."/>
        <Media type="image" src="/images/sparknotesKeyboard.jpg" alt="A wider shot of the office where you can see more of your co-workers completing their tasks" caption="However, typing is much slower compared to using a physical keyboard."/>
        <p>Players will have a short amount of time to go through their workload while minimizing mistakes. At the end of each shift they’ll be chastised for not keeping up with everyone else.</p>
        <Media type="image" src="/images/sparknotesReport.jpg" alt="A results screen showing the player performing poorly."/>
        <Media type="video" src="/media/sparknotesClock.mp4" autoplay="true" alt="A looping video of a clock's hands spinning around and around."/>
        <p>Various distractions will interrupt the work day to break the player\'s focus. Their co-workers will breeze through their workload and clock out early regardless.</p>
        <Media type="video" src="/media/sparknotesDisctraction.mp4" autoplay="true" alt="A video of the players desk being knocked into."/>
        <Media type="image" src="/images/sparknotesCat.jpg" alt="The Cheshire Cat has come to interrupt the work day."/>
        </section>
        <section class="work__section work__section--accent">
            <div class="work__div">
                <h2 class="work-h2">Direct Mail</h2>
                <p>To reach educators, they\'ll be mailed a branded google cardboard headset along with information on how they can support students with dyslexia. For convenience, the headset will have a QR code to launch the game.</p>
            </div>
        <Media type="image" class="col-2" src="/images/sparknotesCardboard.jpg" alt="A mock-up of branded google cardboard VR headset."/>
        </section>
        <section class="work__section work__section--main light">
            <div class="work__div">
                <h2 class=" work-h2">Out-of-home</h2>
                <p>During the back-to-school, OOH will be used to direct people towards the AR experience.</p>
            </div>
            <Media type="image" class="col-2" src="/images/sparknotesMock.jpg" alt="A mock-up of two out of home ads placed in subways."/>
            <Media type="image" src="/images/sparknotesOOH3.jpg" alt="The art depicts a giant Alice drawn in the original Alice in Wonderland illustration style, she is so big she takes up the entire space of the room, everyone else is being knocked over by her. With the headline, One size fits most"/>
            <Media type="image" src="/images/sparknotesOOH1.jpg" alt="The art depicts a shrunken Alice struggling to open a locked door while looking back at the key which is placed high up on a table she cannot reach. With the headline, An underdog with an edge is still an underdog."/>
            <Media type="image" src="/images/sparknotesOOH2.jpg" alt="Alice is struggling to climb over a mushroom while a normal sized person walks easily across a field of mushrooms with giant strides. With the headline, Working 2x as hard for 1/2 the results."/>
        </section>
        <section class="work__section work__section--accent">
            <div class="work__div">
                <h2 class=" work-h2">Interactive</h2>
                <p>To tie in with the campaign, Sparknotes will add a voice synthesizer button to their study guides and summaries. It will highlight the current word as it’s read aloud.</p>
            </div>
            <Media type="image" class="col-2" src="/images/sparknotesWeb2.jpg" alt="A screenshot of the SparkNotes websites with a button placed besides the text that highlights the text while it is read aloud."/>
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
