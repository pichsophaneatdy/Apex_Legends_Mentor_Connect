import React from 'react'
import "./Header.scss";
import logo from "../../Assets/Icons/apex-hero-medium-logo-light 1.png";
import chevrondown from "../../Assets/Icons/cheverondown.png";
import { Link } from 'react-router-dom';
import mentorLogo from "../../Assets/Icons/Apex Mentor Connect Logo White (2).png";
const Header = () => {
    return (
        <div className="header">
            <div className="header__col">
                <Link to="/" className="header__title-link">
                    <div className="header__logo-wrapper">
                        <img src={logo} alt="" className="header__logo" />
                        <p className="header__title2">x</p>
                        <img src={mentorLogo} alt="" className="header__logo2" />
                    </div>
                </Link>
                <div className="header__nav">
                    <div className="header__nav__link">
                        <p className="header__link">ABOUT</p>
                        <img className="header__cheveron" src={chevrondown} alt="" />
                    </div>
                    <div className="header__nav__link">
                        <p className="header__link">MODES</p>
                        <img className="header__cheveron" src={chevrondown} alt="" />
                    </div>
                    <div className="header__nav__link">
                        <p className="header__link">SEASON</p>
                    </div>
                    <div className="header__nav__link">
                        <p className="header__link">BATTLE PASS</p>
                    </div>
                    <div className="header__nav__link">
                        <p className="header__link">COMMUNITY</p>
                        <img className="header__cheveron" src={chevrondown} alt="" />
                    </div>
                    <div className="header__nav__link">
                        <p className="header__link">COMPETE</p>
                        <img className="header__cheveron" src={chevrondown} alt="" />
                    </div>
                </div>
            </div>
            <button className="header__btn">DOWNLOAD FOR FREE 
                <img src={chevrondown} className="header__btn__icon" alt="cheveron"/>
            </button>
            
        </div>
    )
}

export default Header
