
import './App.scss';
import Input from './components/Input';
import Result from './components/Result';
import arrow from './icon-arrow.svg';
import {useState, useEffect} from 'react';

function App() {

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [ready, setReady] = useState(false);

  const birthDate = new Date(year, month, day);
  const start = birthDate.getTime();
  const today = Date.now();
 
  const result = today - start;
  const resultYears = Math.floor(result / (365*24*60*60*1000));
  const resultMonths = Math.floor((result - (resultYears * 365*24*60*60*1000)) / (30.5*24*60*60*1000));
  const resultDays = Math.floor((result - (resultYears * 365*24*60*60*1000) - (resultMonths * 30.5*24*60*60*1000)) / (24*60*60*1000));

  return (
    <div className="calculator">
      <ul className="calculator__header">
        <li>
          <Input title="day" placeholder="DD" value={day} onChange={e => setDay(e.target.value)}/>
        </li>
        <li>
          <Input title="month" placeholder="MM" value={month} onChange={e => setMonth(e.target.value - 1)}/>
        </li>
        <li>
          <Input title="year" placeholder="YYYY" value={year} onChange={e => setYear(e.target.value)}/>
        </li>
      </ul>
      <div className="calculator__button">
        <div className="calculator__button-line"></div>
        <button className="calculator__button-body" onClick={()=>setReady(true)}>
          <img src={arrow} alt="arrow" />
        </button>
      </div>
      <div className="calculator__result">
        <Result 
          ready={ready}
          years={resultYears}
          months={resultMonths}
          days={resultDays}
        />
      </div>
    </div>
  );
}

export default App;
