// import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar'
import Hem1 from './pages/Hem1';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Roboto, sans-serif' }}  >
      <Hem1/>
      {/* <Navbar/> */}
      {/* <div className="container">
      <h1 className="text-center">Dobrodošli</h1>
      <p>Ovo je početna stranica vašeg sajta.</p>
    </div> */}
      {/* <div className="container mt-5">
    <h1 className="text-primary">Hello, Bootstrap 5!</h1>
      <button className="btn btn-success">Click Me</button>
    </div>
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
          Learn React
        </a>
      </header> */}

 </div>
  );
}

export default App;
