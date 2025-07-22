import type { FC } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css';
import './Culture.css';
import { useTranslation } from 'react-i18next';

import hammamTeImg from '@/assets/images/culture/hammam.jpg';

const HammamTe: FC = () => {
  const { t } = useTranslation();
  return(
    <div className="app-container">
      <main className="container mt-4">
        {/* Imagen y menú */}
        <div className="row mb-4">
          <div className="col-md-8 imagen">
            <img src={hammamTeImg} alt="Hammam y té moruno" className="img-fluid" />
          </div>
          <aside className="col-md-4 texto contenido">
            <h5>{t('comun1.content')}</h5>
            <ul className="list-unstyled">
              <li><a href="#intro">{t('comun1.intro')}</a></li>
              <li><a href="#hammam">{t('hamte.punto1')}</a></li>
              <li><a href="#te">{t('hamte.punto2')}</a></li>
              <li><a href="#equilibrio">{t('hamte.punto3')}</a></li>
              <li><a href="#tips">{t('hamte.punto4')}</a></li>
            </ul>
          </aside>
        </div>

        {/* Introducción */}
        <section id="intro" className="mb-4 texto">
          <h2 className="card-title">{t('comun1.intro')}</h2>
          <p>
            {t('hamte.introtext')}
          </p>
        </section>

        {/* Hammam / Té */}
        <section className="row mb-4">
          <div className="col-md-7" id="hammam">
            <div className="texto">
              <h2 className="card-title">{t('hamte.punto1')}</h2>
              <p>
                {t('hamte.punto1text1')}<em>savon noir</em>{t('hamte.punto1text2')}
              </p>
            </div>
          </div>
          <div className="col-md-5" id="te">
            <div className="texto">
              <h2 className="card-title">{t('hamte.punto2')}</h2>
              <p>
                {t('hamte.punto2text')}
              </p>
            </div>
          </div>
        </section>

        {/* {t('hamte.punto3')} / {t('hamte.punto4')} */}
        <section className="row mb-4">
          <div className="col-md-5" id="equilibrio">
            <div className="texto">
              <h2 className="card-title">{t('hamte.punto3')}</h2>
              <p>
                {t('hamte.punto3text')}
              </p>
            </div>
          </div>
          <div className="col-md-7" id="tips">
            <div className="texto">
              <h2 className="card-title">{t('hamte.punto4')}</h2>
              <ul>
                <li>{t('hamte.punto4text1')}</li>
                <li>{t('hamte.punto4text2')}</li>
                <li>{t('hamte.punto4text3')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Botón final */}
        <div className="text-center mt-4">
          <a href="/culture" className="btn">{t('comun1.boton')}</a>
        </div>
      </main>
    </div>
  );
};

export default HammamTe;
