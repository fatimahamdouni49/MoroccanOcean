
import type { FC } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

// Import estático de las imágenes
import cultura1 from '@/assets/images/culture/cultura1.png';
import cultura2 from '@/assets/images/culture/cultura2.png';
import musica1 from '@/assets/images/culture/musica1.jpg';
import idioma from '@/assets/images/culture/idioma.jpg';
import ropa2 from '@/assets/images/culture/ropa2.jpg';
import zoco2 from '@/assets/images/culture/zoco2.jpg';
import arte1 from '@/assets/images/culture/arte1.jpg';
import tea from '@/assets/images/culture/tea.jpg';
import styles from './Culture2.module.css';
import { useTranslation } from 'react-i18next';

const Culture: FC = () => {
    const { t } = useTranslation();
    return(
    <div className="app-container d-flex flex-column">
        <main className="container mt-4 flex-grow-1">
            {/* 1º secciòn */}
            <section className="row">
                <div className={`col-md-3 ${styles.problema}`}>
                    <div className={`${styles.imagen}`}>
                        <img src={cultura1} alt="Escena cultural 1" className="img-fluid" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="texto">
                        <h4 className="card-title">
                            {t('culture.title')}
                        </h4><br />
                        <p className="card-text">
                            {t('culture.text')}
                        </p>
                    </div>
                </div>
                <div className={`col-md-3 ${styles.problema}`}>
                    <div className={`${styles.imagen}`}>
                        <img src={cultura2} alt="Escena cultural 2" className="img-fluid" />
                    </div>
                </div>
            </section>

            {/* 2� secci�n */}
            <section className="row">
                <div className="col-md-4">
                    <div className="texto">
                        <div className={`${styles.imagen}`}>
                            <img src={musica1} alt="cultura 1" className="img-fluid" />
                        </div>
                        <h5 className="card-title">{t('culture.title1')}</h5><br/>
                        <p className="card-text">{t('culture.text1')}</p>
                        <a href="/culture/musica" className="btn btn-success boton">{t('culture.boton')}</a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="texto">
                        <div className={`${styles.imagen}`}>
                            <img src={idioma} alt="cultura 2" className="img-fluid" />
                        </div>
                        <h5 className="card-title">{t('culture.title2')}</h5><br/>
                        <p className="card-text">{t('culture.text2')}</p>
                        <a href="/culture/idiomas" className="btn btn-success boton">{t('culture.boton')}</a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="texto">
                        <div className={`${styles.imagen}`}>
                            <img src={ropa2} alt="cultura 3" className="img-fluid" />
                        </div>
                        <h5 className="card-title">{t('culture.title3')}</h5><br/>
                        <p className="card-text">{t('culture.text3')}</p>
                        <a href="/culture/ropa" className="btn btn-success boton">{t('culture.boton')}</a>
                    </div>
                </div>
            </section>

            {/* 2� secci�n */}
            <section className="row">
                <div className="col-md-4">
                    <div className="texto">
                        <div className={`${styles.imagen}`}>
                            <img src={zoco2} alt="cultura 4" className="img-fluid" />
                        </div>
                        <h5 className="card-title">{t('culture.title4')}</h5><br/>
                        <p className="card-text">{t('culture.text4')}</p>
                        <a href="/culture/zoco" className="btn btn-success boton">{t('culture.boton')}</a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="texto">
                        <div className={`${styles.imagen}`}>
                            <img src={arte1} alt="cultura 5" className="img-fluid" />
                        </div>
                        <h5 className="card-title">{t('culture.title5')}</h5><br/>
                        <p className="card-text">{t('culture.text5')}</p>
                        <a href="/culture/arte" className="btn btn-success boton">{t('culture.boton')}</a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="texto">
                        <div className={`${styles.imagen}`}>
                            <img src={tea} alt="cultura 6" className="img-fluid" />
                        </div>
                        <h5 className="card-title">{t('culture.title6')}</h5><br/>
                        <p className="card-text">{t('culture.text6')}</p>
                        <a href="/culture/hammamte" className="btn btn-success boton">{t('culture.boton')}</a>
                    </div>
                </div>
            </section>
        </main>
    </div>
    );
};

export default Culture;
