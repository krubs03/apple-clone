const Hero = () => {
  return (
    <section id="hero">
      <div>
        <h1>
          MacBook Pro
        </h1>

        <img src="/public/title.png" alt="Title" />
      </div>
      <video src="/public/videos/hero.mp4" alt="Video" autoPlay muted playsInline />
      <button>Buy</button>
      <p>From ₹164449 or ₹13699/mo for 12 months</p>
    </section>
  )
}

export default Hero
