import gsap from "gsap/all";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  color: #ffffff;
  width: 100%;
  position: relative;
  background-color: var(--color-primary);

  & div {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
    border-radius: 10px;
    width: 100%;
  }

  @media only screen and (max-width: 1024px) {
    & div {
      max-width: 900px;
    }
  }

  @media only screen and (max-width: 900px) {
    & div {
      max-width: 90%;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  position: relative;
  background-color: #4fc0f6;

  & div > h2 {
    font-size: 3rem;
    max-width: 500px;
    margin-bottom: 1rem;
  }

  & div > p {
    font-size: 2rem;
    max-width: 500px;
  }

  & img {
    width: 200px;
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

const CloudDiv = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  left: 0;

  & img {
    position: absolute;
    width: 100px;
    max-width: 100px;
    opacity: 0.2;
    z-index: 1;
  }

  & img:nth-child(1) {
    left: 0;
    top: 0;
  }

  & img:nth-child(2) {
    bottom: 0;
    left: 0;
  }

  & img:nth-child(3) {
    bottom: 20px;
    right: 120px;
  }

  & img:nth-child(4) {
    top: 0;
    right: 300px;
  }
`;

function SectionPerformance() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef(); // New ref for third cloud image
  const ref4 = useRef(); // New ref for fourth cloud image
  const refDimension = useRef();

  const durationAnimation = 60;

  useEffect(() => {
    gsap.to(ref1.current, {
      x: () => `random(0, ${refDimension.current.offsetWidth - 100})`,
      y: () => `random(0, ${refDimension.current.offsetHeight - 100})`,
      duration: durationAnimation,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    gsap.to(ref2.current, {
      x: () => `random(0, ${-refDimension.current.offsetWidth + 100})`,
      y: () => `random(0, ${-refDimension.current.offsetHeight + 100})`,
      duration: durationAnimation,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    gsap.to(ref3.current, {
      x: () => `random(0, ${-refDimension.current.offsetWidth - 100})`,
      y: () => `random(0, ${-refDimension.current.offsetHeight - 100})`,
      duration: durationAnimation,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    gsap.to(ref4.current, {
      x: () => `random(0, ${refDimension.current.offsetWidth + 100})`,
      y: () => `random(0, ${refDimension.current.offsetHeight + 100})`,
      duration: durationAnimation,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <StyledDiv ref={refDimension}>
      <Container>
        <div>
          <h2>Speed up your website with Tinify</h2>
          <p>
            Maximize your website’s performance and improve SEO rankings with
            Tinify’s image optimization.
          </p>
        </div>
        <img src="./public/assets/5143541.webp" alt="" />
      </Container>
      <CloudDiv>
        <img ref={ref1} src="./public/assets/cloud-1.webp" alt="" />
        <img ref={ref2} src="./public/assets/cloud-2.webp" alt="" />
        <img ref={ref3} src="./public/assets/cloud-3.webp" alt="" />
        <img ref={ref4} src="./public/assets/cloud-4.webp" alt="" />
      </CloudDiv>
    </StyledDiv>
  );
}

export default SectionPerformance;
