import React from 'react'
import ReactDOM, { render } from 'react-dom'
import Atasimples from './atasimples'
import App from './App';

function render1(){
    const nova = document.getElementsByClassName('bodyText')
    ReactDOM.render(<Atasimples/>, nova)
}
export default render1;