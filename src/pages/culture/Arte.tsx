import type { FC } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css';
import './Culture.css';
import { useTranslation } from 'react-i18next';

import arteImg from '@/assets/images/culture/arte2.jpg';

const Arte: FC = () => {
  const { t } = useTranslation();
  return(
    <div className="app-container">
      <main className="container mt-4">
        {/* Imagen y menú */}
        <div className="row mb-4">
          <div className="col-md-8 imagen">
            <img src={arteImg} alt="Arte marroquí: cerámica y mosaicos" className="img-fluid" />
          </div>
          <aside className="col-md-4 texto contenido">
            <h5>{t('comun1.content')}</h5>
            <ul className="list-unstyled">
              <li><a href="#intro">{t('comun1.intro')}</a></li>
              <li><a href="#ceramica">{t('art.punto1')}</a></li>
              <li><a href="#zellij">{t('art.punto2')}</a></li>
              <li><a href="#caligrafia">{t('art.punto3')}</a></li>
              <li><a href="#tips">{t('art.punto4')}</a></li>
            </ul>
          </aside>
        </div>

        {/* Introducción */}
        <section id="intro" className="mb-4 texto">
          <h2 className="card-title">{t('comun1.intro')}</h2>
          <p>
            {t('art.introtext')}
          </p>
        </section>

        {/* Cerámica / Zellij */}
        <section className="row mb-4">
          <div className="col-md-7" id="ceramica">
            <div className="texto">
              <h2 className="card-title">{t('art.punto1')}</h2>
              <p>
                {t('art.punto1text')}
              </p>
            </div>
          </div>
          <div className="col-md-5" id="zellij">
            <div className="texto">
              <h2 className="card-title">{t('art.punto2')}</h2>
              <p>
                {t('art.punto2text')}
              </p>
            </div>
          </div>
        </section>

        {/* Caligrafía / Ruta artística */}
        <section className="row mb-4">
          <div className="col-md-5" id="caligrafia">
            <div className="texto">
              <h2 className="card-title">{t('art.punto3')}</h2>
              <p>
                {t('art.punto3text')}
              </p>
            </div>
          </div>
          <div className="col-md-7" id="tips">
            <div className="texto">
              <h2 className="card-title">{t('art.punto4')}</h2>
              <ul>
                <li>{t('art.punto4text1')}</li>
                <li>{t('art.punto4text2')}</li>
                <li>{t('art.punto4text3')}</li>
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

export default Arte;
