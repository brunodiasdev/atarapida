import React, { useState } from 'react';
import './styles/app.css';
import AtaSimples from './atasimples';
import AtaComposta from './atacomposta';
import AtaNova from './atanova';
import AtaPrimitiva from './ataprimitiva';
import Personalizar from './personalizar';

function App() {
  
  const [ata,setAta] = useState("simples")

  return (
    <>
      <nav className="conteiner ">
        <ul className="row navApp">
          <li className="col-1.5 BA buttonApp1" ><input type="button" onClick={() => setAta('simples')} value="Ata Simples"></input> </li>
          <li className="col-1.5 BA buttonApp2"><input type="button" onClick={() => setAta('composta')} value="Ata Composta"></input>  </li>
          <li className="col-1.5 BA buttonApp3"> <input type="button" onClick={() => setAta('nova')} value="Ata Nova"></input> </li>
          <li className="col-1.5 BA buttonApp4"><input type="button" onClick={() => setAta('primitiva')} value="Ata Primitiva"></input> </li>
          <li className="col-1.5 BA buttonApp5"> <input type="button" onClick={() => setAta('personalizada')} value="Personalizada"></input></li>
        </ul>
      </nav>

      <section className="conteiner">
        <div className="row bodyTextApp">
          <div className="col-12 bodyText">
            {ata === 'simples' ? <AtaSimples/>:
            ata === 'composta' ? <AtaComposta/>:
            ata === 'nova' ? <AtaNova/>:
            ata === 'primitiva' ? <AtaPrimitiva/>: <Personalizar/>}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;