import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="CalculatorBody">
        <input type="number" id="firstInput" />
        <select id="OperatorSelect">
          <option value="x">x</option>
          <option value="÷">÷</option>
          <option value="-">-</option>
          <option value="+">+</option>
        </select>
        <input type="number" id="secondInput" />
        <h3> = </h3>
        <input id="submit" type="submit" onClick={Multiply} />
      </div>
      <h1 id="output"> </h1>
    </div>
  );
}

function Multiply() {
  let firstInput = Number(document.getElementById("firstInput").value);
  let operator = document.getElementById("OperatorSelect").value;
  let secondInput = Number(document.getElementById("secondInput").value);
  switch (operator) {
    case "÷":
      document.getElementById("output").innerHTML = firstInput / secondInput;
      break;
    case "-":
      document.getElementById("output").innerHTML = firstInput - secondInput;
      break;
    case "+":
      document.getElementById("output").innerHTML = firstInput + secondInput;
      break;
    case "x":
      document.getElementById("output").innerHTML = firstInput * secondInput;
      break;
    default:
      return undefined;
  }
}
