
import './App.scss';
import Input from './components/Input';
import Result from './components/Result';
import arrow from './icon-arrow.svg';
import {useState} from 'react';
import { DateTime } from "luxon";

function App() {

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [result, setResult] = useState();

  const countAge = (e) => {
    e.preventDefault();
    const end = DateTime.now();
    const start = DateTime.local(+year, +month, +day);
    const result = end.diff(start, ["days", "months", "years"]).toObject();
    setResult(result);
  }

  return (
    <div className="calculator">
      <form onSubmit={countAge} action="">
        <ul className="calculator__header">
          <li>
            <Input title="day" placeholder="DD" value={day} onChange={e => setDay(e.target.value)}/>
          </li>
          <li>
            <Input title="month" placeholder="MM" value={month} onChange={e => setMonth(e.target.value)}/>
          </li>
          <li>
            <Input title="year" placeholder="YYYY" value={year} onChange={e => setYear(e.target.value)}/>
          </li>
        </ul>
        <div className="calculator__button">
          <div className="calculator__button-line"></div>
          <button type='submit' className="calculator__button-body">
            <img src={arrow} alt="arrow" />
          </button>
        </div>
      </form>
      <div className="calculator__result">
        <Result 
          result={result}
        />
      </div>
    </div>
  );
}

export default App;
