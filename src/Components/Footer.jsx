import React from 'react'
import './footer.scss'
import { useTranslation } from 'react-i18next';
const Footer = () => {
  const { t } = useTranslation();
  // const{logot1,logot2}= t("logoT")
  return (
    <>

    
        <div className="footer">&copy;<span id="year"> </span>
        <span>{t('copyright')}</span></div>
    </>
  )
}

export default Footer