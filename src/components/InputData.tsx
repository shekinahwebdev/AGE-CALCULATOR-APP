interface InputDataProps {
  handleDayChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  handleMonthChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  handleYearChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  dayValue: string;
  monthValue: string;
  yearValue: string;
  errors: {
    day: string;
    month: string;
    year: string;
  };
}

export const InputData: React.FC<InputDataProps> = ({
  handleDayChange,
  handleMonthChange,
  handleYearChange,
  dayValue,
  monthValue,
  yearValue,
  errors,
}) => {
  return (
    <section className="input_data">
      <div className="input_data__container">
        <p className={`data_day ${errors.day ? "data-error-text" : ""}`}>Day</p>
        <input
          type="number"
          className={`data input_data__day ${errors.day ? "error-border" : ""}`}
          placeholder="DD"
          value={dayValue}
          maxLength={2}
          onChange={handleDayChange}
          min={1}
        />
        {errors.day && <p className="error-text">{errors.day}</p>}
      </div>
      <div className="input_data__container">
        <p className={`data_month ${errors.month ? "data-error-text" : ""}`}>
          Month
        </p>
        <input
          type="number"
          className={`data input_data__day ${
            errors.month ? "error-border" : ""
          }`}
          placeholder="MM"
          value={monthValue}
          maxLength={2}
          onChange={handleMonthChange}
          min={1}
        />
        {errors.day && <p className="error-text">{errors.month}</p>}
      </div>
      <div className="input_data__container">
        <p className={`data_year ${errors.year ? "data-error-text" : ""}`}>
          Year
        </p>
        <input
          type="number"
          className={`data input_data__day ${
            errors.year ? "error-border" : ""
          }`}
          placeholder="YYYY"
          value={yearValue}
          maxLength={4}
          onChange={handleYearChange}
          min={1900}
        />
        {errors.day && <p className="error-text">{errors.year}</p>}
      </div>
    </section>
  );
};
