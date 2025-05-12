import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f8f9fa;
    color: #333;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .section {
    padding: 80px 0;
  }

  @media (max-width: 768px) {
    .section {
      padding: 60px 0;
    }
  }

  :root {
    --primary-color: #4a6dff;
    --secondary-color: #6c757d;
    --accent-color: #0056b3;
    --light-color: #f8f9fa;
    --dark-color: #343a40;
    --transition: all 0.3s ease-in-out;
  }
`;

export default GlobalStyles; 