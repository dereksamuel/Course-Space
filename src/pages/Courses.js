import React, { useEffect, useState } from 'react';

import NavBar from '../components/Navbar';
import Card from '../components/Card';
import Modal from '../components/Modal';

import './styles/Courses.css';


function Courses(props) {
  const [courses, setCourses] = useState([]);
  const curr = props.firebase.auth();
  const ref = props.db.collection('users').doc(`user_${curr.currentUser.uid}`).collection('courses');
  
  function showModal() {
    const $ModalContainer = document.querySelector('.movementContainerModal');
    const $Modal = document.querySelector('.Modal-container');
    const $overlay = document.querySelector('.Modal');
    $ModalContainer.classList.remove('isntvisible');
    $overlay.classList.remove('visible');
    $Modal.classList.remove('visible');
  }
  function getCourses() {
    ref.onSnapshot((querySnapshot) => {
      debugger
      var data = [];
      querySnapshot.forEach(function(doc) {
        data.push(doc.data());
      });
      setCourses(data);
    });
  }
  useEffect(() => {
    getCourses();
  }, []);
  return (
      <div id="courses">
        <section>
          <div className="courses-title" style={{textAlign: 'center', color: '#16213e',}}>
            <h1>CURSOS</h1>
            <hr />
          </div>
          <div>
            <div className="hide-modal">
              <Modal db={props.db} ui={props.ui} firebase={props.firebase}></Modal>
            </div>
            <button className="btn icon-add" onClick={showModal}></button>
              <div id="cards" className="cards">
                {
                  courses.map((item) => (
                    <Card firstName={item.first} lastName={item.last} description={item.born}></Card>
                  ))
                }
              </div>
          </div>
        </section>
        <NavBar></NavBar>
      </div>
    );
}

export default Courses;
