import Layout from '/components/layout'
import Media from '/components/media'
import ExternalIcon from '/public/images/open-in-new.svg'

export function Title() {

  return (
    <>
        PlayLoteria&#8204;.Online
    </>
    )
}

const classTitle = "Loteria"


export function Desc() {

  return (
    <>
    <p><b>The Problem:</b> During the pandemic, I wanted to play Lotería over Zoom. In all the versions I tried, they took out all the parts that make it fun.</p>
    <p><b>The Big Idea:</b> So I created my own version, with as much of the authentic chaos as the real thing, playable at <a href='http://playloteria.online' target='_blank'> playloteria.online <ExternalIcon /> </a></p>
    </>
    )
}


export function Content() {

  return (
    <>

    <section class="work__section work__section--main">
        <div class="work__div">
            <h2 class="work-h2">Browser Game</h2>
            <p>For the unitiated, Lotería is like bingo, but instead of random numbers, cards with different images are drawn from a deck. One player draws the cards and the others pick a board with 16 images on it. When a card is drawn you get to place a counter, traditionally a pinto bean, if one of your spaces matches.</p>
        </div>
        <Media type="image" src="/images/loteriaDesktop.jpg" class="col-2 col-left" alt="A desktop mockup of the game. The player has several beans placed on their board. The current card is La Rosa and there are four other people playing."/>

        <div>
            <p>The two most important features other online versions were missing were</p>
            <ul class="work__ul">
                <li>Being able to pick your own board instead of getting a random one (people are really superstisitous about which boards they use).</li>
                <li>Letting a person draw the cards instead of having the computer do it (most of the fun comes from mixing up how quickly cards are drawn).</li>
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
