import gsap from "gsap"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ProductView from "./components/ProductView"
import { ScrollTrigger } from "gsap/all"
import Showcase from "./components/Showcase"

gsap.registerPlugin(ScrollTrigger);
const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <ProductView />
            <Showcase />
        </>
    )
}

export default App
