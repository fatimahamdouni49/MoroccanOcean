import type { FC } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css';

// Import estático de las imágenes de cada receta
import comida1 from '@/assets/images/recipes/comida1.png';   // puede quedar para presentación general
import comida2 from '@/assets/images/recipes/comida2.png';   // Tajín
import comida3 from '@/assets/images/recipes/comida3.jpg';   // Cuscús
import comida4 from '@/assets/images/recipes/comida4.jpg';   // Harira
import comida5 from '@/assets/images/recipes/comida5.jpg';   // Pastela
import comida6 from '@/assets/images/recipes/comida6.jpg';   // Zaalouk
import comida7 from '@/assets/images/recipes/comida7.jpg';   // Chebakia (postre)
import styles from './Recetas2.module.css';
import { useTranslation } from 'react-i18next';

const Recipes: FC = () => {
  const { t } = useTranslation();
  return(
    <div className="app-container d-flex flex-column">
      <main className="container mt-4 flex-grow-1">

        {/* Sección introductoria */}
        <section className="row mb-5">
          <div className={`col-md-3 ${styles.problema}`}>
            <div className={`${styles.imagen}`}>
              <img src={comida1} alt="Gastronomía marroquí" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6 texto">
            <h4 className="card-title">
              {t('recipes.title')}
            </h4>
            <p className="card-text">
              {t('recipes.titletext')}
            </p>
          </div>
          <div className={`col-md-3 ${styles.problema}`}>
            <div className={`${styles.imagen}`}>
              <img src={comida2} alt="Tajín marroquí" className="img-fluid" />
            </div>
          </div>
        </section>

        {/* Grid de recetas */}
        <section className="row">
          {/* Tajín */}
          <div className="col-md-4 mb-4">
            <div className="texto">
              <div className={`${styles.imagen}`}>
                <img src={comida2} alt="Tajín marroquí" className="img-fluid" />
              </div>
              <h5 className="card-title">{t('recipes.tajin1')}</h5>
              <p className="card-text">{t('recipes.tajin2')}</p>
              <a href="/recipes/tajin" className="btn btn-success boton">{t('recipes.boton')}</a>
            </div>
          </div>

          {/* Cuscús */}
          <div className="col-md-4 mb-4">
            <div className="texto">
              <div className={`${styles.imagen}`}>
                <img src={comida3} alt="Cuscús marroquí" className="img-fluid" />
              </div>
              <h5 className="card-title">{t('recipes.cuscus1')}</h5>
              <p className="card-text">{t('recipes.cuscus2')}</p>
              <a href="/recipes/cuscus" className="btn btn-success boton">{t('recipes.boton')}</a>
            </div>
          </div>

          {/* Harira */}
          <div className="col-md-4 mb-4">
            <div className="texto">
              <div className={`${styles.imagen}`}>
                <img src={comida4} alt="Harira marroquí" className="img-fluid" />
              </div>
              <h5 className="card-title">Harira</h5>
              <p className="card-text">{t('recipes.harira')}</p>
              <a href="/recipes/harira" className="btn btn-success boton">{t('recipes.boton')}</a>
            </div>
          </div>

          {/* Pastela */}
          <div className="col-md-4 mb-4">
            <div className="texto">
              <div className={`${styles.imagen}`}>
                <img src={comida5} alt="Pastela marroquí" className="img-fluid" />
              </div>
              <h5 className="card-title">{t('recipes.pastela1')}</h5>
              <p className="card-text">{t('recipes.pastela2')}</p>
              <a href="/recipes/pastela" className="btn btn-success boton">{t('recipes.boton')}</a>
            </div>
          </div>

          {/* Zaalouk */}
          <div className="col-md-4 mb-4">
            <div className="texto">
              <div className={`${styles.imagen}`}>
                <img src={comida6} alt="Zaalouk marroquí" className="img-fluid" />
              </div>
              <h5 className="card-title">Zaalouk</h5>
              <p className="card-text">{t('recipes.zaalouk')}</p>
              <a href="/recipes/zaalouk" className="btn btn-success boton">{t('recipes.boton')}</a>
            </div>
          </div>

          {/* Chebakia (postre) */}
          <div className="col-md-4 mb-4">
            <div className="texto">
              <div className={`${styles.imagen}`}>
                <img src={comida7} alt="Chebakia marroquí" className="img-fluid" />
              </div>
              <h5 className="card-title">Chebakia</h5>
              <p className="card-text">{t('recipes.chebakia')}</p>
              <a href="/recipes/chebakia" className="btn btn-success boton">{t('recipes.boton')}</a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};
export default Recipes;
