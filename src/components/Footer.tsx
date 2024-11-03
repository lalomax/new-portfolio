import {useTranslation} from 'react-i18next';
const Footer = () => {
  const { t } = useTranslation();
  return <div className="py-4 text-center bg-primaryDark text-white "> &copy; {new Date().getFullYear()} Lalomax - {t('copyright')}</div>;
};

export default Footer;