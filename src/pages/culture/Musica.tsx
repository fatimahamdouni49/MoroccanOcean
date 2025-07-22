// src/pages/culture/Musica.tsx

import type { FC } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css';
import './Culture.css';
import { useTranslation } from 'react-i18next';

import musicaImg from '@/assets/images/culture/musica2.jpg';

const Musica: FC = () => {
  const { t } = useTranslation();
  return(
    <div className="app-container">
      <main className="container mt-4">
        <div className="row mb-4">
          <div className="col-md-8 imagen">
            <img src={musicaImg} alt="Música marroquí" className="img-fluid" />
          </div>
          <aside className="col-md-4 texto contenido">
            <h5>{t('comun1.content')}</h5>
            <ul className="list-unstyled">
              <li><a href="#introduccion">{t('comun1.intro')}</a></li>
              <li><a href="#raices">{t('musica.punto1')}</a></li>
              <li><a href="#generos">{t('musica.punto2')}</a></li>
              <li><a href="#momentos">{t('musica.punto3')}</a></li>
              <li><a href="#recomendaciones">{t('musica.punto4')}</a></li>
            </ul>
          </aside>
        </div>

        <section id="introduccion" className="mb-4 texto">
          <h2 className='card-title'>{t('comun1.intro')}</h2>
          <p className='card-text'>
            {t('musica.introtext')}
          </p>
        </section>
        <section className="row">
          <div className="col-md-7" id='raices'>
              <div className="texto">
                  <h2 className="card-title">{t('musica.punto1')}</h2>
                  <div className="card-text">
                      <p>{t('musica.punto1text1')}</p>
                      <ul>
                          <li><strong>{t('musica.punto1text1sub11')}</strong>{t('musica.punto1text1sub12')}</li>
                          <li><strong>{t('musica.punto1text1sub21')}</strong>{t('musica.punto1text1sub221')}<em>nawbas</em>{t('musica.punto1text1sub222')}<em>ʿūd</em>{t('musica.punto1text1sub223')}<em>ney</em>{t('musica.punto1text1sub224')}</li>
                          <li><strong>{t('musica.punto1text1sub31')}</strong>{t('musica.punto1text1sub32')}</li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className="col-md-5" id='generos'>
              <div className="texto">
                  <h2 className="card-title">{t('musica.punto2')}</h2>
                  <div className='card-text'>
                      <ul>
                          <li><strong>Chaabi:</strong>{t('musica.punto2text2sub1')}</li>
                          <li><strong>Malhūn:</strong>{t('musica.punto2text2sub2')}</li>
                          <li><strong>{t('musica.punto2text2sub31')}</strong>{t('musica.punto2text2sub32')}</li>
                          <li><strong>Gnawa:</strong>{t('musica.punto2text2sub4')}</li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>
        <section className="row">
          <div className="col-md-5" id='momentos'>
              <div className="texto">
                  <h2 className="card-title">{t('musica.punto3')}</h2>
                  <div className="card-text">
                      <p>
                        {t('musica.punto3text3')}
                      </p>
                      <ul>
                      <li><strong>{t('musica.punto3text3sub11')}</strong>{t('musica.punto3text3sub12')}</li>
                      <li><strong>{t('musica.punto3text3sub21')}</strong>{t('musica.punto3text3sub22')}</li>
                      <li><strong>{t('musica.punto3text3sub31')}</strong>{t('musica.punto3text3sub32')}</li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className="col-md-7" id='recomendaciones'>
              <div className="texto">
                  <h2 className="card-title">{t('musica.punto4')}</h2>
                  <div className='card-text'>
                      <ul>
                      <li>{t('musica.punto4text4sub11')}<em>melhoun</em>{t('musica.punto4text4sub12')}</li>
                      <li>{t('musica.punto4text4sub2')}</li>
                      <li>{t('musica.punto4text4sub31')}<em>lila</em>{t('musica.punto4text4sub32')}</li>
                      <li>{t('musica.punto4text4sub4')}</li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>

        <div className="text-center mt-4">
          <a href="/culture" className="btn">{t('comun1.boton')}</a>
        </div>
      </main>
    </div>
  );
};

export default Musica;