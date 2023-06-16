import React from 'react'
import MenteeForm from '../../Components/MenteeForm/MenteeForm'


const PreferencePage = ({ filterMode, setFilterMode, filterSkill, setFilterSkill, filterCharacter, setFilterCharacter }) => {
    return (
        <div>
            <MenteeForm 
                filterMode={filterMode}
                setFilterMode={setFilterMode}
                filterSkill={filterSkill}
                setFilterSkill={setFilterSkill}
                filterCharacter={filterCharacter}
                setFilterCharacter={setFilterCharacter}
            />



        </div>
    )
}

export default PreferencePage