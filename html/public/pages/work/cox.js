import Layout from '/components/layout'
import Media from '/components/media'

export function Title() {

  return (
    <>
        Cox Communications
    </>
    )
}

const classTitle = "Cox"


export function Desc() {

  return (
    <>
        <p><b>About:</b> I helped sell Cox on including animations in more of their emails to engagement. Here are are a few of the gifs I animated.</p>
    </>
    )
}


export function Content() {

  return (
    <>

		<section class="work__section work__section--main light">
		    <Media type="video" class="tall" src="/media/cox_connected_home.mp4" autoplay="true" alt=""/>
		    <Media type="video" src="/media/cox_data_options.mp4" autoplay="true" alt=""/>
        <Media type="video" src="/media/cox_deep_search.mp4" autoplay="true" alt=""/>
		    <Media type="video" src="/media/cox_pano.mp4" autoplay="true" alt=""/>
        <Media type="video" src="/media/cox_repack.mp4" autoplay="true" alt=""/>
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
