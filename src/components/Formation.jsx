import React from 'react'
import { skill } from '../constants'
import { GiSkills } from 'react-icons/gi' 

const Formation = () => {
  return (
    <div className="formation">
      
      <h2>
        Compétences acquises
        <br /> pendant ma Formation
      </h2>
      <ul className="formation_skills">
        {skill.map((item, index) => (
          <li key={index}>
            <div className="section_division2"></div>
            <h2>{item.title}</h2>
            <ul className="formation_skills_skill">
              {Object.values(item)
                .slice(2)
                .map((skill) => (
                  <li>{skill}</li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Formation
