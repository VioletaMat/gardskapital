import React,{useContext} from "react";
import { useTranslation,i18n } from 'react-i18next';
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import '../styles/Lan.css'
import { LoanContext } from "../App";
import { useNavigate } from "react-router-dom"; 

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

  const navigate = useNavigate();   
  const allLoans = () => {
   navigate(`/aktuellaLan`);

};
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
        <Navbar isBlackText={true}  className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top" 
          style={{ color: 'black' }} 
          />
        <main style={{  display: "flex", flexDirection: "column" ,paddingBottom:'20px',paddingTop:'60px'}}>
          {/* height:"100vh," */}
            <div
            className="container text-start d-flex align-items-center justify-content-center"
            style={{ height: "50%" ,display:"flex",justifyContent:"space-around",alignItems:"center"}}
            >
               {/* First Div */}
            <div
              style={{
                flex: 2,
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
               <div>
                <h4 style={{fontSize:'2rem',fontWeight:'400',lineHeight:'55px',textAlign:'left'}}>{loan.title}</h4>
                <div className="image-container">
                    <button className="register text-light text-uppercase" style={{fontSize: '0.9rem', backgroundColor: '#2C6755',boxShadow:'none' }}>
                      <i className="fa-solid fa-arrow-right me-2"></i>{t('navbar.register')}
                    </button>
                    <img
                      src={loan.imgSrc}
                      alt={loan.title}
                      style={{
                        width: "100%", 
                        maxWidth: "756px",
                        height: "auto",
                        borderRadius: "15px",
                        top: "280px",
                        left: "228px",
                      }}
                    />
                   </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* Left Container */}
              <div
                style={{
                  flex: 1,
                  textAlign: "left",
                  color:"#3C00FF",
                  fontWeight:400,
                  fontSize:"1rem",
                  lineHeight:"24px"
                }}
              >
                <p>{loan.anualInterest + "% årsränta | Riskbetyg "+ loan.riskRate}</p>
              </div>

              {/* Center Container */}
              <div
                style={{
                  flex: 1,
                  textAlign: "center",
                  margin: "0 10px", 
                }}
              >
                <div className="noted">
                 <p>{loan.note}</p>
                </div>
              </div>

              {/* Right Container */}
              <div className="oval-dots"
                style={{
                  flex: 1,
                  textAlign: "right",
                  padding: "10px",
                }}
              >
                <div className="oval clicked"></div>
                <div className="oval secondary"></div>
                <div className="oval secondary"></div>
              </div>
            </div>
              </div>
            </div>

            {/* Second Div */}
            <div
              style={{
                flex: 1,
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
               <div
                className="container mt-4"
                style={{
                  maxWidth: "400px",
                  borderRadius: "8px",
                  padding: "20px",
                }}
              >
                {/* Loan Amount */}
                <h3 className="">Lånebelopp</h3>
                <h3 className="fw-bold">{loan.amount} SEK</h3>
                <div className="d-flex align-items-center mb-3">
                  <div
                    style={{
                      width: "100%",
                      height: "8px",
                      marginRight: "10px",
                      marginBottom:"20px"
                    }}
                  >
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

                {/* Risk Rating */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-muted">Riskbetyg</span>
                  <div
                    style={{
                      background: "#5cb85c",
                      color: "#fff",
                      padding: "4px 8px",
                      borderRadius: "4px",
                    }}
                  >
                    {loan.riskRate}
                  </div>
                </div>

                {/* Time Left */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-muted">Tid kvar</span>
                  <div className="fw-bold">
                    <span>{loan.timeLeft.days} DAGAR</span> <span>{loan.timeLeft.hours} TIM</span> <span>{loan.timeLeft.minutes} MIN</span>
                  </div>
                </div>

                {/* Loan Period */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-muted">Löptid</span>
                  <span className="fw-bold">{loan.returnTime}</span>
                </div>

                {/* Number of Investors */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-muted">Antal köpare</span>
                  <span className="fw-bold">{loan.numOrders}</span>
                </div>

                {/* Interest Rate */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <span className="text-muted">Årenta</span>
                  <span className="fw-bold"> {(loan.anualInterest / 100).toLocaleString('de-DE', { style: 'percent', minimumFractionDigits: 1, maximumFractionDigits: 1 })}</span>
                </div>

                {/* Invest Button */}
                <button
                  className="btn btn-primary w-100"
                  style={{
                    borderRadius: "8px",
                    backgroundColor: "#3C00FF",
                    border: "none",
                  }}
                >
                   <i className="fa-solid fa-arrow-right me-2"></i>
                  Investera
                </button>

                {/* Info Text */}
                <p className="text-muted mt-3">
                  För att kunna investera behöver du öppna ett konto hos Gårdsakapital. Är
                  du redan registrerad? <a href="#">Logga in här.</a>
                </p>

                {/* Social Media Icons */}
                <div className="d-flex justify-content-center mt-3 gap-3">
                <a href="#" aria-label="Share" className="text-secondary">
                 <i class="fa-solid fa-share-nodes"></i>
                </a>
                <a href="#" aria-label="Facebook" className="text-secondary">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" aria-label="Twitter" className="text-secondary">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="LinkedIn" className="text-secondary">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
              </div>
            </div>
          </div>

          <div
            className="container text-start d-flex align-items-center justify-content-center"
            style={{
              height: "40%",
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
              }}
            >
             <p>{loan.longText}</p>
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
        <div className="container" style={{ height: "50%",minHeight:"777px", overflowY: "auto"}} >
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
                      <p className="text-start clamp-3-lines" style={{ minHeight: '30px',fontSize: '0.8rem' }}>{loan.longText}</p>
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
          <div className="bordered-div" onClick={allLoans}>
            {t('lan.allLoans')}
          </div>
        </div>

        </main>
        <Footer/>
    </div>    

  );
};

export default Lan;