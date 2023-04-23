import "./App.scss";
import Result from "./components/Result";
import Button from "./Button";
import { useState } from "react";
import { DateTime } from "luxon";
import { useForm } from "react-hook-form";

function App() {
  const [result, setResult] = useState();

  const { register, handleSubmit, formState, getValues } = useForm();
  const { errors } = formState;

  const countAge = () => {
    const data = getValues();
    const end = DateTime.now();
    const start = DateTime.local(+data.year, +data.month, +data.day);
    const result = end.diff(start, ["days", "months", "years"]).toObject();
    setResult(result);
    return start;
  };

  return (
    <div className="calculator">
      <form onSubmit={handleSubmit(countAge)} noValidate>
        <div className="calculator__header">
          <label className="input">
            <div className="input__label">day</div>
            <input
              className="input__body"
              type="number"
              placeholder="DD"
              {...register("day", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                validate: {
                  positive: (v) => v > 0 || "Must be a valid day",
                  validDay: (v) => v < 32 || "Must be a valid day",
                  validDate: (v, values) => {
                    if (!values.day || !values.month || !values.year) return;

                    const date = DateTime.fromObject({
                      day: values.day,
                      month: values.month,
                      year: values.year,
                    });
                    return date.isValid || "Must be a valid date";
                  },
                },
              })}
            />
            <p className="input__error">{errors.day?.message}</p>
          </label>
          <label className="input">
            <div className="input__label">month</div>
            <input
              className="input__body"
              type="number"
              placeholder="MM"
              {...register("month", {
                required: "This field is required",
                validate: {
                  positive: (v) => v > 0 || "Must be a valid month",
                  validMonth: (v) => v < 13 || "Must be a valid month",
                },
              })}
            />
            <p className="input__error">{errors.month?.message}</p>
          </label>
          <label className="input">
            <div className="input__label">year</div>
            <input
              className="input__body"
              type="number"
              placeholder="YYYY"
              {...register("year", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                validate: {
                  validYear: (v, values) => {
                    const now = DateTime.now();
                    return v < now.year || "Must be in the past";
                  },
                },
              })}
            />
            <p className="input__error">{errors.year?.message}</p>
          </label>
        </div>
        <Button type="submit" />
      </form>

      <div className="calculator__result">
        <Result result={result} />
      </div>
    </div>
  );
}

export default App;
