import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Hello Lets Go!</h1>
      <Row title="Netflix" fetchUrl={requests.fetchNetflix} />
      <Row title="Hulu" fetchUrl={requests.fetchHulu} />
      <Row title="Disney+" fetchUrl={requests.fetchDisney} />
      <Row title="HBO Go" fetchUrl={requests.fetchHbo} />
    </div>
  );
}

export default App;
