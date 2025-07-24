import "./App.css";
import { InputData } from "./components/InputData";
import { useState } from "react";
import arrowIcon from "/assets/images/icon-arrow.svg";

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [yearsResult, setYearsResult] = useState("- -");
  const [monthsResult, setMonthsResult] = useState("- -");
  const [daysResult, setDaysResult] = useState("- -");
  const [errors, setErrors] = useState({
    day: "",
    month: "",
    year: "",
  });

  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDay(e.target.value);
  };
  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(e.target.value);
  };
  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
  };

  const calculateAge = () => {
    const newErrors = { day: "", month: "", year: "" };
    let hasError = false;

    if (!day) {
      newErrors.day = "This field required";
      hasError = true;
    }
    if (!month) {
      newErrors.month = "This field required";
      hasError = true;
    }
    if (!year) {
      newErrors.year = "This field required";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    // Reset errors if everything is filled
    setErrors({ day: "", month: "", year: "" });

    const d = parseInt(day);
    const m = parseInt(month) - 1; // Months are 0-indexed in JavaScript
    const y = parseInt(year);

    const today = new Date();
    // const birthDate = new Date(y, m, d);
    if (
      isNaN(d) ||
      d < 1 ||
      d > 31 ||
      isNaN(m) ||
      m < 1 ||
      m > 12 ||
      isNaN(y) ||
      y > today.getFullYear()
    ) {
      setErrors({
        day: "Must be a valid day",
        month: "Must be a valid month",
        year: "Must be in the past",
      });
      return;
    }

    const birthDate = new Date(y, m - 1, d);
    if (birthDate > today) {
      setErrors({ day: "", month: "", year: "Must be in the past" });
      return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    setYearsResult(years.toString());
    setMonthsResult(months.toString());
    setDaysResult(days.toString());
  };

  return (
    <main className="main_calculator">
      <InputData
        handleDayChange={handleDayChange}
        handleMonthChange={handleMonthChange}
        handleYearChange={handleYearChange}
        dayValue={day}
        monthValue={month}
        yearValue={year}
        errors={errors}
      />
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
          <p className="output_display">{yearsResult}</p>
          <p className="output_label">years</p>
        </div>
        <div className="output_data months">
          <p className="output_display">{monthsResult}</p>
          <p className="output_label">months</p>
        </div>
        <div className="output_data days">
          <p className="output_display">{daysResult}</p>
          <p className="output_label">days</p>
        </div>
      </section>
    </main>
  );
}

export default App;
