import React from 'react';

import './styles/UserInfo.css';

function UserInfo(props) {
  const info = props.info.auth().currentUser;
  // const ui = new props.ui.auth().AuthUI.getInstance().signOut(this);
  console.log(info);

  function signOut() {

  }
  if (!info.emailVerified) {
    return (<h1>Inicia sesión</h1>);
  }
  return (
    <section className="UserInfo" id="perfil">
      <h1 style={{ width: '100vw', textAlign: 'center' }}>PERFIL</h1>
      <hr/>
      <div className="info">
        <div className="card-user">
        <div className="imgContent">
            <figure>
              <img src={info.photoURL} />
            </figure>
          </div>
          <div className="textContent">
            <strong>NOMBRE:</strong>
            <p>{info.displayName}</p>
            <strong>EMAIL:</strong>
            <p>{info.email}</p>
            <button className="btn danger" onClick={signOut}>Cerrar Sesión</button>
            <button className="btn dark">Modo Dark 🌛</button>
          </div>
        </div>
        <form className="send">
          <h3>Envíanos tu crítica o pregunta:</h3>
          <textarea />
          <button className="btn primary">ENVIAR <span className="icon-email"></span></button>
        </form>
      </div>
  </section>
  );
}

export default UserInfo;
