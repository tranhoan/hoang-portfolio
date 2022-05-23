import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
    font-size: 62.5%;
    height: 100%;
    --primaryBlue: #002A5A;
    --primaryBeige: #EFE8D7;
    --textColor: #EFE8D7;
    --easing: cubic-bezier(.215,.61,.355,1);
    --zIndexTransition: z-index 0s ease 0s;
    --delay: 0s;
    scroll-behavior: smooth;
    font-family: 'orpheuspro', 'Cormorant Garamond', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
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
    @keyframes scrollLineInX {
        0% {
            transform: scaleX(0);
        }
    };
    @keyframes reveal {
        0% {
            opacity: 0;
            transform: translateY(8px);
        }
    };
    @keyframes revealX {
        0% {
            opacity: 0;
            transform: translateX(-8px);
        }
    };
    body, html{ 
        margin: 0;
        box-sizing: border-box;
        scrollbar-width: none;
        -ms-overflow-style: none;
        overflow: hidden;
        &::-webkit-scrollbar {
            width: 0;
            height: 0;
        }
    };
    a {
        text-decoration: none;
    };
    #__next{
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
        height: 100vh !important;
     };
    button {
        font-family: inherit;
        padding: 0;
        background: none;
        border: none;
        cursor: pointer;
    }
    
}
`;
export default GlobalStyle;
