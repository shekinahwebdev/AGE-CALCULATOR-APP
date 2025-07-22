import { useFormik } from "formik";
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
  const formik = useFormik({
    initialValues: {
      day: "",
      month: "",
      year: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.day.trim()) {
        errors.day = "This field is required";
      }

      if (!values.month.trim()) {
        errors.month = "This field is required";
      }

      if (!values.year.trim()) {
        errors.year = "This field is required";
      }

      return errors;
    },
    onSubmit: (values) => {
      alert("Form submitted successfully");
      console.log(values);
      // page reload
      window.location.reload();
    },
  });

  // input fields
  const fields = [
    { name: "day", placeholder: "DD" },
    { name: "month", placeholder: "MM" },
    { name: "year", placeholder: "YYYY" },
  ];

  return (
    <section className="input_data">
      <div className="input_data__container">
        <p className="data_day">Day</p>
        <input
          type="number"
          className="data input_data__day"
          placeholder={fields[0].placeholder}
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
          placeholder={fields[1].placeholder}
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
          placeholder={fields[2].placeholder}
          value={yearValue}
          maxLength={4}
          onChange={handleYearChange}
          min={1900}
        />
      </div>
    </section>
  );
};
