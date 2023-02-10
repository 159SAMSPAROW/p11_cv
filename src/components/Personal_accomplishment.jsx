import React from 'react'
import { personalSkill } from '../constants'
const Personal_accomplishment = () => {
  return (
    <div className="formation">
      <h2>
        Projets <br /> Customisés
      </h2>
      <ul className="formation_skills">
        {personalSkill.map((item, index) => (
          <li key={index}>
            <div className="section_division2"></div>
            <h2>{item.title}</h2>
            <ul className="formation_skills_skill">
              {Object.values(item)
                .slice(2)
                .map((skill) => (
                  <li className="">{skill}</li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Personal_accomplishment
