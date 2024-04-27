import React from 'react'
import './logos.scss'
import logo1 from '../Assets/mcdonalds-black-logo.png'
import logo2 from '../Assets/starbucks-logo-black-and-white.png'
import logo3 from '../Assets/hogwarts-logo-png-transparent.png'
import logo4 from '../Assets/general-electric-black-logo-png-transparent.png'
import logo5 from '../Assets/mercedes-benz-6-logo-png-transparent.png'
import logo6 from '../Assets/nfl-logo-png-transparent.png'
import { useTranslation } from 'react-i18next'

const Logos = () => {
    const { t } = useTranslation();
    const{logot1,logot2}= t("logoT")
    return (
        <>
            <div className="logo-slider">
                <div className="logo-title">
                    <span>{logot1} <h2>{logot2}</h2></span>
                    {/* <h2> </h2> */}
                </div>
                <div className="slider">
                    <div className="slide-track">
                        <div className="slide">
                            <img
                                src={logo1}
                                alt=""
                                className='img-slide'
                            />
                        </div>
                        <div className="slide">
                            <img
                                src={logo2}
                                alt=""
                                className='img-slide'
                            />
                        </div>
                        <div className="slide">
                            <img
                                src={logo3}
                                alt=""
                                className='img-slide'
                            />
                        </div>
                        <div className="slide">
                            <img
                                src={logo4}
                                alt=""
                                className='img-slide'
                            />
                        </div>
                        <div className="slide">
                            <img
                                src={logo5}
                                alt=""
                                className='img-slide'
                            />
                        </div>
                        <div className="slide">
                            <img
                                src={logo6}
                                alt=""
                                className='img-slide'
                            />
                        </div>
                        <div className="slide">
                            <img
                                src={logo1}
                                alt=""
                                className='img-slide'
                            />
                        </div>
                        <div className="slide">
                            <img
                                src={logo2}
                                alt=""
                                className='img-slide'
                            />
                        </div>
                        <div className="slide">
                            <img
                                src={logo3}
                                alt=""
                                className='img-slide'
                            />
                        </div>
                        <div className="slide">
                            <img
                                src={logo4}
                                alt=""
                                className='img-slide'
                            />
                        </div>
                        <div className="slide">
                            <img
                                src={logo5}
                                alt=""
                                className='img-slide'
                            />
                        </div>
                        <div className="slide">
                            <img
                                src={logo6}
                                alt=""
                                className='img-slide'
                            />
                        </div>
                        <div className="slide">
                            <img
                                src={logo1}
                                alt=""
                                className='img-slide'
                            />
                        </div>
                        <div className="slide">
                            <img
                                src={logo2}
                                alt=""
                                className='img-slide'
                            />
                        </div>
                        <div className="slide">
                            <img
                                src={logo3}
                                alt=""
                                className='img-slide'
                            />
                        </div>
                        <div className="slide">
                            <img
                                src={logo4}
                                alt=""
                                className='img-slide'
                            />
                        </div>
                        <div className="slide">
                            <img
                                src={logo5}
                                alt=""
                                className='img-slide'
                            />
                        </div>
                        <div className="slide">
                            <img
                                src={logo6}
                                alt=""
                                className='img-slide'
                            />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Logos