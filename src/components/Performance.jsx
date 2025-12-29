import { useMediaQuery } from "react-responsive"
import { performanceImages, performanceImgPositions } from "../constants"
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Performance = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
    const sectionRef = useRef(null);

    useGSAP(() => {
        const sectionPerf = sectionRef.current;
        if (!sectionPerf) return;

        //Text animation
        gsap.fromTo(
            ".content p",
            { opacity: 0, y: 10 }, {
            opacity: 1,
            y: 0,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.content p',
                start: 'top bottom',
                end: 'top center',
                scrub: true,
                invalidateOnRefresh: true
            }
        });

        if (isMobile) return;

        const tl = gsap.timeline({
            defaults: { ease: "power1.inOut", duration: 2, overwrite: "auto" },
            scrollTrigger: {
                trigger: sectionPerf,
                start: 'top bottom',
                end: 'center center',
                scrub: 1,
                invalidateOnRefresh: true
            }
        });

        performanceImgPositions.forEach((item) => {
            if (item.id === 'p5') return;

            const toVars = {};
            const selector = `.${item.id}`;

            if (typeof item.left === "number") toVars.left = `${item.left}%`;
            if (typeof item.right === "number") toVars.right = `${item.right}%`;
            if (typeof item.bottom === "number") toVars.bottom = `${item.bottom}%`;

            if (item.transfrom) toVars.transfrom = item.transfrom;

            tl.to(selector, toVars, 0);
        });
    }, { scope: sectionRef, dependencies: [isMobile] });

    return (
        <section id="performance" ref={sectionRef}>
            <h2>
                Next-level gaming performance. Game on.
            </h2>
            <div className="wrapper">
                {performanceImages.map(( item, index ) => (
                    <img
                    key={index}
                    className={item.id}
                    src={item.src}
                    alt={`Performance Image-${index + 1}`} />
                ))}
            </div>
            <div className="content lg:-mt-10 pt-0">
                <p>
                    Run graphics-intensive workflows with a responsiveness that keeps up
                    with your imagination. The M4 family of chips features a GPU with a
                    second-generation hardware-accelerated ray tracing engine that renders
                    images faster, so{" "}
                    <span className="text-white">
                        gaming feels more immersive and realistic than ever.
                    </span>{" "}
                    And Dynamic Caching optimizes fast on-chip memory to dramatically
                    increase average GPU utilization — driving a huge performance boost
                    for the most demanding pro apps and games.
                </p>
            </div>
        </section>
    )
}

export default Performance
