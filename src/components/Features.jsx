import { Canvas } from "@react-three/fiber";
import StudioLights from "./three/StudioLights";
import { features, featureSequence } from "../constants";
import { clsx } from "clsx";
import { Suspense, useRef } from "react";
import MacBookModel from "../models/Macbook";
import { Html } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import useMacBookStore from "../store";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ModelScroll = () => {
  const groupRef = useRef();
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })
  const { setTexture } = useMacBookStore();

  //Pre-loading videos for better rendering 
  useEffect(() => {
    featureSequence.forEach((feature) => {
      const vid = document.createElement('video');

      Object.assign(vid, {
        src: feature.videoPath,
        muted: true,
        playsInline: true,
        preload: 'auto',
        crossOrigin: 'anonymous'
      });

      vid.load();
    })
  }, []);

  useGSAP(() => {
    //Macbook rotation
    const modelTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#f-canvas',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: true
      }
    });

    //Sync all content
    const syncTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#f-canvas',
        start: 'top center',
        end: 'bottom top',
        scrub: 1
      }
    });

    //Spinning the laptop
    if (groupRef.current) {
      modelTimeline.to(groupRef.current.rotation, { y: Math.PI * 2, ease: 'power2.inOut'})
    }

    syncTimeline
      .call(() => setTexture('/videos/feature-1.mp4'))
      .to('.box1', { opacity: 1, y: 0, delay: 0.5})
      .call(() => setTexture('/videos/feature-2.mp4'))
      .to('.box2', { opacity: 1, y: 0 })
      .call(() => setTexture('/videos/feature-3.mp4'))
      .to('.box3', { opacity: 1, y: 0 })
      .call(() => setTexture('/videos/feature-4.mp4'))
      .to('.box4', { opacity: 1, y: 0 })
      .call(() => setTexture('/videos/feature-5.mp4'))
      .to('.box5', { opacity: 1, y: 0 })

  }, []);

  return (
    <group ref={groupRef}>
      <Suspense fallback={<Html><h1 className="text-white text-3xl uppercase">Loading....</h1></Html>}>
        <MacBookModel scale={isMobile ? 0.06 : 0.1} position={[0, -1, 0]} />
      </Suspense>
    </group>
  )
}

const Features = () => {
  return (
    <section id="features">
      <h2>See it all in a new light.</h2>
      <Canvas id="f-canvas" camera={{}}>
        <StudioLights />
        <ambientLight intensity={1.5} />
        <ModelScroll />
      </Canvas>
      <div className="absolute inset-0">
        {features.map((feature, index) => (
          <div key={feature.id} className={clsx('box', `box${index + 1}`, feature.styles)}>
            <img src={feature.icon} alt={feature.highlight} />
            <p>
              <span className="text-white">
                {feature.highlight}
              </span>
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
