interface InputDataProps {
  handleDayChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  handleMonthChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  handleYearChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  dayValue?: string;
  monthValue?: string;
  yearValue?: string;
}

export const InputData: React.FC<InputDataProps> = ({
  handleDayChange,
  handleMonthChange,
  handleYearChange,
  dayValue,
  monthValue,
  yearValue,
}) => {
  return (
    <section className="input_data">
      <div className="input_data__container">
        <p className="data_day">Day</p>
        <input
          type="number"
          className="data input_data__day"
          placeholder="DD"
          value={dayValue}
          maxLength={2}
          onChange={handleDayChange}
          min={1}
        />
      </div>
      <div className="input_data__container">
        <p className="data_month">Month</p>
        <input
          type="number"
          className="data input_data__month"
          placeholder="MM"
          value={monthValue}
          maxLength={2}
          onChange={handleMonthChange}
          min={1}
        />
      </div>
      <div className="input_data__container">
        <p className="data_year">Year</p>
        <input
          type="number"
          className="data input_data__year"
          placeholder="YYYY"
          value={yearValue}
          maxLength={4}
          onChange={handleYearChange}
          min={1900}
        />
      </div>
    </section>
  );
};
