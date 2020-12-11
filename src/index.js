// Test import of a JavaScript function
import { example } from './js/example'

// Test import of an asset
import webpackLogo from './images/webpack-logo.svg'

// Test import of styles
import './styles/index.scss'

// Appending to the DOM
const logo = document.createElement('img')
logo.src = webpackLogo

const heading = document.createElement('h1')
heading.textContent = example()

const app = document.querySelector('#root')
// app.append(logo, heading)
app.appendChild(logo)
app.appendChild(heading)

import Test from './js/Test'

const test = new Test()
try {
  test.getTodos()
  // test.getPreview()

} catch (error) {
  console.log(error)
}
