
const MenteeFormOption = ({ selectValue, filterValue, setFilterValue, imgSrc, classSelect }) => {
  
  const handleClick = (event)=>{
    console.log(selectValue);
    console.log(filterValue);
    setFilterValue(selectValue);
  }
  return(
    <div
          className={
            `mentee-form__${classSelect} ` +
            (filterValue === selectValue ? "mentee-form__active-value" : "")
          }
          value={selectValue}
          onClick={handleClick}
        >
          <img className="mentee-form__value-logo" alt={`${selectValue} rank`} src={imgSrc} />
          <h3 className="mentee-form__value-title">{selectValue}</h3>
      </div>
  )
}

export default MenteeFormOption;