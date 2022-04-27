import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
    font-size: 62.5%;
    height: 100%;
    background-color: white;
    --primaryBlue: #1A293E;
    --primaryBeige: #D6D4D1;
    scroll-behavior: smooth;
    body, html{ 
        height: 100%;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        scrollbar-width: none;
        -ms-overflow-style: none;
        &::-webkit-scrollbar {
            width: 0;
            height: 0;
        }
    };
    a {
        text-decoration: none;
    };
    body {
        padding: 2.4rem;
    };
    #__next{
        height: 100%;
    };
    body:after, body:before {
        content: "";
        will-change: top left;
        backface-visibility: hidden;
        position: fixed;
        left: 0;
        width: 100%;
        height: 2.4rem;
        background: #fff;
        z-index: 20000;
        box-sizing: border-box;
    };
    body:before {
        top: 0;
    };
    body:after {
        bottom: 0;
    }
    &:before, &:after {
        content: "";
        will-change: top left;
        backface-visibility: hidden;
        position: fixed;
        top: 0;
        height: 100%;
        width: 2.4rem;
        background: #fff;
        z-index: 21000;
        box-sizing: border-box;
    };
    &:before{
        left:0;
    };
    &:after {
        right: 0;
    }
}`;
export default GlobalStyle;
