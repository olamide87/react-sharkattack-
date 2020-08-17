import React from 'react';
import './App.scss';

import Graveyard from '../components/Graveyard/Graveyard';
import SharkTank from '../components/SharkTank/SharkTank';

import studentsData from '../helpers/data/studentData';

class App extends React.Component {
  state = {
    livingStudents: [],
    dearlyBeloved: [],
    recentlyDeparted: {},
  }

  componentDidMount() {
    const livingStudents = studentsData.livingStudents();
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
        <Graveyard dearlyBeloved={dearlyBeloved} livingStudents={livingStudents} />
      </div>
    );
  }
}

export default App;
