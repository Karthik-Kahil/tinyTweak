/* eslint-disable react/prop-types */
import prettyBytes from "pretty-bytes";
import { FaFileDownload } from "react-icons/fa";
import { IoCloudDone } from "react-icons/io5";
import styled from "styled-components";
import SpinnerMini from "../../UI/SpinnerMini";
import { useState } from "react";

const Sizer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #5130b2;
  color: var(--color-yellow);
  border-radius: 5px;
  padding: 1rem 2rem;
  margin-bottom: 1.1rem;
`;

const ImageSec = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const SavingSec = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const ImageViewer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: 50px;
  border-radius: 5px;
  background-color: var(--color-white);
`;

const FormaterSize = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 0.5rem;

  & span {
    font-size: 1.2rem;
    background-color: #b6bdf7;
    padding: 0.2rem 0.5rem;
    border-radius: 5px;

    &:hover {
      background-color: #877ef9;
    }
  }
`;

const Savings = styled.div`
  & h2 {
    font-size: 1.5rem;
  }
`;

const Output = styled.div`
  display: flex;
  align-items: center;
  background-color: #b6bdf7;
  color: var(--color-brown);
  border-radius: 5px;

  & h5 {
    font-size: 1.2rem;
    line-height: normal;
    padding: 0.5rem;
  }

  & p {
    font-size: 1rem;
    line-height: normal;
    padding: 0.5rem;
  }

  &:hover {
    background-color: #877ef9;
  }
`;

const ImageOut = styled.a`
  text-align: center;
  background-color: #6c47db;
  color: var(--color-white);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;

  & h2 {
    font-size: 1.2rem;
  }

  &:hover {
    background-color: #adb4f8;
  }
`;

function FileShower({ el, imageOutputHandler }) {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <Sizer>
      <ImageSec>
        <ImageViewer src={URL.createObjectURL(el)} alt="image-viewer" />
        <div>
          <h4>{el.name}</h4>
          <FormaterSize>
            <span>{el.type.split("/")[1].toUpperCase()}</span>
            <p>{prettyBytes(el.size, { maximumFractionDigits: 1 })}</p>
          </FormaterSize>
        </div>
      </ImageSec>
      <SavingSec>
        <Savings>
          <h2>Savings</h2>
          <p>New size:</p>
        </Savings>
        <Output>
          {imageOutputHandler.length === 0 ? (
            <SpinnerMini style={{ width: "4.4rem" }} />
          ) : (
            <div>
              <h5>
                {Math.round(
                  (imageOutputHandler[0]?.compressedSize / el.size) * 100 - 100
                )}
                %
              </h5>
              <p>
                {prettyBytes(imageOutputHandler[0]?.compressedSize, {
                  maximumFractionDigits: 1,
                })}
              </p>
            </div>
          )}
          <ImageOut
            href={imageOutputHandler[0]?.downloadLink}
            onClick={() => setIsCompleted(true)}
          >
            {!isCompleted && <FaFileDownload />}
            {isCompleted && <IoCloudDone />}
            <h2>{el.type.split("/")[1].toUpperCase()}</h2>
          </ImageOut>
        </Output>
      </SavingSec>
    </Sizer>
  );
}

export default FileShower;
