export const InputData = () => {
  return (
    <section className="input_data">
      <div className="input_data__container">
        <p className="data_day">Day</p>
        <input
          type="number"
          className="data input_data__day"
          placeholder="DD"
          maxLength={2}
          min={1}
        />
      </div>
      <div className="input_data__container">
        <p className="data_month">Month</p>
        <input
          type="number"
          className="data input_data__month"
          placeholder="MM"
          maxLength={2}
          min={1}
        />
      </div>
      <div className="input_data__container">
        <p className="data_year">Year</p>
        <input
          type="number"
          className="data input_data__year"
          placeholder="YYYY"
          maxLength={4}
          min={1900}
        />
      </div>
    </section>
  );
};
