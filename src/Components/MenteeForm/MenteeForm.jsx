import "./MenteeForm.scss";
import { useNavigate } from "react-router-dom";

import MenteeFormOption from "../MenteeFormOption/MenteeFormOption";

import bronzeIcon from "../../Assets/Icons/tier_icons/bronze.jpg";
import silverIcon from "../../Assets/Icons/tier_icons/silver.jpg";
import goldIcon from "../../Assets/Icons/tier_icons/gold.jpg";
import platIcon from "../../Assets/Icons/tier_icons/platinum.jpg";
import assaultIcon from "../../Assets/Icons/assault.png";
import reconIcon from "../../Assets/Icons/recon.png";
import supportIcon from "../../Assets/Icons/support.png";
import skirmisherIcon from "../../Assets/Icons/skirmirsher.png";
import controllerIcon from "../../Assets/Icons/controller.png";
import casualIcon from "../../Assets/Icons/casual.svg";
import ladderIcon from "../../Assets/Icons/ladder.svg";
import generalIcon from "../../Assets/Icons/crosshair.png";

const MenteeForm = ({ filterMode, setFilterMode, filterSkill, setFilterSkill, filterCharacter, setFilterCharacter }) => {
  
  const navigate = useNavigate();

  

  return (
    <div className="mentee-form">
      <h2 className="mentee-form__preference-title">Skill Level</h2>
      <section className="mentee-form__value-options">
        <MenteeFormOption  selectValue={"Bronze"} filterValue={filterSkill} setFilterValue={setFilterSkill} imgSrc={bronzeIcon} classSelect={"value-select"} />
        <MenteeFormOption selectValue={"Silver"} filterValue={filterSkill} setFilterValue={setFilterSkill} imgSrc={silverIcon} classSelect={"value-select"} />
        <MenteeFormOption selectValue={"Gold"} filterValue={filterSkill} setFilterValue={setFilterSkill} imgSrc={goldIcon} classSelect={"value-select"} />
        <MenteeFormOption selectValue={"Platinum+"} filterValue={filterSkill} setFilterValue={setFilterSkill} imgSrc={platIcon} classSelect={"value-select"} />
      </section>
      <h2 className="mentee-form__preference-title">Game Mode</h2>
      <section className="mentee-form__value-options">
        <MenteeFormOption selectValue={"Pubs"} filterValue={filterMode} setFilterValue={setFilterMode} imgSrc={casualIcon} classSelect={"value-select"}  />
        <MenteeFormOption selectValue={"Ranked"} filterValue={filterMode} setFilterValue={setFilterMode} imgSrc={ladderIcon} classSelect={"value-select"} />
        <MenteeFormOption selectValue={"General Gameplay"} filterValue={filterMode} setFilterValue={setFilterMode} imgSrc={generalIcon} classSelect={"value-select"} />
      </section>
      <h2 className="mentee-form__preference-title">Character Role</h2>
      <section className="mentee-form__character-options">
      <MenteeFormOption selectValue={"Assault"} filterValue={filterCharacter} setFilterValue={setFilterCharacter} imgSrc={assaultIcon} classSelect={"character-select"} />
      <MenteeFormOption selectValue={"Recon"} filterValue={filterCharacter} setFilterValue={setFilterCharacter} imgSrc={reconIcon} classSelect={"character-select"} />
      <MenteeFormOption selectValue={"Skirmisher"} filterValue={filterCharacter} setFilterValue={setFilterCharacter} imgSrc={skirmisherIcon} classSelect={"character-select"} />
      <MenteeFormOption selectValue={"Controller"} filterValue={filterCharacter} setFilterValue={setFilterCharacter} imgSrc={controllerIcon} classSelect={"character-select"} />
      <MenteeFormOption selectValue={"Support"} filterValue={filterCharacter} setFilterValue={setFilterCharacter} imgSrc={supportIcon} classSelect={"character-select"} />
      </section>
      <div className="mentee-form__button-wrapper">
      <button className="mentee-form__submit" to="/dashboard" onClick={()=>{navigate("/dashboard")}}>NEXT</button></div>

    </div>
  );
};

export default MenteeForm;
