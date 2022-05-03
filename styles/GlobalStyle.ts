import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
    font-size: 62.5%;
    height: 100%;
    background-color: white;
    --primaryBlue: #1A293E;
    --primaryBeige: #D6D4D1;
    --secondaryGrey: #DDDCDB;
    --textColor: #DDDCDB;
    --easing: cubic-bezier(.215,.61,.355,1);
    scroll-behavior: smooth;
    font-family: 'Cormorant Garamond', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: 0.05rem;
    @keyframes curve1 {
        0% {
            transform: translateY(0) rotate(0deg);
        }
        100% {
            transform: translateY(20%) rotate(20deg);
        }
    };
    @keyframes curve2 {
        0% {
            transform: translateY(0) rotate(15deg);
        }
        100% {
            transform: translateY(-20%) rotate(25deg);
        }
    };
    @keyframes scrollLineIn {
        0% {
            transform: scaleY(0)
        }
    };
    @keyframes reveal {
        0% {
            opacity: 0;
            transform: translateY(8px);
        }
    }
    body, html{ 
        height: 100%;
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
    #__next{
        height: 100%;
        position: relative;
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
    
}
`;
export default GlobalStyle;
