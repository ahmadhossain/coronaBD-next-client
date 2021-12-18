import Head from 'next/head'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Heading from '../components/Heading'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="h-screen bg-gray-50">
      <Head>
        <title>CoronaBD</title>
        <meta name="description" content="Coronavirus update in Bangladesh: total and new cases, total and new deaths." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Navbar />
        <Heading />
        <Card />
      </main>
        <Footer />
    </div>
  )
}
