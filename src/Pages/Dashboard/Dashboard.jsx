import React from "react";
import FilterNav from "../../Components/FilterNav/FilterNav";
import "./Dashboard.scss";
import Card from "../../Components/Card Component/Card";
import mentorData from "../../Data/mentorData.js";

const Dashboard = ({
    handleSkillClick,
    handleCharacterClick,
    handleModeClick,
    filterMode,
    filterSkill,
    filterCharacter,

}) => {
    let mentors = mentorData;
    if(filterCharacter){
        mentors = mentors.filter(mentor => mentor.characters.includes(filterCharacter));
    }
    if(filterSkill){
        mentors = mentors.filter(mentor => mentor.skillLevel.includes(filterSkill));
    }
    if(filterMode){
        mentors = mentors.filter(mentor => mentor.mode.includes(filterMode));
    }
    return (
        <div className="dashboard">
            <FilterNav
                handleSkillClick={handleSkillClick}
                handleCharacterClick={handleCharacterClick}
                handleModeClick={handleModeClick}
                filterMode={filterMode}
                filterSkill={filterSkill}
                filterCharacter={filterCharacter}
            />
            <div className="cardList">
                <h1 className="cardList__title">{"Coaches based on your preferences".toUpperCase()}</h1>
                <div className="cardList__wrapper">
                     <Card mentors={mentors} />
                </div>
                
            </div>
        </div>
    );
};

export default Dashboard;

