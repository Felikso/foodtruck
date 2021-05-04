import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
    --color-1: rgb(0, 0, 62);
    --color-2: rgb(120, 103, 33);
    --color-3: rgb(150, 11, 11);
    --color-4: #0c4e00;

    --font-1: rgb(255, 255, 255);

    /* Contact */

    --contact-a: #f26a2e;
    --contact-p: #b35656;
    --contact-to: #28a728;

    --contact-container-stats-bg: black;

    --contact-to-hover: blue;

    --contact-opening-hours-box-bg: transparent;

    --contact-opening-day: rgb(0,0,100);

    --contact-opening-hours: rgb(200,0,0);

    --contact-opening-h2: black;

    --messenger-icon: #00B2FF;
    --facebook-icon: #3b5998;
    --google-icon: #487fe7;
    --instagram-icon: #833AB4;


    /* menuCard */

    --menu-box-bg: transparent;

    --menu-box-bg-hover: transparent;

    --menu-box-border: #808080;

    --menu-dish-name-color: #e60000;

    --menu-dish-q-color: #525252;

    --menu-dish-desc-color: #eaeaea;

    --menu-dish-price-color: #33d000;

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

    /* Menu Cards */

    --underline-item-bg: linear-gradient(to right, rgba(100, 200, 200, 1), rgba(100, 200, 200, 1));

    --underline-item-bg-active: linear-gradient(to right, rgba(255, 0, 0, 1), rgba(255, 0, 180, 1), rgba(0, 100, 200, 1));

    --menu-card-color-open: #ab5e00;

    --menu-card-color-close: #1d1d1d;

    /* Info Top Box */

    --info-top-box-bg: #202020;

    --info-top-box-color: #7a7a7a;

    --info-top-box-color-hover: #bdbdbd;


    
    /* Opening Data */

    --opening-data-border-bottom: #9993;

    --opening-data-hours: #f26a2e;

    --opening-data-day: #c7c7c7;

    --opening-data-bg: transparent;

    --opening-data-title: white;

  }

    * {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        overflow-x: hidden;
        background: black;
        color: white;
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



    /* Scroll Styles */

    /* Nav */


  .slideDownNav{
    position: fixed !important;
    background: #000000d1 !important;
    top: 0;
    width: 100vw;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1300px) /2);
    opacity: 0;
    animation: slide-down-nav .5s ease-in-out normal forwards;
    animation-iteration-count: 1;
    transition: all .2s ease-in-out;
  }



    /* Animations */
    

    
    @keyframes opacity-nav {
      30% { opacity: 0 }
      100% { opacity: 1; }
    }

    @keyframes slide-down-nav {
      0% {top: -80px; opacity: 0 ;}
      100% {top: 0px; opacity: 1;}
    }


    @keyframes hover-v {
      0% {
          transform: scaleX(0);
          height: 5px;
         }
      45% {   
          transform: scaleX(1.05);
          height: 5px;
         }
      55% {height: 5px;}
      100% {
          transform: scaleX(1.05);
          height: 3.8rem;
         }
    }
    @keyframes no-hover-v {
      0% {
          transform: scaleX(1.05);
          height: 3.8rem;
         }
      45% {height: 5px;}
      55% {   
          transform: scaleX(1.05);
          height: 5px;
          opacity: 1;
         }
      
      100% {
          transform: scaleX(0);
          height: 5px;
          opacity: .02;
         }
    }



`