import gsap from "gsap"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ProductView from "./components/ProductView"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger);
const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <ProductView />
        </>
    )
}

export default App
