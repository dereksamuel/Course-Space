import React, { useState } from 'react';

import Courses from './Courses';
import CardSkeleton from '../components/loading/CardSkeleton';
import UserInfo from './UserInfo';
import PageError from '../components/Error';
import Works from './Works';
import './styles/Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
      courses: undefined,
    };
    this.name = '';
    this.lastname= '';
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({ loading: true, error: null });
    this.props.db.collection('courses').doc("SF").get().then((doc) => {
      this.name = doc.data().name;
      this.lastname = doc.data().lastname;
      console.log(this.name);
      console.log(this.lastname);
      this.setState({ loading: false, error: null, courses: {
        firstName: this.name,
        lastName: this.lastname,
        description: 'He is lazy',
        studies: [
          {
            id: '4555',
            name: 'Continúen',
          },
          {
            id: '98945',
            name: 'Enseña',
          },
        ],
      } });
    }).catch((err) => {
      console.error(err);
      this.setState({ loading: false, error: err });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('5. updated');
    console.log({
      x: prevProps,
      z: prevState
    });
    console.log(this.props, this.state);
  }

  componentWillUnmount() {
    console.log('6. willUnmount');
  }

  scrollRowLeft() {
    const carrousel = document.querySelector('.carrousel');
    carrousel.scrollLeft -= carrousel.offsetWidth;
  }
  scrollRowRight() {
    const carrousel = document.querySelector('.carrousel');
    carrousel.scrollLeft += carrousel.offsetWidth;
  }
  render() {
    if (this.state.loading) {
      return <CardSkeleton/>
    }
    if (this.state.error) {
      console.log('DENTRO');
      return <PageError error={this.state.error} />;
    }
    return (
      <div className="Home">
        <div className="container-glo">
        <div className="container-title-controls">
          <div className="index"></div>
          </div>
            <div>
              <div className="container-pri">
                <button onClick={this.scrollRowLeft} role="button" id="arrow-left" className="icon-arrow-left"></button>
                <div className="carrousel-container">
                  <div className="carrousel">
                    <Courses className="carrouselEfect" onChange={this.state.courses} ui={this.props.login} db={this.props.db} firebase={this.props.service}></Courses>
                    <div className="containerSpace"></div>
                    <Works className="carrouselEfect"></Works>
                    <UserInfo info={this.props.service} ui={this.props.login}></UserInfo>
                  </div>
                </div>
                <button onClick={this.scrollRowRight} role="button" id="arrow-right" className="icon-arrow-right"></button>
              </div>
            </div>
          </div>
          </div>
    );
  }
}

export default Home;
