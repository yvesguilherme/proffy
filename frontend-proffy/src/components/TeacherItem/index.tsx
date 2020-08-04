import React from 'react';

import whatsApp from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/22429592?s=460&u=9f4be7d77b2aab6168aa163df47ac13ad997283&v=4" alt="yves" />
        <div>
          <strong>Yves Guilherme</strong>
          <span>Linguagens de Programação I</span>
        </div>
      </header>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            <br /> <br />
            Temporibus quaerat laudantium itaque suscipit magnam consectetur optio quam vel maxime velit dicta quos, in sit enim reprehenderit ipsam dolor nihil eveniet.
          </p>

      <footer>
        <p>
          Preço/hora
            <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsApp} alt="Entrar em contato pelo whatsApp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  )
}

export default TeacherItem;