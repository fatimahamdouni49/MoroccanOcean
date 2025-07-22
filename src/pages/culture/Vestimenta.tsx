import type { FC } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css';
import './Culture.css';
import { useTranslation } from 'react-i18next';

import vestimentaImg from '@/assets/images/culture/ropa1.jpg';

const Vestimenta: FC = () => {
  const { t } = useTranslation();
  return(
    <div className="app-container">
      <main className="container mt-4">
        {/* Imagen y menú lateral */}
        <div className="row mb-4">
          <div className="col-md-8 imagen">
            <img src={vestimentaImg} alt="Vestimenta marroquí tradicional" className="img-fluid" />
          </div>
          <aside className="col-md-4 texto contenido">
            <h5>{t('comun1.content')}</h5>
            <ul className="list-unstyled">
              <li><a href="#intro">{t('comun1.intro')}</a></li>
              <li><a href="#piezas">{t('vestimenta.punto1')}</a></li>
              <li><a href="#ocasiones">{t('vestimenta.punto2')}</a></li>
              <li><a href="#detalle">{t('vestimenta.punto3')}</a></li>
              <li><a href="#consejos">{t('vestimenta.punto4')}</a></li>
            </ul>
          </aside>
        </div>

        {/* Introducción */}
        <section id="intro" className="mb-4 texto">
          <h2 className="card-title">{t('comun1.intro')}</h2>
          <p>
            {t('vestimenta.introtext')}
          </p>
        </section>

        {/* Piezas clave / Ocasiones especiales */}
        <section className="row mb-4">
          <div className="col-md-7" id="piezas">
            <div className="texto">
              <h2 className="card-title">{t('vestimenta.punto1')}</h2>
              <ul>
                <li><strong>Djellaba:</strong>{t('vestimenta.punto1text1')}</li>
                <li><strong>Kaftán:</strong>{t('vestimenta.punto1text2')}</li>
                <li><strong>Gandoura:</strong>{t('vestimenta.punto1text3')}</li>
                <li><strong>Babuchas (belgha):</strong>{t('vestimenta.punto1text4')}</li>
              </ul>
            </div>
          </div>
          <div className="col-md-5" id="ocasiones">
            <div className="texto">
              <h2 className="card-title">{t('vestimenta.punto2')}</h2>
              <p>
                {t('vestimenta.punto2text1')}<em>takchita</em>{t('vestimenta.punto2text2')}
              </p>
            </div>
          </div>
        </section>

        {/* Artesanía y detalle / Consejos de estilo */}
        <section className="row mb-4">
          <div className="col-md-5" id="detalle">
            <div className="texto">
              <h2 className="card-title">{t('vestimenta.punto3')}</h2>
              <p>
                {t('vestimenta.punto3text1')}<em>sfifa</em>{t('vestimenta.punto3text2')}
              </p>
            </div>
          </div>
          <div className="col-md-7" id="consejos">
            <div className="texto">
              <h2 className="card-title">{t('vestimenta.punto4')}</h2>
              <ul>
                <li>{t('vestimenta.punto4text1')}</li>
                <li>{t('vestimenta.punto4text2')}</li>
                <li>{t('vestimenta.punto4text3')}</li>
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
export default Vestimenta;
