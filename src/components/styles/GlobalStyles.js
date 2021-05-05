import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
    --color-1: rgb(0, 87, 184);
    --color-2: rgb(255, 215, 0);
    --color-3: #D4312D;
    --color-4: rgb(15, 200, 0);


    --font-1: rgb(255, 255, 255);

    /* Body */

    --body-bg: white;

    --body-color: black;

    /* Hero */

    --hero-styled-bg: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5046218316428134) 4%, rgba(255,255,255,0.25252099130667893) 7%, rgba(0,0,0,1) 100%);

    --hero-title-color: #FF0600;

    --hero-motto-color: #fffb00;

    /* About Section */

    --about-us-container-bg: transparent;

    --about-us-container-color: white;

    --about-us-top-line-color: #077bf1;

    --about-us-testimonial-p: #3b3b3b;

    /* Contact */

    --contact-a: #f26a2e;
    --contact-p: #b35656;
    --contact-to: #28a728;

    --contact-to-hover: blue;

    --contact-opening-hours-box-bg: transparent;

    --contact-opening-day: rgb(0,0,100);

    --contact-opening-hours: rgb(200,0,0);

    --contact-opening-h2: black;

    ---contact-title-color: blue;

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

    /* Featured */

    --featured-bg: transparent;

    --featured-heading-color: #ca0101;

    /* Footer */

    --footer-icons-color: #3d3d4e;

    --footer-title: white;

    --footer-bg: black;

    --footer-color: white;

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

    --stats-box-bg: #646464c2;

    --stats-box-bg-hover: #979797c2;

    --stats-container-bg: transparent;

    --stats-container-color: white;

    --stats-question-color: red;

    --contact-container-stats-bg: transparent;

    /* Scroll btn */

    --scroll-top-btn-color: var(--color-1);
    
    --scroll-top-btn-color-hover: var(--color-2);

    /* Menu Cards */

    --underline-item-bg: linear-gradient(to right, rgba(100, 200, 200, 1), rgba(100, 200, 200, 1));

    --underline-item-bg-active: linear-gradient(to right, rgba(255, 0, 0, 1), rgba(255, 0, 180, 1), rgba(0, 100, 200, 1));

    --menu-card-color-open: #ab5e00;

    --menu-card-color-close: #1d1d1d;

    /* Info Top Box */

    --info-top-box-bg: black;

    --info-top-box-color: #c80000;

    --info-top-box-color-hover: #ec5050;


    
    /* Opening Data */

    --opening-data-border-bottom: #9993;

    --opening-data-hours: #f26a2e;

    --opening-data-day: #c7c7c7;

    --opening-data-bg: transparent;

    --opening-data-title: white;

    /* NavMenu */

    --mobile-nav-bg: #d90000e6;

    --nav-link-color: white;

    --nav-link-color-hover: #e1be02;


  }


    * {
        font-family: 'Ubuntu', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        overflow-x: hidden;
        background: var(--body-bg);
        color: var(--body-color);
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
    background: #660000de !important;
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