
import './App.scss';
import Input from './components/Input';
import Result from './components/Result';

function App() {
  return (
    <div className="calculator">
      <ul className="calculator__header">
        <Input />
        <Input />
        <Input />
      </ul>
      <button className="calculator__button"></button>
      <ul className="calculator__result">
        <Result />
        <Result />
        <Result />
      </ul>
    </div>
  );
}

export default App;
