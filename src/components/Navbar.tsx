// src/components/Navbar.tsx
import { NavLink } from "react-router-dom";
import "../App.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useTranslation } from 'react-i18next';
import i18n from "../i18n";

const Navbar = () => {
    const { t } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('i18nextLng', lng);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <NavLink className="navbar-brand" to="/">{t('navbar.name')}</NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">{t('navbar.home')}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/recipes">{t('navbar.recipes')}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/culture">{t('navbar.culture')}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cities">{t('navbar.cities')}</NavLink>
                        </li>
                    </ul>

                    <div className="language-switcher d-flex gap-2">
                        <button
                            onClick={() => changeLanguage('en')}
                            className={`language-button ${i18n.language === 'en' ? 'active' : ''}`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => changeLanguage('es')}
                            className={`language-button ${i18n.language === 'es' ? 'active' : ''}`}
                        >
                            ES
                        </button>
                        <button
                            onClick={() => changeLanguage('fr')}
                            className={`language-button ${i18n.language === 'fr' ? 'active' : ''}`}
                        >
                            FR
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
