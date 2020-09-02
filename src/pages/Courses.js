import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../components/Navbar';
import Card from '../components/Card';
import Modal from '../components/Modal';
import Alert from '../components/Alert';

import './styles/Courses.css';

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      success: false,
      courses: [],
      courseId: '',
      dataUrl: '',
    }
    this.curr = this.props.firebase.auth();
    this.ref = this.props.db.collection('users').doc(`user_${this.curr.currentUser.uid}`).collection('courses');
    this.createInfo = <React.Fragment>
      <label>Nombres:</label>
      <input name="firstname" placeholder="Nombres" onChange={this.onChangeInput} />
      <label>Apellidos:</label>
      <input name="lastname" placeholder="Apellidos" onChange={this.onChangeInput} />
      <label>Foto del estudio:</label>
      <label className="file-container">
        <input name="imgStudio" type="file" accept="image/png, image/png, image/jpeg" className="btn primary file" onChange={this.onChangeImg} />
        <div className="container-span">
          <span className="icon-downl fileCustom"></span>
        </div>
        <div className="loading"></div>
      </label>
      <label>Comienzo con el estudio</label>
      <input type="date" name="datePub" className="btn" onChange={this.onChangeInput} />
      <label>Descripción:</label>
      <textarea name="description" onChange={this.onChangeInput} />
      <label>Publicaciones que estudia:</label>
      <ul>
        <li><input type="radio" name="pubCon" className="radio" onChange={this.onChangeInput} value="continuen" /> Continúen</li>
        <li><input type="radio" name="pubEn" className="radio" onChange={this.onChangeInput} value="ensena" /> Enseña</li>
        <li><input name="pubOther" className="other-options" placeholder="Otra" onChange={this.onChangeInput} /></li>
      </ul>
      <button className="btn" type="submit" onClick={this.onSubmit}>{this.state.loading ? '...' : 'OK'}</button>
    </React.Fragment>;
  }
    onSubmit = () => {
      console.log('Button was clicked');
      const curr = this.props.firebase.auth();
      if (this.state.loading) {
        return (<h1>Cargando</h1>);
      }
      const file = this.state.imgStudio.replace(/^.*\\/, "");
      const refStorage = this.props.firebase.storage().ref(`imgsCourses/user_${curr.currentUser.uid}/${file}`);
      const task = refStorage.put(this.files);
      task.on('state_changed',
      (snapshot) => {
        this.setState({ loading: true });
      },
      (err) => {
        console.error(err.message);
      },
      () => {
        task.snapshot.ref.getDownloadURL()
          .then((url) => {
            this.setState({ loading: false });
            this.setState({ dataUrl: url });
            this.setState({ success: true });
            setTimeout(() => {
              this.setState({ success: false });
            }, 3000);
            this.props.db.collection('users').doc(`user_${curr.currentUser.uid}`).collection('courses').add({
              firstName: this.state.firstname,
              lastName: this.state.lastname,
              description: this.state.description,
              datePub: this.state.datePub,
              img: this.state.dataUrl,
              pub: [
                this.state.pubCon ? this.state.pubCon : '',
                this.state.pubEn ? this.state.pubEn : '',
                this.state.pubOther ? this.state.pubOther : '',
              ],
            })
            .then(function(docRef) {
              console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
              console.error("Error adding document: ", error);
            });
          }).catch((err) => console.error(err));
        });
    }
  onChangeImg = (e) => {
    this.files = e.target.files[0];
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  showModal = () => {
    const $ModalContainer = document.querySelector('.movementContainerModal');
    const $Modal = document.querySelector('.Modal-container');
    const $overlay = document.querySelector('.Modal');
    $ModalContainer.classList.remove('isntvisible');
    $overlay.classList.remove('visible');
    $Modal.classList.remove('visible');
  }
  componentDidMount() {
    this.getCourses();
  }
  getCourses = () => {
    this.ref.onSnapshot((querySnapshot) => {
      var data = [];
      var id = [];
      querySnapshot.forEach(function(doc) {
        console.log(doc.data());
        data.push(...doc.data(), doc.id);
        console.log('ID POR CURSO: ', id);
        id.push(doc.id);// TODO: Aplica el id por curso
      });
      console.log(id);
      this.setState({
        courses: data,
        courseId: id,
      });
    });
  }
  render() {
    return(
      <div id="courses">
        <section>
          <div className="courses-title" style={{textAlign: 'center', color: '#16213e',}}>
            <h1>CURSOS</h1>
            <hr />
          </div>
          <div>
            {this.state.success ? <Alert success={true} message="Curso creado con éxito"></Alert> : null}
            <div className="hide-modal">
              <Modal db={this.props.db} ui={this.props.ui} firebase={this.props.firebase} formInfo={this.createInfo}></Modal>
            </div>
            <button className="btn icon-add" onClick={this.showModal}></button>
              <div id="cards" className="cards">
                {
                  this.state.courses.map((item) => (
                    <Card
                      firstName={item.firstName}
                      lastName={item.lastName}
                      description={item.description}
                      pub={item.pub}
                      img={item.img}
                      datePub={item.datePub}>
                        <div className="action" style={{ display: 'block' }}>
                          <button className="btn">Editar</button>
                          <button className="btn danger">Borrar</button>
                          <div style={{ marginTop: '15px' }}>
                            <Link to={`/${item}/works`}>
                              <button className="btn dark" style={{ width: '100%', marginLeft: '0' }}>TAREAS</button>
                            </Link>
                          </div>
                        </div>
                      </Card>
                  ))
                }
              </div>
          </div>
        </section>
        <NavBar></NavBar>
      </div>
    );
  };
}

export default Courses;
