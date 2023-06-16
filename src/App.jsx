import "./App.scss";
import FilterNav from "./Components/FilterNav/FilterNav";
import { useState } from "react";

function App() {
  const [filterMode, setFilterMode] = useState();
  const [filterSkill, setFilterSkill] = useState();
  const [filterCharacter, setFilterCharacter] = useState();

  const handleModeClick = (element) => {
    console.log(element);
    setFilterMode(element);
  };
  const handleSkillClick = (element) => {
    console.log(element);
    setFilterSkill(element);
  };
  const handleCharacterClick = (element) => {
    console.log(element);
    setFilterCharacter(element);
  };

  return (
    <div className="App">
      <FilterNav
        handleModeClick={handleModeClick}
        handleSkillClick={handleSkillClick}
        handleCharacterClick={handleCharacterClick}
      />
    </div>
  );
}

export default App;
