import HomePage from "./home"
import Head from 'next/head'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Mobiles4U</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex"></meta>
         <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  )
}
