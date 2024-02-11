import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


:root {
    --color-primary: #000000;
    --color-secondary: #101010;
    --color-white: #ffffff;
    --color-half-white: #86868B;
    --color-green-a1: #59A844;
    --color-brand-600: #ffffff;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  -webkit-scroll-behavior: smooth;
}

body {
  font-family: "Poppins", sans-serif;
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  background-color: var(--color-primary);
}

&::selection {
  background-color: #b6bdf7;
  color: var(--color-grey-0);
}


input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: #ffffff;
  color: #000000;
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-white);
  outline-offset: -1px;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: none;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}



`;

export default GlobalStyles;
