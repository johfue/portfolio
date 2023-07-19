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
        <p><b>About:</b> While on Cox, we started including animations in their emails. Here are a few of the gifs I animated.</p>
    </>
    )
}


export function Content() {

  return (
    <>

		<section class="work__section work__section--main light">
		    <Media type="video" src="/media/cox_connected_home.mp4" autoplay="true" alt=""/>
		    <Media type="video" src="/media/cox_homelife.mp4" autoplay="true" alt=""/>
		    <Media type="video" src="/media/cox_pano.mp4" autoplay="true" alt=""/>
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
