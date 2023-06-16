import React from 'react';
import "./LoginPage.scss";
import eaLogo from "../../Assets/Icons/Electronic-Arts-Logo.svg.png";
import avatar from "../../Assets/Icons/cea82eb3-a532-4fe5-9d0a-f978116c8386.avif";
import checkIcon from "../../Assets/Icons/login.png";
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className="login">
            <img src={eaLogo} alt="" className="login__logo" />
            <h2 className="login__title">Quick Login</h2>
            <div className="login__username">
                <img src={avatar} className="login__avatar" alt=""/>
                <div className="login__para">
                    <p className="login__name">Username: Mind_Hunter</p>
                    <p className="login__id">User id: 88484gh23g434hh</p>
                </div>
                <Link to="/preferences">
                    <img src={checkIcon} alt="" className="login__check" />
                </Link>
            </div>
            <div className="login__form">
                <h1 className="login__title">Login</h1>
                <div className="login__form-control">
                    <input placeholder='Username' type="text" className="login__input" />
                    <input placeholder='Password' type="text" className="login__input" />
                    <Link to="/preferences">
                        <button className="login__btn">Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LoginPage