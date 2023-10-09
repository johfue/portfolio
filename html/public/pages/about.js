import Nav from '/components/nav'
import Link from 'next/link'
import Head from 'next/head'

export default function About() {

  return (
    <>
        <Head><title>About Me</title></Head>
        <Nav />
            <svg width="0" height="0">
<clipPath id="mask" clipPathUnits="objectBoundingBox" transform="scale(1 1.2)">
<path d="M1 0H0V0.232068C2.43454e-08 0.326036 0.0622334 0.361258 0.045 0.46C0.0277667 0.558742 0.0176991 0.657662 0.150908 0.657662C0.284117 0.657662 0.23082 0.542671 0.31 0.545C0.38918 0.547329 0.393945 0.72819 0.496973 0.726595C0.6 0.725 0.608395 0.61 0.675 0.61C0.741605 0.61 0.72 0.76 0.8 0.76C0.88 0.76 0.84 0.705 0.9 0.595C0.96 0.485 0.98 0.49 1 0.402888V0Z" fill="#C4C4C4"/>
</clipPath>
</svg>


    <main class="about">
        <div class="about__column about__column--one">
            <h1 class="about__h1">Chicano creative. First-time thesaurus owner. Inquisitive and gumptious autodidact.</h1>
            <img src="/images/profPic.jpg" class="about__img about__img--left" alt="A rather cool guy in denim jacket standing in front of pink flowers."></img>
        </div>
        <div class="about__column about__column--two">
            <section class="about__section">
                <p>Like any child of immigrants, I share the experience of having to translate for my parents at the Burger King. Without anyone to help me with my English homework, I had to learn a lot on my own. And I grew to be a voracious self-learner. Libraries are scared to let me in their doors.</p>
            </section>
            <img src="/images/profPic.jpg" class="about__img about__img--center" alt=""></img>
        </div>
        <div class="about__column about__column--three">
            <section class="about__section about__section--three">
                <h2 class="about__h2">FAQ</h2>
                <p class="about__p about__p--question">Q. Did you code the back and front-end of this site from scratch?</p>
                <p class="about__p">A. Yes</p>
                <p class="about__p about__p--question">Q. How often do you get asked that?</p>
                <p class="about__p">A. Never, but I don’t want all those hours to go unappreciated.</p>
                <h2 class="about__h2">Contact</h2>
                <a href="mailto:hello@johnathonfuerte.com" target="blank_">hello@johnathonfuerte.com</a>
                <br></br>
            </section>
            <img src="/images/profPic.jpg" class="about__img about__img--right" alt=""></img>
        </div>
    </main>
    <div class="overflow">
            <svg class="about__svg about__svg--one" width="410" height="344" viewBox="0 0 410 344" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M204.998 199.14C263.353 174.376 246.72 239.565 300.827 219.847C354.933 200.129 389.81 165.016 382.555 126.58C375.301 88.1434 340.699 18.2621 187.768 77.7561C34.8375 137.25 12.6538 299.822 83.3135 280.915C153.973 262.008 146.642 223.904 204.998 199.14Z" fill="#1A70C9"/>
</svg>
            <svg class="about__svg about__svg--two" width="257" height="191" viewBox="0 0 257 191" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M84.0046 110.552C53.5998 137.31 2.34026 125.124 3.07718 162.974C3.81409 200.825 79.1586 193.949 171.454 171.596C263.75 149.244 286.797 3.82749 199.406 1.20149C112.016 -1.4245 114.409 83.793 84.0046 110.552Z" fill="#EEE230"/>
            </svg>
            <svg class="about__svg about__svg--three" width="261" height="261" viewBox="0 0 261 261" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M177.977 245.023C263.315 224.978 234.217 150.791 171.584 72.1829C108.95 -6.42509 66.2108 -3.77147 38.7878 37.1025C11.3648 77.9764 69.5539 107.684 87.0319 134.547C104.51 161.411 92.6398 265.067 177.977 245.023Z" fill="#E64169"/>
</svg>
</div>

    </>
  )
}