import React from 'react';

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      params: ''
    }
  }
  componentDidMount() {
    const getProps = this.props.match.params.courseId;
    this.setState({
      params: getProps,
    });
  }
  render() {
    return (
      <h1>Mi properti {this.props.match.params.courseId}</h1>
    );
  }
}

export default Course;
