import React,{useContext} from "react";
import { useTranslation,i18n } from 'react-i18next';
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import '../styles/Lan.css'
import { LoanContext } from "../App";

const Lan = () => {
  const { id } = useParams(); // Get the loan ID from the URL
  const { loans } = useContext(LoanContext); // Access loan data from context

    // Find the loan with the matching ID
  const loan = loans.find((loan) => loan.id.toString() === id);

  if (!loan) {
    return <div>Loan not found</div>;
  }
    // Slice the first 3 loans
  const firstThreeLoans = loans.slice(0, 3);

  const { t,i18n } = useTranslation();
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
        <Navbar isBlackText={true}  className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top" 
          style={{ color: 'black' }} 
          />
        <main  style={{ height: "100vh", display: "flex", flexDirection: "column" ,paddingBottom:'20px'}}>
            <div
            className="container text-start d-flex align-items-center justify-content-center"
            style={{ height: "50%", borderBottom: "1px solid #ddd" ,display:"flex",justifyContent:"space-around",alignItems:"center"}}
            >
               {/* First Div */}
            <div
              style={{
                flex: 2,
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRight: "1px solid #ddd",
                backgroundColor: "#f5f5f5",
              }}
            >
              Left Half
            </div>

            {/* Second Div */}
            <div
              style={{
                flex: 1,
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#e9ecef",
              }}
            >
              Right Half
            </div>
          </div>

          <div
            className="container text-start d-flex align-items-center justify-content-center"
            style={{
              height: "40%",
              borderTop: "1px solid #ddd",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {/* Third Div */}
            <div
              style={{
                flex: 2,
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRight: "1px solid #ddd",
                backgroundColor: "#d3d3d3",
              }}
            >
              Bottom Left Half
            </div>

            {/* Fourth Div */}
            <div
              style={{
                flex: 1,
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#c6c6c6",
              }}
            >
            </div>
          </div>
            {/* Bottom Container: Current Loans */}
        <div className="container" style={{ height: "50%", overflowY: "auto"}} >
            <h1 className="display-4 fw-bold" style={{ fontSize: '2rem' }}>
              {t('currentLoans.currentLoans')}
            </h1>
         {/* Cards Grid */}
            <div className="row gy-4">
              {firstThreeLoans.map((loan) => (
                <div key={loan.id} className="col-md-4">
                  <div className="card h-100 shadow-sm"
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
                      style={{ minHeight: '40px',fontSize: '1rem' }}>{loan.title}</h5>
                      <p className="text-start clamp-3-lines" style={{ minHeight: '30px',fontSize: '0.6rem' }}>{loan.longText}</p>

                      <p className="card-title text-start fw-bold" style={{fontSize: '0.9rem'}}>Riskbetyg: </p>

                      <div className="risk-grades" >
                        {["A", "B", "C", "D", "E", "F"].map((grade) => (
                          <span
                            key={grade}
                            className={`risk-grade ${loan.riskRate === grade ? "bg-success" : "bg-secondary"}`}
                            title={grade}
                            // style={{fontSize: '0.7rem'}}
                          >
                              {grade}
                          </span>
                        ))}
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="text-start" style={{fontSize: '0.75rem'}}>Årsränta</div>
                        <div className="text-end" style={{fontSize: '0.75rem'}}>Lånebelopp</div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="text-start  large-bold-text" style={{fontSize: '0.9rem'}}>
                           {(loan.anualInterest / 100).toLocaleString('de-DE', { style: 'percent', minimumFractionDigits: 1, maximumFractionDigits: 1,fontSize: '0.9rem' })}
                        </div>
                        <div className="text-end  large-bold-text" style={{fontSize: '0.9rem'}}>{loan.amount}</div>
                      </div>
                      <div className="d-flex justify-content-end">
                        <div className="text-end" style={{fontSize: '0.75rem'}}>SEK</div>
                      </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-content-center">
                        <p className="mb-0" style={{fontSize: '0.9rem'}}>Tid kvar</p>
                      </div>
                      <div className="d-flex w-50">
                        <div className="flex-fill text-center large-bold-text" style={{fontSize: '0.9rem'}}>
                          {loan.timeLeft.days} 
                        </div>
                        <div className="flex-fill text-center large-bold-text" style={{fontSize: '0.9rem'}}>
                          {loan.timeLeft.hours} 
                        </div>
                        <div className="flex-fill text-end large-bold-text" style={{fontSize: '0.9rem'}}>
                          {loan.timeLeft.minutes}  
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="text-start" style={{fontSize: '0.9rem'}}>
                        <strong></strong>
                      </div>
                      <div className="d-flex w-50">
                        <div className="flex-fill text-start" style={{fontSize: '0.7rem'}}>
                          DAGAR  
                        </div>
                        <div className="flex-fill text-start" style={{fontSize: '0.7rem'}}>
                          TIM 
                        </div>
                        <div className="flex-fill text-end" style={{fontSize: '0.7rem'}}>
                          MIN  
                        </div>
                      </div>
                    </div>


                      {/* Progress Bar */}
                      <div className="text-start" style={{fontSize: '0.9rem'}}>
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
        </div>
        </main>
        <Footer/>
    </div>    

  );
};

export default Lan;