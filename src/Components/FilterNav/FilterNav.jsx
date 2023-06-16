import "./FilterNav.scss";
import ChevronRight from "../../Assets/Icons/chevron_right-24px-grey.svg";

function FilterNav(props) {
  // On user profile:
  // KDA
  // Hours Played
  // Rank
  // Peak Rank
  // Server

  const gameMode = ["Pubs", "Comp", "Ranked", "General Gamplay"];
  const skillLevel = ["Bronze", "Silver", "Gold", "Diamond+"];
  const characters = [
    "Assault",
    "Recon",
    "Support",
    "Skirmisher",
    "Controller",
  ];

  return (
    <section className="filter">
      <section className="filter__option filter__option--1">
        <section className="filter__info">
          <h1 className="filter__text">Game Mode</h1>{" "}
          <img className="filter__icon" src={ChevronRight} alt="Drop" />
        </section>
        <section className="filter__dropdown filter__dropdown--1">
          {gameMode.map((element, index) => (
            <p
              key={index}
              className="filter__element"
              onClick={() => props.handleModeClick(element)}
            >
              {element}
            </p>
          ))}
        </section>
      </section>
      <section className="filter__option filter__option--2">
        <section className="filter__info">
          <h1 className="filter__text">Skill Level</h1>{" "}
          <img className="filter__icon" src={ChevronRight} alt="Drop" />
        </section>
        <section className="filter__dropdown filter__dropdown--2">
          {skillLevel.map((element, index) => (
            <p
              key={index}
              className="filter__element"
              onClick={() => props.handleSkillClick(element)}
            >
              {element}
            </p>
          ))}
        </section>
      </section>
      <section className="filter__option filter__option--3">
        <section className="filter__info">
          <h1 className="filter__text">Character</h1>{" "}
          <img className="filter__icon" src={ChevronRight} alt="Drop" />
        </section>
        <section className="filter__dropdown filter__dropdown--3">
          {characters.map((element, index) => (
            <p
              key={index}
              className="filter__element"
              onClick={() => props.handleCharacterClick(element)}
            >
              {element}
            </p>
          ))}
        </section>
      </section>
    </section>
  );
}

export default FilterNav;
