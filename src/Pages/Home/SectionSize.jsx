import styled from "styled-components";
import Button from "../../UI/Button";
import { FaDownload } from "react-icons/fa";
import FileShower from "./FileShower";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import prettyBytes from "pretty-bytes";
import { zipDownloadHandler } from "../../utils/apiAuth";
import { IoIosCloseCircle } from "react-icons/io";

const Section = styled.section`
  padding: 5rem;
  max-width: 1100px;
  margin: 0 auto;
  border-radius: 10px;
  position: relative;
  height: 600px;
  overflow: scroll;
  position: fixed;
  left: 0;
  right: 0;
  top: 10rem;
  bottom: 0;
  margin: auto;
  background: rgba(191, 199, 246, 0.75);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13px);
  -webkit-backdrop-filter: blur(13px);
  border-radius: 10px;
  z-index: 1;
`;

const StyledSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #5130b2;
  max-width: 1100px;
  margin: 0 auto;
  border-radius: 5px;
  padding: 2rem 3rem;
  gap: 5rem;
`;

const PercentageViewer = styled.div`
  background-color: #7e66f7;
  padding: 1rem 4rem;
  font-size: 3rem;
  color: var(--color-white);
  border-radius: 5px;
  border: 1px solid var(--color-yellow);
`;

const Sizer = styled.div`
  flex: 1;
  color: #ecf9f1;

  & p {
    color: #ecf9f1;
  }
`;

const FinalOutput = styled.div`
  padding: 3rem 2rem;
`;

const CloseIcon = styled(IoIosCloseCircle)`
  position: absolute;
  font-size: 3rem;
  color: #ecf9f1;
  background-color: #5130b2;
  border-radius: 50px;
  cursor: pointer;
  top: 15px;
  right: 15px;
`;

function SectionSize() {
  const { imageData, imagesOutput } = useSelector((sel) => sel.droppingData);
  const [totalSavedSize, setTotalSavedSize] = useState(0);
  const [currentSize, setCurrentSize] = useState(0);

  const imageOutputHandler = (imgName) => {
    return imagesOutput.filter((el) => el.originalname === imgName.name);
  };

  useEffect(() => {
    const curSize =
      imagesOutput[0]?.compressedSize &&
      imagesOutput?.reduce((acc, cur) => acc + cur?.compressedSize, 0);
    setCurrentSize(curSize);

    const totalSave =
      imageData[0]?.size && imageData?.reduce((acc, cur) => acc + cur?.size, 0);
    setTotalSavedSize(totalSave);
  }, [imagesOutput, imageData]);

  const fileDownload = () => {
    zipDownloadHandler();
  };

  return (
    imageData.length > 0 && (
      <Section>
        <CloseIcon />
        <StyledSection>
          <PercentageViewer>
            {Math.round(100 - (currentSize / totalSavedSize) * 100) || 0}%
          </PercentageViewer>
          <Sizer>
            <h2>Bunny the Bee just saved you</h2>
            <p>
              {prettyBytes(totalSavedSize - currentSize || 0, {
                maximumFractionDigits: 1,
              })}{" "}
              TOTAL
            </p>
          </Sizer>

          <Button
            onClick={fileDownload}
            colorbg={"#5130b2"}
            colordrop={"#ecf9f1"}
            pad="2rem 2rem"
          >
            <FaDownload />
            Download all
          </Button>
        </StyledSection>
        <FinalOutput>
          {imageData.length > 0 &&
            imageData.map((file, index) => (
              <FileShower
                el={file}
                key={index}
                imageOutputHandler={imageOutputHandler(file)}
              />
            ))}
        </FinalOutput>
      </Section>
    )
  );
}

export default SectionSize;
