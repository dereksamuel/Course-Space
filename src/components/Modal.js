import React, { useState } from 'react';

import Alert from './Alert';
import './styles/Modal.css';

function Modal(props) {
  const [ loading, setLoading ] = useState(false);
  const [ success, setSuccess ] = useState(false);
  const handleSubmit = (e) => {
    console.log(props.ui);
    e.preventDefault();
    console.log(e);
  }
  function hideModal() {
    const $ModalContainer = document.querySelector('.movementContainerModal');
    const $Modal = document.querySelector('.Modal-container');
    const $overlay = document.querySelector('.Modal');
    $ModalContainer.classList.add('isntvisible');
    $overlay.classList.add('visible');
    $Modal.classList.add('visible');
  }
  function onSubmit() {
    setLoading(true);
    const curr = props.firebase.auth();
    if (loading) {
      return (<h1>Cargando</h1>);
    }
    console.log('UI NUEVO:', curr);
    props.db.collection('users').doc(`user_${curr.currentUser.uid}`).collection('courses').add({
      first: "Paula",
      last: "Lovelace",
      born: 1815
    })
    .then(function(docRef) {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  }
  return (
    <React.Fragment>
      {success ? <Alert success={true} message="Curso creado con éxito"></Alert> : null}
      <section className="Modal visible" onClick={hideModal}>
      </section>
      <div className="movementContainerModal isntvisible">
        <div className="Modal-container visible">
          <div style={{ width: '100%' }}>
            <span className="icon-cancel" id="Cancel" onClick={hideModal}></span>
          </div>
          <h4>{false ? 'Editar curso' : 'Crear curso'}</h4>
          <hr/>
          <form onSubmit={handleSubmit} className="form">
            <label>Nombres:</label>
            <input name="name" placeholder="Nombres" />
            <label>Apellidos:</label>
            <input name="lastname" placeholder="Apellidos" />
            <label>Foto del estudio:</label>
            <input name="imgStudio" type="file" className="btn primary" />
            <label>Comienzo con el estudio</label>
            <input type="date" name="datePub" className="btn" />
            <label>Descripción:</label>
            <textarea name="img" />
            <label>Publicaciones que estudia:</label>
            <ul>
              <li><input type="radio" name="pub" className="radio" /> Continúen</li>
              <li><input type="radio" name="pub" className="radio" /> Enseña</li>
              <li><input name="pubOptional" className="other-options" placeholder="Otra" /></li>
            </ul>
            <button className="btn" type="submit" onClick={onSubmit}>{loading ? '...' : 'OK'}</button>
            <button className="btn danger" type="button" onClick={hideModal}>Cancelar</button>
            <div className="space"></div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Modal;
