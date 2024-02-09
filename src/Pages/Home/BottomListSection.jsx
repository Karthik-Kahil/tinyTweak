import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styled from "styled-components";
import sectionData from "../../utils/sectionData";
import { useState } from "react";

const StyledDiv = styled.div`
  background-color: var(--color-secondary);
  margin-top: 10rem;
  color: var(--color-white);
  padding: 8rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 8rem 4rem;
  }
`;

const ContainerMain = styled.div`
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
  padding: 1rem;
  gap: 5rem;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const ContainerLeft = styled.div`
  & h2 {
  }
`;

const ContainerHeaderText = styled.h2`
  font-size: 1.5rem;
  width: 300px;
  background-color: ${(props) =>
    props.$isActive ? "#7e66f7" : "var(--color-secondary)"};
  padding: 1rem 2rem;
  margin-bottom: 2rem;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;

  @media only screen and (max-width: 900px) {
    width: auto;
    display: inline-block;
    overflow-y: scroll;
    margin: auto;
  }
`;

const ContainerRight = styled.div`
  width: 100%;
  user-select: none;

  & h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`;

const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  cursor: pointer;
  font-size: 1.7rem;

  & svg {
    font-size: 2rem;
  }
`;

const QuestionAnswer = styled.div`
  margin-left: 2rem;
  margin-bottom: 2rem;
  color: var(--color-half-white);
`;

const DropAnswer = styled.div`
  border-bottom: 1px solid var(--color-half-white);
`;

function BottomListSection() {
  const defaultData = sectionData[0];
  const [curData, setCurData] = useState([defaultData]);
  const [isOpen, setIsOpen] = useState(sectionData[0].question[0]);

  const clickHandler = (selectedData) => {
    setCurData([selectedData]);
  };

  const openHandler = (click) => {
    setIsOpen(click);
  };

  return (
    <StyledDiv>
      <ContainerMain>
        <ContainerLeft>
          {sectionData.map((el) => (
            <ContainerHeaderText
              key={el.name}
              onClick={() => clickHandler(el)}
              $isActive={el.name === curData[0].name}
            >
              {el.name}
            </ContainerHeaderText>
          ))}
        </ContainerLeft>
        <ContainerRight>
          {curData.map((el) => (
            <div key={el.name}>
              <h2>{el.name}</h2>
              {el.question.map((data, i) => (
                <DropAnswer key={i} onClick={() => openHandler(data)}>
                  <ContainerHeader>
                    <h4>{data}</h4>
                    {data === isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
                  </ContainerHeader>
                  {data === isOpen && (
                    <QuestionAnswer>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: el.questionOneAns[i],
                        }}
                      ></p>
                    </QuestionAnswer>
                  )}
                </DropAnswer>
              ))}
            </div>
          ))}
        </ContainerRight>
      </ContainerMain>
    </StyledDiv>
  );
}

export default BottomListSection;
