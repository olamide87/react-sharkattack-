import React from 'react';

import studentShape from '../../helpers/propTypes/studentsShape';

import './Student.scss';

class Student extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;

    const isAliveTextColorClass = student.isAlive ? 'text-light' : 'text-danger';
    const isAliveClass = student.isAlive ? 'is-alive' : 'has-passed';

    return (
      <div>
        <div className={`${isAliveTextColorClass} ${isAliveClass}`}>
          {
            student.isAlive ? (
              <i className="fas fa-fish fa-2x"></i>
            ) : (
              <i className="fas fa-skull-crossbones fa-2x"></i>
            )
          }
          <span className="ml-1">{student.firstName}</span>
        </div>
      </div>
    );
  }
}

export default Student;
