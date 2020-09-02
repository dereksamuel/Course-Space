import React, { useState } from 'react';

import './styles/Modal.css';

function Modal(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  function hideModal() {
    const $ModalContainer = document.querySelector('.movementContainerModal');
    const $Modal = document.querySelector('.Modal-container');
    const $overlay = document.querySelector('.Modal');
    $ModalContainer.classList.add('isntvisible');
    $overlay.classList.add('visible');
    $Modal.classList.add('visible');
  }
  return (
    <React.Fragment>
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
            {
              props.formInfo
            }
            <button className="btn danger" type="button" onClick={hideModal}>Cancelar</button>
            <div className="space"></div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Modal;
