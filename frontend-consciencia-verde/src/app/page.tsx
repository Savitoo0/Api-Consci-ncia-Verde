'use client'
import Hero from './sections/Hero'
import Sobre from './sections/Sobre'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
      </main>
      <Footer />
    </>
  )
}