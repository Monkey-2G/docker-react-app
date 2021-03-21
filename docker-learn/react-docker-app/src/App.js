import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          volume을 설정하여 저장시 수정사항이 즉시 반영 되는 것을 확인하고 또 확인
        </a>
      </header>
    </div>
  );
}

export default App;
