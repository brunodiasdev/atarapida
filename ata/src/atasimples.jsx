import React from 'react';
import './styles/index.css';
import './styles/atasimples.css';
   
function nova(){
return(
<>
<div className="conteiner">
    <div className="row">
        <div className="col-3">
            <label for="fempresa">Empresa:</label><br/>
            <input class="barratxt" type="text" id="fempresa" name="fempresa"/>
        </div>
        <div className="col-3">
            <label for="ffilial">Filial/Unidade:</label><br/>
            <input class="barratxt" type="text" id="ffilial" name="ffilial"/>
        </div>
        <div className="col-6">
            <label for="fpresença">Lista de presença:</label><br/>
            <input class="barratxt" type="text" id="fpresença" name="fpresença"/>
        </div>
    </div>
</div>

<div className="conteiner">
    <div className="row">
        <div className="col-12">
            <label for="ftema">Tema da reunião:</label><br/>
            <input class="barratxt" type="text" id="ftema" name="ftema"/>
        </div>
    </div>
</div>
    
<div className="conteiner">
    <div className="row">
        <div className="col-3">
            <label for="fpresidindo">Presidindo a reunião:</label><br/>
            <input class="barratxt" type="text" id="fpresidindo" name="fpresidindo"/>
        </div>
        <div className="col-3">
            <label for="fdirigindo">Dirigindo a reunião:</label><br/>
            <input class="barratxt" type="text" id="fdirigindo" name="fdirigindo"/>
        </div>
        <div className="col-2">
            <label for="fdata">Data:</label><br/>
            <input class="barratxt" type="text" id="fdata" name="fdata"/>
        </div>
    </div>
</div>
    
    
    
    
    
    <h1>Simples</h1>
    <h1>Simples</h1>
    <h1>Simples</h1>
</>)
}

export default nova;