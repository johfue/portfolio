import Nav from '/components/nav'
import Link from 'next/link'
import Head from 'next/head'
import Gallery from '/components/gallery'

// function Header({ title }) {
//   return <h1>{title ? title : 'Johnathon Fuerte'}</h1>;
// }

export default function layout(props) {

  return (
    <>
        <Head><title>{props.title}</title></Head>
        <Nav />
        <main class={ "work__main " + props.title }>
        <header class="work__header">
            <div class="work__div--header">
                <h1 class="work__h1 col-2">{ props.title }</h1>
                { props.desc }
            </div>
        </header>
        { props.content }
        </main>
        

    </>
  )
}


