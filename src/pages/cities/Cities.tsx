import type { FC } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css';

// Import estético de las imágenes
import sitio1 from '@/assets/images/cities/sitio1.png';
import sitio2 from '@/assets/images/cities/sitio2.png';
import sitio3 from '@/assets/images/cities/casablanca.jpg';
import sitio4 from '@/assets/images/cities/chefchaouen.jpg';
import sitio5 from '@/assets/images/cities/essaouira.jpg';
import sitio6 from '@/assets/images/cities/fez.jpg';
import sitio7 from '@/assets/images/cities/marrakech.jpg';
import sitio8 from '@/assets/images/cities/rabat.jpg';
import styles from './Cities2.module.css';
import { useTranslation } from 'react-i18next';

const Cities: FC = () => {
    const { t } = useTranslation();
    return (
        <div className="app-container d-flex flex-column">
            <main className="container mt-4 flex-grow-1">
                {/* 1º sección */}
                <section className="row">
                    <div className={`col-md-3 ${styles.problema}`}>
                        <img src={sitio1} alt="Ciudad 1" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <div className="texto">
                            <h4 className="card-title">
                                {t('cities.title')}
                            </h4>
                            <p className="card-text">
                                {t('cities.text')}
                            </p>
                        </div>
                    </div>
                    <div className={`col-md-3 ${styles.problema}`}>
                            <img src={sitio2} alt="Ciudad 2" className="img-fluid" />
                    </div>
                </section>

                {/* 2� secci�n */}
                <section className="row">

                <br></br>
                    <div className="col-md-4">
                        <div className="texto">
                            <div className={`${styles.imagen}`}>
                                <img src={sitio3} alt="sitio 1" className="img-fluid" />
                            </div>
                            <h5 className="card-title">Casablanca</h5>
                            <p className="card-text">{t('cities.casablanca')}</p>
                            <a href="/cities/casablanca" className="btn btn-success boton">{t('cities.boton')}</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="texto">
                            <div className={`${styles.imagen}`}>
                                <img src={sitio4} alt="sitio 2" className="img-fluid" />
                            </div>
                            <h5 className="card-title">Chefchaouen</h5>
                            <p className="card-text">{t('cities.chefchaouen')}</p>
                            <a href="/cities/chefchaouen" className="btn btn-success boton">{t('cities.boton')}</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="texto">
                            <div className={`${styles.imagen}`}>
                                <img src={sitio5} alt="sitio 3" className="img-fluid" />
                            </div>
                            <h5 className="card-title">Essaouira</h5>
                            <p className="card-text">{t('cities.essaouira')}</p>
                            <a href="/cities/essaouira" className="btn btn-success boton">{t('cities.boton')}</a>
                        </div>
                    </div>
                </section>

                {/* 2� secci�n */}
                <section className="row">
                    <div className="col-md-4">
                        <div className="texto">
                            <div className={`${styles.imagen}`}>
                                <img src={sitio6} alt="sitio 4" className="img-fluid" />
                            </div>
                            <h5 className="card-title">Fez</h5>
                            <p className="card-text">{t('cities.fez')}</p>
                            <a href="/cities/fez" className="btn btn-success boton">{t('cities.boton')}</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="texto">
                            <div className={`${styles.imagen}`}>
                                <img src={sitio7} alt="sitio 5" className="img-fluid" />
                            </div>
                            <h5 className="card-title">Marrakech</h5>
                            <p className="card-text">{t('cities.marrakech')}</p>
                            <a href="/cities/marrakech" className="btn btn-success boton">{t('cities.boton')}</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="texto">
                            <div className={`${styles.imagen}`}>
                                <img src={sitio8} alt="sitio 6" className="img-fluid" />
                            </div>
                            <h5 className="card-title">Rabat</h5>
                            <p className="card-text">{t('cities.rabat')}</p>
                            <a href="/cities/rabat" className="btn btn-success boton">{t('cities.boton')}</a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Cities;
