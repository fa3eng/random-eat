import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 0;
    margin: 0;
  }
`;

export const GuessButton = styled.button`
  width: 30vmin;
  height: 15vmin;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: white;
  margin: 1rem 0 2rem 0;
  font-size: 18px;
  font-weight: bold;
`;

// 又是一个和我不同的写法, 我一般是全部放在一个tsx文件里面的
export const AppWrapper = styled.div`
  text-align: center;

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;

    h2 {
      margin-top: 0;
    }

    .App-logo {
      height: 20vmin;
    }

    .App-link {
      color: #09d3ac;
    }

    .food-span {
      font-weight: bold;
      color: #09d3ac;
    }
  }
`;
