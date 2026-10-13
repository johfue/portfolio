import Layout from '/components/layout'
import Media from '/components/media'

export function Title() {

  return (
    <>
        Fresh Step
    </>
    )
}

const classTitle = "FreshStep"


export function Desc() {

  return (
    <>
        <p><b>The Problem:</b> Cat owners will spare no expense for their cats. Except when it comes to litter, where people aren’t convinced premium offerings are truly premium quality.</p>
        <p><b>The Big Idea:</b> Let’s bring Fresh Step Heavy Duty Scented Litter to world-class zoos renowned for their lions. Because if it’s good enough for the king of the jungle, it’s good enough for your cat, too.</p>
    </>
    )
}


export function Content() {

  return (
    <>

        <section class="work__section work__section--main dark">
            <Media type="image" class="col-2" src="/images/freshstep_social.jpg" alt="Screenshots of three tiktoks. Each showing lions behaving like cats and using litter"/>
            <div class="work__div">
              <h2 class="work__h2">Social</h2>
              <p class="work__p">Big cats often use the bathroom in the same spots in their zoo habitat—not unlike a litterbox. And zookeepers can tell you that when lion goes potty, it seriously reeks.<br></br><br></br>So we’ll fill lions’ litter spaces with Fresh Step Heavy Duty, making less odor for zookeepers and a perfect testimonial for cat parents.<br></br><br></br>And we’ll spread these testimonials with partnered social posts showing these big cats acting like well-mannered housecats.</p>
            </div>
        <dl class="credits">
            <dt class="credits__title">CW</dt>
            <dd class="credit__name">Kyle Petrie</dd>
            <dt class="credits__title">CW</dt>
            <dd class="credit__name">Zack Woznak</dd>
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
