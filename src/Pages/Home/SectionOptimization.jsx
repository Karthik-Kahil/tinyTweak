import styled from "styled-components";
import FourGridSection from "./FourGridSection";
import SectionHeader from "./SectionHeader";

const StyledDiv = styled.div`
  text-align: center;
  color: var(--color-white);
  background-color: var(--color-primary);
  padding: 5rem;
`;

const HeaderOptimiz = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

function SectionOptimization() {
  return (
    <StyledDiv>
      <HeaderOptimiz>
        <SectionHeader>
          <h4>OUR PRODUCTS</h4>
          <h2>Optimization for each project</h2>
          <p>
            Explore customized solutions designed for website owners,
            developers, and designers, guaranteeing peak website performance for
            each project. Uncover the benefits of enhanced loading speeds
            through our image optimization tools.
          </p>
        </SectionHeader>
        <FourGridSection />
      </HeaderOptimiz>
    </StyledDiv>
  );
}

export default SectionOptimization;
