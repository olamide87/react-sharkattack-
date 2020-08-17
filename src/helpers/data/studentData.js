const students = [{
  id: 1,
  firstName: 'Jeremiah',
  lastName: 'Vasquez',
  isAlive: false,
},
{
  id: 2,
  firstName: 'Austin',
  lastName: 'Phy',
  isAlive: false,
},
{
  id: 3,
  firstName: 'Brooke',
  lastName: 'Nemchak',
  isAlive: false,
},
{
  id: 4,
  firstName: 'Geno',
  lastName: 'McNew',
  isAlive: false,
},
{
  id: 5,
  firstName: 'Gwynne',
  lastName: 'Meeks',
  isAlive: false,
},
{
  id: 6,
  firstName: 'Jeanine',
  lastName: 'Beckle',
  isAlive: false,
},
{
  id: 7,
  firstName: 'Jim',
  lastName: 'Browning',
  isAlive: false,
},
{
  id: 8,
  firstName: 'Jonathan',
  lastName: 'Shearon',
  isAlive: false,
},
{
  id: 9,
  firstName: 'Joshua',
  lastName: 'Medlen',
  isAlive: false,
},
{
  id: 10,
  firstName: 'Kamiran',
  lastName: 'Ibrahim',
  isAlive: false,
},
{
  id: 11,
  firstName: 'Mark',
  lastName: 'Young',
  isAlive: false,
},
{
  id: 12,
  firstName: 'Matt',
  lastName: 'Logan',
  isAlive: false,
},
{
  id: 13,
  firstName: 'Michael',
  lastName: 'Dotson',
  isAlive: false,
},
{
  id: 14,
  firstName: 'Nate',
  lastName: 'Owens',
  isAlive: false,
},
{
  id: 15,
  firstName: 'Nick',
  lastName: 'Walters',
  isAlive: false,
},
{
  id: 16,
  firstName: 'Nikhil',
  lastName: 'Gaikwad',
  isAlive: false,
},
{
  id: 17,
  firstName: 'Ola',
  lastName: 'Oladinni',
  isAlive: false,
},
{
  id: 18,
  firstName: 'Pete',
  lastName: 'Stewart',
  isAlive: false,
},
{
  id: 19,
  firstName: 'Phonesalo',
  lastName: 'Sihanorak',
  isAlive: false,
},
{
  id: 20,
  firstName: 'Ryan',
  lastName: 'Beiden',
  isAlive: false,
},
{
  id: 21,
  firstName: 'William',
  lastName: 'Campbell',
  isAlive: false,
}];

let studentsSharkFood = [];

const livingStudents = () => students.filter((student) => student.isAlive === true);

const dearlyBeloved = () => students.filter((student) => student.isAlive === true);

const followTheLight = (studentId) => {
  students.find((student) => student.id === studentId).isAlive = false;
};

const reviveStudents = () => {
  students.forEach((student) => {
    students.find((stdnt) => stdnt.id === student.id).isAlive = true;
  });
  studentsSharkFood = [];
}

const sharkAttack = () => {
  let sharkFoodStudent = Math.floor(Math.random() * Math.floor(students.length)) + 1;

  if (studentsSharkFood.length !== students.length) {
    while (studentsSharkFood.indexOf(sharkFoodStudent) > -1 || sharkFoodStudent === 0) {
      sharkFoodStudent = Math.floor(Math.random() * Math.floor(students.length)) + 1;
    }

    followTheLight(sharkFoodStudent);
    studentsSharkFood.push(sharkFoodStudent);
  } else {
    sharkFoodStudent = 0;
  }
  return students.find((student) => student.id === sharkFoodStudent);
};

export default {
  dearlyBeloved,
  livingStudents,
  reviveStudents,
  followTheLight,
  sharkAttack,
};
