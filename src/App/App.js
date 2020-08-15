import React from 'react';
import './App.scss';

import studentsData from '../helpers/data/studentData';

class App extends React.Component {
  state = {
    livingStudents:[],
    dearlyBeloved: [],
  }

  componentDidMount() {
    const livingStudents = studentsData.livingStudents
    this.setState({ livingStudents });

    const dearlyBeloved = studentsData.dearlyBeloved();
    this.setState({ dearlyBeloved });
  }

  render() {
    const { livingStudents, dearlyBeloved } = this.state;

    return (
      <div className= "App container">
        <h1>Shark Attack</h1>
        <SharkTank livingStudents={livingStudents} />
      </div>
    );
  }
}

export default App;
