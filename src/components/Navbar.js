import React from 'react';

import './styles/NavBar.css';

function NavBar() {
  function handleCLick() {
    console.log('Button was clicked');
  }
  // function navigation() {
  //   const button = document.querySelector('#btn');
  //   const pages = document.querySelectorAll('#carrousel-page');
  //   const carrousel = document.querySelector('.carrousel');
  //   console.log(carrousel);
  //   debugger
  //   for (let i = 0; i < pages.length; i ++) {
  //     carrousel.scrollLeft = i * carrousel.offsetWidth;
  //   }
  // }
  return (
    <div className="NavBar">
      <div className="royal-btn a">
        <ul className="list-buttons">
          <li id="btn"><a href="#courses">Cursos</a></li>
          <li id="btn"><a href="#work">Tareas</a></li>
        </ul>
        <button className="noneVis"><span className="icon-menu-list"></span></button>
      </div>
      <figure>
        <a href="/">
        <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/997/3582014997_a7367d1c-e735-4121-9bf3-dc8c7ecbb37b.png?cb=1598143770" />
        </a>
      </figure>
      <div className="royal-btn b">
        <ul className="list-cog">
          <li id="btn"><a href="#perfil">Perfil</a></li>
        </ul>
        <button className="noneVis" onClick={handleCLick}><span className="icon-cog"></span></button>
      </div>
    </div>
  );
}

export default NavBar;
