// import logo from './logo.svg';
import './App.css';
import React,{ useState, useEffect, createContext} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hem from './pages/Hem';
import AktuellaLan from './pages/AktuellaLan';
import Lan from './pages/Lan';
import './i18n'; 

export const LoanContext = createContext(); // Create a context for loan data

function App() {
    const [loans, setLoans] = useState([]);

  const resolveImagePath = (imgName) => {
    return require(`./assets/images/${imgName}`);
  };

    useEffect(() => {
    fetch("/mockdata/loans.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Add image paths dynamically
        const updatedData = data.map((loan) => ({
          ...loan,
          imgSrc: resolveImagePath(loan.img),
          timeLeft: calculateTimeLeft(loan.endTime), // Calculate time left
        }))
        // Filter out loans that have expired
        .filter((loan) => loan.timeLeft && loan.timeLeft.days > 0 || loan.timeLeft.hours > 0 || loan.timeLeft.minutes > 0);

        setLoans(updatedData);
      })
      .catch((error) => console.error("Error loading data:", error));          
  }, []);
  
  const calculateTimeLeft = (endTime) => {
    const currentTime = new Date(); 
    const endDate = new Date(endTime);

    const timeDifference = endDate - currentTime;

    if (timeDifference <= 0) {
      return { days: 0, hours: 0, minutes: 0 };
    }

    // Calculate days, hours, and minutes from milliseconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes };
  };
  
  return (
    <LoanContext.Provider value={{ loans, setLoans }}>
      <Router>
        <Routes>
          <Route path="/" element={<Hem />} />
          <Route path="/aktuellalan" element={<AktuellaLan />} />
          <Route path="/lan/:id" element={<Lan />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Router>
    </LoanContext.Provider>
  );
}

export default App;
