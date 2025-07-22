// Tajin.tsx
import type { FC } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css';
import './Recetas.css';
import { useTranslation } from 'react-i18next';

import tajinImg from '@/assets/images/recipes/comida2.png';

const Tajin: FC = () =>  {
  const { t } = useTranslation();
  return(
    <div className="app-container">
      <main className="container mt-4">

        {/* Imagen y menú lateral */}
        <div className="row mb-4">
          <div className="col-md-8 imagen">
            <img src={tajinImg} alt="Tajín de pollo marroquí" className="img-fluid" />
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
            <ul className='card-text'>
              <li>{t('Tajin.ingredient1')}</li>
              <li>{t('Tajin.ingredient2')}</li>
              <li>{t('Tajin.ingredient3')}</li>
              <li>{t('Tajin.ingredient4')}</li>
              <li>{t('Tajin.ingredient5')}</li>
              <li>{t('Tajin.ingredient6')}</li>
              <li>{t('Tajin.ingredient7')}</li>
              <li>{t('Tajin.ingredient8')}</li>
              <li>{t('Tajin.ingredient9')}</li>
              <li>{t('Tajin.ingredient10')}</li>
              <li>{t('Tajin.ingredient11')}</li>
            </ul>
          </section>
          <section id="paso-a-paso" className="col-md-6 texto">
            <h3>{t('comun2.steps')}</h3>
            <ol className='card-text'>
              <li>{t('Tajin.step1')}</li>
              <li>{t('Tajin.step2')}</li>
              <li>{t('Tajin.step3')}</li>
              <li>{t('Tajin.step4')}</li>
              <li>{t('Tajin.step5')}</li>
              <li>{t('Tajin.step6')}</li>
            </ol>
          </section>
        </div>

        {/* Notas */}
        <div className="row mb-4">
          <section id="notas" className="col-12 texto">
            <h3>{t('comun2.note')}</h3>
            <ul className='card-text'>
              <li>{t('Tajin.note1')}</li>
              <li>{t('Tajin.note2')}</li>
              <li>{t('Tajin.note3')}</li>
              <li>{t('Tajin.note4')}</li>
              <li>{t('Tajin.note5')}</li>
              <li>{t('Tajin.note6')}</li>
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

export default Tajin;
