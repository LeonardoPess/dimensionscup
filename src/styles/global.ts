import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #FFFFFF;

    --blue-500: #242633;
    --blue-900: #10141B;

    --purple-300: #6D66AD;
    --purple-500: #292265;

    --gray-500: #B2B5CC;

    --red-600: #670606;

    --brown-100: #FAF3E4;
    --brown-500: #AA8855;
    --brown-700: #4A2B10;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    color: var(--white);
    background: var(--blue-900);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, select, button {
    font: 400 1rem  'Poppins', sans-serif;
  }

  h1, h2, h3, h4 ,h5 ,h6 {
    font-family: 'Bitter', serif;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
  }

  // SCROLLBAR

  ::-webkit-scrollbar-track
{
	border-radius: 30px;
	background-color: transparent;
}

::-webkit-scrollbar
{
	width: 15px;
	background-color: transparent;
}

::-webkit-scrollbar-thumb
{
	border-radius: 30px;
	background-color: var(--purple-300);
}

`
