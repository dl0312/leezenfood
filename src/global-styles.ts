import { createGlobalStyle } from 'styled-components';
import { fontSize, color, media } from './config/_mixin';
import { IThemeInterface } from './interfaces';
import 'react-toastify/dist/ReactToastify.min.css';

export const GlobalStyle = createGlobalStyle<IThemeInterface>`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body{
    font-family: 'Nanum Gothic', sans-serif;
    font-size: ${fontSize.normalFontSize};
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    
    transition: background 0.5s ease-in-out;
    transition: color 0.5s ease-in-out;

    /* Responsive Design */
    ${media.giant} {
      /* Giant View */
    }
    ${media.desktop} {
      /* Desktop View */
    }
    ${media.tablet} {
      /* Tablet View */
    }
    ${media.phone} {
      /* Phone View */
    }
  }

  a{
    text-decoration: none !important;
    &:hover{
        color: ${color.default.mainColor};
    }
  }

  button{
    cursor: pointer;
    background-color: white;
    outline: none;
    border: none;
    &:active {
    }
  }
  
  .ant-carousel .slick-slide {
    text-align: center;
    height: 500px;
    overflow: hidden;
    transition: 0.1s ease;
  }
  
  .ant-carousel .slick-slide h3 {
    color: #fff;
  }
  .slick-slide div {
    height: 100%;
  }
  
  .ant-carousel {
    position: relative;
    z-index: 2;
  }
  
  .ant-anchor-wrapper {
    height: 100%;
  }
  
  .ant-anchor {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
  }
  
  .ant-anchor-link {
    transition: 0.2s ease;
    padding: 0 25px;
    font-size: 20px;
    font-weight: bolder;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .ant-anchor-link a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: white;
    transition: 0.2s ease;
  }
  
  .ant-anchor div:hover {
    background-color: #ffeaa7;
  }
  
  .ant-anchor-link :hover {
    color: black;
  }
  
  .layout {
    background-color: transparent;
  }
  
  .ant-layout-content {
    background-color: transparent;
  }
  

  /* animations */
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes fadeIn {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
`;
