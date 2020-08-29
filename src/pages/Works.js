import React from 'react';

import './styles/Works.css';

class Works extends React.Component {
  render() {
    return (
      <section className="Work" id="work">
        <h1>TAREAS</h1>
        <hr />
        <div className="works">
          <div className="container-label">
            <div className="display-element">
              <div className="label">
                <p>Continúen</p>
              </div>
              <div className="label">
                <p>Nos enseña</p>
              </div>
              <div className="label">
                <p>Buenas Noticias de parte de Dios</p>
              </div>
              <div className="label">
                <p>Lecciones que aprendo de la biblia</p>
              </div>
              <div className="label">
                <p>Lecciones que aprendo de la biblia</p>
              </div>
              <div className="label">
                <p>Lecciones que aprendo de la biblia</p>
              </div>
              <div className="label">
                <p>Lecciones que aprendo de la biblia</p>
              </div>
              <div className="label">
                <p>Lecciones que aprendo de la biblia</p>
              </div>
              <div className="label">
                <p>Nos enseña</p>
              </div>
              <div className="label">
                <p>Nos enseña</p>
              </div>
              <div className="label">
                <p>Nos enseña</p>
              </div>
              <div className="label">
                <p>Nos enseña</p>
              </div>
            </div>
          </div>
          <form className="form-add">
            <button className="icon-add btn"></button>
            <input placeholder="Añadir otra publicación" />
          </form>
        </div>
      </section>
    );
  }
}

export default Works;
