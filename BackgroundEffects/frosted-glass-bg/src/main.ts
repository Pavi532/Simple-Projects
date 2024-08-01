import './style.css'
//import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
//import { setupCounter } from './counter.ts'


const app: HTMLElement = document.querySelector('#app') || document.body;
const appTop: number = app.offsetTop;
const appLeft: number = app.offsetLeft;

for (let i = 0; i < 20; i++) {
  const divTemplate: HTMLElement = document.createElement('div');
  divTemplate.classList.add('container');
  app.appendChild(divTemplate);
}

app.addEventListener('mousemove', (event: MouseEvent) =>{
  document.documentElement.style.setProperty('--cursor-y', (event.clientY - appTop ) + 'px');
  document.documentElement.style.setProperty('--cursor-x', (event.clientX - appLeft ) + 'px');
})
