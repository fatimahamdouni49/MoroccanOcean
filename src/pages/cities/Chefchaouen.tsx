// src/pages/cities/Chefchaouen.tsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import '../../App.css'
import './Cities.css'

import casaImg from '@/assets/images/cities/chefchaouen.jpg'
import { useTranslation } from 'react-i18next';

const Chefchaouen: React.FC = () => {
  const { t } = useTranslation();
  return (
  <div className="app-container">
    <main className="container mt-4">
      <div className="row mb-4">
        <div className="col-md-8 imagen">
          <img src={casaImg} alt="Chefchaouen" className="img-fluid" />
        </div>
        <aside className="col-md-4 texto contenido">
          <h2 className="card-title">{t('comun.content')}</h2>
          <ul className="list-unstyled">
            <li><a href="#historia">{t('comun.historia')}</a></li>
            <li><a href="#lugares">{t('comun.lugares')}</a></li>
            <li><a href="#curiosidades">{t('comun.curio')}</a></li>
          </ul>
        </aside>
      </div>

      <section id="historia" className="mb-4 texto">
        <h2 className="card-title">{t('Chefchaouen.title')}</h2>
        <p className='card-text'>
          {t('Chefchaouen.texthis1')}
          <br />
          {t('Chefchaouen.texthis2')}
        </p>
      </section>

      <section className="row">
        <section id="lugares" className="col-md-8 mb-4 texto">
          <h2 className="card-title">{t('comun.lugares')}</h2>
            <h4>{t('Chefchaouen.subtitlelug1')}</h4>
            <p className='card-text'>{t('Chefchaouen.textlug1')}</p>
            <h4>{t('Chefchaouen.subtitlelug2')}</h4>
            <p className='card-text'>{t('Chefchaouen.textlug2')}</p>
            <h4>{t('Chefchaouen.subtitlelug3')}</h4>
            <p className='card-text'>{t('Chefchaouen.textlug3')}</p>
            <h4>{t('Chefchaouen.subtitlelug4')}</h4>
            <p className='card-text'>{t('Chefchaouen.textlug4')}</p>
        </section>
        <section id="curiosidades" className="col-md-4 mb-4 texto">
          <h2 className="card-title">{t('comun.curio')}</h2>
          <ul className='card-text'>
            <li>{t('Chefchaouen.curio1')}</li>
            <li>{t('Chefchaouen.curio2')}</li>
            <li>{t('Chefchaouen.curio3')}</li>
          </ul>
        </section>
    </section>

      <div className="text-center mt-4">
        <a href="/cities" className="btn">{t('comun.boton')}</a>
      </div>
    </main>
  </div>
  );
};

export default Chefchaouen
