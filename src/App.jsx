import gsap from "gsap"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ProductView from "./components/ProductView"
import { ScrollTrigger } from "gsap/all"
import Showcase from "./components/Showcase"
import Performance from "./components/Performance"
import Features from "./components/Features"
import Highlights from "./components/Highlights"
import Footer from "./components/Footer"

gsap.registerPlugin(ScrollTrigger);
const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <ProductView />
            <Showcase />
            <Performance />
            <Features />
            <Highlights />
            <Footer />
        </>
    )
}

export default App
