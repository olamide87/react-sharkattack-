import React from 'react';
import './App.scss';

import Graveyard from '../components/Graveyard/Graveyard';
import RecentlyDeparted from '../components/RecentlyDeparted/RecentlyDeparted';
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

  sharkAttackEvent = () => {
    const recentlyDeparted = studentsData.sharkAttack();

    if (recentlyDeparted) {
      this.setState({ recentlyDeparted });
    }

    const livingStudents = studentsData.livingStudents();
    this.setState({ livingStudents });

    const dearlyBeloved = studentsData.dearlyBeloved();
    this.setState({ dearlyBeloved });
  }

  revivesStudentsEvent = () => {
    studentsData.reviveStudents();
    const livingStudents = studentsData.livingStudents();
    const dearlyBeloved = studentsData.dearlyBeloved();
    const recentlyDeparted = {};
    this.setState({ livingStudents, dearlyBeloved, recentlyDeparted });
  }

  render() {
    const { livingStudents, dearlyBeloved, recentlyDeparted } = this.state;

    return (
      <div className= "App container">
        <h1>Shark Attack</h1>
        <SharkTank livingStudents={livingStudents} />
        <button className="btn btn-danger my-3" onClick={this.sharkAttackEvent}>SHARK ATTACK!!</button>
        <RecentlyDeparted recentlyDeparted={recentlyDeparted} />
        <Graveyard dearlyBeloved={dearlyBeloved} livingStudents={livingStudents} />
      </div>
    );
  }
}

export default App;
