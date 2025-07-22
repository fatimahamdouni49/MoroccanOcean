import "../App.css";
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="footer text-center mt-4 py-3">
            <p>&copy; {new Date().getFullYear()} {t('footer.copy')}</p>
        </footer>
    );
};


export default Footer;
