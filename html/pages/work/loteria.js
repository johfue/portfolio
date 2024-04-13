import Layout from '/components/layout'
import Media from '/components/media'
import ExternalIcon from '/public/images/open-in-new.svg'

export function Title() {

  return (
    <>
        PlayLotería<wbr></wbr>.Online
    </>
    )
}

const classTitle = "Loteria"


export function Desc() {

  return (
    <>
    <p><b>The Problem:</b> During the pandemic, I wanted to play Lotería over Zoom. Every version I tried removed the parts that make the game fun.</p>
    <p><b>The Big Idea:</b> Why not make my own, with all the authentic chaos of the real thing. Now it’s used by friends, schools, and businesses around the world.</p>
    </>
    )
}


export function Content() {

  return (
    <>

<section class="work__section work__section--accent">
<figure class="work__figure col-3 center">
  <video controls class="center" poster="/media/loteria_preview.gif" height="450">
    <source src="/media/loteriaPromo.mp4"></source>
  </video>
</figure>
        <a href="https://www.playloteria.online" target="_blank" class="col-3 center"><button class="work__btn">Try it out <ExternalIcon /></button></a>
    </section>

    <section class="work__section work__section--main">
        <div class="work__div col-right">
            <h2 class="work-h2">Web App</h2>
            <p>For the uninitiated, Lotería is like bingo. Instead of random numbers, cards with different images are drawn from a deck. If one of your spaces match, you get to mark it, traditionally with a pinto bean. </p>
        </div>
        <Media type="image" src="/images/loteriaDesktop.jpg" class="col-2 col-left" alt="A desktop mockup of the game. The player has several beans placed on their board. The current card is La Rosa and there are four other people playing."/>
        <div class="work__div col-right middle">
            <p>The two biggest features other online versions were missing were</p>
            <ul class="work__ul">
                <li>Picking your own board (people are really superstitious about which boards they use)</li>
                <li>Controlling how fast cards are drawn</li>
            </ul>
        </div>
        <Media type="image" src="/images/loteriaPhone.jpg" class="col-2 col-left" alt="A mobile mock-up of the game. The host has just drawn La Rosa athere are several other players in their game."/>

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
