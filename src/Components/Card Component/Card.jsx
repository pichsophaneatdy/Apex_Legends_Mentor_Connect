import React from 'react';
import "./Card.scss";
import bookmark from "../../Assets/Icons/carbon_bookmark.png";
import star from "../../Assets/Icons/bi_star-fill.png";
import people from "../../Assets/Icons/pepicons-pencil_people.png";
import { useNavigate } from 'react-router-dom';
const mentors = [{"name":"ApexWarrior","profile":"https://media.contentapi.ea.com/content/dam/apex-legends/common/gaiden-event/vtuber-featured-img.jpg.adapt.crop191x100.628p.jpg","bio":"Experienced Apex Legends player specializing in competitive gameplay and strategy.","timezone":"UTC-6","availability":{"mon":"16:00-20:00","tue":"14:00-18:00","wed":"Not Available","thurs":"18:00-22:00","fri":"12:00-16:00","sat":"Not Available","sun":"10:00-14:00"},"characters":["Controller"],"skillLevel":["Bronze","Silver"],"mode":["Comp"]}, {"name":"ApexWarrior","profile":"https://media.contentapi.ea.com/content/dam/apex-legends/common/gaiden-event/vtuber-featured-img.jpg.adapt.crop191x100.628p.jpg","bio":"Experienced Apex Legends player specializing in competitive gameplay and strategy.","timezone":"UTC-6","availability":{"mon":"16:00-20:00","tue":"14:00-18:00","wed":"Not Available","thurs":"18:00-22:00","fri":"12:00-16:00","sat":"Not Available","sun":"10:00-14:00"},"characters":["Controller"],"skillLevel":["Bronze","Silver"],"mode":["Comp"]}, {"name":"ApexWarrior","profile":"https://media.contentapi.ea.com/content/dam/apex-legends/common/gaiden-event/vtuber-featured-img.jpg.adapt.crop191x100.628p.jpg","bio":"Experienced Apex Legends player specializing in competitive gameplay and strategy.","timezone":"UTC-6","availability":{"mon":"16:00-20:00","tue":"14:00-18:00","wed":"Not Available","thurs":"18:00-22:00","fri":"12:00-16:00","sat":"Not Available","sun":"10:00-14:00"},"characters":["Controller"],"skillLevel":["Bronze","Silver"],"mode":["Comp"]}, {"name":"ApexWarrior","profile":"https://media.contentapi.ea.com/content/dam/apex-legends/common/gaiden-event/vtuber-featured-img.jpg.adapt.crop191x100.628p.jpg","bio":"Experienced Apex Legends player specializing in competitive gameplay and strategy.","timezone":"UTC-6","availability":{"mon":"16:00-20:00","tue":"14:00-18:00","wed":"Not Available","thurs":"18:00-22:00","fri":"12:00-16:00","sat":"Not Available","sun":"10:00-14:00"},"characters":["Controller"],"skillLevel":["Bronze","Silver"],"mode":["Comp"]}];
const renderStars = (ratings) => {
        const stars = [];
        const randomNumber = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
        for (let i = 0; i < randomNumber ; i++) {
            stars.push(<img className="star" key={i} src={star} alt="star"/>)
        }
        return stars;
    }
const Card = ({ mentors, filterMode, filterSkill, filterCharacter }) => {
    const navigate = useNavigate();
    return (
        mentors.map((mentor) => {
            return (
                <div className="card" onClick={()=>navigate("/mentor/1")}>
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
            )
        })
    )
}

export default Card
