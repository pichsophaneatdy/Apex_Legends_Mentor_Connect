import React from 'react'
import logo from "../../Assets/Icons/apex-white-icon.svg (1).png";
import "./HomePage.scss";
import badgeIcon from "../../Assets/Icons/check.png";
import { Link } from 'react-router-dom';
const HomePage = () => {
    return (
        <div className="homepage">
            <div className="homepage__hero">
                <img src={logo} alt="" className="homepage__logo" />
                <h2 className="homepage__title">APEX MENTOR CONNECT</h2>
                <p className="homepage__text">Master the Arena, Forge Your Legends</p>
                <Link to="/login">
                    <button className="homepage__btn">Find Your Coach</button>
                </Link>
            </div>
            <div className="homepage__section1">
                <div className="section1__img-wrapper">

                </div>
                <div className="section1__content">
                    <h1 className="section1__title">FIND A COACH</h1>
                    <p className="section1__text">
                        Get matched based on your level, rank, and the skills you want to work on
                    </p>
                    <Link to="/login">
                        <button className="section1__btn">Get Started</button>
                    </Link>
                </div>
            </div>
            <div className="badge">
                <div className="badges">
                    <img src={badgeIcon} alt="" className="badgeIcon" />
                    <img src={badgeIcon} alt="" className="badgeIcon" />
                    <img src={badgeIcon} alt="" className="badgeIcon" />
                    <img src={badgeIcon} alt="" className="badgeIcon" />
                </div>
                <h2 className="badge__title">BECOME A COACH, EARN A BADGE</h2>
                <p className="badge__text">Watch your trainees rank up and get rewarded for your training with badges, coins, and exclusive skins</p>
                <button className="badge__btn">Become A Coach Today!</button>
            </div>
            <div className="section2">
                <h2 className="section1__title">FIND YOUR COACH</h2>
                <p className="section1__text">Explore your potential, rank up</p>
                <Link to="/login">
                    <button className="section1__btn">Get Started Today</button>
                </Link>
                <p className="section1__text">
                    *Application platform account and platform subscription (sold seperately) may be required. Persistent inter connection and EA account required. Age restrictions apply.
                </p>
            </div>
        </div>
    )
}

export default HomePage