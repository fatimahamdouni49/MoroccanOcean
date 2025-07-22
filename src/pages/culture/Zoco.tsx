import type { FC } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css';
import './Culture.css';
import { useTranslation } from 'react-i18next';

import zocoImg from '@/assets/images/culture/zoco1.jpg';

const Zoco: FC = () => {
  const { t } = useTranslation();
  return(
    <div className="app-container">
      <main className="container mt-4">
        {/* Imagen y menú */}
        <div className="row mb-4">
          <div className="col-md-8 imagen">
            <img src={zocoImg} alt="Zoco marroquí" className="img-fluid" />
          </div>
          <aside className="col-md-4 texto contenido">
            <h5>{t('comun1.content')}</h5>
            <ul className="list-unstyled">
              <li><a href="#intro">{t('comun1.intro')}</a></li>
              <li><a href="#organizacion">{t('zoco.punto1')}</a></li>
              <li><a href="#ofertas">{t('zoco.punto2')}</a></li>
              <li><a href="#ritual">{t('zoco.punto3')}</a></li>
              <li><a href="#tips">{t('zoco.punto4')}</a></li>
            </ul>
          </aside>
        </div>

        {/* Introducción */}
        <section id="intro" className="mb-4 texto">
          <h2 className="card-title">{t('comun1.intro')}</h2>
          <p>
            {t('zoco.introtext')}
          </p>
        </section>

        {/* Organización / Mercancías y aromas */}
        <section className="row mb-4">
          <div className="col-md-7" id="organizacion">
            <div className="texto">
              <h2 className="card-title">{t('zoco.punto1')}</h2>
              <p>
                {t('zoco.punto1text1')}
              </p>
            </div>
          </div>
          <div className="col-md-5" id="ofertas">
            <div className="texto">
              <h2 className="card-title">{t('zoco.punto2')}</h2>
              <ul>
                <li>{t('zoco.punto2text1')}</li>
                <li>{t('zoco.punto2text2')}</li>
                <li>{t('zoco.punto2text3')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* El ritual social / Consejos prácticos */}
        <section className="row mb-4">
          <div className="col-md-5" id="ritual">
            <div className="texto">
              <h2 className="card-title">{t('zoco.punto3')}</h2>
              <p>
                {t('zoco.punto3text3')}
              </p>
            </div>
          </div>
          <div className="col-md-7" id="tips">
            <div className="texto">
              <h2 className="card-title">{t('zoco.punto4')}</h2>
              <ul>
                <li>{t('zoco.punto4text1')}</li>
                <li>{t('zoco.punto4text21')}<em>darija</em>{t('zoco.punto4text22')}</li>
                <li>{t('zoco.punto4text3')}</li>
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

export default Zoco;
