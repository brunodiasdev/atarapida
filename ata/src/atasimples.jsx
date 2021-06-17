import React from 'react';
import './styles/app.css';
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
<div className="conteiner">
    <div className="row superbarratxt">
        <div className="col-9">
            <label for="fata">Ata:</label><br/>
            <textarea class="barratxt" type="text" id="fata" name="fata"></textarea>
        </div>
        <div className="col-3">
            <label for="fpresenca">Lista de presença:</label><br/>
            <textarea class="barratxt" type="text" id="fpresenca" name="fpresenca"></textarea>
        </div>
    </div>
</div>
<div className="conteiner">
    <div className="row superbarratxt">
        <div className="col-7 backbodytxtcont">
            <input className="backbodytxt bbt1" type="button" value=""/>
            <input className="backbodytxt bbt2" type="button" value=""/>
            <input className="backbodytxt bbt3" type="button" value=""/>
            <input className="backbodytxt bbt4" type="button" value=""/>
            <input className="backbodytxt bbt5" type="button" value=""/>
        </div>
        <div className="col-5">
            <input className="col-4 buttonexportpdf" type="button" value="Exportar PDF"/>
            <input className="col-5 buttonexportword" type="button" value="Exportar Word"/>
        </div>
    </div>
</div>
    

</>)
}

export default nova;