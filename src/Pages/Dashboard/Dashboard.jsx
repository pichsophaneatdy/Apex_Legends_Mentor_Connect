import React from "react";
import FilterNav from "../../Components/FilterNav/FilterNav";
import "./Dashboard.scss";
import Card from "../../Components/Card Component/Card";
const Dashboard = ({
    handleSkillClick,
    handleCharacterClick,
    handleModeClick,
    filterMode,
    filterSkill,
    filterCharacter,
}) => {
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
                    <Card />
                </div>
                
            </div>
        </div>
    );
};

export default Dashboard;
