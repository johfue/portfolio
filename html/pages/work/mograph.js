import Layout from '/components/layout'
import Media from '/components/media'

export function Title() {

  return (
    <>
        Motion Graphics
    </>
    )
}

const classTitle = "MoGraph"


export function Desc() {

  return (
    <>
        <p><b>The Problem:</b> I once made the mistake of mentioning I know how to use AfterEffects.</p>
        <p><b>The Reults:</b>  I gained deep knowledge of the .gif file format along with a deep hatred for it. I also animated a whole host of assets in the process.</p>

    </>
    )
}


export function Content() {

  return (
    <>

		<section class="work__section work__section--main dark">
    <div class="work__columnWrap col-3">
    <div class="work__column">
      <Media type="video" src="/media/terminix_termite_EM.mp4" autoplay="true" alt="A termite burrows a tunnel before getting zapped by Terminix"/>
      <Media type="video" src="/media/cox_tesimonial.mp4" autoplay="true" alt="A testimonial is displayed on a card before flipping to reveal another testimonial"/>
      <Media type="video" src="/media/cox_raf.mp4" autoplay="true" alt="A photo of a customer connects to another customer, they both begin to pulse"/>
    </div>
    <div class="work__column">
      <Media type="video" src="/media/cox_data_options.mp4" autoplay="true" alt="One icon morphs into another"/>
      <Media type="video" src="/media/terminix_mosquito_EM.mp4" autoplay="true" alt="A mosquito bites down before being zapped by Terminix"/>
    </div>
    <div class="work__column">
    <Media type="video" src="/media/cox_deep_search.mp4" autoplay="true" alt="A voice remote recieves a search command and pulls up matching results"/>
    <Media type="video" src="/media/cox_search.mp4" autoplay="true" alt="A search term is typed into a search bar"/>
    <Media type="video" src="/media/cox_repack.mp4" autoplay="true" alt="A gift box unwraps and reveals a piggybank"/>
    </div>
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
