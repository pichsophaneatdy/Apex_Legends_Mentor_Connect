import "./FilterNav.scss";
import ChevronUp from "../../Assets/Icons/chevron-up.png";
import { useState } from "react";

function FilterNav({
  handleSkillClick,
  handleCharacterClick,
  handleModeClick,
  filterMode,
  filterSkill,
  filterCharacter,
}) {
  // On user profile:
  // KDA
  // Hours Played
  // Rank
  // Peak Rank
  // Server
  const [showMode, setShowMode] = useState(true);
  const [showSkill, setShowSkill] = useState(true);
  const [showCharacter, setShowCharacter] = useState(true);

  const gameMode = ["Pubs", "Comp", "Ranked", "General Gamplay"];
  const skillLevel = ["Bronze", "Silver", "Gold", "Platinum+"];
  const characters = [
    "Assault",
    "Recon",
    "Support",
    "Skirmisher",
    "Controller",
  ];

  const handleShowMode = () => {
    console.log("mode clicked");
    if (showMode) {
      setShowMode(false);
    } else {
      setShowMode(true);
    }
  };

  const handleShowSkill = () => {
    console.log("Skill clicked");
    if (showSkill) {
      setShowSkill(false);
    } else {
      setShowSkill(true);
    }
  };

  const handleShowCharacter = () => {
    console.log("Character clicked");
    if (showCharacter) {
      setShowCharacter(false);
    } else {
      setShowCharacter(true);
    }
  };

  return (
    <section className="filter">
      <h1 className="filter__header">FILTERS</h1>
      <section className="filter__option">
        <section className="filter__info" onClick={handleShowMode}>
          <h1 className="filter__text">GAME MODE</h1>
          <img
            className={
              showMode ? "filter__icon filter__icon--dropdown" : "filter__icon"
            }
            src={ChevronUp}
            alt="Drop"
          />
        </section>
        <section
          className={
            showMode
              ? "filter__dropdown"
              : "filter__dropdown  filter__dropdown--hidden"
          }
        >
          <p
            className={
              filterMode === "public games"
                ? "filter__element filter__element--active"
                : "filter__element"
            }
            onClick={() => handleModeClick("public games")}
          >
            Public Games
          </p>
          <p
            className={
              filterMode === "ranked"
                ? "filter__element filter__element--active"
                : "filter__element"
            }
            onClick={() => handleModeClick("ranked")}
          >
            Ranked
          </p>
          <p
            className={
              filterMode === "general gameplay"
                ? "filter__element filter__element--active"
                : "filter__element"
            }
            onClick={() => handleModeClick("general gameplay")}
          >
            General Gameplay
          </p>
        </section>
      </section>
      <section className="filter__option">
        <section className="filter__info" onClick={handleShowSkill}>
          <h1 className="filter__text">SKILL LEVEL</h1>{" "}
          <img
            className={
              showSkill ? "filter__icon filter__icon--dropdown" : "filter__icon"
            }
            src={ChevronUp}
            alt="Drop"
          />
        </section>
        <section
          className={
            showSkill
              ? "filter__dropdown"
              : "filter__dropdown  filter__dropdown--hidden"
          }
        >
          <p
            className={
              filterSkill === "bronze"
                ? "filter__element filter__element--active"
                : "filter__element"
            }
            onClick={() => handleSkillClick("bronze")}
          >
            Bronze
          </p>
          <p
            className={
              filterSkill === "silver"
                ? "filter__element filter__element--active"
                : "filter__element"
            }
            onClick={() => handleSkillClick("silver")}
          >
            Silver
          </p>
          <p
            className={
              filterSkill === "gold"
                ? "filter__element filter__element--active"
                : "filter__element"
            }
            onClick={() => handleSkillClick("gold")}
          >
            Gold
          </p>
          <p
            className={
              filterSkill === "platinum+"
                ? "filter__element filter__element--active"
                : "filter__element"
            }
            onClick={() => handleSkillClick("platinum+")}
          >
            Platinum+
          </p>
        </section>
      </section>
      <section className="filter__option">
        <section className="filter__info" onClick={handleShowCharacter}>
          <h1 className="filter__text">CHARACTER</h1>{" "}
          <img
            className={
              showCharacter
                ? "filter__icon filter__icon--dropdown"
                : "filter__icon"
            }
            src={ChevronUp}
            alt="Drop"
          />
        </section>
        <section
          className={
            showCharacter
              ? "filter__dropdown"
              : "filter__dropdown  filter__dropdown--hidden"
          }
        >
          <p
            className={
              filterCharacter === "assault"
                ? "filter__element filter__element--active"
                : "filter__element"
            }
            onClick={() => handleCharacterClick("assault")}
          >
            Assault
          </p>
          <p
            className={
              filterCharacter === "recon"
                ? "filter__element filter__element--active"
                : "filter__element"
            }
            onClick={() => handleCharacterClick("recon")}
          >
            Recon
          </p>
          <p
            className={
              filterCharacter === "support"
                ? "filter__element filter__element--active"
                : "filter__element"
            }
            onClick={() => handleCharacterClick("support")}
          >
            Support
          </p>
          <p
            className={
              filterCharacter === "skirmisher"
                ? "filter__element filter__element--active"
                : "filter__element"
            }
            onClick={() => handleCharacterClick("skirmisher")}
          >
            Skirmisher
          </p>
          <p
            className={
              filterCharacter === "controller"
                ? "filter__element filter__element--active"
                : "filter__element"
            }
            onClick={() => handleCharacterClick("controller")}
          >
            Controller
          </p>
        </section>
      </section>
    </section>
  );
}

export default FilterNav;
