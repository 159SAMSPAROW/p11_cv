import React from 'react'
import { stack, framework, devTools } from '../constants'

const Skills = () => {
  return (
    <>
      <div className="section_division"></div>
      <div className="skills">
        <h3>Language</h3>
        <ul>
          {stack.map((item, index) => (
            <li key={index}>
              {item.icon} {item.title}{' '}
            </li>
          ))}
        </ul>
      </div>
      <div className="section_division"></div>
      <div className="skills">
        <h3>Framework et Librairie</h3>
        <ul>
          {framework.map((item, index) => (
            <li key={index}>
              {item.icon} {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="section_division"></div>
      <div className="skills">
        <h3>
          Outil et environement
          <br /> de développement
        </h3>
        <ul>
          {devTools.map((item, index) => (
            <li key={index}>
              {item.icon} {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="section_division"></div>
      <div className="skills">
        <h3>Diplôme</h3>
        <p>Développeur Intégrateur Web</p>
        <p>
          Certification Professionnelle
          <br /> RNCP niveau 5
        </p>
        <p>Code 326t </p>
      </div>
    </>
  )
}

export default Skills
