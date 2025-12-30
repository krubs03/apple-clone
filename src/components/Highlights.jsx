import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Highlights = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const leftRef = useRef();
  const rightRef = useRef();

  useGSAP(() => {
   gsap.to([leftRef.current, rightRef.current], {
    y: 0,
    opacity: 1,
    duration: 2.5,
    stagger: 0.5,
    scrollTrigger: {
      trigger: '.masonry',
      start: isMobile ? 'bottom bottom' : 'top top'
    },
    ease: 'power1.inOut'
   });
  });

  return (
    <section id="highlights">
      <h2>There's never been a better time to upgrade.</h2>
      <h3>Here's what you get with the new MacBook Pro</h3>
      <div className="masonry">
        <div className="left-column" ref={leftRef}>
          <div>
            <img src="/laptop.png" alt="Laptop" />
            <p>Fly through tasks upto 9.7x faster</p>
          </div>
          <div>
            <img src="/sun.png" alt="Sun" />
            <p>A stunning <br />Liquid Retina XDR<br /> display</p>
          </div>
        </div>
        <div className="right-column" ref={rightRef}>
          <div className="apple-gradient">
            <img src="/ai.png" alt="AI" />
            <p>Built for<br />
              <span>Apple Intelligence</span>
            </p>
          </div>
          <div>
            <img src="/battery.png" alt="Battery" />
            <p>Upto
              <span className="green-gradient">{' '}14 more hours {' '}</span>
              of battery life.
              <span className="text-dark-100">{' '}(A total of 24 hours)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlights
