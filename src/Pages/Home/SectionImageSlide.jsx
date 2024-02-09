import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import styled from "styled-components";
import SectionHeader from "./SectionHeader";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import Logo from "../../UI/Logo";

const StyledDivs = styled.div`
  background-color: var(--color-primary);
  text-align: center;
  padding: 5rem 0;
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
`;

const ArrowMarkRight = styled.div`
  position: absolute;
  z-index: 1;
  top: 5rem;
  right: 5rem;
  color: var(--color-white);
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
        <h4>IMAGE COMPRESSION AND CONVERSION WITHOUT VISIBLE QUALITY LOSS</h4>
        <h2>Can you tell the difference?</h2>
        <p>
          Move the slider to compare the compressed and converted image with the
          original. <br />
          The file size is reduced by more than 85%!
        </p>
      </SectionHeader>

      <StyledCompareSlider
        className="pin"
        itemOne={
          <>
            <ArrowMarkLeft>
              <h2>ORIGINAL</h2>
              <p>1.3 MB</p>
            </ArrowMarkLeft>
            <ArrowMarkRight>
              <Logo />
              <p>949 KB</p>
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
