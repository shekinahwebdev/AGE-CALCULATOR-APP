import "./App.css";
import { InputData } from "./components/InputData";
import arrowIcon from "/assets/images/icon-arrow.svg";

function App() {
  return (
    <main className="main_calculator">
      <InputData />
      <div className="arrow_line">
        <div className="line"></div>
        <div className="arrow">
          <img src={arrowIcon} alt="Arrow Icon" />
        </div>
      </div>
      <section className="output_container">
        <div className="output_data years">
          <p className="output_year">--</p>
          <p className="output_label">Years</p>
        </div>
        <div className="output_data months">
          <p className="output_year">--</p>
          <p className="output_label">month</p>
        </div>
        <div className="output_data days">
          <p className="output_year">--</p>
          <p className="output_label">days</p>
        </div>
      </section>
    </main>
  );
}

export default App;
