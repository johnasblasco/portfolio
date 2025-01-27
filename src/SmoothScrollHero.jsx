import { ReactLenis } from "lenis/dist/lenis-react";
import {
      motion,
      useMotionTemplate,
      useScroll,
      useTransform,
} from "framer-motion";
import { FaHandPointDown } from "react-icons/fa";
import { useRef } from "react";
import { Projects } from "./components/Projects";
import SecondaryHero from './components/SecondaryHero';
import { Stacks } from './components/ClipPathLinks';
import { BouncyCardsFeatures } from "./components/BouncyCardsFeatues";
export const SmoothScrollHero = () => {
      return (
            <div id="main-bg" className="bg-zinc-950">
                  <ReactLenis
                        root
                        options={{
                              lerp: 0.05,
                              //   infinite: true,
                              //   syncTouch: true,
                        }}
                  >
                        <Nav />
                        <Hero />
                        <SecondaryHero />
                        <Projects />
                        <Stacks />
                        <BouncyCardsFeatures />
                  </ReactLenis>
            </div>
      );
};

const Nav = () => {
      return (
            <nav className="fixed  left-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-white">
                  <img
                        onClick={() => {
                              document.getElementById("hehe")?.scrollIntoView({
                                    behavior: "smooth",
                              });
                        }}
                        src="/logo.png" className="hover:cursor-pointer size-24 mix-blend-difference" />


            </nav>
      );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
      return (
            <div id="hehe"
                  style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
                  className="relative w-full"
            >
                  <div className="absolute left-[50dvw] -translate-x-1/2 flex flex-col justify-between h-[80vh] mt-12 z-10">
                        <img src="/sq.png" alt="" className="h-24 w-40 text-center mx-auto" />
                        <FaHandPointDown className="text-5xl xl:7xl ml-14 animate-bounce text-pink-700 " />
                  </div>
                  <CenterImage />

                  <ParallaxImages />

                  <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
            </div>
      );
};

const CenterImage = () => {
      const { scrollY } = useScroll();

      const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
      const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

      const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

      const backgroundSize = useTransform(
            scrollY,
            [0, SECTION_HEIGHT + 500],
            ["170%", "100%"]
      );
      const opacity = useTransform(
            scrollY,
            [SECTION_HEIGHT, SECTION_HEIGHT + 500],
            [1, 0]
      );

      return (
            <motion.div
                  className="sticky top-0 h-screen w-full flex justify-center items-center"
                  style={{
                        clipPath,
                        backgroundSize,
                        opacity,
                        backgroundImage:
                              "url(/mainBG.gif)",
                        backgroundPosition: "center",
                        backgroundSizeize: "contain",
                        backgroundRepeat: "no-repeat",
                  }}
            >

            </motion.div>

      );
};

const ParallaxImages = () => {
      return (
            <div className="mx-auto max-w-5xl px-4 pt-[200px]">
                  <ParallaxImg
                        src="/img4.gif"
                        alt="And example of a space launch"
                        start={-100}
                        end={600}
                        className="w-1/3"
                  />
                  <ParallaxImg
                        src="/imgCenter.gif"
                        alt="An example of a space launch"
                        start={-200}
                        end={700}
                        className="mx-auto w-[800px]"
                  />
                  <ParallaxImg
                        src="/img3.gif"
                        alt="Orbiting satellite"
                        start={200}
                        end={300}
                        className="ml-auto w-1/3"
                  />
                  <ParallaxImg
                        src="/img5.png"
                        alt="Orbiting satellite"
                        start={740}
                        end={700}
                        className=" w-5/12"
                  />
            </div>
      );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
      const ref = useRef(null);

      const { scrollYProgress } = useScroll({
            target: ref,
            offset: [`${start}px end`, `end ${end * -1}px`],
      });

      const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
      const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

      const y = useTransform(scrollYProgress, [0, 1], [start, end]);
      const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

      return (
            <motion.img
                  src={src}
                  alt={alt}
                  className={className}
                  ref={ref}
                  style={{ transform, opacity }}
            />
      );
};
