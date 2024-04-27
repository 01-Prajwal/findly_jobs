import React, { useState } from 'react'
import logo from '../Assets/logo.png'
import './navbar.scss'
import EmailIcon from '@mui/icons-material/Email';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', lang: "English" },
  { code: 'jn', lang: "Japanese" }
]
const Nav = () => {
  const { i18n } = useTranslation();
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const { t } = useTranslation();


  const toggleLanguage = () => {
    const nextLanguageIndex = currentLanguageIndex === 0 ? 1 : 0;
    setCurrentLanguageIndex(nextLanguageIndex);
    const nextLanguageCode = languages[nextLanguageIndex].code;
    i18n.changeLanguage(nextLanguageCode);
  };
  return (
    <>
      <div className="navbar">

        <Link to='/' className="logo-container">


          <img src={logo} alt="" />

          <h1>
            Findly Jobs

          </h1>
        </Link>
        {/* </div> */}
        {/* <span>
          find Jobs in Japan
        </span> */}


        <div className="google-translate">
          {/* <h1>English</h1>
           */}
          <div className="account">


            <h3>{t("auth")}</h3>

            {/* <AccountCircleIcon/>  */}
          </div>
          <div className="language">

            <div className="line">
            </div>
            <div className="changeLanguage">

              <LanguageIcon />


              <button onClick={toggleLanguage} id='change-btn'>
                {languages[currentLanguageIndex].lang}
              </button>
            </div>
          </div>
        </div>


      </div>




    </>
  )
}

export default Nav