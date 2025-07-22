// Chebakia.tsx
import type { FC } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css';
import './Recetas.css';
import { useTranslation } from 'react-i18next';

import chebakiaImg from '@/assets/images/recipes/comida7.jpg';

const Chebakia: FC = () => {
  const { t } = useTranslation();
  return(
    <div className="app-container">
      <main className="container mt-4">

        {/* Imagen y menú lateral */}
        <div className="row mb-4">
          <div className="col-md-8 imagen">
            <img src={chebakiaImg} alt="Chebakia marroquí" className="img-fluid" />
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
            <h3>{t('comun2.ingredient')}</h3>
            <ul>
              <li>{t('Chebakia.ingredient1')}</li>
              <li>{t('Chebakia.ingredient2')}</li>
              <li>{t('Chebakia.ingredient3')}</li>
              <li>{t('Chebakia.ingredient4')}</li>
              <li>{t('Chebakia.ingredient5')}</li>
              <li>{t('Chebakia.ingredient6')}</li>
              <li>{t('Chebakia.ingredient7')}</li>
              <li>{t('Chebakia.ingredient8')}</li>
              <li>{t('Chebakia.ingredient9')}</li>
              <li>{t('Chebakia.ingredient10')}</li>
              <li>{t('Chebakia.ingredient11')}</li>
              <li>{t('Chebakia.ingredient12')}</li>
            </ul>
          </section>
          <section id="paso-a-paso" className="col-md-6 texto">
            <h3>{t('comun2.steps')}</h3>
            <div className='card-text'>
              <ol>
                <li>{t('Chebakia.step1')}</li>
                <li>{t('Chebakia.step2')}</li>
                <li>{t('Chebakia.step3')}</li>
                <li>{t('Chebakia.step4')}</li>
                <li>{t('Chebakia.step5')}</li>
                <li>{t('Chebakia.step6')}</li>
                <li>{t('Chebakia.step7')}</li>
                <li>{t('Chebakia.step8')}</li>
              </ol>
            </div>
          </section>
        </div>

        {/* Notas */}
        <div className="row mb-4">
          <section id="notas" className="col-12 texto">
            <h3>{t('comun2.note')}</h3>
            <ul className='card-text'>
              <li>{t('Chebakia.note1')}</li>
              <li>{t('Chebakia.note2')}</li>
              <li>{t('Chebakia.note3')}</li>
              <li>{t('Chebakia.note4')}</li>
              <li>{t('Chebakia.note5')}</li>
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

export default Chebakia;
