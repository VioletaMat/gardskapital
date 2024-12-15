import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n'; 
import logo from '../assets/icons/icon.svg'

export const Navbar = () => {
    const { t, i18n } = useTranslation();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className=''>
            <img src={logo} style={{maxWidth:'75%',height:'auto'}} alt="Responsive image"/>
          </div>
          <div className="ml-auto" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  {t('navbar.searchFunding')}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {t('navbar.invest')}
                </a>
              </li>
            </ul>
          </div>

          <div className="ml-auto">
            <button className="btn text-light mx-2 text-uppercase" style={{ backgroundColor: '#2C6755'}}><i class="bi bi-arrow-right"></i>{t('navbar.register')}</button>
            <button className="btn btn-outline-light text-uppercase" >{t('navbar.login')}</button>
          </div>

          <div className="ml-auto">
            <button className="btn text-light text-uppercase" onClick={() => i18n.changeLanguage('en')}>{t('navbar.localisation1')}</button>
            <button className="btn text-light text-uppercase" onClick={() => i18n.changeLanguage('sv')}>{t('navbar.localisation2')}</button>
          </div>
        </div>
      </nav>      
    );
  };
