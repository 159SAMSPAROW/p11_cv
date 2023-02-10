import React from 'react'
import { BiHome } from 'react-icons/bi'
import { BsTelephoneOutbound, BsCalendarEvent } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'

const Personal_info = () => {
  return (
    <div className="personal__info">
      <img src="./images/avatar.png" alt="photo perso" />
      <h2>Sami DEMIR</h2>

      <h3>Stage Développeur Web</h3>

      <div className="personal__info_user">
        <br />

        <a href="tel:+33781018774">
          <BsTelephoneOutbound /> 07 81 01 87 74
        </a>
        <br />

        <a href="mailto:demirsami@hotmail.fr">
          <AiOutlineMail /> demirsami@hotmail.fr
        </a>
        <p>
          <BsCalendarEvent /> Né le : 23/10/83
        </p>
        <p>
          {' '}
          <BiHome />
          448 Chemin des basses
          <br /> Bréguières 06600 ANTIBES
        </p>
      </div>
    </div>
  )
}

export default Personal_info
