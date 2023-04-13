
import './App.scss';
import Input from './components/Input';
import Result from './components/Result';
import arrow from './icon-arrow.svg';

function App() {
  return (
    <div className="calculator">
      <ul className="calculator__header">
        <Input />
        <Input />
        <Input />
      </ul>
      <div className="calculator__button">
        <div className="calculator__button-line"></div>
        <button className="calculator__button-body">
          <img src={arrow} alt="" />
        </button>
      </div>
      <div className="calculator__result">
        <Result 
        years = '38'
        months = '3'
        days = '26'
        />
      </div>
    </div>
  );
}

export default App;
