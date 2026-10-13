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
        <p><b>The Problem:</b> I once made the mistake of mentioning I know how to use AfterEffects.</p>
        <p><b>The Reults:</b>  I gained deep knowledge of the .gif file format along with a deep hatred for it. In the process I also animated a whole host of assets.</p>

    </>
    )
}


export function Content() {

  return (
    <>

		<section class="work__section work__section--accent light">
    <div class="work__columnWrap col-3">
    <div class="work__column">
      <Media type="video" src="/media/terminix_termite_EM.mp4" autoplay="true" alt=""/>
      <Media type="video" src="/media/cox_tesimonial.mp4" autoplay="true" alt=""/>
      <Media type="video" src="/media/glad_strength_banner.mp4" autoplay="true" alt=""/>
    </div>
    <div class="work__column">
      <Media type="video" src="/media/cox_data_options.mp4" autoplay="true" alt=""/>
      <Media type="video" src="/media/terminix_mosquito_EM.mp4" autoplay="true" alt=""/>
    </div>
    <div class="work__column">
    <Media type="video" src="/media/cox_deep_search.mp4" autoplay="true" alt=""/>
    <Media type="video" src="/media/cox_search.mp4" autoplay="true" alt=""/>
    <Media type="video" src="/media/cox_repack.mp4" autoplay="true" alt=""/>
    </div>
    </div>
    {/* <dl class="credits">
      <dt class="credits__title">CD</dt>
      <dd class="credit__name">Jack Miller</dd>
      <dt class="credits__title">ACD</dt>
      <dd class="credit__name">Anna Lee Doughtie</dd>
    </dl> */}

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
