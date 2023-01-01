import { useRouter } from 'next/router'
import Header from '/components/header'
import Link from 'next/link'
import Head from 'next/head'
import Gallery from '/components/gallery'
import { getAllWorkIds, getPostData } from '../../lib/works';

export async function getStaticPaths() {
  const paths = getAllWorkIds()
  return {
    paths,
    fallback: false
  }
}

// export async function getStaticProps({ params }) {
//   const postData = await getPostData(params.work)
//   return {
//     props: {
//       postData
//     }
//   }
// }

export default function CommentPage({ postData }) {
  const router = useRouter()
  const id = router.query.work
  console.log(postData);

  return (
    <>
        <Head><title>{id}</title></Head>
        <Header />

        <main class={ "work__main " + id }>
        <header class="work__header">
            <div class="work__div--header">
                <h1 class="work__h1 col-2">{id}</h1>
                <p class="work__p---header">{id}</p>
            </div>
        </header>
        <id />
        </main>
        

    </>
  )
}
// export default function Header({ title }) {
//   return <h1>{title ? title : 'Default title'}</h1>;
// }

// function HomePage() {
//   const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

//   const [likes, setLikes] = useState(0);

//   function handleClick() {
//     setLikes(likes + 1);
//   }

//   return (
//     <div>
//       <Header title="Develop. Preview. Ship. 🚀" />
//       <ul>
//         {names.map((name) => (
//           <li key={name}>{name}</li>
//         ))}
//       </ul>

//       <button onClick={handleClick}>Like ({likes})</button>
//     </div>
//   );
// }