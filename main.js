/*import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))*/
import Splide from "@splidejs/splide";

var splide = new Splide( '.splide', {
  type   : 'loop',
  perPage:3,
  perMove: 1,
  breakpoints:{
    640:{
      perPage: 1,
    }
  }
} );

splide.mount();

const menuSvg=document.querySelector(".svg-menu");
const navLinks=document.querySelector(".nav-links")

console.log(navLinks);
console.log(menuSvg);

menuSvg.addEventListener("click",()=>{
  navLinks.classList.toggle('mobile-menu')
})


