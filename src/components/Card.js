import React from 'react';
import wave from '../images/wave1.svg';
import wave2 from '../images/wave2.svg';
import wave3 from '../images/wave3.svg';

import './styles/Card.css';

function Card(props) {
  return (
    <div className="card">
      <figure className="container-Waves">
        <img src={wave} alt="wave a" className="wave a" />
        <img src={wave2} alt="wave b" className="wave b"/>
        <img src={wave3} alt="wave c" className="wave c" />
      </figure>
      <section className="fullName">
        <img src={props.img ? `${props.img}` : 'https://www.gravatar.com/avatar?d=identicon'} alt={props.firstName} />
        <div className="fullName-text">
          <h1>
            {props.firstName}
          </h1>
          <hr />
          <h1>
            {props.lastName}
          </h1>
        </div>
      </section>
      <section className="description">
        <div className="description-info">
          <p>{props.description}</p>
        </div>
        <ul className="studies">
          {props.pub ? props.pub.map((studie) => {
            return (
              <li key={studie.id}>
                {studie <= 1 ? <p>{studie} </p> : <p>{studie}, </p>}
              </li>
            );
          }) : null}
        </ul>
      </section>
      <p className="course">{props.datePub}</p>
      {props.children}
    </div>
  );
}

export default Card;
