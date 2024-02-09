import { Link } from "react-router-dom";
import BoxGrid from "./BoxGrid";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 10px;
  grid-column-gap: 5rem;
  grid-row-gap: 5rem;
  margin-top: 5rem;
  margin-bottom: 10rem;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-row-gap: 3rem;
  }
`;

function FourGridSection() {
  return (
    <StyledGrid>
      <BoxGrid bgColor={"#7e66f7"} hoverColor={"#877ef9"}>
        <h2>Web Pro and Web Ultra</h2>
        <p>
          The online compressor empowers you to easily optimize your images.
          Seamlessly convert to WebP or efficiently compress extensive batches
          to minimize file sizes, all with ease.
        </p>
        <Link to="/">
          Learn more <FaArrowRight />
        </Link>
      </BoxGrid>
      <BoxGrid bgColor={"#EC53B0"} hoverColor={"#E966A0"}>
        <h2>Web Pro and Web Ultra</h2>
        <p>
          The online compressor empowers you to easily optimize your images.
          Seamlessly convert to WebP or efficiently compress extensive batches
          to minimize file sizes, all with ease.
        </p>
        <Link to="/">
          Learn more <FaArrowRight />
        </Link>
      </BoxGrid>
      <BoxGrid bgColor={"#036178"} hoverColor={"#017787"}>
        <h2>Web Pro and Web Ultra</h2>
        <p>
          The online compressor empowers you to easily optimize your images.
          Seamlessly convert to WebP or efficiently compress extensive batches
          to minimize file sizes, all with ease.
        </p>
        <Link to="/">
          Learn more <FaArrowRight />
        </Link>
      </BoxGrid>
      <BoxGrid bgColor={"#FBBC04"} hoverColor={"#FFC81D"}>
        <h2>Web Pro and Web Ultra</h2>
        <p>
          The online compressor empowers you to easily optimize your images.
          Seamlessly convert to WebP or efficiently compress extensive batches
          to minimize file sizes, all with ease.
        </p>
        <Link to="/">
          Learn more <FaArrowRight />
        </Link>
      </BoxGrid>
    </StyledGrid>
  );
}

export default FourGridSection;
