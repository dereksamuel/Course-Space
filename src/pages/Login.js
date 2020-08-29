import React from 'react';
import { Link } from 'react-router-dom';

import Modal from '../components/Modal';
import './styles/Login.css';

const login = document.querySelector('.Login');

function Login(props) {
  let ui = new props.login.auth.AuthUI(props.firebase.auth());
  ui.start('#content', {
    signInSuccessUrl: 'https://course-space-964bb.web.app/',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      props.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      props.firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
  });
  const data = <div id="data">
    <label>Nombre De Usuario:</label>
    <input name="name" placeholder="Nombres" />
    <label>Contraseña:</label>
    <input name="lastname" type="password" placeholder="**********" />
    <label>Repita la contraseña:</label>
    <input name="imgStudio" type="password" className="**********" />
  </div>
  function handleSubmit(e) {
    alert(e);
  }
  function showModal() {
    const $ModalContainer = document.querySelector('.movementContainerModal');
    const $Modal = document.querySelector('.Modal-container');
    const $overlay = document.querySelector('.Modal');
    $ModalContainer.classList.remove('isntvisible');
    $overlay.classList.remove('visible');
    $Modal.classList.remove('visible');
  }
  function register() {

  }
  return (
    <div className="Login">
      <form action="post" className="container" onSubmit={handleSubmit}>
  <Modal data={data} action={<button className="btn" onClick={register}>OK</button>}></Modal>
        <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/997/3582014997_a7367d1c-e735-4121-9bf3-dc8c7ecbb37b.png?cb=1598143770"></img>
        <h4>Formas de iniciar sesión:</h4>
        <div id="content"></div>
        <a href="/" className="OP">¿Olvidó su crontraseña?</a>
      </form>
    </div>
  );
}

export default Login;
