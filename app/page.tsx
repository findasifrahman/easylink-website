import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ChairmanVideo from '@/components/ChairmanVideo'
import About from '@/components/About'
import MissionVision from '@/components/MissionVision'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ChairmanVideo />
      <About />
      <MissionVision />
      <Services />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
} 