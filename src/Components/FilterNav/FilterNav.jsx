import "./FilterNav.scss";
import ChevronRight from "../../Assets/Icons/chevron_right-24px-grey.svg";
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
          <img className="filter__icon" src={ChevronRight} alt="Drop" />
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
              filterMode === "Pubs"
                ? "filter__element filter__element--active"
                : "filter__element"
            }
            onClick={() => handleModeClick("Pubs")}
          >
            Pubs
          </p>
          <p
            className={
              filterMode === "Comp"
                ? "filter__element filter__element--active"
                : "filter__element"
            }
            onClick={() => handleModeClick("Comp")}
          >
            Comp
          </p>
          <p
            className={
              filterMode === "Ranked"
                ? "filter__element filter__element--active"
                : "filter__element"
            }
            onClick={() => handleModeClick("Ranked")}
          >
            Ranked
          </p>
          <p
            className={
              filterMode === "General Gameplay"
                ? "filter__element filter__element--active"
                : "filter__element"
            }
            onClick={() => handleModeClick("General Gameplay")}
          >
            General Gameplay
          </p>
        </section>
      </section>
      <section className="filter__option">
        <section className="filter__info" onClick={handleShowSkill}>
          <h1 className="filter__text">SKILL LEVEL</h1>{" "}
          <img className="filter__icon" src={ChevronRight} alt="Drop" />
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
              filterSkill === "Bronze"
                ? "filter__element filter__element--active"
                : "filter__element"
            }
            onClick={() => handleSkillClick("Bronze")}
          >
            Bronze
          </p>
          <p
            className={
              filterSkill === "Silver"
                ? "filter__element filter__element--active"
                : "filter__element"
            }
            onClick={() => handleSkillClick("Silver")}
          >
            Silver
          </p>
          <p
            className={
              filterSkill === "Gold"
                ? "filter__element filter__element--active"
                : "filter__element"
            }
            onClick={() => handleSkillClick("Gold")}
          >
            Gold
          </p>
          <p
            className={
              filterSkill === "Platinum+"
                ? "filter__element filter__element--active"
                : "filter__element"
            }
            onClick={() => handleSkillClick("Platinum+")}
          >
            Platinum+
          </p>
        </section>
      </section>
      <section className="filter__option">
        <section className="filter__info" onClick={handleShowCharacter}>
          <h1 className="filter__text">CHARACTER</h1>{" "}
          <img className="filter__icon" src={ChevronRight} alt="Drop" />
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
              filterCharacter === "Assault"
                ? "filter__element filter__element--active"
                : "filter__element"
            }
            onClick={() => handleCharacterClick("Assault")}
          >
            Assault
          </p>
          <p
            className={
              filterCharacter === "Recon"
                ? "filter__element filter__element--active"
                : "filter__element"
            }
            onClick={() => handleCharacterClick("Recon")}
          >
            Recon
          </p>
          <p
            className={
              filterCharacter === "Support"
                ? "filter__element filter__element--active"
                : "filter__element"
            }
            onClick={() => handleCharacterClick("Support")}
          >
            Support
          </p>
          <p
            className={
              filterCharacter === "Skirmisher"
                ? "filter__element filter__element--active"
                : "filter__element"
            }
            onClick={() => handleCharacterClick("Skirmisher")}
          >
            Skirmisher
          </p>
          <p
            className={
              filterCharacter === "Controller"
                ? "filter__element filter__element--active"
                : "filter__element"
            }
            onClick={() => handleCharacterClick("Controller")}
          >
            Controller
          </p>
        </section>
      </section>
    </section>
  );
}

export default FilterNav;
