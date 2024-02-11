import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const SpinnerStyle = styled.div`
  margin: 4.8rem auto;
  width: 6.4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(farthest-side, var(--color-brand-600) 94%, #0000)
      top/10px 10px no-repeat,
    conic-gradient(#0000 30%, var(--color-brand-600));
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
  animation: ${rotate} 1.5s infinite linear;
`;

const Bg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 99999;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9.5px);
  -webkit-backdrop-filter: blur(9.5px);
  border-radius: 10px;
  color: var(--color-white);

  & > h2 {
    text-transform: capitalize;
    font-style: italic;
    font-size: 2.5rem;
    padding: 0 5rem;
    text-align: center;
  }

  @media only screen and (max-width: 800px) {
    & > h2 {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;

const motivationalQuotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Your limitation—it's only your imagination.",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
];

const Spinner = () => {
  const [random, setRandom] = useState(0);

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * motivationalQuotes.length + 1);
    setRandom(randomNum);
  }, []);

  return (
    <Bg>
      <SpinnerStyle></SpinnerStyle>
      <h2>{motivationalQuotes[random]}</h2>
    </Bg>
  );
};

export default Spinner;
