import { Link } from "react-router-dom";
import BoxGrid from "./BoxGrid";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import GridExpand from "./GridExpand";

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
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen((el) => !el);
  };

  return (
    <StyledGrid>
      <BoxGrid bgColor={"#7e66f7"} hoverColor={"#877ef9"}>
        <h2>Web Image Optimization</h2>
        <p>
          Utilize our online compressor to effortlessly optimize your images.
          Seamlessly convert them to WebP format or efficiently compress large
          batches to reduce file sizes, all with simplicity and ease.
        </p>
        <Link>
          <span onClick={clickHandler}>
            {" "}
            Learn more <FaArrowRight />
          </span>
          {isOpen && (
            <GridExpand onClick={clickHandler}>
              Our online compressor revolutionizes image optimization, offering
              a seamless experience for users. With our platform, you can
              effortlessly convert images to WebP format and compress extensive
              batches, significantly reducing file sizes without compromising
              quality. This optimization ensures lightning-fast loading times
              for your website, contributing to an enhanced user experience. Our
              intuitive interface makes the process simple and efficient,
              allowing you to improve your site&apos;s performance with ease.
              Say goodbye to sluggish loading speeds and hello to a smoother
              browsing experience for your visitors.
            </GridExpand>
          )}
        </Link>
      </BoxGrid>
      <BoxGrid bgColor={"#EC53B0"} hoverColor={"#E966A0"}>
        <h2>API Integration</h2>
        <p>
          Streamline your workflow with TinyTweak&apos;s image API integration.
          Unlock advanced features like resizing, converting, and cropping for
          seamless optimization. Elevate your image management experience
          effortlessly.
        </p>
        <Link to="/">
          Learn more <FaArrowRight />
        </Link>
      </BoxGrid>
      <BoxGrid bgColor={"#036178"} hoverColor={"#017787"}>
        <h2>Rapid Optimization</h2>
        <p>
          This web compression tool operates at high speed, processing up to 50
          images per slot, ensuring a seamless experience with our image
          compression tool, TinyTweak.
        </p>
        <Link to="/">
          Learn more <FaArrowRight />
        </Link>
      </BoxGrid>
      <BoxGrid bgColor={"#FBBC04"} hoverColor={"#FFC81D"}>
        <h2>Upcoming Compression Formats</h2>
        <p>
          In the future, expect an array of compression formats, including
          additional features like AVIF, TIFF, GIF, SVG, JP2, DZI, and more
        </p>
        <Link to="/">
          Learn more <FaArrowRight />
        </Link>
      </BoxGrid>
    </StyledGrid>
  );
}

export default FourGridSection;
