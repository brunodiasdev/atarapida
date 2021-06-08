
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Atasimples from './atasimples';
import Changeata from './changeata';
function App() {
  return (
    <>
      <nav className="conteiner ">
        <ul className="row navApp">
          <li onClick="render1()" className="col-1.5 BA buttonApp1"> Ata Simples </li>
          <li className="col-1.5 BA buttonApp2"> Ata Composta </li>
          <li className="col-1.5 BA buttonApp3"> Ata Nova </li>
          <li className="col-1.5 BA buttonApp4"> Ata Primitiva </li>
          <li className="col-1.5 BA buttonApp5"> Personalisada </li>
        </ul>
      </nav>

      <section className="conteiner">
        <div className="row bodyTextApp">
          <div className="col-12 bodyText">
            
           
          </div>
        </div>
      </section>
    </>


  );
}

export default App;


/*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/