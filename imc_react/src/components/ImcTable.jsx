import Button from "./Button";

import "./ImcTable.css";
import  "./Button.css"

const ImcTable = ({data, imc, info, clearImc, infoClass}) => {
  return (
    <div id="result-container">
      <h1>IMC Table</h1>
      <p id="imc-number">Seu IMC: <span className={infoClass} >{imc}</span></p>
      <p id="imc-info">Situação: <span className={infoClass} >{info}</span></p>
      <h3>Classificação:</h3>

      <div id="imc-table">
        <div className="table-header">
          <h4>IMC</h4>
          <h4>Classificação</h4>
          <h4>Obesidade(grau)</h4>
        </div>
        {data.map((item) => (
          <div className="table-data" key={item.info}>
            <p>{item.classification}</p>
            <p>{item.info}</p>
            <p>{item.obesity}</p>
          </div>
        ))}
      </div>
      <Button id="back-btn" text="Voltar" action={(e) => clearImc(e)}/>
    </div>
  );
};

export default ImcTable;