import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
    --color-1: rgb(0, 0, 62);
    --color-2: rgb(120, 103, 33);
    --color-3: rgb(150, 11, 11);
    --color-4: #0c4e00;

    --font-1: rgb(255, 255, 255);

    --contact-a: orange;
    --contact-p: red;
    --contact-to: green;

    --contact-to-hover: blue;

    --messenger-icon: #00B2FF;
    --facebook-icon: #3b5998;
    --google-icon: #487fe7;
    --instagram-icon: #833AB4;


    /* menuCard */

    --menu-box-bg: transparent;

    --menu-box-bg-hover: transparent;

    --menu-box-border: #808080;

    --menu-dish-name-color: #8c0000;

    --menu-dish-q-color: black;

    --menu-dish-desc-color: #000000;

    --menu-dish-price-color: #0c4e00;

    /* Footer */

    --footer-icons-color: #3d3d4e;

    --footer-title: white;

    --footer-bg: black;

    --footer-color: #000;

    --footer-h3-color: #f26a2e;

    --footer-link-color: #3d3d4e;

    --footer-link-color-hover: #f26a2e;

    --footer-bottom-box-bg: black;

    --footer-bottom-box-link-color: rgb(222,222,222);

    --footer-bottom-box-link-color-hover: rgb(255,255,255);

    --footer-bottom-box-border-color: silver;

    --footer-motto-color: white;

    /* Stats */

    --stats-border-color: silver;

    --stats-1-icon-color: #047bf1;

    --stats-2-icon-color: #f3a82e;

    --stats-3-icon-color: #f34f2e;

    --stats-4-icon-color: #3af576;

    --stats-icons-hover: blue;

    --stats-box-bg: #f2f2f2;

    --stats-box-bg-hover: #fff;

    /* Scroll btn */

    --scroll-top-btn-color: var(--color-1);
    
    --scroll-top-btn-color-hover: var(--color-2);

    





  }

    * {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        overflow-x: hidden;
    }

    #scroll-btn {
      position: fixed;
      bottom: 0;
      right: 0;
      transform: translate(-50px, -50px);
      z-index: 90;
    }

    .display-none {
      display: none;
    }

    .display-block {
      display: block;
    }

`