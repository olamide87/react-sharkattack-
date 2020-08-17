import React from 'react';
import PropTypes from 'prop-types';

import Student from '../Student/Student';
import studentShape from '../../helpers/propTypes/studentsShape';

import './Graveyard.scss';

class Graveyard extends React.Component {
  static propTypes = {
    dearlyBeloved: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { dearlyBeloved } = this.props;

    const passedStudents = dearlyBeloved.map((student) => (
      <Student key={student.id} student={student} />
    ));

    return (
      <div id="graveyard">
        <h2 id="graveyard-header">Graveyard</h2>
        <div className="card-columns">
          { passedStudents }
        </div>
      </div>
    );
  }
}

export default Graveyard;
