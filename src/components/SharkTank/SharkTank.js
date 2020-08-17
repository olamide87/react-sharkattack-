import React from 'react';
import PropTypes from 'prop-types';

import LiveStudent from '../LiveStudent/LiveStudent';
import studentShape from '../../helpers/propTypes/studentsShape';

import './SharkTank.scss';

class SharkTank extends React.Component {
  static propTypes = {
    livingStudents: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { livingStudents } = this.props;

    const studentCards = livingStudents.map((student) => (
      <LiveStudent key={student.id} student={student} />
    ));
    return (
    <div id= "shark-tank">
      <h2 id="shark-tank-header">Shark Tank</h2>
      <div className="card-columns">
        {studentCards}
      </div>
    </div>
    );
  }
}

export default SharkTank;
