// Cuscus.tsx
import type { FC } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css';
import './Recetas.css';
import { useTranslation } from 'react-i18next';

import cuscusImg from '@/assets/images/recipes/comida3.jpg';

const Cuscus: FC = () => {
  const { t } = useTranslation();
  return(
    <div className="app-container">
      <main className="container mt-4">

        {/* Imagen y menú lateral */}
        <div className="row mb-4">
          <div className="col-md-8 imagen">
            <img src={cuscusImg} alt="Cuscús marroquí" className="img-fluid" />
          </div>
          <aside className="col-md-4 texto contenido">
            <h5>{t('comun2.content')}</h5>
            <ul className="list-unstyled">
              <li><a href="#ingredientes">{t('comun2.ingredient')}</a></li>
              <li><a href="#paso-a-paso">{t('comun2.steps')}</a></li>
              <li><a href="#notas">{t('comun2.note')}</a></li>
            </ul>
          </aside>
        </div>

        {/* Ingredientes & Paso a paso */}
        <div className="row mb-4">
          <section id="ingredientes" className="col-md-6 texto">
            <h3>Ingredientes</h3>
            <ul className='card-text'>
              <li>{t('Cuscus.ingredient1')}</li>
              <li>{t('Cuscus.ingredient2')}</li>
              <li>{t('Cuscus.ingredient3')}</li>
              <li>{t('Cuscus.ingredient4')}</li>
              <li>{t('Cuscus.ingredient5')}</li>
              <li>{t('Cuscus.ingredient6')}</li>
              <li>{t('Cuscus.ingredient7')}</li>
              <li>{t('Cuscus.ingredient8')}</li>
              <li>{t('Cuscus.ingredient9')}</li>
              <li>{t('Cuscus.ingredient10')}</li>
              <li>{t('Cuscus.ingredient11')}</li>
              <li>{t('Cuscus.ingredient12')}</li>
            </ul>
          </section>
          <section id="paso-a-paso" className="col-md-6 texto">
            <h3>Paso a paso</h3>
            <ol className='card-text'>
              <li>{t('Cuscus.step1')}</li>
              <li>{t('Cuscus.step2')}</li>
              <li>{t('Cuscus.step3')}</li>
              <li>{t('Cuscus.step4')}</li>
              <li>{t('Cuscus.step5')}</li>
              <li>{t('Cuscus.step6')}</li>
              <li>{t('Cuscus.step7')}</li>
              <li>{t('Cuscus.step8')}</li>
            </ol>
          </section>
        </div>

        {/* Notas */}
        <div className="row mb-4">
          <section id="notas" className="col-12 texto">
            <h3>{t('comun2.note')}</h3>
            <ul className='card-text'>
              <li>{t('Cuscus.note1')}</li>
              <li>{t('Cuscus.note2')}</li>
              <li>{t('Cuscus.note3')}</li>
              <li>{t('Cuscus.note4')}</li>
              <li>{t('Cuscus.note5')}</li>
              <li>{t('Cuscus.note6')}</li>
            </ul>
          </section>
        </div>

        <div className="text-center mt-4">
          <a href="/recipes" className="btn">{t('comun2.boton')}</a>
        </div>

      </main>
    </div>
  );
};

export default Cuscus;
