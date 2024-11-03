import "./contact.css"
import { useTranslation } from 'react-i18next';
const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-secondaryDark  text-primaryLight px-5 py-32" id="contact">
      <div className="text-center  mx-auto ">
        <h2 className="text-4xl inline-block font-bold mb-5 border-b-[5px]  mx-auto border-indigo-600 pb-2">
          {t('Contact-me')}
        </h2>
        <p>
          {t('ContactDesc')}
        </p>

        
          <details>
            <summary>
              <span className="font-bold">{t('Email')}</span>
            </summary>
            <a href="mailto:lalomax365@gmail.com">lalomax365@gmail.com</a>
          </details>
          
          <details>
            <summary>
              <span className="font-bold">{t('Phone')}</span>
            </summary>
            +591 77595073
          </details>

        
      
      </div>
    </section>
  );
};

export default Contact;