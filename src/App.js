import "./App.scss";
import Result from "./components/Result";
import Button from "./components/Button";
import { useState } from "react";
import { DateTime } from "luxon";
import { useForm } from "react-hook-form";
import cn from "classnames";

//Controlling that user can type only numbers and special keys in our inputs
const filterInputKeys = (event) => {
  const valid = /[0-9]/.test(event.key) || event.key === "Backspace" || event.key === "Delete" || event.key === "Enter" || event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "Tab"

  if (!valid) {
    event.preventDefault();
  }
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  //Counting the difference between input data and today's date
  const countAge = () => {
    const data = getValues();
    const end = DateTime.now();
    const start = DateTime.local(+data.year, +data.month, +data.day);
    const result = end.diff(start, ["days", "months", "years"]).toObject();
    setResult(result);
    return start;
  };

  //Result state contains users age (in years, months and days)
  const [result, setResult] = useState();

  return (
    <div className="calculator__wrapper">
      <div className="calculator">
        <form onSubmit={handleSubmit(countAge)} autoComplete="off" noValidate>
          <div className="calculator__header">
            <label
              className={cn("input", { input_invalid: errors.day?.message })} //Adds css style when input is invalid
            >
              <div className="input__label">day</div>
              <input
                onKeyDown={filterInputKeys}
                className="input__body"
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
                      if (!values.day || !values.month || !values.year) return; // Validating if all fields are filled in
                      const date = DateTime.fromObject({
                        day: values.day,
                        month: values.month,
                        year: values.year,
                      });
                      return date.isValid || "Must be a valid date"; // Creating a Data object from all form fields and checking if it is valid (using luxon method isValid)
                    },
                  },
                })}
              />
              <p
                className={cn("input__error", {
                  input__error_show: errors.day?.message, // Adds css style and shows error message when input value is invalid
                })}
              >
                {errors.day?.message}
              </p>
            </label>
            <label
              className={cn("input", { input_invalid: errors.month?.message })}
            >
              <div className="input__label">month</div>
              <input
                className="input__body"
                onKeyDown={filterInputKeys}
                placeholder="MM"
                {...register("month", {
                  required: "This field is required",
                  validate: {
                    positive: (v) => v > 0 || "Must be a valid month",
                    validMonth: (v) => v < 13 || "Must be a valid month",
                  },
                })}
              />
              <p
                className={cn("input__error", {
                  input__error_show: errors.month?.message,
                })}
              >
                {errors.month?.message}
              </p>
            </label>
            <label
              className={cn("input", { input_invalid: errors.year?.message })}
            >
              <div className="input__label">year</div>
              <input
                className="input__body"
                onKeyDown={filterInputKeys}
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
              <p
                className={cn("input__error", {
                  input__error_show: errors.year?.message,
                })}
              >
                {errors.year?.message}
              </p>
            </label>
          </div>
          <div className="calculator__button">
            <Button type="submit" />
          </div>
        </form>
        <div className="calculator__result">
          <Result result={result} />
        </div>
      </div>
    </div>
  );
}

export default App;
