import Layout from '/components/layout'
import Media from '/components/media'

export function Title() {

  return (
    <>
        Cox
    </>
    )
}

const classTitle = "Cox"


export function Desc() {

  return (
    <>
        <p><b>About:</b> I helped sell Cox on including gifs in more of their emails to increase engagement. Here are a few I animated.</p>
    </>
    )
}


export function Content() {

  return (
    <>

		<section class="work__section work__section--accent light">
    <div class="work__columnWrap col-3">
    <div class="work__column">
      <Media type="video" src="/media/cox_connected_home.mp4" autoplay="true" alt=""/>
    </div>
    <div class="work__column">
      <Media type="video" src="/media/cox_data_options.mp4" autoplay="true" alt=""/>
      <Media type="video" src="/media/cox_pano.mp4" autoplay="true" alt=""/>
    </div>
    <div class="work__column">
    <Media type="video" src="/media/cox_deep_search.mp4" autoplay="true" alt=""/>
    <Media type="video" src="/media/cox_repack.mp4" autoplay="true" alt=""/>
    </div>
    </div>
    <dl class="credits">
      <dt class="credits__title">CD</dt>
      <dd class="credit__name">Jack Miller</dd>
      <dt class="credits__title">ACD</dt>
      <dd class="credit__name">Anna Lee Doughtie</dd>
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
