import React from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import homeheder from '../assets/images/homeheder.png';
import homecenter from '../assets/images/homecenter.png';
import { Footer } from '../components/Footer';
// import './Hem1.css';

function Hem1() {
  const { t, i18n } = useTranslation();

  return (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
      <Navbar className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top shadow-sm" />
      <main>
        {/* Feature Section with Image */}
        <section
          className="text-white text-center"
          style={{
            backgroundImage: `url(${homeheder})`,
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
              {t('home.title')}
            </h1>
            <h3 className="fs-4" style={{ fontSize: '2.1vw' }}>
              {t('home.subtitle')}
            </h3>
          </div>
        </section>

        {/* Feature Cards Section */}
        <section className="container mt-5">
          <div className="row justify-content-center">
            {/* Invest Container */}
            <div className="col-md-5">
              <div className="card shadow p-4">
                <h5 className="fw-bold mb-3">{t('home.cardInvestTitle')}</h5>
                <ul className="list-unstyled text-start">
                  <li className="d-flex align-items-center mb-2">
                    <i className="fa-solid fa-check" style={{ fontSize: '12px', color: 'green' }}></i>
                    <span className="ms-2">{t('home.cardInvestText1')}</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="fa-solid fa-check" style={{ fontSize: '12px', color: 'green' }}></i>
                    <span className="ms-2">{t('home.cardInvestText2')}</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="fa-solid fa-check" style={{ fontSize: '12px', color: 'green' }}></i>
                    <span className="ms-2">{t('home.cardInvestText3')}</span>
                  </li>
                </ul>
                <a
                  href="/"
                  className="btn btn-dark d-flex align-items-center justify-content-center text-white mt-auto"
                  style={{ backgroundColor: '#001212', padding: '0.5rem 1.5rem' }}
                >
                  {t('home.cardInvestButton')}
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>

            {/* Loan Container */}
            <div className="col-md-5">
              <div className="card shadow p-4">
                <h5 className="fw-bold mb-3">{t('home.cardLoanTitle')}</h5>
                <ul className="list-unstyled text-start">
                  <li className="d-flex align-items-center mb-2">
                    <i className="fa-solid fa-check" style={{ fontSize: '12px', color: 'green' }}></i>
                    <span className="ms-2">{t('home.cardLoanText1')}</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="fa-solid fa-check" style={{ fontSize: '12px', color: 'green' }}></i>
                    <span className="ms-2">{t('home.cardLoanText2')}</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="fa-solid fa-check" style={{ fontSize: '12px', color: 'green' }}></i>
                    <span className="ms-2">{t('home.cardLoanText3')}</span>
                  </li>
                </ul>
                <a
                  href="/"
                  className="btn btn-dark d-flex align-items-center justify-content-center text-white mt-auto"
                  style={{ backgroundColor: '#001212', padding: '0.5rem 1.5rem' }}
                >
                  {t('home.cardLoanButton')}
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-5">
          <div className="container">
            <h2 className="text-start mb-4">{t('home.customerTestimonials.titlePlural')}</h2>
            <div className="row justify-content-center">
              {/* Testimonial Card 1 */}
              <div className="col-md-4 mb-4 d-flex">
                <div className="card shadow-sm h-100">
                  <img
                    src="path-to-image1.jpg"
                    className="card-img-top"
                    alt="Client 1"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div>
                    <h5
                       className="card-title border border-2 border-dark text-start p-1"
                       style={{ maxWidth: 'fit-content', borderRadius: '5px'}}
                    >
                      {t('home.customerTestimonials.titleSingular')}
                    </h5>
                  </div>
                    <h5 className="card-title text-start">{t('home.customerTestimonials.card1text')}</h5>
                    <p className="card-title text-start mt-auto">{t('home.customerTestimonials.card1date')}</p>
                </div>
              </div>

              {/* Testimonial Card 2 */}
              <div className="col-md-4 mb-4 d-flex">
                <div className="card shadow-sm h-100">
                  <img
                    src="path-to-image2.jpg"
                    className="card-img-top"
                    alt="Client 2"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div>
                    <h5
                       className="card-title border border-2 border-dark text-start p-1"
                       style={{ maxWidth: 'fit-content', borderRadius: '5px' }}
                    >
                      {t('home.customerTestimonials.titleSingular')}
                    </h5>
                  </div>
                    <h5 className="card-title text-start">{t('home.customerTestimonials.card2text')}</h5>
                    <p className="card-title text-start mt-auto">{t('home.customerTestimonials.card2date')}</p>
                </div>
              </div>

              {/* Testimonial Card 3 */}
              <div className="col-md-4 mb-4 d-flex">
                <div className="card shadow-sm h-100">
                  <img
                    src="path-to-image3.jpg"
                    className="card-img-top"
                    alt="Client 3"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div>
                    <h5
                       className="card-title border border-2 border-dark text-start p-1"
                       style={{ maxWidth: 'fit-content', borderRadius: '5px' }}
                    >
                      {t('home.customerTestimonials.titleSingular')}
                    </h5>
                  </div>
                  
                    <h5 className="card-title text-start">{t('home.customerTestimonials.card3text')}</h5>
                    <p className="card-title text-start mt-auto">{t('home.customerTestimonials.card3date')}</p>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Center Section with Image */}
        <section
          className="text-white text-center"
          style={{
            backgroundImage: `url(${homecenter})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '70vh',
            paddingTop: '20vh', // Adjusts the vertical space for text
            position: 'relative', // Keeps text overlay within the section
          }}
        >
          {/* Overlay to improve text readability*/}
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
          ></div> 

          {/* Centered Content */}
        <div className="container text-white">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10"> {/* Adjusting content width to 6 columns on medium screens */}
              <h1 className="display-4 fw-bold text-white" style={{ fontSize: '3vw' }}>
                {t('home.title')}
              </h1>
              <h3 className="fs-4 text-white" style={{ fontSize: '2.1vw' ,color: 'white'}}>
                {t('home.subtitle')}
              </h3>
            </div>
          </div>
        </div>
        </section>

         {/* News Section */}
        <section className="py-5">
          <div className="container">
            <h2 className="text-start mb-4">{t('home.news.titlePlural')}</h2>
            <div className="row justify-content-center d-flex">
              {/* News Card 1 */}
              <div className="col-md-4 mb-4 d-flex">
                <div className="card shadow-sm h-100">
                  <img
                    src="path-to-image1.jpg"
                    className="card-img-top"
                    alt="Client 1"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div>
                    <h5
                       className="card-title border border-2 border-dark text-start p-1"
                       style={{ maxWidth: 'fit-content', borderRadius: '5px' }}
                    >
                      {t('home.news.titleSingular')}
                    </h5>
                  </div>
                    <h5 className="card-title text-start">{t('home.news.card1text')}</h5>
                    <p className="card-title text-start mt-auto">{t('home.news.card1date')}</p>
                </div>
              </div>

              {/* News Card 2 */}
              <div className="col-md-4 mb-4 d-flex">
                <div className="card shadow-sm h-100">
                  <img
                    src="path-to-image2.jpg"
                    className="card-img-top"
                    alt="Client 2"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                   <div>
                    <h5
                       className="card-title border border-2 border-dark text-start p-1"
                       style={{ maxWidth: 'fit-content', borderRadius: '5px' }}
                    >
                      {t('home.news.titleSingular')}
                    </h5>
                  </div>
                    <h5 className="card-title text-start">{t('home.news.card2text')}</h5>
                    <p className="card-title text-start mt-auto">{t('home.news.card2date')}</p>
                </div>
              </div>

              {/* News Card 3 */}
              <div className="col-md-4 mb-4 d-flex">
                <div className="card shadow-sm h-100">
                  <img
                    src="path-to-image3.jpg"
                    className="card-img-top"
                    alt="Client 3"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                   <div>
                    <h5
                       className="card-title border border-2 border-dark text-start p-1"
                       style={{ maxWidth: 'fit-content', borderRadius: '5px' }}
                    >
                      {t('home.news.titleSingular')}
                    </h5>
                  </div>
                    <h5 className="card-title text-start">{t('home.news.card3text')}</h5>
                    <p className="card-title text-start mt-auto">{t('home.news.card3date')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>

  );
}

export default Hem1;
