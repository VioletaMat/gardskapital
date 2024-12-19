import React, { useState, useEffect } from "react";
import { useTranslation,i18n } from 'react-i18next';
import { useNavigate } from "react-router-dom"; 
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import aktellalanheder from '../assets/images/aktellalanheder.png';
import "../styles/AktuellaLan.css";  

const AktuellaLan = () => {
  const [loans, setLoans] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 6;
  const { t,i18n } = useTranslation();
  const navigate = useNavigate(); 

  // Function to resolve image paths dynamically
  const resolveImagePath = (imgName) => {
    return require(`../assets/images/${imgName}`);
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

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the items to display based on the current page
  const indexOfLastLoan = currentPage * itemsPerPage;
  const indexOfFirstLoan = indexOfLastLoan - itemsPerPage;
  const currentLoans = loans.slice(indexOfFirstLoan, indexOfLastLoan);

  // Calculate total number of pages
  const totalPages = Math.ceil(loans.length / itemsPerPage);

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


const handleNavigate = (loan) => {
 '/lan', { state: { loan: loan, loans: loans }}};

  return (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
      <Navbar className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top shadow-sm" />
      <main>
        {/* Feature Section with Image */}
        <section
          className="text-white text-center"
          style={{
            backgroundImage: `url(${aktellalanheder})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '70vh',
            paddingTop: '20vh', 
            position: 'relative', 
          }}
        >
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          ></div>

          {/* Centered Content */}
          <div className="position-absolute top-50 start-50 translate-middle">
            <h1 className="display-4 fw-bold" style={{ fontSize: '3vw' }}>
              {t('currentLoans.title')}
            </h1>
            <h3 className="fs-4" style={{ fontSize: '1.5vw' }}>
              {t('currentLoans.subtitle')}
            </h3>
          </div>
        </section>
        <section>
          <div className="container mt-5">
            <div className="text-start mb-4">
              <h1 className="fw-bold">{t('currentLoans.currentLoans')}</h1>
            </div>

            {/* Cards Grid */}
            <div className="row gy-4">
              {currentLoans.map((loan) => (
                <div key={loan.id} className="col-md-4">
                  <div className="card h-100 shadow-sm"
                     onClick={() => console.log("Card clicked!", loan) || handleNavigate(loan)} // Navigate on card click
                    style={{ cursor: "pointer" }}>
                    <div className="image-container">
                    <img
                      src={loan.imgSrc}
                      alt={loan.title}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                      
                    {loan.note && (
                      <div className="note position-absolute p-2 text-white">
                        {loan.note}
                      </div>
                    )}
                   </div>

                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title text-start" 
                       onClick={(e) => {
                        e.stopPropagation();
                        console.log("Title clicked, preventing card click!");
                      }}
                      style={{ minHeight: '70px',fontSize: '1.25rem' }}>{loan.title}</h5>
                      <p className="text-start clamp-3-lines" style={{ minHeight: '50px',fontSize: '0.75rem' }}>{loan.longText}</p>

                      <strong className="card-title text-start">Riskbetyg: </strong>

                      <div className="risk-grades mb-3">
                        {["A", "B", "C", "D", "E", "F"].map((grade) => (
                          <span
                            key={grade}
                            className={`risk-grade ${loan.riskRate === grade ? "bg-success" : "bg-secondary"}`}
                            title={grade}
                          >
                              {grade}
                          </span>
                        ))}
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="text-start">Årsränta</div>
                        <div className="text-end">Lånebelopp</div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="text-start  large-bold-text">
                           {(loan.anualInterest / 100).toLocaleString('de-DE', { style: 'percent', minimumFractionDigits: 1, maximumFractionDigits: 1 })}
                        </div>
                        <div className="text-end  large-bold-text">{loan.amount}</div>
                      </div>
                      <div className="d-flex justify-content-end">
                        <div className="text-end">SEK</div>
                      </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-content-center">
                        <p className="mb-0">Tid kvar</p>
                      </div>
                      <div className="d-flex w-50">
                        <div className="flex-fill text-center large-bold-text">
                          {loan.timeLeft.days} 
                        </div>
                        <div className="flex-fill text-center large-bold-text">
                          {loan.timeLeft.hours} 
                        </div>
                        <div className="flex-fill text-end large-bold-text">
                          {loan.timeLeft.minutes}  
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="text-start">
                        <strong></strong>
                      </div>
                      <div className="d-flex w-50">
                        <div className="flex-fill text-start">
                          DAGAR  
                        </div>
                        <div className="flex-fill text-start">
                          TIM 
                        </div>
                        <div className="flex-fill text-end">
                          MIN  
                        </div>
                      </div>
                    </div>


                      {/* Progress Bar */}
                      <div className="text-start">
                            Tecknat
                      </div>
                      <div className="progress mt-auto">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${loan.signed}%` }}
                          aria-valuenow={loan.signed}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          {loan.signed}%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="d-flex justify-content-center mt-4 pb-5">
              <button
                className="btn btn-primary me-2"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
            {t('currentLoans.pagginationPrevious')}
              </button>
              <span className="d-flex align-items-center">
                Page {currentPage} of {totalPages}
              </span>
              <button
                className="btn btn-primary ms-2"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                {t('currentLoans.pagginationNext')}
              </button>
            </div>
          </div>
        </section>        
      </main>
      <Footer/>
    </div>
  );
};

export default AktuellaLan;
