import styled from "styled-components";
import DragandDrop from "../../UI/DragandDrop";
import SectionOptimization from "./SectionOptimization";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import SectionSize from "./SectionSize";
import SectionImageSlide from "./SectionImageSlide";
import SectionPerformance from "./SectionPerformance";
import BottomListSection from "./BottomListSection";

gsap.registerPlugin(ScrollTrigger);

const StyledDiv = styled.main`
  overflow: hidden;
  color: var(--color-brown);
  background-color: var(--color-primary);

  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  position: relative;
  padding: 10rem 5rem;

  @media only screen and (max-width: 500px) {
    padding: 10rem 0rem;
  }
`;

const Hero = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  margin: 10rem 0;
  z-index: 1;

  @media only screen and (max-width: 1024px) {
    padding: 0 5rem;
  }

  @media only screen and (max-width: 900px) {
    padding: 0 5rem;
    flex-direction: column;
  }

  @media only screen and (max-width: 500px) {
    padding: 0 5rem;
  }
`;

const HeroTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & h2 {
    font-size: 4rem;
    line-height: 1.2;
    color: var(--color-white);
  }

  & p {
    font-size: 2rem;
    line-height: 1.2;
    margin-top: 2rem;
    color: var(--color-white);
  }
`;

const RocketImage = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  background-color: red;

  & img {
    max-width: 300px;
    position: absolute;
    right: 0;
    top: 150px;
    z-index: 1;
  }

  @media only screen and (max-width: 1024px) {
    max-width: 800px;
    margin: 0 auto;
  }

  @media only screen and (max-width: 900px) {
    max-width: 600px;
    margin: 0 auto;
  }
`;

function Home() {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    gsap.to(el, {
      x: "random(20, 20)",
      y: "random(20, 20)",
      duration: 2,
      ease: true,
      yoyo: true,
      repeat: -1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: el,
          start: "50% center",
          end: "310% center",
          scrub: true,
          // markers: true,
          toggleActions: "play reverse play reverse",
        },
      })
      .to(el, { xPercent: 0, yPercent: 0, rotation: -120 })
      .to(el, { xPercent: -310, yPercent: 250, rotation: -100 })
      .to(el, { xPercent: -310, yPercent: 250, rotation: 0 });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
  });

  return (
    <>
      <RocketImage>
        <img
          ref={ref}
          src="./public/assets/5143541.webp"
          alt="rocket-animation-icon"
        />
      </RocketImage>
      <StyledDiv>
        <Hero>
          <HeroTitle>
            <h2>
              Optimize WebP, PNG, and JPEG Compression for Enhanced Website
              Speed.
            </h2>
            <p>Optimize now</p>
          </HeroTitle>
          <DragandDrop />
        </Hero>
      </StyledDiv>
      <SectionSize />
      <SectionOptimization />
      <SectionImageSlide />
      <SectionPerformance />
      <BottomListSection />
    </>
  );
}

export default Home;
