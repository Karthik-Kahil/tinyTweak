import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { dropDataList, dropOutData, setLogin } from "./droppingData";
import axios from "axios";
import toast from "react-hot-toast";
import { IoIosCloudUpload } from "react-icons/io";

const DropzoneContainer = styled.div`
  width: 100%;
  min-width: 440px;
  min-height: 300px;
  border: 2px dashed var(--color-white);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border 0.3s, background-color 0.3s;
  padding: 1rem;
  background-color: ${(props) => (props.$isdragactive ? "#e6f7ff" : "#fff")};
  border-color: ${(props) =>
    props.$isdragactive ? "var(--color-white)" : "var(--color-white)"};

  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;

  &:hover {
    background: rgba(255, 255, 255, 0.35);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: var(--color-white);
  & h2 {
    font-size: 3rem;
  }

  & p {
    font-size: 2rem;
  }
`;

const BackgroundDiv = styled.div`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  padding: 2rem;
`;

const UploadIcon = styled(IoIosCloudUpload)`
  font-size: 10rem;
  margin-bottom: 1rem;
  color: var(--color-white);
`;

const DragAndDrop = () => {
  const dispatch = useDispatch();

  const onDrop = useCallback(
    (acceptedFiles) => {
      const validFiles = acceptedFiles.filter((file) => isValidFile(file));

      const formData = new FormData();
      acceptedFiles.forEach((file) => {
        formData.append("images", file);
      });

      axios
        .post("https://karthikkahil.cloud/api/v1/client", formData)
        .then((response) => {
          dispatch(dropOutData(response.data.data.user.images));
        })
        .catch((err) => {
          dispatch(setLogin());
          toast.error(JSON.parse(err.request.responseText).message);
        });

      dispatch(dropDataList(validFiles));
    },
    [dispatch]
  );

  const isValidFile = (file) => {
    return file.type && file.type !== "0" && file.type.includes("image/");
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDrop,
    multiple: true,
    maxFiles: 50,
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
    },
  });

  return (
    <BackgroundDiv>
      <DropzoneContainer {...getRootProps()} $isdragactive={isDragActive}>
        <UploadIcon />
        <input {...getInputProps()} />
        <Description>
          <h2>Drop your images here!</h2>
          <p>Up to 50 images, max 10 MB each.</p>
        </Description>
      </DropzoneContainer>
    </BackgroundDiv>
  );
};

export default DragAndDrop;
