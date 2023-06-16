import FilterNav from "./Components/FilterNav/FilterNav";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Page
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import PreferencePage from "./Pages/PreferencePage/PreferencePage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MentorModal from "./Pages/MentorModal/MentorModal";
// Component
import Header from "./Components/Header/Header";
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
      <BrowserRouter>
        <Header />
        <Routes>
          <Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/preferences"
              element={
                <PreferencePage
                  filterMode={filterMode}
                  setFilterMode={setFilterMode}
                  filterSkill={filterSkill}
                  setFilterSkill={setFilterSkill}
                  filterCharacter={filterCharacter}
                  setFilterCharacter={setFilterCharacter}
                />
              }
            />
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  handleSkillClick={handleSkillClick}
                  handleCharacterClick={handleCharacterClick}
                  handleModeClick={handleModeClick}
                />
              }
            />
            <Route path="/mentor/:id" element={<MentorModal />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
