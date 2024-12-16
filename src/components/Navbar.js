import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n'; 
import logo from '../assets/icons/icon.svg'

export const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [textDark, setTextDark] = useState(false);

  // Handle scroll event to change text color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setTextDark(true); // Change text color to dark when scrolled
      } else {
        setTextDark(false); // Revert back to white text
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup scroll event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


    return (
    <nav
      className={`navbar navbar-expand-lg ${textDark ? 'navbar-light bg-transparent text-dark' : 'navbar-light bg-transparent text-white'} fixed-top shadow-sm`}
    >
        <div className="container">
          <div className=''>
            <img src={logo} style={{maxWidth:'75%',height:'auto'}} alt="Responsive image"/>
          </div>
          <div className="ml-auto" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active text-light" href="#">
                  {t('navbar.searchFunding')}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  {t('navbar.invest')}
                </a>
              </li>
            </ul>
          </div>

        <div className="d-flex justify-content-end align-items-center">
         <button className="btn text-light mx-2 text-uppercase" style={{fontSize: '0.9rem', backgroundColor: '#2C6755' }}>
            <i className="fa-solid fa-arrow-right me-2"></i>{t('navbar.register')}
          </button>
          <button className="btn btn-outline-light text-uppercase"  style={{ fontSize: '0.9rem' }}>{t('navbar.login')}</button>
        </div>

          <div className="ml-auto">
            <button className="btn text-light text-uppercase" onClick={() => i18n.changeLanguage('en')}>{t('navbar.localisation1')}</button>
            <button className="btn text-light text-uppercase" onClick={() => i18n.changeLanguage('sv')}>{t('navbar.localisation2')}</button>
          </div>
        </div>
      </nav>      
    );
  };
