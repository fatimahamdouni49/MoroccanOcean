// src/pages/culture/Idiomas.tsx

import type { FC } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css';
import './Culture.css';
import { useTranslation } from 'react-i18next';

import idiomasImg from '@/assets/images/culture/idioma.jpg';

const Idiomas: FC = () => {
  const { t } = useTranslation();
  return(
    <div className="app-container">
      <main className="container mt-4">
        {/* Imagen y menú */}
        <div className="row mb-4">
          <div className="col-md-8 imagen">
            <img src={idiomasImg} alt="Idiomas de Marruecos" className="img-fluid" />
          </div>
          <aside className="col-md-4 texto contenido">
            <h5>{t('comun1.content')}</h5>
            <ul className="list-unstyled">
              <li><a href="#introduccion">{t('comun1.intro')}</a></li>
              <li><a href="#darija">{t('idiomas.punto1')}</a></li>
              <li><a href="#amazigh">{t('idiomas.punto2')}</a></li>
              <li><a href="#comun">{t('idiomas.punto3')}</a></li>
              <li><a href="#legado">{t('idiomas.punto4')}</a></li>
            </ul>
          </aside>
        </div>

        {/* Introducción */}
        <section id="introduccion" className="mb-4 texto">
          <h2 className="card-title">{t('comun1.intro')}</h2>
          <p>
            {t('idiomas.introtext')}
          </p>
        </section>

        {/* Darija + Amazigh */}

        <section className="row mb-7">
          <div className="col-md-4" id="darija">
            <div className="texto">
              <h2 className="card-title">{t('idiomas.punto1')} (الدَّارِجَة): {t('idiomas.punto11')}</h2>
              <div className="card-text">
                <h4>{t('idiomas.punto1subtitle1')}</h4>
                <p>
                  {t('idiomas.punto1text1')}
                </p>
                <h4>{t('idiomas.punto1subtitle2')}</h4>
                <ul>
                  <li>{t('idiomas.punto1text2')}</li>
                  <li>{t('idiomas.punto1text3')}</li>
                  <li>{t('idiomas.punto1text4')}</li>
                  <li>{t('idiomas.punto1text5')}</li>
                  <li>{t('idiomas.punto1text6')}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4" id="comun">
            <div className="texto">
              <h2 className="card-title">{t('idiomas.punto3')}</h2>
              <div className="card-text">
                <ul>
                  <li>{t('idiomas.punto3text1')}</li>
                  <li>{t('idiomas.punto3text2')}</li>
                  <li>{t('idiomas.punto3text3')}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4" id="amazigh">
            <div className="texto">
              <h2 className="card-title">{t('idiomas.punto2')} (ⴰⵎⴰⵣⵉⵖ): {t('idiomas.punto21')}</h2>
              <div className="card-text">
                <h4>{t('idiomas.punto1subtitle1')}</h4>
                <p>
                {t('idiomas.punto2text')}
                </p>
                <h4>{t('idiomas.punto2subtitle')}</h4>
                <ol>
                  <li>Tarifit (ⵜⴰⵔⵉⴼⵉⵜ): {t('idiomas.punto2text1')}</li>
                  <li>Tamazight (ⵜⴰⵎⴰⵣⵉⵖⵜ): {t('idiomas.punto2text2')}</li>
                  <li>Tachelhit (ⵜⴰⵛⵍⵃⵉⵜ): {t('idiomas.punto2text3')}</li>
                </ol>
                <h4>{t('idiomas.punto1subtitle2')}</h4>
                <ul>
                  <li>{t('idiomas.punto2text4')}</li>
                  <li>{t('idiomas.punto2text5')}</li>
                  <li>{t('idiomas.punto2text6')}</li>
                  <li>{t('idiomas.punto2text7')}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        
        <section className="row mb-7">
          <div className="col-md-12" id="legado">
            <div className="texto">
              <h2 className="card-title">{t('idiomas.punto4')}</h2>
              <div className="card-text">
                <h3>{t('idiomas.punto4subtitle1')}</h3>
                <p>
                  {t('idiomas.punto4text1')}
                </p>
                <ul>
                  <li>{t('idiomas.punto4text1sub1')}</li>
                  <li>{t('idiomas.punto4text1sub2')}</li>
                  <li>{t('idiomas.punto4text1sub3')}</li>
                  <li>{t('idiomas.punto4text1sub4')}</li>
                </ul>
                <h4>{t('idiomas.punto4subtitle2')}</h4>
                <ul>
                  <li>{t('idiomas.punto4text2sub1')}</li>
                  <li>{t('idiomas.punto4text2sub2')}</li>
                  <li>{t('idiomas.punto4text2sub3')}</li>
                </ul>
                <h3>{t('idiomas.punto4subtitle3')}</h3>
                <p>
                  {t('idiomas.punto4text2sub4')}
                </p>
                <h4>{t('idiomas.punto4subtitle4')}</h4>
                <ul>
                  <li>{t('idiomas.punto4text3sub1')}</li>
                  <li>{t('idiomas.punto4text3sub2')}</li>
                  <li>{t('idiomas.punto4text3sub3')}</li>
                </ul>
                <h4>{t('idiomas.punto4subtitle5')}</h4>
                <ul>
                  <li>{t('idiomas.punto4text4sub1')}</li>
                  <li>{t('idiomas.punto4text4sub2')}</li>
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

export default Idiomas;
