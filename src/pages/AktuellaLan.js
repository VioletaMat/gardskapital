import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import aktellalanheder from '../assets/images/aktellalanheder.png';
import "../styles/AktuellaLan.css";  // Import the CSS file for styling

const AktuellaLan = () => {
  const [loans, setLoans] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 6;
  const { t, i18n } = useTranslation();

  // Function to resolve image paths dynamically
  const resolveImagePath = (imgName) => {
    return require(`../assets/images/${imgName}`); // Adjust path as needed
  };

  useEffect(() => {
    // Simulating fetching data from a JSON file
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
        }));
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
            paddingTop: '20vh', // Adjusts the vertical space for text
            position: 'relative', // Keeps text overlay within the section
          }}
        >
          {/* Overlay to improve text readability */}
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
            {/* Page Header */}
            <div className="text-center mb-4">
              <h1 className="fw-bold">{t('currentLoans.currentLoans')}</h1>
            </div>

            {/* Cards Grid */}
            <div className="row gy-4">
              {currentLoans.map((loan) => (
                <div key={loan.id} className="col-md-4">
                  <div className="card h-100 shadow-sm">
                    {/* Image */}
                    <img
                      src={loan.imgSrc}
                      alt={loan.title}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover" }}
                    />

                    {/* Card Body */}
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title text-start">{loan.title}</h5>
                      <p className="text-start clamp-3-lines">{loan.longText}</p>

                      <strong className="card-title text-start">Riskklass: </strong>
                      {/* Display Risk Grades as cubes */}
                      <div className="risk-grades">
                        {["A", "B", "C", "D", "E", "F"].map((grade) => (
                          <span
                            key={grade}
                            className={`risk-grade ${loan.riskRate === grade ? "bg-success" : "bg-secondary"}`}
                            title={grade}
                          ></span>
                        ))}
                      </div>

                      {/* Progress Bar */}
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
