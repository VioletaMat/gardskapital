// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hem1 from './pages/Hem1';
import AktuellaLan from './pages/AktuellaLan';
import './i18n'; 

function App() {
  return (
  <Router>
      <Routes>
        <Route path="/" element={<Hem1 />} />
        <Route path="/aktuellalan" element={<AktuellaLan />} />
      </Routes>
    </Router>
  );
}

export default App;
