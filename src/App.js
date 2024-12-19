// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hem from './pages/Hem';
import AktuellaLan from './pages/AktuellaLan';
import Lan from './pages/Lan';
import './i18n'; 

function App() {
  return (
  <Router>
      <Routes>
        <Route path="/" element={<Hem />} />
        <Route path="/aktuellalan" element={<AktuellaLan />} />
        <Route path="/lan/:id" element={<Lan />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
