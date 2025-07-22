import "../App.css";
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();
    return (
        <header className="header">
            <h1>{t('header.title')}</h1>
            <p>{t('header.subtitle')}</p>
        </header>
    );
};

export default Header;
