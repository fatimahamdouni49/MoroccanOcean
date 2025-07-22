import React from "react";
import { Routes, Route } from "react-router-dom";
import Recipes from './pages/recipes/Recipes';
import Cuscus from './pages/recipes/Cuscus';
import Chebakia from './pages/recipes/Chebakia';
import Harira from './pages/recipes/Harira';
import Pastela from './pages/recipes/Pastela';
import Tajin from './pages/recipes/Tajin';
import Zaalouk from './pages/recipes/Zaalouk';
import Casablanca from './pages/cities/Casablanca';
import Chefchaouen from './pages/cities/Chefchaouen';
import Essaouira from './pages/cities/Essaouira';
import Fez from './pages/cities/Fez';
import Marrakech from './pages/cities/Marrakech';
import Rabat from './pages/cities/Rabat';
import Culture from './pages/culture/Culture';
import Arte from './pages/culture/Arte';
import Hammamte from './pages/culture/HammamTe';
import Idiomas from './pages/culture/Idiomas';
import Musica from './pages/culture/Musica';
import Vestimenta from './pages/culture/Vestimenta';
import Zoco from './pages/culture/Zoco';
import Cities from './pages/cities/Cities';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useTranslation } from 'react-i18next';

// Import est�tico de la imagen para que Vite genere la ruta correcta
import puerta from '@/assets/images/puerta.png';

const App: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="app-container d-flex flex-column">
            <Header />
            <Navbar />

            {/* Hacemos flex-grow para empujar el footer */}
            <main className="container mt-4 flex-grow-1">
                <Routes>
                    <Route path="/" element={
                        <>
                            {/* 1º sección */}
                            <section className="row">
                                <div className="col-md-3">
                                    <div className="imagen">
                                        <img src={puerta} alt="Puerta de Marruecos" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="texto">
                                        <h5 className="card-title">
                                            {t('content.intro1')}
                                        </h5><br/>
                                        <p className="card-text">
                                        {t('content.text')}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="imagen">
                                        <img src={puerta} alt="Puerta de Marruecos" />
                                    </div>
                                </div>
                            </section>

                            {/* 2º sección */}
                            <section className="row mt-4">
                                <div className="col-md-4">
                                    <div className="texto">
                                        <h5 className="card-title">{t('content.title1')}</h5><br/>
                                        <p className="card-text">
                                            {t('content.txt1')}
                                        </p>
                                        <div className='boton'><a href="/cities" className="btn btn-success boton">{t('content.boton')}</a></div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="texto">
                                        <h5 className="card-title">{t('content.title2')}</h5><br/>
                                        <p className="card-text">
                                            {t('content.txt2')}
                                        </p>
                                        <div className='boton'><a href="/recipes" className="btn btn-success boton">{t('content.boton')}</a></div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="texto">
                                        <h5 className="card-title">{t('content.title3')}</h5><br/>
                                        <p className="card-text">
                                            {t('content.txt3')}
                                        </p>
                                        <div className='boton'><a href="/culture" className="btn btn-success boton">{t('content.boton')}</a></div>
                                    </div>
                                </div>
                            </section>
                        </>
                    } />
                    <Route path="/recipes" element={<Recipes />} />
                    <Route path="/recipes/cuscus" element={<Cuscus />} />
                    <Route path="/recipes/chebakia" element={<Chebakia />} />
                    <Route path="/recipes/tajin" element={<Tajin />} />
                    <Route path="/recipes/harira" element={<Harira />} />
                    <Route path="/recipes/pastela" element={<Pastela />} />
                    <Route path="/recipes/zaalouk" element={<Zaalouk />} />
                    <Route path="/cities/marrakech" element={<Marrakech />} />
                    <Route path="/cities/fez" element={<Fez />} />
                    <Route path="/cities/casablanca" element={<Casablanca />} />
                    <Route path="/cities/rabat" element={<Rabat />} />
                    <Route path="/cities/chefchaouen" element={<Chefchaouen />} />
                    <Route path="/cities/essaouira" element={<Essaouira />} />
                    <Route path="/culture" element={<Culture />} />
                    <Route path="/culture/arte" element={<Arte />} />
                    <Route path="/culture/musica" element={<Musica />} />
                    <Route path="/culture/hammamte" element={<Hammamte />} />
                    <Route path="/culture/idiomas" element={<Idiomas />} />
                    <Route path="/culture/ropa" element={<Vestimenta />} />
                    <Route path="/culture/zoco" element={<Zoco />} />
                    <Route path="/cities" element={<Cities />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
};

export default App;
