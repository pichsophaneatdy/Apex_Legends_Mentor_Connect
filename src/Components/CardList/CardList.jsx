import React from 'react'
import Mentors from '../../Data/mentors'
const CardList = ({skillLevel, experties}) => {
    return (
        <div className="cardList">
            {
                Mentors.map()
            }
        </div>
    )
}

export default CardList