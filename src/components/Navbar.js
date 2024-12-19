import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/icons/icon.svg'
import '../styles/Navbar.css'
export const Navbar = ({ isBlackText }) => {
    const { t, i18n } = useTranslation();

    // scroll event listener
    window.addEventListener("scroll", function () {
      const navbar = document.getElementById("navbar");

      if (window.scrollY > 50) {
        // Add the dark background class
        navbar.classList.add("navbar-dark-scrolled");
      } else {
        // Remove the dark background class
        navbar.classList.remove("navbar-dark-scrolled");
      }
    });
 
      const isLanguageSelected = (lang) => i18n.language === lang;

    return (
         <nav
          id="navbar"
          className={`navbar navbar-expand-lg navbar-dark fixed-top ${isBlackText ? 'navbar-black-text' : ''}`} 
        >
        <div className="container">
          <div >
            <img src={logo} style={{maxWidth:'75%',height:'auto'}}
               className={isBlackText ? 'logo-black-text' : ''} 
           alt="Responsive image"/>
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

          <div className="ml-auto" >
            <button className={`btn text-light text-uppercase ${isLanguageSelected('en') ? 'font-weight-bold' : ''}`}
             onClick={() => i18n.changeLanguage('en')}>{t('navbar.localisation1')}</button>
            <button className={`btn text-light text-uppercase ${isLanguageSelected('sv') ? 'font-weight-bold' : ''}`} onClick={() => i18n.changeLanguage('sv')}>{t('navbar.localisation2')}</button>
          </div>
        </div>
      </nav>      
    );
  };
