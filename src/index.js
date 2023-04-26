import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import ToDoList from './ToDoList';

ReactDOM.render ( <ToDoList />, document.getElementById('root') );

// const fullName = {
//     fname: "vinod",
//     lname: "thapa",
// };

// const biodata = {
//     id: 1,
//     ...fullName,
//     age: 26,
//     gender: "male",
// };

// console.log(biodata);


// const fullName = ["vinod", "thapa"];

// const biodata = [1, ...fullName, 26, "male"];
// console.log(fullName);
// console.log(biodata);

// var shooterGames = ['Call of Duty', 'Far Cry', 'Resident Evil'];
// var racingGames = ['Need For Speed', 'Gran Turism', 'Burnout'];
// var games = [...shooterGames, ...racingGames];
// console.log(games);

// var [first, ...remaining] = racingGames;
// console.log(first);
// console.log(remaining);