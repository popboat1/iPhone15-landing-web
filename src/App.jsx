import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Navbar from "./components/Navbar"
import Model from "./components/Model"
import Features from "./components/Features"
import CPU from "./components/CPU"
import Footer from "./components/Footer"

const App = () => {

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <CPU />
      <Footer />
    </main>
  )
}

export default App
