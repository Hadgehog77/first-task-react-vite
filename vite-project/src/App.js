import { createElement } from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    createElement('section', {
      id: 'center'
    }, createElement ('div', {
      className: 'hero'
    }, createElement ('img', {
      src: heroImg,
      className: 'base',
      width: 170,
      height: 179,
      alt:''
    }), createElement('img', {
      src: reactLogo,
      className: 'framework',
      alt: 'React logo'
    }), createElement('img', {
      src: viteLogo,
      className: 'vite',
      alt: 'Vite logo'
    })), createElement('div', null, createElement('h1', null, 'Get started'),
  createElement('p', null,
    'Edit',
    createElement('code', null, 'src/App.jsx'),
    'and save to test',
    createElement('code', null, 'HMR')
  )),
createElement('button', {
  className: 'counter',
  onClick: () => setCount((count) => count + 1)
},
  `Count is ${count}`), createElement('div', null, new Date().getFullYear()))
  )
}