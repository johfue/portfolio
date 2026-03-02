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
    <p><b>The Big Idea:</b> Why not make my own, with all the authentic chaos of the real thing? Now it’s used by friends, schools, and businesses around the world.</p>
    </>
    )
}


export function Content() {

  return (
    <>

    <section class="work__section work__section--accent">
        <div class="work__div col-right bottom">
          <p class="work__p">For the uninitiated, Lotería is like bingo. Traditionally the game is played with a deck of printed card stock and pinto beans. My version is played in your browser.</p>
        </div>
        <div class="work__div col-right">
          <a href="https://www.playloteria.online" target="_blank"><button class="work__btn">Try it out <ExternalIcon /></button></a>
        </div>
      <figure class="work__figure col-2 medium">
        <Media type="video" src="/media/loteriaPromo.mp4" unexpandable poster="/media/loteria_preview.gif"/>
      </figure>
    </section>
    <section class="work__section work__section--main">
        <Media type="image" src="/images/loteriaDesktop.jpg" class="col-2 col-left" alt="A desktop mockup of the game. The player has several beans placed on their board. The current card is La Rosa and there are four other people playing."/>
        <div class="work__div col-right bottom">
            <p>The two biggest features other online versions were missing were</p>
            <ul class="work__ul">
                <li>Picking your own board (people are really superstitious about which boards they use)</li>
                <li>Controlling how fast cards are drawn</li>
            </ul>
        </div>
        <Media type="image" src="/images/loteriaPhone.jpg" class="col-2 col-left" alt="A mobile mock-up of the game. You can see several options the host has for setting up their game."/>
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
