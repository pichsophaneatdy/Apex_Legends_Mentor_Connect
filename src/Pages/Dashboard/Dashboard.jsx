import React from "react";
import FilterNav from "../../Components/FilterNav/FilterNav";

const Dashboard = ({
  handleSkillClick,
  handleCharacterClick,
  handleModeClick,
  filterMode,
  filterSkill,
  filterCharacter,
}) => {
  return (
    <div>
      Dashboard
      <FilterNav
        handleSkillClick={handleSkillClick}
        handleCharacterClick={handleCharacterClick}
        handleModeClick={handleModeClick}
        filterMode={filterMode}
        filterSkill={filterSkill}
        filterCharacter={filterCharacter}
      />
    </div>
  );
};

export default Dashboard;
