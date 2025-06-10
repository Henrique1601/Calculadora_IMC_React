// import Data from './data/data'
import "./App.css";

import ImcCalc from "./components/imcCalc";
import ImcTable from "./components/ImcTable";

import { useState } from "react";

import { data } from "./data/data";

function App() {
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  const calcImc = (e, height, weight) => {
    e.preventDefault();
    console.log(height, weight);

    if (!weight || !height) return;

    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".") / 100; // Convertendo cm para metros

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    console.log(imcResult);
    setImc(imcResult);
    console.log("executou");

    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.classification);
      }
    });
    if (!info) return;
  };

  const clearImc = (e) => {
    e.preventDefault();
    setImc("");
    setInfo("");
    setInfoClass("");
  };
  return (
    <>
      <div className="container">
        {!imc ? (
          <ImcCalc calcImc={calcImc} />
        ) : (
          <ImcTable
            data={data}
            imc={imc}
            info={info}
            infoClass={infoClass}
            clearImc={clearImc}
          />
        )}
      </div>
    </>
  );
}

export default App;
