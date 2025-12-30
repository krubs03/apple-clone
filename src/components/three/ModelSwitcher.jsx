import { PresentationControls } from "@react-three/drei";
import { useRef } from "react"
import MacBookModel16 from "../../models/Macbook-16";
import MacBookModel14 from "../../models/Macbook-14";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (group, opacity) => {
    if (!group) return;

    group.traverse((child) => {
        if (child.isMesh) {
            child.material.transparent = true;
            gsap.to(child.material, { opacity, duration: ANIMATION_DURATION })
        }
    })
}

const moveGroup = (group, x) => {
    if (!group) return;

    gsap.to(group.position, { x, duration: ANIMATION_DURATION })
}

const ModelSwitcher = ({scale, isMobile}) => {
    const SCALE_LARGE_DESKTOP = 0.08;
    const SCALE_LARGE_MOBILE = 0.05;
    const smallMacRef = useRef();
    const largeMacRef = useRef();
    const showLargeMac = scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;

    useGSAP(() => {
        if (showLargeMac) {
            moveGroup(smallMacRef.current, -OFFSET_DISTANCE);
            moveGroup(largeMacRef.current, 0);

            fadeMeshes(smallMacRef.current, 0);
            fadeMeshes(largeMacRef.current, 1);
        } else {
            moveGroup(smallMacRef.current, 0);
            moveGroup(largeMacRef.current, OFFSET_DISTANCE);

            fadeMeshes(smallMacRef.current, 1);
            fadeMeshes(largeMacRef.current, 0);
        }
    }, [scale])

    const controlsConfig = {
        snap: true, //Snap back to original pos after move
        speed: 1,
        zoom: 1,
        azimuth: [-Infinity, Infinity], //horizontal scroll limits
        config: { mass: 1, tension: 0, friction: 25 } //Sim real-world physics
    }

    return (
        <>
            <PresentationControls {...controlsConfig}>
                <group ref={largeMacRef}>
                    <MacBookModel16 scale={isMobile ? 0.05 : 0.08} />
                </group>
            </PresentationControls>
            <PresentationControls {...controlsConfig}>
                <group ref={smallMacRef}>
                    <MacBookModel14 scale={isMobile ? 0.05 : 0.07} />
                </group>
            </PresentationControls>
        </>
    )
}

export default ModelSwitcher
