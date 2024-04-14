import '../styles/globals.css'
import Head from 'next/head'
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }) {
  return (
      <>
        <Head>
            <title>Johnathon Fuerte</title>
            <meta name="description" content="Chicano creative. First-time thesaurus owner. Inquisitive and gumptious autodidact." />
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#092543" />
            <meta name="msapplication-TileColor" content="#092543" />
            <meta name="theme-color" content="#092543" />
            <meta property="og:site_name" content="Johnathon Fuerte" />
            <meta property="og:title" content="but sorry for the mess. I wasn't expecting any visitors." />
            <meta property="og:description" content="It's fine really. I'm uh, an art director and uh, you know what just take a look for yourself." />
            <meta property="og:url" content="https://johnathonfuerte.com" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://johnathonfuerte.com//images/shareCard.png" />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:image" content="https://johnathonfuerte.com//images/shareCard.png" />
        </Head>
        <GoogleAnalytics gaMeasurementId ="G-WQPHJHS8PM" />

      <Component {...pageProps} />
      </>
      )
}
