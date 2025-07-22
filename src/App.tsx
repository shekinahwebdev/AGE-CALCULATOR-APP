import "./App.css";
import { InputData } from "./components/InputData";
import { useState } from "react";
import arrowIcon from "/assets/images/icon-arrow.svg";

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [yearsResult, setYearsResult] = useState("--");
  const [monthsResult, setMonthsResult] = useState("--");
  const [daysResult, setDaysResult] = useState("--");

  const calculateAge = () => {};

  return (
    <main className="main_calculator">
      <InputData />
      <div className="arrow_line">
        <div className="line"></div>
        <div className="arrow">
          <button className="arrow_button" onClick={calculateAge}>
            <img src={arrowIcon} alt="Arrow Icon" className="icon_arrow" />
          </button>
        </div>
      </div>
      <section className="output_container">
        <div className="output_data years">
          <p className="output_display">--</p>
          <p className="output_label">years</p>
        </div>
        <div className="output_data months">
          <p className="output_display">--</p>
          <p className="output_label">months</p>
        </div>
        <div className="output_data days">
          <p className="output_display">--</p>
          <p className="output_label">days</p>
        </div>
      </section>
    </main>
  );
}

export default App;
