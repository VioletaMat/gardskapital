import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n'; 
import logo from '../assets/icons/icon.svg'

export const Footer = () => {
      const { t, i18n } = useTranslation();
    return (
        <footer className="bg-dark text-white py-4">
        <div className="container">
            <div className="row">
            {/* Footer Section 1: Logo and Description */}
            <div className="col-md-4 mb-3">
                <img src={logo} alt="Logo" style={{ maxWidth: '150px' }} />
                <p className="mt-3 text-justify">{t('footer.description')}</p>
            </div>

            {/* Footer Section 2: Links */}
            <div className="col-md-2 mb-3">
                <h5>{t('footer.loanPurpose.title')}</h5>
                <ul className="list-unstyled">
                    <li><a href="#item1" className="text-white">{t('footer.loanPurpose.item1')}</a></li>
                    <li><a href="#item2" className="text-white">{t('footer.loanPurpose.item2')}</a></li>
                    <li><a href="#item3" className="text-white">{t('footer.loanPurpose.item3')}</a></li>
                    <li><a href="#item4" className="text-white">{t('footer.loanPurpose.item4')}</a></li>
                    <li><a href="#item5" className="text-white">{t('footer.loanPurpose.item5')}</a></li>
                    <li><a href="#item6" className="text-white">{t('footer.loanPurpose.item6')}</a></li>
                </ul>
            </div>

            {/* Footer Section 3: Terms */}
            <div className="col-md-2 mb-3">
                <h5>{t('footer.terms.title')}</h5>
                <ul className="list-unstyled">
                    <li><a href="#item1" className="text-white">{t('footer.terms.item1')}</a></li>
                    <li><a href="#item2" className="text-white">{t('footer.terms.item2')}</a></li>
                    <li><a href="#item3" className="text-white">{t('footer.terms.item3')}</a></li>
                    <li><a href="#item4" className="text-white">{t('footer.terms.item4')}</a></li>
                 </ul>
            </div>

            {/* Footer Section 4: Social Media */}
            <div className="col-md-2 mb-3">
                <h5>{t('footer.followUs.title')}</h5>
                <ul className="list-unstyled">
                <li>
                    <a href="https://facebook.com" className="text-white me-3">
                    <i className="fa fa-facebook"></i> {t('footer.followUs.item1')}
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com" className="text-white me-3">
                    <i className="fa fa-twitter"></i>{t('footer.followUs.item2')}
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com" className="text-white me-3">
                    <i className="fa fa-linkedin"></i> {t('footer.followUs.item3')}
                    </a>
                </li>
                </ul>
            </div>
            {/* Footer Section 4: About us */}
                <div className="col-md-2 mb-3">
                    <h5>{t('footer.aboutUs.item1')}</h5>
                    <ul className="list-unstyled">
                        <li><a href="#item1" className="text-white">{t('footer.aboutUs.item1')}</a></li>
                        <li><a href="#item2" className="text-white">{t('footer.aboutUs.item2')}</a></li>
                        <li><a href="#item3" className="text-white">{t('footer.aboutUs.item3')}</a></li>
                    </ul>
                </div>

            </div>

            <div className="row">
            <div className="col text-center mt-4">
                <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
            </div>
            </div>
        </div>
        </footer>
    );
  };