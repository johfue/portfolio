import Nav from '/components/nav'
import Link from 'next/link'
import Head from 'next/head'
import Gallery from '/components/gallery'

export default function layout(props) {

  return (
    <>
    
        <Head><title>{props.Title}</title></Head>
        <Nav />
        <main class={ "work__main " + props.classTitle }>
        <header class="work__header">
            <div class="work__div--header">
                <span class="work__spacer"></span>
                <h1 class="work__h1 col-2">{ props.title }</h1>
                <span class="work__spacer"></span>
                { props.desc }
            </div>
        </header>
        { props.content }
        </main>
        <Gallery />
    <svg width="0" height="0">
    <clipPath id="mask" clipPathUnits="objectBoundingBox" transform="scale(1 5.5)">
    <path d="M1 0H0.352533C0.242887 0 0.269146 0.136164 0.143962 0.0843089C0.0187776 0.0324541 0 0.14589 0 0.182512H0.301178H1V0Z" fill="#FDF7F9"/>
    </clipPath>
    </svg>

    </>
  )
}


