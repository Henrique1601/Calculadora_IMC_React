import "./imcCalc.css";
import Button from "./Button";
import { useState } from "react";

const ImcCalc = ({ calcImc }) => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");


  const clearForm = (e) => {
    e.preventDefault();
    setWeight("");
    setHeight("");
  };

  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, "");
  };

  const handleWeightChange = (e) => {
    const updatedValue = validDigits(e.target.value);
    setWeight(updatedValue);
  };

  const handleHeightChange = (e) => {
    const updatedValue = validDigits(e.target.value);
    setHeight(updatedValue);
  };
  
  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="weight">Peso (kg)</label>
            <input
              type="number"
              id="weight"
              name="weight"
              placeholder="Peso"
              value={weight}
              onChange={(e) => handleWeightChange(e)}
            />
          </div>

          <div className="form-control">
            <label htmlFor="height">Altura (cm)</label>
            <input
              type="number"
              id="height"
              name="height"
              placeholder="Altura"
              value={height}
              onChange={(e) => handleHeightChange(e)}
            />
          </div>
        </div>

        <div className="action-control">
          <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e, height, weight)} />
          <Button id="clear-btn" text="Limpar" action={clearForm} />
        </div>
      </form>
    </div>
  );
};
export default ImcCalc;
