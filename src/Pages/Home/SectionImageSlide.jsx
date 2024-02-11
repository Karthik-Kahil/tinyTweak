import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import styled from "styled-components";
import SectionHeader from "./SectionHeader";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";

const StyledDivs = styled.div`
  background-color: var(--color-primary);
  text-align: center;
  padding: 5rem 0;

  @media only screen and (max-width: 500px) {
    & > div:first-child {
      padding: 0 5rem;
    }
  }
`;

const StyledCompareSlider = styled(ReactCompareSlider)`
  max-width: 3840px;
  margin: 5rem auto;
  border-radius: 10px;
`;

const ArrowMarkLeft = styled.div`
  position: absolute;
  z-index: 1;
  top: 5rem;
  left: 5rem;
  color: var(--color-white);

  & h2 {
    font-size: 3rem;
  }

  & p {
    font-size: 2rem;
  }
`;

const ArrowMarkRight = styled.div`
  position: absolute;
  z-index: 1;
  top: 5rem;
  right: 5rem;
  color: var(--color-white);

  & h2 {
    font-size: 3rem;
  }

  & p {
    font-size: 2rem;
  }
`;

function SectionImageSlide() {
  const [counter, setCounter] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: el,
          start: "35% 25%",
          end: "100% center",
          scrub: true,
          // markers: true,
          pin: ".pin",
          toggleActions: "play reverse play reverse",
          onUpdate: (self) => {
            setCounter(self.progress * 100);
          },
        },
      })
      .to(".pin", { scale: 0.7 });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
  });

  return (
    <StyledDivs ref={ref}>
      <SectionHeader>
        <h4>QUALITY-PRESERVING IMAGE COMPRESSION & CONVERSION</h4>
        <h2>Can you tell the difference?</h2>
        <p>
          Use the slider to compare the original image with the compressed and
          converted version.
          <br />
          The file size has been reduced by over 55%! Enhance your
          website&apos;s speed with TinyTweak.
          <br />
          The file size is reduced by more than 55%!
        </p>
      </SectionHeader>

      <StyledCompareSlider
        className="pin"
        itemOne={
          <>
            <ArrowMarkLeft>
              <h2>ORIGINAL</h2>
              <p>983 KB</p>
            </ArrowMarkLeft>
            <ArrowMarkRight>
              <h2>TinyTweak</h2>
              <p>488 KB</p>
            </ArrowMarkRight>
            <ReactCompareSliderImage
              alt="Image one"
              src="./public/assets/compressed.jpg"
            />
          </>
        }
        itemTwo={
          <>
            <ReactCompareSliderImage
              alt="Image one"
              src="./public/assets/uncompressed.jpg"
            />
          </>
        }
        keyboardIncrement="5%"
        position={counter}
      />
    </StyledDivs>
  );
}

export default SectionImageSlide;
