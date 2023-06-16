import React from 'react'
import "./MentorModal.scss";
import bookmark from "../../Assets/Icons/carbon_bookmark.png";
import star from "../../Assets/Icons/bi_star-fill.png";
import people from "../../Assets/Icons/pepicons-pencil_people.png";
import Card from '../../Components/Card Component/Card';
const mentor = {"name":"ApexTactician","profile":"https://preview.redd.it/xl3ihex88at31.jpg?auto=webp&s=ddbc86b9dec5cacaecf4b7c051a3f1b3f34a478e","bio":"Strategic Apex Legends player with a focus on team coordination and positioning.","timezone":"UTC-8","availability":{"mon":"Not Available","tue":"18:00-22:00","wed":"14:00-18:00","thurs":"Not Available","fri":"16:00-20:00","sat":"10:00-14:00","sun":"12:00-16:00"},"characters":["Assault","Recon","Support"],"skillLevel":["Bronze","Silver","Gold"],"mode":["Comp"]}
const renderStars = (ratings) => {
        const stars = [];
        const randomNumber = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
        for (let i = 0; i < randomNumber ; i++) {
            stars.push(<img className="star" key={i} src={star} alt="star"/>)
        }
        return stars;
    }
const MentorModal = ({}) => {
    return (
        <div className="mentor">
            <div className="mentor__left">
                <div className="card">
                    <img src={mentor.profile} className="card__img"/>
                    <div className="card__row1">
                        <p className="card__username">{mentor.name}</p>
                        <img src={bookmark} className="bookmark" alr="bookmark"/>
                    </div>
                    <div className="card__row2 d-flex">
                        {/* Stars */}
                        <div className="card__stars">
                            <div className="card__star d-flex">
                                {renderStars()}
                            </div>
                            <p className="card__reviews__text">5.0(289 Reviews)</p>
                        </div>
                        <div className="card__review d-flex">
                            <img src={people} className="card__review__icon" />
                            <p>320</p>
                        </div>
                    </div>
                    <div className="card__row3">
                        <p className="card__text fw-bold">Skill Level</p>
                        <div className="card__skills">
                            {
                                mentor.skillLevel.map((skill) => {
                                    return  <p className="card__skillLevel">{skill}</p>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="mentor__right">
                <div className="mentor__bio">
                    <h2 className="mentor__title">COACH BIO</h2>
                    <p className="mentor__text">{mentor.bio}</p>
                </div>
                <div className="mentor__upload">
                    <div className="mentor__icon">
                        <button className="upload__btn">UPLOAD</button>
                    </div>
                    <div className="upload__content">
                        <h1 className="upload__title">UPLOAD A VIDEO AND GET SOME FEEDBACK</h1>
                        <p className="upload__text">Upload a video of your gameplay for the coach to review. You'll recieves the feedback based on the playback in 12 -24 hours</p>
                    </div>
                </div>
                <div className="mentor__upload">
                    <div className="mentor__icon">
                        <button className="upload__btn schedule__btn">SCHEDULE</button>
                    </div>
                    <div className="upload__content">
                        <h1 className="upload__title">SCHEDULE A PERSONALIZED COACHING SESSION</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MentorModal
